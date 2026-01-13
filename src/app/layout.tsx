import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { siteData } from "@/data/data";
import Marquee from "@/components/Marquee";

export const metadata: Metadata = {
  title: "FOS 2026-GRIE - Thiagarajar School of Management",
  description: "Thiagarajar School of Management, Madurai",
  icons: {
    icon: [
      { url: "/tsmlogo-v2.png", type: "image/png", sizes: "32x32" },
      { url: "/tsmlogo-v2.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: { url: "/tsmlogo-v2.png", type: "image/png" },
    apple: { url: "/tsmlogo-v2.png", type: "image/png" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col max-w-screen max-h-screen min-h-screen bg-gray-50 text-gray-900">
        {/* App Bar / Header */}
        <Navbar />

        {/* marquee data */}
        {/* {siteData.marqueeData && siteData.marqueeData.length > 0 && (
          <div className="marquee-container mt-24 bg-[#4caf50] text-white w-full overflow-hidden py-3 relative z-40 flex items-center min-h-12 shrink-0">
            <div className="marquee-content">
              {siteData.marqueeData.map((item: string, index: number) => (
                <span 
                  key={`marquee-${index}`} 
                  className="marquee-item text-white px-16 inline-block whitespace-nowrap"
                >
                  {item}
                </span>
              ))}
              {siteData.marqueeData.map((item: string, index: number) => (
                <span 
                  key={`marquee-duplicate-${index}`} 
                  className="marquee-item text-white px-16 inline-block whitespace-nowrap"
                >
                  {item}
                </span>
              ))}
              {siteData.marqueeData.map((item: string, index: number) => (
                <span 
                  key={`marquee-duplicate-2-${index}`} 
                  className="marquee-item text-white px-16 inline-block whitespace-nowrap"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}  */}

        {siteData.marqueeData?.length > 0 && 
        <Marquee marqueeData={siteData.marqueeData} />
        
        // (
        //   <div className="marquee-container  mt-24 bg-[#4caf50] text-white w-full overflow-hidden py-3 relative z-40 flex items-center min-h-12 shrink-0">
        //     <div className="marquee-content cursor-pointer flex whitespace-nowrap">
        //       {[...siteData.marqueeData].map((item, index) => (
        //         <p
        //           key={`marquee-${index}`}
        //           onClick={handleClick}
        //           className="marquee-item text-white px-16 inline-block"
        //         >
        //           {item}
        //         </p>
        //       ))}
        //     </div>
        //   </div>
        // )

        }


        {/* Main Content */}
        <div className={`${!siteData.marqueeData || siteData.marqueeData.length === 0 ? "mt-16 lg:mt-[72px] xl:mt-[72px] 2xl:mt-[72px]" : ""}`}>
        {children}
        </div>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
