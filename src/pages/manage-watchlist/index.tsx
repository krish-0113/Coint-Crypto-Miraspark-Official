"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowUp, ArrowDown, ArrowLeft } from "lucide-react"
import { Bitcoin, Coins, DollarSign, Zap, Star, Circle, Hexagon, Triangle, Square, Diamond } from "lucide-react"

const coinsData = [
  {
    name: "Bitcoin",
    icon: <Bitcoin />,
    color: "bg-yellow-500",
  },
  {
    name: "Ethereum",
    icon: <Hexagon />,
    color: "bg-purple-500",
  },
  {
    name: "XRP",
    icon: <Circle />,
    color: "bg-blue-500",
  },
  {
    name: "BNB",
    icon: <Star />,
    color: "bg-yellow-400",
  },
  {
    name: "USDC",
    icon: <DollarSign />,
    color: "bg-green-500",
  },
  {
    name: "Solana",
    icon: <Zap />,
    color: "bg-indigo-500",
  },
  {
    name: "Dogecoin",
    icon: <Coins />,
    color: "bg-orange-400",
  },
  {
    name: "Cardano",
    icon: <Triangle />,
    color: "bg-blue-600",
  },
  {
    name: "Polygon",
    icon: <Square />,
    color: "bg-purple-600",
  },
  {
    name: "Avalanche",
    icon: <Diamond />,
    color: "bg-red-500",
  },
  {
    name: "Chainlink",
    icon: <Hexagon />,
    color: "bg-blue-400",
  },
  {
    name: "Litecoin",
    icon: <Circle />,
    color: "bg-gray-400",
  },
  {
    name: "Polkadot",
    icon: <Star />,
    color: "bg-pink-500",
  },
  {
    name: "Uniswap",
    icon: <Coins />,
    color: "bg-pink-400",
  },
  {
    name: "TRON",
    icon: <Triangle />,
    color: "bg-red-600",
  },
  {
    name: "Shiba Inu",
    icon: <Coins />,
    color: "bg-orange-500",
  },
  {
    name: "Cosmos",
    icon: <Circle />,
    color: "bg-indigo-400",
  },
  {
    name: "NEAR Protocol",
    icon: <Square />,
    color: "bg-green-400",
  },
  {
    name: "Algorand",
    icon: <Diamond />,
    color: "bg-teal-500",
  },
  {
    name: "VeChain",
    icon: <Hexagon />,
    color: "bg-cyan-500",
  },
]

export default function ManageCoinsPage() {
  const [search, setSearch] = useState("")
  const [selectedCoins, setSelectedCoins] = useState<string[]>([])
  const [sortAsc, setSortAsc] = useState(true)

  const filteredCoins = coinsData
    .filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => (sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)))

  const toggleCoin = (coin: string) => {
    setSelectedCoins((prev) => (prev.includes(coin) ? prev.filter((c) => c !== coin) : [...prev, coin]))
  }

  const discardChanges = () => setSelectedCoins([])

  const handleBackClick = () => {
    window.history.back()
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
          border-radius: 16px;
          transition: all 0.3s ease;
        }
        
        .animated-gradient-border-card:hover {
          box-shadow: 0 10px 30px rgba(0, 240, 255, 0.4), 
                      0 0 40px rgba(139, 0, 255, 0.3),
                      0 0 60px rgba(255, 0, 200, 0.2);
          transform: translateY(-2px);
        }
        
        .icon-gradient-border {
          position: relative;
          background: linear-gradient(45deg, #ff00c8, #8b00ff, #00f0ff, #ff00c8);
          background-size: 400% 400%;
          animation: gradient-border 3s ease infinite;
          padding: 3px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        
        .icon-gradient-border:hover {
          box-shadow: 0 0 25px rgba(255, 0, 200, 0.6),
                      0 0 35px rgba(139, 0, 255, 0.4),
                      0 0 45px rgba(0, 240, 255, 0.3);
          transform: scale(1.05);
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
          max-height: calc(100vh - 300px);
          overflow-y: auto;
          padding-right: 8px;
        }

        .scrollable-container::-webkit-scrollbar {
          width: 8px;
        }

        .scrollable-container::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }

        .scrollable-container::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #00f0ff, #8b00ff);
          border-radius: 4px;
        }

        .scrollable-container::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #00c8d4, #7a00d9);
        }

        @media (max-width: 768px) {
          .scrollable-container {
            max-height: calc(100vh - 350px);
          }
        }

        @media (max-width: 640px) {
          .scrollable-container {
            max-height: calc(100vh - 400px);
          }
        }
      `}</style>

      <div className="animated-gradient-border">
        <div className="dark-gradient-bg w-full h-full min-h-[calc(90vh-30px)] p-3 sm:p-4 rounded-3xl text-white overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg sm:text-xl font-bold">Manage Coins</h1>
            <div className="flex gap-2">
              <Button
                onClick={handleBackClick}
                className="border border-cyan-500 bg-transparent text-white hover:bg-cyan-500/10 hover:text-white transition-all duration-300 flex items-center gap-2 text-sm px-3 py-2"
                variant="outline"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
              {/* <button className="custom-button disabled px-3 py-2 text-sm">
                Manage
              </button> */}
            </div>
          </div>

          {/* Search and Sort Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 my-4 sm:my-6">
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

          {/* Coins Grid with Scrollbar */}
          <div className="scrollable-container">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
              {filteredCoins.map((coin) => (
                <div
                  key={coin.name}
                  className={`animated-gradient-border-card transition-all duration-300 hover:scale-105 ${
                    selectedCoins.includes(coin.name) ? "opacity-100" : "opacity-90"
                  }`}
                >
                  <Card className="card-dark-gradient border-none rounded-2xl h-full">
                    <CardContent
                      className="p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center relative cursor-pointer h-full min-h-[120px] sm:min-h-[140px]"
                      onClick={() => toggleCoin(coin.name)}
                    >
                      {/* Only show checkbox when there are selected coins */}
                      {hasSelectedCoins && (
                        <Checkbox
                          checked={selectedCoins.includes(coin.name)}
                          onCheckedChange={() => toggleCoin(coin.name)}
                          className="absolute top-2 left-2 border-gray-500 bg-black/50 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500 transition-all duration-200"
                        />
                      )}

                      <div className="icon-gradient-border mb-2 sm:mb-3">
                        <div
                          className={`text-2xl sm:text-3xl md:text-4xl ${coin.color} p-2 sm:p-3 md:p-4 rounded-full shadow-lg transition-all duration-300`}
                        >
                          {coin.icon}
                        </div>
                      </div>
                      <div className="text-xs sm:text-sm md:text-base font-semibold text-white text-center transition-all duration-300 leading-tight">
                        {coin.name}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 sm:mt-8 gap-4 pt-4 border-t border-gray-700/50">
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
            <div className="text-sm sm:text-base text-gray-300 text-center sm:text-right">
              {selectedCoins.length} Coin{selectedCoins.length !== 1 ? "s" : ""} selected
            </div>
          </div>
        </div>
      </div>
    </>
  )
}