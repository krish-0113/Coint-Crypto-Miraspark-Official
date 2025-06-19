"use client"

import { useEffect, useState } from "react"
import { Bell, ArrowLeft, Bitcoin, Coins, DollarSign, Triangle, Circle, Hexagon, Star, X } from "lucide-react"

const cryptoAlerts = [
  "Bitcoin breaks support, caution advised for investors.",
  "Ethereum price surges, bullish trend gaining momentum.",
  "XRP dips slightly, market shows mixed signals.",
  "Solana climbs steadily, potential for strong breakout.",
  "Dogecoin pumps hard, meme coin rally continues.",
  "Cardano announces major smart contract upgrade.",
  "Polygon integrates with major DeFi protocol.",
  "Chainlink oracle network expands globally.",
  "BNB token burns create deflationary pressure.",
  "Avalanche launches new subnet architecture.",
]

const cardData = [
  {
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
    title: "Another Unexpected Loss for Tesla Company",
    description:
      "Tesla's shares fell 30% this year, attributed in part to protests and vandalism targeting its dealerships.",
    link: "/news",
  },
  {
    image: "https://images.unsplash.com/photo-1518544801976-3e159e50e5bb?w=400&h=300&fit=crop",
    title: "Bitcoin Surges Amid Market Chaos",
    description: "Bitcoin has risen 15% in just one week as investors seek decentralized safety amid global inflation.",
    link: "/news",
  },
  {
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
    title: "Ethereum 2.0 Launches Successfully",
    description: "The long-awaited Ethereum 2.0 upgrade is live, bringing proof-of-stake and scalability improvements.",
    link: "/news",
  },
  {
    image: "https://images.unsplash.com/photo-1592659762303-90081d34b277?w=400&h=300&fit=crop",
    title: "Apple Announces Revolutionary AR Glasses",
    description: "Apple's new AR glasses promise to transform how we interact with digital content in the real world.",
    link: "/news",
  },
  {
    image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b696?w=400&h=300&fit=crop",
    title: "Microsoft Acquires AI Startup for $5B",
    description: "Microsoft's latest acquisition strengthens its position in the competitive AI market landscape.",
    link: "/news",
  },
  {
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    title: "Google's Quantum Computer Breakthrough",
    description: "Google claims quantum supremacy with new processor that solves complex problems in seconds.",
    link: "/news",
  },
  {
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=300&fit=crop",
    title: "Netflix Enters Gaming Market Seriously",
    description: "Streaming giant Netflix announces major gaming initiatives with AAA studio partnerships.",
    link: "/news",
  },
  {
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop",
    title: "SpaceX Successfully Lands on Mars",
    description: "Historic achievement as SpaceX becomes first private company to successfully land on Mars.",
    link: "/news",
  },
  {
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
    title: "Amazon's Drone Delivery Goes Global",
    description: "Amazon expands its drone delivery service to 50 major cities worldwide this quarter.",
    link: "/news",
  },
  {
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400&h=300&fit=crop",
    title: "Meta Unveils Next-Gen VR Platform",
    description: "Meta's new VR platform promises photorealistic environments and haptic feedback integration.",
    link: "/news",
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

const MainDashboard = ({ onShowWatchlist }) => {
  const [showAlerts, setShowAlerts] = useState(false)
  const [activeNotification, setActiveNotification] = useState(null)
  const [alertIndex, setAlertIndex] = useState(0)

  // Dynamic notification system
  useEffect(() => {
    const notificationInterval = setInterval(() => {
      const currentAlert = cryptoAlerts[alertIndex]
      setActiveNotification(currentAlert)

      // Hide notification after 4 seconds
      setTimeout(() => {
        setActiveNotification(null)
      }, 4000)

      // Move to next alert
      setAlertIndex((prev) => (prev + 1) % cryptoAlerts.length)
    }, 6000) // Show new notification every 6 seconds

    return () => clearInterval(notificationInterval)
  }, [alertIndex])

  return (
    <div className="flex h-full min-h-[calc(100vh-60px)] rounded-3xl overflow-hidden flex-col md:flex-row p-4 gap-6">
      {/* Dynamic Notification Overlay */}
      {activeNotification && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in-right">
          <div className="relative p-[2px] rounded-xl animate-gradient-x bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 max-w-sm">
            <div className="bg-gradient-to-b from-black via-slate-900 to-slate-800 p-4 rounded-xl">
              <div className="flex items-start gap-3">
                <Bell className="w-5 h-5 text-cyan-400 mt-0.5 animate-pulse" />
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Alert</h4>
                  <p className="text-xs text-gray-300">{activeNotification}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area with Animated Gradient Border */}
      <div className="flex-grow relative group">
        {/* Animated gradient border */}
        <div className="absolute inset-0 rounded-3xl animate-gradient-x bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 z-0"></div>

        {/* Content with dark gradient background */}
        <div className="relative m-[2px] rounded-3xl bg-gradient-to-b from-black via-gray-900 to-blue-950 p-6 text-white shadow-2xl overflow-y-auto overflow-x-hidden z-10 max-h-[calc(100vh-80px)]">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xl font-semibold">Dashboard</h4>
            <div className="md:hidden">
              <Bell className="w-6 h-6 text-cyan-400" />
            </div>
          </div>

          {/* Mobile My Watchlist Button - Only visible on mobile */}
          <div className="mb-4 md:hidden">
          <div className="mt-6 p-[2px] rounded-xl bg-gradient-to-r from-[#00f0ff] via-[#8b00ff] to-[#ff00c8] hover:scale-105 transition-all duration-300 shadow-md shadow-[#00f0ff]/20">
  <button
    className="w-full py-2 rounded-xl text-white font-medium bg-gradient-to-br from-[#000000] via-[#0a0a0a] to-[#101828] hover:bg-[#111] hover:text-[#00f0ff] transition-all duration-300 flex items-center justify-center gap-2"
    onClick={onShowWatchlist}
  >
    My Watchlist
  </button>
</div>

          </div>

          {/* Mobile Alert Toggle Button */}
          <div className="mb-4 md:hidden">
            <div className="p-[2px] rounded-xl bg-gradient-to-r from-[#00f0ff] via-[#8b00ff] to-[#ff00c8] hover:scale-105 transition-all duration-300 shadow-md shadow-[#00f0ff]/20">
              <button
                className="w-full py-2 rounded-xl text-white font-medium bg-gradient-to-br from-[#000000] via-[#0a0a0a] to-[#101828] hover:bg-[#111] hover:text-[#00f0ff] transition-all duration-300 flex items-center justify-center gap-2"
                onClick={() => setShowAlerts(!showAlerts)}
              >
                <Bell className="w-4 h-4" />
                {showAlerts ? "Hide Alerts" : "Show Alerts"}
              </button>
            </div>
          </div>

          {/* Alerts for Mobile */}
          {showAlerts && (
            <div className="p-4 rounded-2xl md:hidden mb-4 bg-gradient-to-b from-black via-slate-900 to-slate-800">
              <div className="flex items-center gap-2 mb-4">
                <Bell className="w-5 h-5 text-cyan-400" />
                <h2 className="text-lg font-semibold">Alerts</h2>
              </div>
              <ul className="space-y-3">
                {cryptoAlerts.slice(0, 5).map((alert, idx) => (
                  <li
                    key={idx}
                    className="relative group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                  >
                    {/* Mobile alert content with purple/pink border */}
                    <div className="relative p-[1px] rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
                      <div className="relative px-4 py-3 rounded-xl bg-gradient-to-br from-blue-900 via-slate-900 to-black group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300 w-full">
                        <p className="text-sm text-gray-300 font-light leading-relaxed group-hover:text-white transition-colors duration-300">
                          {alert}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* News Cards Grid - Now Scrollable with More Content */}
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="relative group cursor-pointer transition-transform duration-300 hover:-translate-y-1"
                onClick={() => window.open("/news", "_blank")}
              >
                {/* Card gradient border */}
                <div className="p-[1px] absolute inset-0 rounded-2xl animate-gradient-x bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Card content */}
                <div className="relative m-[2px] rounded-2xl bg-gradient-to-b from-black via-slate-900 to-slate-800 p-3 min-h-[240px] transition-all duration-300">
                  {/* Image with gradient border */}
                  <div className="relative mb-3">
                    <div className="absolute inset-0 rounded-md animate-gradient-x bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"></div>
                    <div className="relative m-[1px] rounded-md overflow-hidden">
                      <img
                        src={card.image || "/placeholder.svg"}
                        alt={card.title}
                        className="w-full h-28 object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null; // prevent infinite loop in case fallback also fails
                          target.src =
                            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiMzNzQxNTEiLz48dGV4dCB4PSIyMDAiIHk9IjE1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2ZmZiIgZm9udC1zaXplPSIxNiI+TmV3cyBJbWFnZTwvdGV4dD48L3N2Zz4=";
                        }}
                        
                      />
                    </div>
                  </div>

                  <h2 className="text-base font-semibold text-white my-2 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                    {card.title}
                  </h2>
                  <p className="text-xs leading-relaxed text-gray-300 font-light mb-3 line-clamp-2">
                    {card.description}
                  </p>
                  <span className="text-xs text-cyan-400 hover:text-purple-400 hover:underline transition-colors duration-300 inline-flex items-center gap-1 cursor-pointer">
                    Read Full News →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Alerts Sidebar with Animated Gradient Border */}
      <aside className="min-w-64 max-w-64 px-4 py-4 text-white hidden lg:block relative">
        {/* Sidebar content */}
        <div className="relative m-[-13px] rounded-2xl p-4 h-full shadow-2xl z-10">
          {/* Outer gradient border */}
          <div className="absolute inset-0 rounded-2xl p-[2px] animate-gradient-x bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-70">
            <div className="w-full h-full bg-gradient-to-b from-black via-gray-900 to-blue-950 rounded-[22px]"></div>
          </div>

          <div className="relative z-10 p-4">
            <div className="flex items-center gap-2 mb-6">
              <Bell className="w-6 h-6 text-cyan-400 animate-pulse" />
              <h2 className="text-xl font-semibold text-white">Alerts</h2>
            </div>
            <div
              className="max-h-[calc(100vh-200px)] overflow-y-auto overflow-x-hidden pr-2 custom-scrollbar"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <ul className="space-y-3">
                {cryptoAlerts.map((alert, idx) => (
                  <li
                    key={idx}
                    className="relative group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                  >
                    {/* Alert content with blue gradient background */}
                    <div className="relative p-[1px] rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
                      <div className="relative px-4 py-3 rounded-xl bg-gradient-to-br from-blue-900 via-slate-900 to-black group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300 w-full">
                        <p className="text-sm text-gray-300 font-light leading-relaxed group-hover:text-white transition-colors duration-300">
                          {alert}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}

const WatchlistView = ({ onBack }) => {
  const [watchlist, setWatchlist] = useState(initialWatchlist)
  const [selectedItem, setSelectedItem] = useState(null)

  const handleSelect = (item) => {
    setSelectedItem(item)
    // Navigate to coins page functionality can be added here
    console.log("Selected:", item.name)
  }

  const handleRemove = (itemId, event) => {
    // Prevent the click from bubbling up to the parent
    event.stopPropagation()

    // Remove item from watchlist
    setWatchlist((prevWatchlist) => prevWatchlist.filter((item) => item.id !== itemId))
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Mobile-optimized container */}
      <div className="max-w-md mx-auto bg-black min-h-screen">
        {/* Header with gradient border - matching the image */}
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
                {/* 1px Gradient Border Container */}
                <div className="p-[1px] rounded-2xl bg-gradient-to-br from-[#00f0ff] via-[#8b00ff] to-[#ff00c8] hover:shadow-lg hover:shadow-[#00f0ff]/30 transition-all duration-300">
                  {/* Inner Card */}
                  <div className="bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] rounded-[15px] px-4 py-4 flex justify-between items-center relative">
                    {/* Remove button - positioned absolutely */}
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

const Watchlist = () => {
  const [showWatchlistView, setShowWatchlistView] = useState(false)

  return (
    <>
      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes gradientX {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.5s ease-out;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradientX 3s ease infinite;
        }
        
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .custom-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      {showWatchlistView ? (
        <WatchlistView onBack={() => setShowWatchlistView(false)} />
      ) : (
        <MainDashboard onShowWatchlist={() => setShowWatchlistView(true)} />
      )}
    </>
  )
}

export default Watchlist
