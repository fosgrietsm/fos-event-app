"use client";

import { siteData } from "@/data/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import disposableDomains from "disposable-email-domains";

type CountryCode = { code: string; country: string };

declare global {
  interface Window {
    $: unknown;
    pnCheckout: unknown;
  }
}

interface PaymentResponse {
  [key: string]: unknown;
}


// Start with a minimal fallback list to avoid empty select before fetch
const initialCountryCodes: CountryCode[] = [
  { code: "+1", country: "United States" },
  { code: "+44", country: "United Kingdom" },
  { code: "+91", country: "India" },
];

export default function AccountDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countryCodes, setCountryCodes] =
    useState<CountryCode[]>(initialCountryCodes);
  const [countrySearch, setCountrySearch] = useState("");
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    countryCode: "+1",
    currency: "INR",
    amount: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [eurToInrRate, setEurToInrRate] = useState<number | null>(null);

  const resetForm = () => {
    setFormData({
      email: "",
      phoneNumber: "",
      countryCode: "+1",
      currency: "INR",
      amount: "",
    });
    setCountrySearch("");
    setIsCountryOpen(false);
    setHighlightedIndex(-1);
    setErrors({});
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,idd")
      .then((res) => res.json())
      .then((data) => {
        const codes = data
          .filter((c: unknown) => (c as { idd?: { root?: string } }).idd?.root)
          .map((c: unknown) => {
            const country = c as {
              idd: { root: string; suffixes?: string[] };
              name: { common: string };
            };
            return {
              code: `${country.idd.root}${
                country.idd.suffixes ? country.idd.suffixes[0] : ""
              }`,
              country: country.name.common,
            };
          })
          .sort((a: CountryCode, b: CountryCode) =>
            a.country.localeCompare(b.country)
          );
        setCountryCodes(codes);
      })
      .catch((err) => console.error("Failed to load country codes:", err));
  }, []);

  useEffect(() => {
    const jqueryScript = document.createElement("script");
    jqueryScript.src =
      "https://www.paynimo.com/paynimocheckout/client/lib/jquery.min.js";
    jqueryScript.type = "text/javascript";
    document.body.appendChild(jqueryScript);

    const checkoutScript = document.createElement("script");
    checkoutScript.src =
      "https://www.paynimo.com/paynimocheckout/server/lib/checkout.js";
    checkoutScript.type = "text/javascript";
    document.body.appendChild(checkoutScript);
  }, []);

  const visibleCountryCodes = countryCodes.filter((c) => {
    if (!countrySearch.trim()) return true;
    const q = countrySearch.toLowerCase();
    return (
      c.country.toLowerCase().includes(q) ||
      c.code.toLowerCase().includes(q.replace(/^\+?/, "+"))
    );
  });

  // Close dropdown on outside click
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (!target.closest?.("#country-combobox")) {
        setIsCountryOpen(false);
        setHighlightedIndex(-1);
      }
    }
    if (isCountryOpen) {
      document.addEventListener("mousedown", onDocClick);
    }
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [isCountryOpen]);

  const selectCountryAt = (index: number) => {
    const item = visibleCountryCodes[index];
    if (!item) return;
    setFormData((prev) => ({ ...prev, countryCode: item.code }));
    setCountrySearch(`${item.country} (${item.code})`);
    setIsCountryOpen(false);
    setHighlightedIndex(-1);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }

    const domain = email.split("@")[1].toLowerCase();
    if (disposableDomains.includes(domain)) {
      return "Temporary email addresses are not allowed";
    }

    return "";
  };

  const validateAmount = (amount: string) => {
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount < 1) {
      return "Minimum amount is 1";
    }
    return "";
  };

  const getEurToInrRate = async (): Promise<number> => {
    if (eurToInrRate && eurToInrRate > 0) return eurToInrRate;
    try {
      const res = await fetch("https://api.exchangerate-api.com/v4/latest/EUR");
      const data = await res.json();
      const rate = (data?.rates?.INR ?? null) as number | null;
      if (!rate || typeof rate !== "number") throw new Error("Invalid rate");
      setEurToInrRate(rate);
      return rate;
    } catch (e) {
      console.error("Failed to fetch EUR->INR rate", e);
      // Fallback to no conversion on failure
      return 0;
    }
  };

  const handleInputChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "radio" && name === "currency") {
      if (value === "EUR") {
        // Reflect selection and convert amount to INR while keeping EUR selected
        setFormData((prev) => ({ ...prev, currency: "EUR" }));
        const rate = await getEurToInrRate();
        if (rate > 0) {
          const currentAmount = parseFloat(formData.amount);
          if (!isNaN(currentAmount) && currentAmount > 0) {
            const converted = (currentAmount * rate).toFixed(2);
            setFormData((prev) => ({ ...prev, amount: converted }));
          }
        }
      } else {
        setFormData((prev) => ({ ...prev, currency: value }));
      }
    } else if (name === "amount") {
      setFormData((prev) => ({ ...prev, amount: value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handlePay = async () => {
    try {
      const cleanedPhone = `${formData.phoneNumber}`.replace(/\s+/g, "");
      // Ensure amount is in INR before sending
      const inputAmount = parseFloat(formData.amount);
      let amountInInr = inputAmount;
      if (formData.currency === "EUR") {
        const rate = await getEurToInrRate();
        if (rate > 0 && !isNaN(inputAmount) && inputAmount > 0) {
          amountInInr = parseFloat((inputAmount * rate).toFixed(2));
        }
      }

      const res = await fetch(
        // "https://api-fos.tsm.ac.in/payment/create-checkout",
        "https://paynimo-backend.vercel.app/payment/create-checkout",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: amountInInr,
            email: formData.email,
            phoneno: cleanedPhone,
            currency: "INR",
          }),
        }
      );

      const data = await res.json();
      console.log("Backend Response:", data);

      if (!data.success) {
        return;
      }

      const reqJson = {
        features: {
          enableAbortResponse: true,
          enableExpressPay: true,
          enableInstrumentDeRegistration: true,
          enableMerTxnDetails: true,
        },
        consumerData: {
          deviceId: "WEBSH2",
          token: data.data.token,
          returnUrl: "https://api-fos.tsm.ac.in/payment/checkout-status", //redirecturl
          responseHandler: (response: PaymentResponse) => {
            console.log("Initial Payment response", response);
          },
          paymentMode: "all",
          merchantLogoUrl:
            "https://www.paynimo.com/CompanyDocs/company-logo-md.png",
          merchantId: data.data.merchantId, //merchantcode
          currency: "INR", //Currency
          consumerId: data.data.cusId, //Leadif
          txnId: data.data.txnId, //merchantTxnId
          consumerMobileNo: cleanedPhone, //notneeded
          consumerEmailId: data.data.email, //notneeded
          items: [
            {
              itemId: "first",
              amount: amountInInr,
              comAmt: "0",
            },
          ],
          customStyle: {
            PRIMARY_COLOR_CODE: "#45beaa",
            SECONDARY_COLOR_CODE: "#FFFFFF",
            BUTTON_COLOR_CODE_1: "#2d8c8c",
            BUTTON_COLOR_CODE_2: "#FFFFFF",
          },
        },
      };

      if (
        window.$ &&
        typeof (window.$ as { pnCheckout?: (data: unknown) => void })
          .pnCheckout === "function"
      ) {
        (window.$ as { pnCheckout: (data: unknown) => void }).pnCheckout(
          reqJson
        );
      } else {
        console.error("jQuery not loaded");
      }
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};

    const emailError = validateEmail(formData.email);
    if (emailError) {
      newErrors.email = emailError;
    }

    const isValidCode = countryCodes.some(
      (cc) => cc.code === formData.countryCode
    );
    if (!isValidCode) {
      newErrors.countryCode = "Please select a valid country code";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    }

    const amtError = validateAmount(formData.amount);
    if (amtError) {
      newErrors.amount = amtError;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    handlePay();

    setFormData({
      email: "",
      phoneNumber: "",
      countryCode: "+1",
      currency: "INR",
      amount: "",
    });
    setIsModalOpen(false);
    setErrors({});
  };

  return (
    <>
      {/* Payments Header */}
      <div className="scroll-mt-20 max-w-[1200px] mx-auto px-4 pt-8">
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold text-gray-700 mb-2">Payments</p>
          {/* <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[green] text-white font-medium py-2 px-6 rounded-full transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            Make Payment
          </button> */}
        </div>
      </div>

      <section
        id="account-details"
        className="scroll-mt-20 max-w-[1200px] mx-auto px-4 pt-8 mb-4"
      >
        {/* Indian Participants */}
        <div className="bg-white flex flex-wrap justify-between rounded-lg shadow-md p-6 border-l-4 border-green-600 mx-auto mb-6">
          <div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              Account details (For Indian Participants only)
            </h3>

            <ul>
              {siteData.accountDetails.indian.map((account, index) => (
                <li
                  key={`indian_${index}`}
                  className="ml-10 list-disc text-gray-600 leading-relaxed marker:text-green-600 marker:text-[20px]"
                >
                  <p className="inline font-semibold text-lg">
                    {account.title}
                  </p>{" "}
                  {account.content}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Image
              width={180}
              height={35}
              src="/images/paymentImg.jpg"
              alt="pay"
            />
          </div>
        </div>

        {/* Foreign Participants */}
        <div className="bg-white flex flex-wrap justify-between rounded-lg shadow-md p-6 border-l-4 border-green-600 mx-auto mb-6">
          <div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              Account details (For Foreign Participants only)
            </h3>

            <ul>
              {siteData.accountDetails.foreign.map((account, index) => (
                <li
                  key={`foreign_${index}`}
                  className="ml-10 list-disc text-gray-600 leading-relaxed marker:text-green-600 marker:text-[20px]"
                >
                  <p className="inline font-semibold text-lg">
                    {account.title}
                  </p>{" "}
                  {account.content}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[green] text-white font-medium py-2 px-6 rounded-full transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              Make Payment
            </button>
          </div>

          <div>
            <Image
              width={180}
              height={35}
              src="/images/paymentImg.jpg"
              alt="pay"
            />
          </div>
        </div>
      </section>

      {/* Sponsorship Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
          />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[98vh] overflow-y-auto border border-gray-100">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Conference Registration Payment
                  </h2>
                  <button
                    onClick={() => {
                      resetForm();
                      setIsModalOpen(false);
                    }}
                    className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Currency Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Currency *
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="currency"
                          value="INR"
                          checked={formData.currency === "INR"}
                          onChange={handleInputChange}
                          className="mr-2 text-green-600 focus:ring-green-500 cursor-pointer"
                        />
                        <span className="text-sm text-gray-700">INR</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="currency"
                          value="EUR"
                          checked={formData.currency === "EUR"}
                          onChange={handleInputChange}
                          className="mr-2 text-green-600 focus:ring-green-500 cursor-pointer"
                        />
                        <span className="text-sm text-gray-700">EUR</span>
                      </label>
                    </div>
                  </div>

                  {/* Amount Field */}
                  <div>
                    <label
                      htmlFor="amount"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Amount *
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        min={1}
                        step="0.01"
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                          errors.amount ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Enter amount"
                      />
                    </div>
                    {errors.amount && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.amount}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Number Field */}
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number *
                    </label>
                    <div className="flex gap-2">
                      <div id="country-combobox" className="relative w-1/2">
                        <input
                          type="text"
                          value={countrySearch}
                          onChange={(e) => {
                            setCountrySearch(e.target.value);
                            setIsCountryOpen(true);
                            setHighlightedIndex(0);
                          }}
                          onFocus={() => setIsCountryOpen(true)}
                          onKeyDown={(e) => {
                            if (
                              !isCountryOpen &&
                              (e.key === "ArrowDown" || e.key === "Enter")
                            ) {
                              setIsCountryOpen(true);
                              setHighlightedIndex(0);
                              return;
                            }
                            if (!isCountryOpen) return;
                            if (e.key === "ArrowDown") {
                              e.preventDefault();
                              setHighlightedIndex((i) =>
                                Math.min(i + 1, visibleCountryCodes.length - 1)
                              );
                            } else if (e.key === "ArrowUp") {
                              e.preventDefault();
                              setHighlightedIndex((i) => Math.max(i - 1, 0));
                            } else if (e.key === "Enter") {
                              e.preventDefault();
                              selectCountryAt(highlightedIndex);
                            } else if (e.key === "Escape") {
                              setIsCountryOpen(false);
                              setHighlightedIndex(-1);
                            }
                          }}
                          placeholder="Search country or code (e.g., India or +91)"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                          role="combobox"
                          aria-expanded={isCountryOpen}
                          aria-controls="country-listbox"
                          aria-autocomplete="list"
                        />
                        {isCountryOpen && (
                          <ul
                            id="country-listbox"
                            role="listbox"
                            className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-gray-200 bg-white shadow-lg"
                          >
                            {visibleCountryCodes.length === 0 && (
                              <li className="px-3 py-2 text-sm text-gray-500">
                                No results
                              </li>
                            )}
                            {visibleCountryCodes.map((c, idx) => (
                              <li
                                key={`${c.country}-${c.code}-${idx}`}
                                role="option"
                                aria-selected={idx === highlightedIndex}
                                onMouseEnter={() => setHighlightedIndex(idx)}
                                onMouseDown={(e) => {
                                  e.preventDefault();
                                  selectCountryAt(idx);
                                }}
                                className={`${
                                  idx === highlightedIndex ? "bg-green-50" : ""
                                } cursor-pointer px-3 py-2 text-sm flex items-center justify-between`}
                              >
                                <span className="text-gray-800">
                                  {c.country}
                                </span>
                                <span className="ml-2 text-gray-500">
                                  {c.code}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className={`flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                          errors.phoneNumber
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="Enter phone number"
                      />
                    </div>
                    {errors.countryCode && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.countryCode}
                      </p>
                    )}
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[green] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#43a047] transition-colors duration-200 cursor-pointer"
                    >
                      Pay Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
