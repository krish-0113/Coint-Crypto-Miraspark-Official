"use client"

import { useState } from "react"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { ArrowLeft, Bitcoin, Coins, DollarSign, Triangle, Circle, Hexagon, Star, X } from "lucide-react"

const chartData = {
  "1D": [
    { date: "00:00", value: 1200 },
    { date: "04:00", value: 1220 },
    { date: "08:00", value: 1210 },
    { date: "12:00", value: 1240 },
    { date: "16:00", value: 1260 },
    { date: "20:00", value: 1275 },
  ],
  "7D": [
    { date: "FEB 10", value: 1200 },
    { date: "FEB 11", value: 1300 },
    { date: "FEB 12", value: 1250 },
    { date: "FEB 13", value: 1290 },
    { date: "FEB 14", value: 1394 },
    { date: "FEB 15", value: 1474 },
  ],
  "30D": [
    { date: "JAN 20", value: 1150 },
    { date: "JAN 25", value: 1220 },
    { date: "FEB 1", value: 1240 },
    { date: "FEB 5", value: 1300 },
    { date: "FEB 10", value: 1400 },
    { date: "FEB 15", value: 1474 },
  ],
  "90D": [
    { date: "DEC 1", value: 1000 },
    { date: "JAN 1", value: 1100 },
    { date: "FEB 1", value: 1300 },
    { date: "FEB 15", value: 1474 },
  ],
  ALL: [
    { date: "2021", value: 800 },
    { date: "2022", value: 1200 },
    { date: "2023", value: 1000 },
    { date: "2024", value: 1474 },
  ],
}

const newsData = [
  {
    id: 1,
    title: "U.S. Dollar Faces Confidence Crisis, Boosting Bitcoin's Appeal",
    content:
      "The U.S. dollar is experiencing unprecedented challenges as global confidence wavers amid economic uncertainty. Central banks worldwide are diversifying their reserves, with many turning to Bitcoin as a hedge against traditional currency instability. This shift represents a fundamental change in how institutions view cryptocurrency as a store of value. The Federal Reserve's monetary policies have created concerns about long-term dollar stability, prompting investors to seek alternative assets. Bitcoin's decentralized nature and limited supply make it an attractive option for those looking to preserve wealth outside traditional financial systems. Market analysts predict this trend could accelerate as more institutions recognize Bitcoin's potential as digital gold.",
    date: "2 hours ago",
  },
  {
    id: 2,
    title: "U.S. Establishes Strategic Bitcoin Reserve U.S. Establishes",
    content:
      "In a groundbreaking move, the United States government has announced the establishment of a strategic Bitcoin reserve, marking a historic shift in national cryptocurrency policy. This decision follows months of deliberation among policymakers and represents the first time a major world power has officially embraced Bitcoin at the sovereign level. The reserve will initially hold 200,000 Bitcoin, acquired through various government operations and asset seizures. Treasury Secretary officials indicate this move is designed to strengthen America's position in the evolving digital economy while providing a hedge against inflation and currency devaluation. The announcement has sent shockwaves through global financial markets, with other nations now considering similar strategies.",
    date: "4 hours ago",
  },
  {
    id: 3,
    title: "UK Boarding School Accepts Bitcoin for Tuition Fees",
    content:
      "A prestigious UK boarding school has become the first educational institution in the country to accept Bitcoin payments for tuition fees, signaling growing mainstream adoption of cryptocurrency. The school, which charges £40,000 annually, will use third-party payment processors to convert Bitcoin to pounds sterling immediately upon receipt. This innovative approach caters to international families who prefer using digital assets for large transactions. The headmaster cited reduced international transfer fees and faster settlement times as key advantages. Several other private schools are reportedly considering similar policies as cryptocurrency becomes more integrated into everyday financial transactions. This development represents a significant step toward Bitcoin's acceptance in traditional institutional settings.",
    date: "6 hours ago",
  },
]

