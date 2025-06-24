"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowUp, ArrowDown, ArrowLeft, TrendingUp, TrendingDown } from "lucide-react"
import { Bitcoin, Coins, DollarSign, Zap, Star, Circle, Hexagon, Triangle, Square, Diamond } from "lucide-react"

const coinsData = [
  {
    name: "Bitcoin",
    icon: <Bitcoin />,
    color: "bg-yellow-500",
    textColor: "text-yellow-500",
    price: "$78,750.60",
    change: "-1.2%",
    isPositive: false,
  },
  {
    name: "Ethereum",
    icon: <Hexagon />,
    color: "bg-purple-500",
    textColor: "text-purple-500",
    price: "$1,494.80",
    change: "4.1%",
    isPositive: true,
  },
  {
    name: "XRP",
    icon: <Circle />,
    color: "bg-blue-500",
    textColor: "text-blue-500",
    price: "$1.94",
    change: "-1.2%",
    isPositive: false,
  },
  {
    name: "BNB",
    icon: <Star />,
    color: "bg-yellow-400",
    textColor: "text-yellow-400",
    price: "$571.92",
    change: "4.1%",
    isPositive: true,
  },
  {
    name: "USDC",
    icon: <DollarSign />,
    color: "bg-green-500",
    textColor: "text-green-500",
    price: "$1.00",
    change: "-0.1%",
    isPositive: false,
  },
  {
    name: "Solana",
    icon: <Zap />,
    color: "bg-indigo-500",
    textColor: "text-indigo-500",
    price: "$109.36",
    change: "4.1%",
    isPositive: true,
  },
  {
    name: "Dogecoin",
    icon: <Coins />,
    color: "bg-orange-400",
    textColor: "text-orange-400",
    price: "$0.1512",
    change: "4.1%",
    isPositive: true,
  },
  {
    name: "Cardano",
    icon: <Triangle />,
    color: "bg-blue-600",
    textColor: "text-blue-600",
    price: "$0.45",
    change: "-2.3%",
    isPositive: false,
  },
  {
    name: "Polygon",
    icon: <Square />,
    color: "bg-purple-600",
    textColor: "text-purple-600",
    price: "$0.92",
    change: "3.7%",
    isPositive: true,
  },
  {
    name: "Avalanche",
    icon: <Diamond />,
    color: "bg-red-500",
    textColor: "text-red-500",
    price: "$27.83",
    change: "-0.8%",
    isPositive: false,
  },
  {
    name: "Chainlink",
    icon: <Hexagon />,
    color: "bg-blue-400",
    textColor: "text-blue-400",
    price: "$15.42",
    change: "2.1%",
    isPositive: true,
  },
  {
    name: "Litecoin",
    icon: <Circle />,
    color: "bg-gray-400",
    textColor: "text-gray-400",
    price: "$89.34",
    change: "-1.5%",
    isPositive: false,
  },
  {
    name: "Polkadot",
    icon: <Star />,
    color: "bg-pink-500",
    textColor: "text-pink-500",
    price: "$7.12",
    change: "5.2%",
    isPositive: true,
  },
  {
    name: "Uniswap",
    icon: <Coins />,
    color: "bg-pink-400",
    textColor: "text-pink-400",
    price: "$12.87",
    change: "1.9%",
    isPositive: true,
  },
  {
    name: "TRON",
    icon: <Triangle />,
    color: "bg-red-600",
    textColor: "text-red-600",
    price: "$0.16",
    change: "-0.3%",
    isPositive: false,
  },
  {
    name: "Shiba Inu",
    icon: <Coins />,
    color: "bg-orange-500",
    textColor: "text-orange-500",
    price: "$0.000024",
    change: "8.7%",
    isPositive: true,
  },
  {
    name: "Cosmos",
    icon: <Circle />,
    color: "bg-indigo-400",
    textColor: "text-indigo-400",
    price: "$6.23",
    change: "3.4%",
    isPositive: true,
  },
  {
    name: "NEAR Protocol",
    icon: <Square />,
    color: "bg-green-400",
    textColor: "text-green-400",
    price: "$5.67",
    change: "-1.8%",
    isPositive: false,
  },
  {
    name: "Algorand",
    icon: <Diamond />,
    color: "bg-teal-500",
    textColor: "text-teal-500",
    price: "$0.31",
    change: "2.6%",
    isPositive: true,
  },
  {
    name: "VeChain",
    icon: <Hexagon />,
    color: "bg-cyan-500",
    textColor: "text-cyan-500",
    price: "$0.045",
    change: "4.2%",
    isPositive: true,
  },
]

