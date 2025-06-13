"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowUp, ArrowDown } from "lucide-react"
import { Bitcoin, Coins, DollarSign, Zap, Star, Circle, Hexagon } from "lucide-react"

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
]

export default function ManageCoinsPage() {
  const [search, setSearch] = useState("")
  const [selectedCoins, setSelectedCoins] = useState<string[]>([])
  const [tab, setTab] = useState("Chart")
  const [sortAsc, setSortAsc] = useState(true)

  const filteredCoins = coinsData
    .filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => (sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)))

  const toggleCoin = (coin: string) => {
    setSelectedCoins((prev) => (prev.includes(coin) ? prev.filter((c) => c !== coin) : [...prev, coin]))
  }

  const discardChanges = () => setSelectedCoins([])

  const hasSelectedCoins = selectedCoins.length > 0

  return (
    <>
       <style >{`
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
          width: 100%;
          padding: 8px 16px;
          border-radius: 12px;
          color: white;
          font-weight: 500;
          background: linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #101828 100%);
          border: 1px solid rgba(0, 240, 255, 0.3);
          transition: all 0.3s ease;
        }
        
        .custom-button:hover {
          background: #111;
          color: #00f0ff;
          border-color: #00f0ff;
          box-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
        }
        
        .custom-button.active {
          background: linear-gradient(135deg, #00f0ff 0%, #8b00ff 100%);
          color: white;
          border-color: transparent;
          box-shadow: 0 0 20px rgba(0, 240, 255, 0.4);
        }
      `}</style>

      <div className="animated-gradient-border">
        <div className="dark-gradient-bg w-full h-full min-h-[calc(90vh-30px)] p-4 rounded-3xl text-white overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold">Manage Coins</h1>
            <button className="custom-button max-w-[100px]">
              Back
            </button>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-4 my-6">
            <Input
              placeholder="Search Coin"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:max-w-sm bg-black/50 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500"
            />

            <div className="flex gap-2">
              {["Chart", "Allocation", "Statistics"].map((label) => (
                <button
                  key={label}
                  onClick={() => setTab(label)}
                  className={`custom-button ${tab === label ? 'active' : ''}`}
                >
                  {label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setSortAsc(!sortAsc)}
              className="custom-button max-w-[60px] flex items-center justify-center"
            >
              {sortAsc ? <ArrowDown /> : <ArrowUp />}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredCoins.map((coin) => (
              <div
                key={coin.name}
                className={`animated-gradient-border-card transition-all duration-300 hover:scale-105 ${
                  selectedCoins.includes(coin.name) ? "opacity-100" : "opacity-90"
                }`}
              >
                <Card className="card-dark-gradient border-none rounded-2xl h-full">
                  <CardContent
                    className="coin-card-content p-6 flex flex-col items-center justify-center relative cursor-pointer h-full"
                    onClick={() => toggleCoin(coin.name)}
                  >
                    {/* Only show checkbox when there are selected coins */}
                    {hasSelectedCoins && (
                      <Checkbox
                        checked={selectedCoins.includes(coin.name)}
                        onCheckedChange={() => toggleCoin(coin.name)}
                        className="absolute top-4 left-4 border-gray-500 bg-black/50 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500 transition-all duration-200"
                      />
                    )}

                    <div className="icon-gradient-border mb-4">
                      <div
                        className={`coin-icon text-5xl ${coin.color} p-6 rounded-full shadow-lg transition-all duration-300`}
                      >
                        {coin.icon}
                      </div>
                    </div>
                    <div className="coin-name text-lg font-semibold text-white transition-all duration-300">
                      {coin.name}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
            <div className="flex gap-4">
              <button
                className="custom-button max-w-[100px]"
                onClick={discardChanges}
              >
                Discard
              </button>
              <button
                className="custom-button max-w-[100px]"
                onClick={() => console.log("Update clicked")}
              >
                Update
              </button>
            </div>
            <div className="text-md text-gray-300">
              {selectedCoins.length} Coin{selectedCoins.length !== 1 ? "s" : ""} selected
            </div>
          </div>
        </div>
      </div>
    </>
  )
}