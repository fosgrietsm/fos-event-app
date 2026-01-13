"use client";

type MarqueeProps = {
  marqueeData: string[];
};

export default function Marquee({ marqueeData }: MarqueeProps) {
  if (!marqueeData?.length) return null;

  const handleClick = () => {
    const el = document.getElementById("key-dates");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="marquee-container mt-24 bg-[#4caf50] text-white w-full overflow-hidden py-3 relative z-40 flex items-center min-h-12 shrink-0">
      <div className="marquee-content flex whitespace-nowrap cursor-pointer">
        {marqueeData.map((item, index) => (
          <p
            key={`marquee-${index}`}
            onClick={handleClick}
            className="marquee-item text-white px-16 inline-block cursor-pointer hover:underline"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
