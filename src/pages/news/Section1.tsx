"use client"

import { useRef } from "react"

export default function NewsCardSection() {
  const swiperRef = useRef(null)
  const resumeTimeout = useRef(null)

  const handleResume = () => {
    resumeTimeout.current = setTimeout(() => {
      swiperRef.current?.autoplay?.start()
    }, 3000)
  }

  const newsItems = [
    {
      img: "/img/news1.png",
      title: "Another Unexpected Loss for Tesla Company",
      description: "Tesla's shares fell 30% this year due to protests and vandalism at its dealerships.",
    },
    {
      img: "/img/news2.png",
      title: "Meta Faces Legal Battle",
      description: "Meta is under fire for data privacy issues in Europe as regulators tighten their grip.",
    },
    {
      img: "/img/news3.png",
      title: "AI Is Reshaping Jobs",
      description: "AI automation is expected to impact 40% of global jobs, according to the  a new report.",
    },
  ]

  return (
    <section className="px-4 py-2 md:py-12 md:px-10 lg:px-24 flex justify-center items-center flex-col">
       <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-[#00f0ff] via-[#8b00ff] via-[#ff00c8] to-[#00f0ff] bg-clip-text text-transparent mb-8 text-left w-full max-w-7xl animate-gradient-x drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">
        Latest Crypto Insights
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl">
        {newsItems.map((item, index) => (
          <a
            href="#"
            key={index}
            className="group block relative rounded-[20px] overflow-hidden h-full transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            onMouseEnter={() => {
              swiperRef.current?.autoplay?.stop()
              clearTimeout(resumeTimeout.current)
            }}
            onMouseLeave={handleResume}
          >
            {/* Animated gradient border wrapper */}
            <div className="absolute inset-0 rounded-[20px] p-[3px] bg-gradient-to-r from-[#00f0ff] via-[#8b00ff] via-[#ff00c8] to-[#00f0ff] animate-gradient-x opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-full h-full bg-transparent rounded-[17px]"></div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-[20px] bg-gradient-to-r from-[#00f0ff] via-[#8b00ff] via-[#ff00c8] to-[#00f0ff] opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 animate-gradient-x"></div>

            {/* Card content */}
            <div className="relative h-full flex flex-col bg-gradient-to-b from-[#000000] via-[#0a0a0a] via-[#1a1a2e] to-[#16213e] rounded-[17px] z-20 overflow-hidden transition-all duration-300 group-hover:shadow-2xl">
              {/* Top Overlay Design */}
              <img
                src="/img/green.svg"
                alt="Green Light"
                className="absolute top-0 left-1/2 transform -translate-x-1/2 pointer-events-none opacity-70 z-10 group-hover:opacity-90 transition-opacity duration-300"
              />

              {/* Main Image with gradient border */}
              <div className="p-4 pb-2">
                <div className="relative rounded-lg overflow-hidden">
                  {/* Image gradient border */}
                  <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-[#00f0ff] via-[#8b00ff] via-[#ff00c8] to-[#00f0ff] animate-gradient-x opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full h-full bg-transparent rounded-[6px]"></div>
                  </div>

                  {/* Image container */}
                  <div className="relative rounded-[6px] overflow-hidden">
                    <img
                      src={item.img || "/placeholder.svg?height=192&width=400"}
                      alt={item.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Image overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-4 flex flex-col justify-between flex-1 transition-all duration-300 group-hover:transform group-hover:translate-y-[-2px]">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#00f0ff] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 font-light font-inter group-hover:text-white transition-colors duration-300">
                  {item.description}
                </p>
                <span className="mt-4 text-blue-400 group-hover:text-[#00f0ff] group-hover:underline text-sm font-medium inline-block transition-all duration-300 transform group-hover:translate-x-2">
                  Read more →
                </span>
              </div>

              {/* Bottom glow effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00f0ff] via-[#8b00ff] via-[#ff00c8] to-[#00f0ff] opacity-0 group-hover:opacity-60 transition-opacity duration-500 animate-gradient-x"></div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
