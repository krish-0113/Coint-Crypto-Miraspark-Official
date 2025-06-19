"use client"

import { ArrowLeft, Maximize2, Minimize2 } from "lucide-react"
import { useState, useRef } from "react"

type NewsItem = {
  id: number
  title: string
  description: string
  image: string
  img?: string
  fullContent: string
  marketData: {
    trend: "bull" | "bear"
    percentage: number
  }
}

interface HeroProps {
  selectedNews?: NewsItem | null
  onBackClick?: () => void
}

export default function Hero({ selectedNews, onBackClick }: HeroProps) {
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isMaximized, setIsMaximized] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleMaximize = () => {
    setIsMaximized(!isMaximized)
  }

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  // Use selected news data or default data
  const newsData = selectedNews || {
    title: "U.S. Justice Department Disbands Crypto Enforcement Unit",
    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=300&fit=crop",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=300&fit=crop",
    fullContent: `In a surprising policy shift, the U.S. Justice Department has officially disbanded its National Cryptocurrency Enforcement Team (NCET), which was originally formed to monitor and prosecute crimes involving digital assets.

Sources say the department will now redirect its efforts toward investigating digital financial crimes related to terrorism, money laundering, and organized cybercrime.

President Javier Milei is facing massive public outrage after backing $LIBRA — a cryptocurrency promoted as Argentina's digital economic savior — which has now lost over 90% of its value. Allegations of insider trading and a potential rug pull have shaken investor confidence.

The cryptocurrency market has been experiencing unprecedented volatility, with major digital assets losing significant value amid regulatory uncertainty and market manipulation concerns.

Industry experts suggest that this move by the Justice Department signals a broader shift in how the U.S. government approaches cryptocurrency regulation and enforcement.`,
    marketData: { trend: "bear" as const, percentage: -15.2 },
  }

  const marketData = newsData.marketData
  const meterPosition = Math.max(-100, Math.min(100, marketData.percentage))
  const meterRotation = (meterPosition / 100) * 90

  return (
    <div className="h-auto px-4 md:px-10 lg:px-24 py-20 text-white relative group">
      <img
        src="/placeholder.svg?height=400&width=400"
        alt="Green Light"
        className="absolute top-0 left-0 transform -translate-x-1/2 pointer-events-none opacity-70 z-0"
      />

      <div className="max-w-7xl mx-auto relative mt-6">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="overflow-x-auto scrollbar-hide card-shadow transform transition-transform duration-300 ease-in-out hover:-translate-y-2 relative z-20"
          style={{
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          <div className="min-w-full">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00f0ff] via-[#8b00ff] to-[#ff00c8] animate-gradient-x z-0 transition-all duration-300 group-hover:opacity-90"></div>

            <div className="relative m-[2px] rounded-2xl bg-gradient-to-b from-[#000000] via-[#0a0a0a] to-[#16213e] p-6 z-10">
              {/* Show back arrow only when selectedNews exists */}
              {selectedNews && onBackClick && (
                <div className="flex items-center mb-4">
                  <ArrowLeft
                    className="mr-2 cursor-pointer text-cyan-400 hover:text-white transition-colors duration-200"
                    onClick={onBackClick}
                  />
                  <span className="text-sm text-gray-400">Back to default news</span>
                </div>
              )}

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between my-6 gap-3">
                <h1 className="text-xl md:text-3xl font-bold">{newsData.title}</h1>

                <div className="flex items-center gap-2">
                  <div className="relative w-12 h-6">
                    <svg className="w-full h-full" viewBox="0 0 48 24">
                      <path
                        d="M 6 21 A 18 18 0 0 1 42 21"
                        fill="none"
                        stroke="rgba(255,255,255,0.3)"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M 6 21 A 18 18 0 0 1 42 21"
                        fill="none"
                        stroke={marketData.trend === "bull" ? "#10b981" : "#ef4444"}
                        strokeWidth="2"
                        strokeDasharray="56.5"
                        strokeDashoffset={
                          marketData.trend === "bull"
                            ? 56.5 - ((meterPosition + 100) / 200) * 56.5
                            : 56.5 - ((100 + meterPosition) / 200) * 56.5
                        }
                        className="transition-all duration-1000"
                      />
                    </svg>

                    <div
                      className="absolute bottom-0 left-1/2 w-0.5 h-4 bg-white origin-bottom transition-transform duration-1000"
                      style={{
                        transform: `translateX(-50%) rotate(${meterRotation}deg)`,
                        transformOrigin: "bottom center",
                      }}
                    ></div>

                    <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-white rounded-full transform -translate-x-1/2"></div>
                  </div>

                  <div className="text-center">
                    <div
                      className={`text-sm font-bold ${marketData.trend === "bull" ? "text-green-400" : "text-red-400"}`}
                    >
                      {marketData.trend === "bull" ? "🐂" : "🐻"}
                    </div>
                    <div className={`text-xs ${marketData.trend === "bull" ? "text-green-400" : "text-red-400"}`}>
                      {marketData.percentage > 0 ? "+" : ""}
                      {marketData.percentage}%
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`transition-all duration-300 ${
                  isMaximized ? "block" : "grid grid-cols-1 xl:grid-cols-[minmax(0,600px)_1fr] gap-6 items-start"
                }`}
              >
                <div
                  className={`w-full max-w-[600px] h-auto mx-auto xl:mx-0 relative ${
                    isMaximized ? "float-left mr-8 mb-6 max-w-[400px]" : ""
                  }`}
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00f0ff] via-[#8b00ff] to-[#ff00c8] animate-gradient-x"></div>
                  <div className="relative m-[2px] rounded-xl overflow-hidden">
                    <img
                      src={newsData.img || newsData.image}
                      alt={newsData.title}
                      className="w-full h-auto object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/placeholder.svg?height=300&width=600"
                      }}
                    />
                  </div>
                </div>

                <div className="relative">
                  <button
                    onClick={handleMaximize}
                    className="absolute top-0 right-0 z-10 p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200 group/btn"
                    title={isMaximized ? "Minimize" : "Maximize"}
                  >
                    {isMaximized ? (
                      <Minimize2 className="w-4 h-4 text-white group-hover/btn:scale-110 transition-transform" />
                    ) : (
                      <Maximize2 className="w-4 h-4 text-white group-hover/btn:scale-110 transition-transform" />
                    )}
                  </button>

                  <div
                    className={`text-sm md:text-base leading-relaxed text-gray-300 pr-2 text-scroll transition-all duration-300 ${
                      isMaximized ? "max-h-none mr-12" : "max-h-96 overflow-y-auto"
                    }`}
                  >
                    <div className={isMaximized ? "space-y-6" : "space-y-4"}>
                      {newsData.fullContent.split("\n\n").map(
                        (paragraph: string, index: number) =>
                          paragraph.trim() && (
                            <p key={index} className="text-justify">
                              {paragraph.trim()}
                            </p>
                          ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .text-scroll::-webkit-scrollbar {
          width: 6px;
        }
        
        .text-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        
        .text-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #00f0ff, #8b00ff);
          border-radius: 3px;
        }
        
        .text-scroll::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #00d4ff, #7700dd);
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  )
}