const initialWatchlist = [
  {
    id: 1,
    name: "Bitcoin",
    icon: <Bitcoin />,
    price: "$78,750.60",
    change: "-1.2%",
    color: "text-yellow-500",
  },
  {
    id: 2,
    name: "Ethereum",
    icon: <Hexagon />,
    price: "$1,494.80",
    change: "4.1%",
    color: "text-purple-500",
  },
  {
    id: 3,
    name: "XRP",
    icon: <Circle />,
    price: "$1.94",
    change: "-1.2%",
    color: "text-blue-500",
  },
  {
    id: 4,
    name: "BNB",
    icon: <Triangle />,
    price: "$571.92",
    change: "4.1%",
    color: "text-yellow-400",
  },
  {
    id: 5,
    name: "USDC",
    icon: <DollarSign />,
    price: "$1,494.80",
    change: "-1.2%",
    color: "text-green-500",
  },
  {
    id: 6,
    name: "Solana",
    icon: <Star />,
    price: "$109.36",
    change: "4.1%",
    color: "text-indigo-500",
  },
  {
    id: 7,
    name: "Dogecoin",
    icon: <Coins />,
    price: "$0.1512",
    change: "4.1%",
    color: "text-orange-400",
  },
]

// Watchlist View Component
const WatchlistView = ({ onBack }) => {
  const [watchlist, setWatchlist] = useState(initialWatchlist)
  const [selectedItem, setSelectedItem] = useState(null)

  const handleSelect = (item) => {
    setSelectedItem(item)
    console.log("Selected:", item.name)
  }

  const handleRemove = (itemId, event) => {
    event.stopPropagation()
    setWatchlist((prevWatchlist) => prevWatchlist.filter((item) => item.id !== itemId))
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-md mx-auto bg-black min-h-screen">
        {/* Header with gradient border */}
        <div className="p-[2px] m-4 rounded-2xl bg-gradient-to-r from-[#00f0ff] via-[#8b00ff] to-[#ff00c8]">
          <div className="bg-black rounded-[14px] p-4">
            <div className="flex items-center gap-4 mb-2">
              <button
                onClick={onBack}
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </button>
            </div>
            <h1 className="text-2xl font-bold text-white">My Watchlist</h1>
          </div>
        </div>

        {/* Watchlist Items */}
        <div className="px-4 space-y-3">
          {watchlist.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">Your watchlist is empty</p>
              <p className="text-gray-500 text-sm mt-2">Add some cryptocurrencies to get started</p>
            </div>
          ) : (
            watchlist.map((coin) => (
              <div
                key={coin.id}
                onClick={() => handleSelect(coin)}
                className="cursor-pointer transition-all duration-300 hover:scale-[1.02] relative group"
              >
                <div className="p-[1px] rounded-2xl bg-gradient-to-br from-[#00f0ff] via-[#8b00ff] to-[#ff00c8] hover:shadow-lg hover:shadow-[#00f0ff]/30 transition-all duration-300">
                  <div className="bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] rounded-[15px] px-4 py-4 flex justify-between items-center relative">
                    <button
                      onClick={(e) => handleRemove(coin.id, e)}
                      className="absolute top-2 right-2 w-6 h-6 bg-red-500/20 hover:bg-red-500/40 rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
                      title="Remove from watchlist"
                    >
                      <X className="w-3 h-3 text-red-400" />
                    </button>

                    <div className="flex items-center gap-3">
                      <div className={`text-2xl ${coin.color} p-2 bg-gray-800/50 rounded-full`}>{coin.icon}</div>
                      <span className="text-white font-medium text-lg">{coin.name}</span>
                    </div>

                    <div className="text-right pr-8">
                      <p className="text-gray-300 font-semibold text-lg">{coin.price}</p>
                      <p
                        className={`text-sm font-medium ${coin.change.includes("-") ? "text-red-400" : "text-green-400"}`}
                      >
                        {coin.change}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Manage Button */}
        {watchlist.length > 0 && (
          <div className="p-4 mt-8">
            <div className="p-[2px] rounded-xl bg-gradient-to-r from-[#00f0ff] via-[#8b00ff] to-[#ff00c8] hover:scale-105 transition-all duration-300 shadow-md shadow-[#00f0ff]/20">
              <button
                onClick={() => {
                  window.location.href = "/manage"
                }}
                className="w-full py-3 rounded-xl text-white font-medium bg-gradient-to-br from-[#000000] via-[#0a0a0a] to-[#101828] hover:bg-[#111] hover:text-[#00f0ff] transition-all duration-300"
              >
                Manage Watchlist
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function BitcoinDashboard() {
  const [timeRange, setTimeRange] = useState("7D")
  const [selectedNews, setSelectedNews] = useState(null)
  const [showWatchlistView, setShowWatchlistView] = useState(false)

  const handleBackClick = () => {
    if (selectedNews) {
      setSelectedNews(null)
    } else {
      window.location.href = "/"
    }
  }

  const handleNewsClick = (news) => {
    setSelectedNews(news)
  }

  // If watchlist view is active, show it
  if (showWatchlistView) {
    return <WatchlistView onBack={() => setShowWatchlistView(false)} />
  }

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
        
        .animated-gradient-border {
          position: relative;
          background: linear-gradient(45deg, #00f0ff, #8b00ff, #ff00c8, #00f0ff);
          background-size: 400% 400%;
          animation: gradient-border 3s ease infinite;
          padding: 2px;
          border-radius: 24px;
        }
        
        .animated-gradient-border-card {
          position: relative;
          background: linear-gradient(45deg, #00f0ff, #8b00ff, #ff00c8, #00f0ff);
          background-size: 400% 400%;
          animation: gradient-border 3s ease infinite;
          padding: 2px;
          border-radius: 16px;
        }
        
        .dark-gradient-bg {
          background: linear-gradient(135deg, #000000 0%, #0a0a0a 25%, #1a1a2e 75%, #16213e 100%);
        }
        
        .card-dark-gradient {
          background: linear-gradient(135deg, #000000 0%, #0f0f23 50%, #1a1a2e 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .news-card-gradient {
          background: linear-gradient(135deg, #000000 0%, #0a0a0a 30%, #1a1a2e 70%, #16213e 100%);
          border: 1px solid rgba(0, 240, 255, 0.2);
        }
        
        .time-range-button {
          background: linear-gradient(135deg, #1a1a2e 0%, #2a2a30 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .time-range-button:hover {
          background: linear-gradient(135deg, #00f0ff 0%, #8b00ff 100%);
          border: 1px solid rgba(0, 240, 255, 0.5);
          transform: translateY(-1px);
        }
        
        .time-range-button.active {
          background: linear-gradient(135deg, #00f0ff 0%, #8b00ff 100%);
          border: 1px solid rgba(0, 240, 255, 0.8);
          box-shadow: 0 4px 15px rgba(0, 240, 255, 0.3);
        }

        @media (max-width: 768px) {
          .chart-container {
            height: 300px !important;
          }
        }

        @media (max-width: 640px) {
          .chart-container {
            height: 280px !important;
          }
        }
      `}</style>

      <div className="animated-gradient-border">
        <div className="dark-gradient-bg flex w-full h-full min-h-[calc(90vh-30px)] overflow-hidden flex-col md:flex-row p-2 sm:p-4 rounded-3xl">
          <div className="w-full max-w-5xl mx-auto">
            <Card className="card-dark-gradient border-none rounded-2xl h-full">
              <CardContent className="p-3 sm:p-6 text-white">
                {!selectedNews ? (
                  <>
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-lg sm:text-xl shadow-lg">
                          ₿
                        </div>
                        <div>
                          <h2 className="text-xl sm:text-2xl font-bold text-white">$1,474.91</h2>
                          <p className="text-green-400 font-medium text-sm sm:text-base">+ $301.93 (24h)</p>
                        </div>
                      </div>
                      <Button
                        onClick={handleBackClick}
                        className="border border-cyan-500 bg-transparent text-white hover:bg-cyan-500/10 hover:text-white transition-all duration-300 flex items-center gap-2 text-sm sm:text-base px-3 sm:px-4"
                        variant="outline"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                      </Button>
                    </div>

                    {/* Mobile My Watchlist Button - Only visible on mobile */}
                    <div className="mb-4 md:hidden">
                    <div className="mt-6 p-[2px] rounded-xl bg-gradient-to-r from-[#00f0ff] via-[#8b00ff] to-[#ff00c8] hover:scale-105 transition-all duration-300 shadow-md shadow-[#00f0ff]/20">
  <Button
    onClick={() => setShowWatchlistView(true)}
    className="w-full py-2 rounded-xl text-white font-medium bg-gradient-to-br from-[#000000] via-[#0a0a0a] to-[#101828] hover:bg-[#111] hover:text-[#00f0ff] transition-all duration-300 flex items-center justify-center gap-2"
  >
    My Watchlist
  </Button>
</div>

                    </div>

                    {/* Time Range Buttons */}
                    <div className="flex justify-center mb-6">
                      <div className="flex gap-1 sm:gap-2 text-xs sm:text-sm overflow-x-auto pb-2">
                        {Object.keys(chartData).map((range) => (
                          <button
                            key={range}
                            onClick={() => setTimeRange(range)}
                            className={`px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-white font-medium transition-all duration-300 whitespace-nowrap ${
                              timeRange === range ? "time-range-button active" : "time-range-button"
                            }`}
                          >
                            {range}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Chart */}
                    <div className="bg-black/30 rounded-xl p-2 sm:p-4 border border-gray-700/50 mb-6">
                      <div className="chart-container" style={{ height: "400px" }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={chartData[timeRange]} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
                            <defs>
                              <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#00ffff" stopOpacity={0.8} />
                                <stop offset="50%" stopColor="#8b00ff" stopOpacity={0.5} />
                                <stop offset="100%" stopColor="#000000" stopOpacity={0.1} />
                              </linearGradient>
                            </defs>
                            <XAxis dataKey="date" stroke="#94a3b8" fontSize={12} interval="preserveStartEnd" />
                            <YAxis stroke="#94a3b8" fontSize={12} width={60} />
                            <Tooltip
                              contentStyle={{
                                backgroundColor: "#1e293b",
                                borderColor: "#00FFFF",
                                color: "#fff",
                                borderRadius: "8px",
                                border: "1px solid #00FFFF",
                                fontSize: "12px",
                              }}
                              labelStyle={{ color: "#fff" }}
                              itemStyle={{ color: "#00FFFF" }}
                            />
                            <Area
                              type="monotone"
                              dataKey="value"
                              stroke="#00ffff"
                              fill="url(#blueGradient)"
                              strokeWidth={2}
                              dot={false}
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    {/* Trending News */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-white">Trending News</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {newsData.map((news) => (
                          <div key={news.id} className="animated-gradient-border-card">
                            <Card className="news-card-gradient border-none rounded-2xl text-white relative overflow-hidden h-full cursor-pointer transition-transform duration-200 hover:scale-105">
                              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full opacity-10 z-0">
                                <div className="w-full h-full bg-gradient-to-b from-cyan-400/20 to-transparent"></div>
                              </div>
                              <CardContent className="p-4 relative z-10">
                                <CardTitle className="text-sm font-medium mb-3 text-white leading-relaxed">
                                  {news.title}
                                </CardTitle>
                                <Button
                                  variant="link"
                                  onClick={() => handleNewsClick(news)}
                                  className="text-cyan-400 p-0 hover:text-cyan-300 transition-colors duration-200"
                                >
                                  Read More
                                </Button>
                              </CardContent>
                            </Card>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  /* Full News Page */
                  <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-4 mb-6">
                      <Button
                        onClick={handleBackClick}
                        className="border border-cyan-500 bg-transparent text-white hover:bg-cyan-500/10 hover:text-white transition-all duration-300 flex items-center gap-2"
                        variant="outline"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Dashboard
                      </Button>
                    </div>

                    <div className="bg-black/30 rounded-xl p-6 border border-gray-700/50">
                      <div className="mb-4">
                        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{selectedNews.title}</h1>
                        <p className="text-gray-400 text-sm">{selectedNews.date}</p>
                      </div>

                      <div className="prose prose-invert max-w-none">
                        <p className="text-gray-300 leading-relaxed text-base sm:text-lg">{selectedNews.content}</p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