export default function ManageCoinsPage() {
  const [search, setSearch] = useState("")
  const [selectedCoins, setSelectedCoins] = useState<string[]>([])
  const [sortAsc, setSortAsc] = useState(true)
  const [showWatchlist, setShowWatchlist] = useState(false)

  const filteredCoins = coinsData
    .filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => (sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)))

  // Get watchlist coins (only selected coins with their data)
  const watchlistCoins = coinsData.filter(coin => selectedCoins.includes(coin.name))

  const toggleCoin = (coin: string) => {
    setSelectedCoins((prev) => (prev.includes(coin) ? prev.filter((c) => c !== coin) : [...prev, coin]))
  }

  const discardChanges = () => setSelectedCoins([])

  const handleBackClick = () => {
    window.history.back()
  }

  const handleShowWatchlist = () => {
    setShowWatchlist(true)
  }

  const handleBackToManage = () => {
    setShowWatchlist(false)
  }

  const hasSelectedCoins = selectedCoins.length > 0

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
          padding: 1px;
          border-radius: 12px;
          transition: all 0.3s ease;
        }
        
        .animated-gradient-border-card:hover {
          box-shadow: 0 8px 25px rgba(0, 240, 255, 0.4), 
                      0 0 35px rgba(139, 0, 255, 0.3),
                      0 0 50px rgba(255, 0, 200, 0.2);
          transform: translateY(-1px);
        }

        .animated-gradient-border-card-small {
          position: relative;
          background: linear-gradient(45deg, #00f0ff, #8b00ff, #ff00c8, #00f0ff);
          background-size: 400% 400%;
          animation: gradient-border 3s ease infinite;
          padding: 1px;
          border-radius: 12px;
          transition: all 0.3s ease;
        }
        
        .animated-gradient-border-card-small:hover {
          box-shadow: 0 8px 25px rgba(0, 240, 255, 0.4), 
                      0 0 35px rgba(139, 0, 255, 0.3),
                      0 0 50px rgba(255, 0, 200, 0.2);
          transform: translateY(-1px);
        }
        
        .icon-gradient-border {
          position: relative;
          background: linear-gradient(45deg, #ff00c8, #8b00ff, #00f0ff, #ff00c8);
          background-size: 400% 400%;
          animation: gradient-border 3s ease infinite;
          padding: 2px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        
        .icon-gradient-border:hover {
          box-shadow: 0 0 20px rgba(255, 0, 200, 0.5),
                      0 0 30px rgba(139, 0, 255, 0.3),
                      0 0 40px rgba(0, 240, 255, 0.2);
          transform: scale(1.05);
        }

        .icon-gradient-border-small {
          position: relative;
          background: linear-gradient(45deg, #ff00c8, #8b00ff, #00f0ff, #ff00c8);
          background-size: 400% 400%;
          animation: gradient-border 2s ease infinite;
          padding: 2px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        
        .icon-gradient-border-small:hover {
          box-shadow: 0 0 20px rgba(255, 0, 200, 0.5),
                      0 0 30px rgba(139, 0, 255, 0.3),
                      0 0 40px rgba(0, 240, 255, 0.2);
          transform: scale(1.03);
        }
        
        .dark-gradient-bg {
          background: linear-gradient(135deg, #000000 0%, #0a0a0a 25%, #1a1a2e 75%, #16213e 100%);
        }
        
        .card-dark-gradient {
          background: linear-gradient(135deg, #000000 0%, #0f0f23 50%, #1a1a2e 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .card-dark-gradient:hover {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #2a2a3e 100%);
        }
        
        .custom-button {
          padding: 8px 16px;
          border-radius: 12px;
          color: white;
          font-weight: 500;
          background: linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #101828 100%);
          border: 1px solid rgba(0, 240, 255, 0.3);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        
        .custom-button:hover {
          background: #111;
          color: #00f0ff;
          border-color: #00f0ff;
          box-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
        }
        
        .custom-button.disabled {
          background: linear-gradient(135deg, #333 0%, #444 50%, #555 100%);
          color: #888;
          border-color: #555;
          cursor: not-allowed;
        }
        
        .custom-button.disabled:hover {
          background: linear-gradient(135deg, #333 0%, #444 50%, #555 100%);
          color: #888;
          border-color: #555;
          box-shadow: none;
        }

        .scrollable-container {
          max-height: calc(100vh - 220px);
          overflow-y: auto;
          padding-right: 8px;
        }

        .watchlist-scrollable {
          max-height: calc(100vh - 120px);
          overflow-y: auto;
          padding-right: 8px;
          padding-bottom: 20px;
        }

        .scrollable-container::-webkit-scrollbar,
        .watchlist-scrollable::-webkit-scrollbar {
          width: 6px;
        }

        .scrollable-container::-webkit-scrollbar-track,
        .watchlist-scrollable::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }

        .scrollable-container::-webkit-scrollbar-thumb,
        .watchlist-scrollable::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #00f0ff, #8b00ff);
          border-radius: 3px;
        }

        .scrollable-container::-webkit-scrollbar-thumb:hover,
        .watchlist-scrollable::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #00c8d4, #7a00d9);
        }

        @media (max-width: 768px) {
          .scrollable-container {
            max-height: calc(100vh - 280px);
          }
          .watchlist-scrollable {
            max-height: calc(100vh - 80px);
            padding-bottom: 40px;
          }
        }

        @media (max-width: 640px) {
          .scrollable-container {
            max-height: calc(100vh - 320px);
          }
          .watchlist-scrollable {
            max-height: calc(100vh - 100px);
            padding-bottom: 40px;
          }
        }
      `}</style>

      <div className="animated-gradient-border">
        <div className="dark-gradient-bg w-full h-full min-h-[calc(90vh-30px)] p-3 sm:p-4 rounded-3xl text-white overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg sm:text-xl font-bold">
              {showWatchlist ? "My Watchlist" : "Manage Coins"}
            </h1>
            <div className="flex gap-2">
              {showWatchlist ? (
                <Button
                  onClick={handleBackToManage}
                  className="border border-cyan-500 bg-transparent text-white hover:bg-cyan-500/10 hover:text-white transition-all duration-300 flex items-center gap-2 text-sm px-3 py-2"
                  variant="outline"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Manage
                </Button>
              ) : (
                <Button
                  onClick={handleBackClick}
                  className="border border-cyan-500 bg-transparent text-white hover:bg-cyan-500/10 hover:text-white transition-all duration-300 flex items-center gap-2 text-sm px-3 py-2"
                  variant="outline"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>
              )}
            </div>
          </div>

          {!showWatchlist ? (
            <>
              {/* Mobile My Watchlist Button - Only visible on mobile, removed count */}
              <div className="mb-4 md:hidden">
                <div className="p-[2px] rounded-xl bg-gradient-to-r from-[#00f0ff] via-[#8b00ff] to-[#ff00c8] hover:scale-105 transition-all duration-300 shadow-md shadow-[#00f0ff]/20">
                  <button
                    className="w-full py-2 rounded-xl text-white font-medium bg-gradient-to-br from-[#000000] via-[#0a0a0a] to-[#101828] hover:bg-[#111] hover:text-[#00f0ff] transition-all duration-300 flex items-center justify-center gap-2"
                    onClick={handleShowWatchlist}
                  >
                    My Watchlist
                  </button>
                </div>
              </div>

              {/* Search and Sort Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 my-4">
                <Input
                  placeholder="Search Coin"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full sm:max-w-sm bg-black/50 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500 text-sm"
                />

                <button
                  onClick={() => setSortAsc(!sortAsc)}
                  className="custom-button w-full sm:w-auto sm:max-w-[60px] text-sm"
                >
                  {sortAsc ? <ArrowDown className="w-4 h-4" /> : <ArrowUp className="w-4 h-4" />}
                  <span className="sm:hidden ml-2">{sortAsc ? 'A-Z' : 'Z-A'}</span>
                </button>
              </div>

              {/* Coins Grid with Scrollbar - Reduced card height */}
              <div className="scrollable-container">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3">
                  {filteredCoins.map((coin) => (
                    <div
                      key={coin.name}
                      className={`animated-gradient-border-card transition-all duration-300 hover:scale-105 ${
                        selectedCoins.includes(coin.name) ? "opacity-100" : "opacity-90"
                      }`}
                    >
                      <Card className="card-dark-gradient border-none rounded-xl h-full">
                        <CardContent
                          className="p-2 sm:p-3 flex flex-col items-center justify-center relative cursor-pointer h-full min-h-[90px] sm:min-h-[100px]"
                          onClick={() => toggleCoin(coin.name)}
                        >
                          {/* Always show checkbox but make it visible only when there are selected coins */}
                          <Checkbox
                            checked={selectedCoins.includes(coin.name)}
                            onCheckedChange={() => toggleCoin(coin.name)}
                            className={`absolute top-1.5 left-1.5 border-gray-500 bg-black/50 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500 transition-all duration-200 ${
                              hasSelectedCoins ? 'opacity-100' : 'opacity-0'
                            }`}
                          />

                          <div className="icon-gradient-border mb-1 sm:mb-2">
                            <div
                              className={`text-lg sm:text-xl ${coin.color} p-1.5 sm:p-2 rounded-full shadow-lg transition-all duration-300`}
                            >
                              {coin.icon}
                            </div>
                          </div>
                          <div className="text-xs sm:text-sm font-semibold text-white text-center transition-all duration-300 leading-tight">
                            {coin.name}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Controls */}
              <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4 pt-4 border-t border-gray-700/50">
                <div className="flex gap-3 sm:gap-4 w-full sm:w-auto">
                  <button
                    className="custom-button flex-1 sm:flex-none sm:min-w-[100px] text-sm"
                    onClick={discardChanges}
                  >
                    Discard
                  </button>
                  <button
                    className="custom-button flex-1 sm:flex-none sm:min-w-[100px] text-sm"
                    onClick={() => console.log("Update clicked")}
                  >
                    Update
                  </button>
                </div>
                <div className="text-sm text-gray-300 text-center sm:text-right">
                  {selectedCoins.length} Coin{selectedCoins.length !== 1 ? "s" : ""} selected
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Watchlist View */}
              <div className="watchlist-scrollable">
                {watchlistCoins.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="icon-gradient-border mb-4">
                      <div className="text-6xl text-gray-500 p-6 rounded-full">
                        <Star />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">No Coins in Watchlist</h3>
                    <p className="text-gray-400 mb-6">Select some coins from the manage page to see them here</p>
                    <button
                      onClick={handleBackToManage}
                      className="custom-button"
                    >
                      Go to Manage Coins
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {watchlistCoins.map((coin) => (
                      <div
                        key={coin.name}
                        className="animated-gradient-border-card-small transition-all duration-300 hover:scale-[1.01]"
                      >
                        <Card className="card-dark-gradient border-none rounded-xl">
                          <CardContent className="p-3 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="icon-gradient-border-small">
                                <div className={`text-lg ${coin.textColor} p-2 rounded-full shadow-lg`}>
                                  {coin.icon}
                                </div>
                              </div>
                              <div>
                                <h3 className="text-sm font-semibold text-white">
                                  {coin.name}
                                </h3>
                                <p className="text-xs text-gray-400">
                                  Cryptocurrency
                                </p>
                              </div>
                            </div>
                            
                            <div className="text-right">
                              <p className="text-sm font-bold text-white">
                                {coin.price}
                              </p>
                              <div className={`flex items-center gap-1 text-xs ${
                                coin.isPositive ? 'text-green-400' : 'text-red-400'
                              }`}>
                                {coin.isPositive ? (
                                  <TrendingUp className="w-3 h-3" />
                                ) : (
                                  <TrendingDown className="w-3 h-3" />
                                )}
                                <span>{coin.change}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}