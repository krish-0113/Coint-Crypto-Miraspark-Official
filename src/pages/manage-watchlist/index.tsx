"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowUp, ArrowDown } from "lucide-react"
import { FaBitcoin, FaEthereum, FaDog } from "react-icons/fa"
import { SiBinance, SiRipple, SiSolana, SiTether } from "react-icons/si"

const coinsData = [
  {
    name: "Bitcoin",
    icon: <FaBitcoin />,
    color: "bg-yellow-500",
  },
  {
    name: "Ethereum",
    icon: <FaEthereum />,
    color: "bg-purple-500",
  },
  {
    name: "XRP",
    icon: <SiRipple />,
    color: "bg-blue-500",
  },
  {
    name: "BNB",
    icon: <SiBinance />,
    color: "bg-yellow-400",
  },
  {
    name: "USDC",
    icon: <SiTether />,
    color: "bg-green-500",
  },
  {
    name: "Solana",
    icon: <SiSolana />,
    color: "bg-indigo-500",
  },
  {
    name: "Dogecoin",
    icon: <FaDog />,
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
        }
        
        .dark-gradient-bg {
          background: linear-gradient(135deg, #000000 0%, #0a0a0a 25%, #1a1a2e 75%, #16213e 100%);
        }
        
        .card-dark-gradient {
          background: linear-gradient(135deg, #000000 0%, #0f0f23 50%, #1a1a2e 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>

      <div className="animated-gradient-border">
        <div className="dark-gradient-bg w-full h-full min-h-[calc(90vh-30px)] p-4 rounded-3xl text-white overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold">Manage Coins</h1>
            <Button
              className="border border-cyan-500 bg-transparent hover:bg-cyan-500/10 text-white hover:text-white"
              variant="outline"
            >
              Back
            </Button>
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
                <Button
                  key={label}
                  onClick={() => setTab(label)}
                  className={`rounded-xl px-4 py-2 transition-all ${
                    tab === label
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                      : "bg-black/50 text-gray-300 hover:bg-gray-800/50 border border-gray-700 hover:text-white"
                  }`}
                >
                  {label}
                </Button>
              ))}
            </div>

            <Button
              onClick={() => setSortAsc(!sortAsc)}
              className="border border-cyan-500 bg-transparent hover:bg-cyan-500/10 text-white hover:text-white"
              variant="outline"
            >
              {sortAsc ? <ArrowDown /> : <ArrowUp />}
            </Button>
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

                    <div
                      className={`coin-icon text-5xl mb-4 ${coin.color} p-6 rounded-full shadow-lg transition-all duration-300`}
                    >
                      {coin.icon}
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
              <Button
                className="border border-cyan-500 bg-transparent hover:bg-cyan-500/10"
                variant="outline"
                onClick={discardChanges}
              >
                Discard
              </Button>
              <Button
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700"
                onClick={() => console.log("Update clicked")}
              >
                Update
              </Button>
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
