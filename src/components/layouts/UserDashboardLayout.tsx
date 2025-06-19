"use client"

import type React from "react"
import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { FaBitcoin, FaEthereum, FaDog } from "react-icons/fa"
import { SiBinance, SiRipple, SiSolana, SiTether } from "react-icons/si"
import { Button } from "@/components/ui/button"
import { Outlet } from "react-router-dom"

const watchlist = [
  {
    name: "Bitcoin",
    icon: <FaBitcoin />,
    price: "$78,750.60",
    change: "-1.2%",
    color: "bg-yellow-500",
  },
  {
    name: "Ethereum",
    icon: <FaEthereum />,
    price: "$1,494.80",
    change: "4.1%",
    color: "bg-purple-500",
  },
  {
    name: "XRP",
    icon: <SiRipple />,
    price: "$1.94",
    change: "-1.2%",
    color: "bg-blue-500",
  },
  {
    name: "BNB",
    icon: <SiBinance />,
    price: "$571.92",
    change: "4.1%",
    color: "bg-yellow-400",
  },
  {
    name: "USDC",
    icon: <SiTether />,
    price: "$1,494.80",
    change: "-1.2%",
    color: "bg-green-500",
  },
  {
    name: "Solana",
    icon: <SiSolana />,
    price: "$109.36",
    change: "4.1%",
    color: "bg-indigo-500",
  },
  {
    name: "Dogecoin",
    icon: <FaDog />,
    price: "$0.1512",
    change: "4.1%",
    color: "bg-orange-400",
  },
]

interface WatchlistItem {
  name: string
  icon: React.ReactNode
  price: string
  change: string
  color: string
}

export default function UserDashboardLayout() {
  const [selectedItem, setSelectedItem] = useState<WatchlistItem | null>(null)
  const navigate = useNavigate()
  const location = useLocation()

  const handleSelect = (item: WatchlistItem) => {
    setSelectedItem(item)
    navigate("/coins")
  }

  // Check if current route is /coin or /watchlist to show Manage button
  const shouldShowManageButton = location.pathname === "/coins" || location.pathname === "/watchlist"

  return (
    <div className="relative min-h-screen">
      <img
        src="/img/green.svg"
        alt="Green Light"
        className="absolute top-0 left-0 transform -translate-x-1/2 pointer-events-none opacity-50 z-0"
      />
      <div className="text-white mt-24 max-w-7xl mx-auto relative h-full flex flex-auto gap-2 w-screen">
        {/* Sidebar for desktop - always visible */}
        <aside className="mt-2 animated-gradient-border w-64 h-fit ml-4 hidden md:block">
          <div className="sidebar-content">
            <h2 className="text-xl font-semibold mb-6">My Watchlist</h2>
            <ul className="space-y-3">
              {watchlist.map((coin, idx) => (
                <li
                  key={idx}
                  onClick={() => handleSelect(coin)}
                  className="cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="p-[1px] rounded-2xl bg-gradient-to-br from-[#00f0ff] via-[#8b00ff] to-[#ff00c8] hover:shadow-md hover:shadow-[#00f0ff]/30 transition-all duration-300">
                    <div className="bg-[#0a0a0a] rounded-[15px] px-3 py-2 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className={`text-lg ${coin.color} rounded-full p-2`}>{coin.icon}</span>
                        <span className="text-white">{coin.name}</span>
                      </div>
                      <div className="text-sm text-right">
                        <p className="text-gray-300">{coin.price}</p>
                        <p className={coin.change.includes("-") ? "text-red-500" : "text-green-400"}>{coin.change}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Conditionally show Manage button only on /coin or /watchlist routes - DESKTOP ONLY */}
            {shouldShowManageButton && (
              <div className="mt-6 p-[2px] rounded-xl bg-gradient-to-r from-[#00f0ff] via-[#8b00ff] to-[#ff00c8] hover:scale-105 transition-all duration-300 shadow-md shadow-[#00f0ff]/20">
                <Button
                  onClick={() => navigate("/manage")}
                  className="w-full py-2 rounded-xl text-white font-medium bg-gradient-to-br from-[#000000] via-[#0a0a0a] to-[#101828] hover:bg-[#111] hover:text-[#00f0ff] transition-all duration-300"
                >
                  Manage
                </Button>
              </div>
            )}
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto h-full w-full">
          <Outlet />
        </main>
      </div>

      <style>{`
        .animated-gradient-border {
          position: relative;
          border-radius: 20px;
          padding: 2px;
          background: linear-gradient(90deg, #00f0ff, #8b00ff, #ff00c8, #00f0ff);
          background-size: 300% 100%;
          animation: gradient-shift 8s linear infinite;
        }

        .sidebar-content {
          background: linear-gradient(135deg, #000000, #0a0a0a, #1a1a2e, #16213e);
          border-radius: 18px;
          width: 100%;
          padding: 1rem;
        }

        .watchlist-item {
          position: relative;
          border-radius: 16px;
          padding: 2px;
          background: linear-gradient(90deg, #00f0ff, #8b00ff, #ff00c8, #00f0ff);
          background-size: 300% 100%;
          animation: gradient-shift 8s linear infinite;
          opacity: 0.7;
          transform: scale(1);
        }

        .watchlist-item:hover {
          opacity: 1;
          transform: scale(1.02);
          box-shadow: 0 8px 32px rgba(0, 240, 255, 0.3);
        }

        .watchlist-item.selected {
          opacity: 1;
          transform: scale(1.02);
          box-shadow: 0 8px 32px rgba(139, 0, 255, 0.4);
        }

        .watchlist-item-content {
          background: linear-gradient(135deg, #000000, #0a0a0a, #1a1a2e, #16213e);
          border-radius: 14px;
          width: 100%;
          height: 100%;
          padding: 0.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .button-gradient-border {
          position: relative;
          border-radius: 12px;
          padding: 2px;
          background: linear-gradient(90deg, #00f0ff, #8b00ff, #ff00c8, #00f0ff);
          background-size: 300% 100%;
          animation: gradient-shift 8s linear infinite;
          transition: all 0.3s ease;
        }

        .button-gradient-border:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 32px rgba(0, 240, 255, 0.3);
        }

        .button-gradient-border button {
          background: linear-gradient(135deg, #000000, #0a0a0a, #1a1a2e, #16213e);
          border-radius: 10px;
          width: 100%;
          height: 100%;
          border: none;
        }

        @keyframes gradient-shift {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 300% 0%;
          }
        }
      `}</style>
    </div>
  )
}
