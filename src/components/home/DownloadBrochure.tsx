"use client";

import { siteData } from "@/data/data";

export default function DownloadBrochure() {
  return (
    <>
      <div className="flex  justify-between">
        


          <div className="mt-3 w-full flex justify-center">
            <a
              href={siteData.brochurePdfPath}
              download="brochure.pdf" // ensures file downloads instead of opening
              className="inline-block bg-[#4CAF50] text-white font-bold py-2 px-6 rounded-full hover:bg-[#43a047] transition-transform duration-300 hover:scale-105"
            >
              Download Brochure
            </a>
          </div>
          <div className="mt-3 w-full flex justify-center">
            <a
              href={siteData.posterPath}
              download="Poster.png" // ensures file downloads instead of opening
              className="inline-block bg-[#4CAF50] text-white font-bold py-2 px-6 rounded-full hover:bg-[#43a047] transition-transform duration-300 hover:scale-105"
            >
              Download Poster
            </a>
          
        </div>
      </div>
      <div className="mt-3 w-full flex justify-center">
        <a
          href={siteData.posterPath}
          download="Poster.png" // ensures file downloads instead of opening
          className="inline-block bg-[#4CAF50] text-white font-bold py-2 px-6 rounded-full hover:bg-[#43a047] transition-transform duration-300 hover:scale-105"
        >
          Conference Programe Schedule
        </a>
      </div>
      <div className="mt-3 w-full flex justify-center">
        <a
          href={siteData.posterPath}
          download="Poster.png" // ensures file downloads instead of opening
          className="inline-block bg-[#4CAF50] text-white font-bold py-2 px-6 rounded-full hover:bg-[#43a047] transition-transform duration-300 hover:scale-105"
        >
          Presentation Schedule (Offline)
        </a>
      </div>
      <div className="mt-3 w-full flex justify-center">
        <a
          href={siteData.posterPath}
          download="Poster.png" // ensures file downloads instead of opening
          className="inline-block bg-[#4CAF50] text-white font-bold py-2 px-6 rounded-full hover:bg-[#43a047] transition-transform duration-300 hover:scale-105"
        >
          Presentation Schedule (Online)
        </a>
      </div>
    </>
  );
}
