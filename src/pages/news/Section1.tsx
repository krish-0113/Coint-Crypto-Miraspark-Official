"use client"

import { useState } from "react"

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

export default function NewsCardSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      <style>{`
        @keyframes gradient-border {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .news-card-border {
          position: relative;
          background: linear-gradient(45deg, #00f0ff, #4c00ff, #ff00c8, #00f0ff);
          background-size: 400% 400%;
          animation: gradient-border 3s ease infinite;
          padding: 2px;
          border-radius: 16px;
          transition: all 0.3s ease;
        }
        
        .news-card-border:hover {
          box-shadow: 0 8px 25px rgba(0, 240, 255, 0.4), 
                      0 0 30px rgba(76, 0, 255, 0.3),
                      0 0 40px rgba(255, 0, 200, 0.2);
          transform: translateY(-5px) scale(1.02);
        }
        
        .news-card-inner {
          background: linear-gradient(135deg, #000000 0%, #001f3f 50%, #0a0a0a 100%);
          border-radius: 14px;
          height: 100%;
          transition: all 0.3s ease;
        }
        
        .news-card-inner:hover {
          background: linear-gradient(135deg, #0a0a0a 0%, #002a5f 50%, #1a1a1a 100%);
        }
        
        .news-image-border {
          background: linear-gradient(45deg, #00f0ff, #4c00ff, #ff00c8, #00f0ff);
          background-size: 400% 400%;
          animation: gradient-border 3s ease infinite;
          padding: 1px;
          border-radius: 12px;
        }
      `}</style>

      <div className="w-full py-16 flex flex-col items-center justify-center px-4 bg-gradient-to-b from-[#000000] via-[#001f3f] to-[#000000]">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-900 bg-clip-text text-transparent">
  Latest Trending News
</h1>

        
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="news-card-border cursor-pointer"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="news-card-inner flex flex-col overflow-hidden">
                  <div className="news-image-border m-4 mb-3">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-40 object-cover rounded-xl"
                    />
                  </div>
                  <div className="px-4 pb-4 flex flex-col justify-between flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-300 font-light mb-3 line-clamp-3">
                      {item.description}
                    </p>
                    <span className={`text-sm font-medium transition-all duration-300 ${
                      hoveredCard === index 
                        ? 'text-cyan-400 transform translate-x-1' 
                        : 'text-blue-400'
                    }`}>
                      Read more →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}