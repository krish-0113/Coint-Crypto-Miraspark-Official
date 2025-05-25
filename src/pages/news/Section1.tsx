import React, { useRef } from "react";

export default function NewsCardSection() {
  const swiperRef = useRef(null);
  const resumeTimeout = useRef(null);

  const handleResume = () => {
    resumeTimeout.current = setTimeout(() => {
      swiperRef.current?.autoplay?.start();
    }, 3000);
  };

 const newsItems = [
  {
    img: "/img/news1.png",
    title: "Another Unexpected Loss for Tesla Company",
    description:
      "Tesla's shares fell 30% this year due to protests and vandalism at its dealerships.",
  },
  {
    img: "/img/news2.png",
    title: "Meta Faces Legal Battle",
    description:
      "Meta is under fire for data privacy issues in Europe as regulators tighten their grip.",
  },
  {
    img: "/img/news3.png",
    title: "AI Is Reshaping Jobs",
    description:
      "AI automation is expected to impact 40% of global jobs, according to a new report.",
  },
  
];
  return (
    <section className="px-4 py-2 md:py-12 md:px-10 lg:px-24 flex justify-center items-center flex-col">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-8 text-left w-full max-w-7xl ">Latest Crypto Insights</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 max-w-7xl ">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="bg-white relative rounded-lg shadow-md overflow-hidden h-full flex flex-col border border-[#343442] p-4 group"
            onMouseEnter={() => {
              swiperRef.current?.autoplay?.stop();
              clearTimeout(resumeTimeout.current);
            }}
            onMouseLeave={handleResume}
          >
            {/* Top Overlay Design */}
            <img
              src="/img/green.svg"
              alt="Green Light"
              className="absolute top-0 left-1/2 transform -translate-x-1/2 pointer-events-none opacity-70 z-10"
            />

            {/* Main Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover rounded-lg"
            />

            {/* Text Content */}
            <div className="p-4 flex flex-col justify-between flex-1">
              <p className="text-sm text-white font-light font-inter">{item.description}</p>
              <a
                href="#"
                className="mt-4 text-blue-500 hover:underline text-sm font-medium"
              >
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
