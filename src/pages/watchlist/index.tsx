// import React from "react";
// import { FaBitcoin, FaEthereum, FaDog } from "react-icons/fa";
// import { SiBinance, SiRipple, SiSolana, SiTether } from "react-icons/si";
// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { AnimatePresence, motion } from "framer-motion";
// const cryptoAlerts = [
//   "Bitcoin breaks support, caution advised for investors.Dogecoin pumps hard.",
//   "Ethereum price surges, bullish trend gaining momentum.XRP dips slightly, market shows mixed signals",
//   "XRP dips slightly, market shows mixed signals.",
//   "Solana climbs steadily, potential for strong breakout.XRP dips slightly, market shows mixed signals.",
//   "Dogecoin pumps hard, meme coin rally continues.Dogecoin pumps hard, meme coin rally continues",
// ];
// const cardData = [
//   {
//     image: "/img/card1.png",
//     title: "Another Unexpected Loss for Tesla Company",
//     description:
//       "Tesla's shares fell 30% this year, attributed in part to protests and vandalism targeting its dealerships.",
//   },
//   {
//     image: "/img/news1.png",
//     title: "Bitcoin Surges Amid Market Chaos",
//     description:
//       "Bitcoin has risen 15% in just one week as investors seek decentralized safety amid global inflation.",
//   },
//   {
//     image: "/img/card1.png",
//     title: "Ethereum 2.0 Launches Successfully",
//     description:
//       "The long-awaited Ethereum 2.0 upgrade is live, bringing proof-of-stake and scalability improvements.",
//   },
// ];
// const Watchlist = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsVisible(false);
//       setTimeout(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
//         setIsVisible(true);
//       }, 400);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const currentCard = cardData[currentIndex];
//   return (
//     <div className="flex h-full  md:h-[calc(90vh-30px)] rounded-3xl overflow-hidden">
//     <div className="flex-grow p-4 bor text-white mx-2 shadow-[0px_2.41px_2.42px_rgba(100,28,59,0.21)] border border-[#343442] rounded-3xl flex-shrink  my-2 overflow-y-auto overflow-clip overflow-x-hidden ">
//     <h4 className="mb-4">Trending News</h4>
//    <div className="grid gap-4  grid-cols-[repeat(auto-fit,minmax(300px,1fr))] ">
//       {cardData.slice(0, 2).map((card, index) => (
//         <div
//           key={index}
//           className="bg-[#ffffff13]  shadow-md overflow-hidden w-full p-4 min-h-[250px] rounded-2xl"
//         >
//           <img
//             src={card.image}
//             alt={card.title}
//             className="w-full h-36 object-cover rounded-md"
//           />
//           <h2 className="text-lg font-semibold text-white my-2">
//             {card.title}
//           </h2>
//           <p className="text-sm leading-relaxed text-white font-light font-inter">
//             {card.description}
//           </p>
//         </div>
//       ))}
//     </div>

//    <div className="flex w-full flex-grow my-3 rounded-2xl">
//   <div className="bg-[#ffffff13] rounded-lg shadow-md overflow-hidden w-full p-6 flex flex-col flex-1">
//     <img
//       src={cardData[2].image}
//       alt={cardData[2].title}
//       className="w-full h-48 object-cover rounded-md object-top"
//     />
//     <h2 className="text-lg font-semibold text-white my-2">
//       {cardData[2].title}
//     </h2>
//     <p className="text-sm leading-relaxed text-white font-light font-inter">
//       {cardData[2].description}
//     </p>
//   </div>
// </div>

//   </div>

//       <aside className="min-w-64 max-w-64 px-4 py-4  text-white shadow-[0px_2.41px_2.42px_rgba(100,28,59,0.21)] border border-[#343442] rounded-3xl hidden md:block">
//         <h2 className="text-xl font-semibold mb-6">Alearts</h2>
//         <ul className="space-y-3">
//           {cryptoAlerts.map((aleart, idx) => (
//             <li
//               key={idx}
//               className="flex justify-center items-center px-3 py-2 border border-[#343442] rounded-2xl transition-all"
//             >
//               <p className="text-sm text-gray-300 font-thin">{aleart}</p>
//             </li>
//           ))}
//         </ul>
//       </aside>
//     </div>
//   );
// };
"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router-dom"

const cryptoAlerts = [
  "Bitcoin breaks support, caution advised for investors.Dogecoin pumps hard.",
  "Ethereum price surges, bullish trend gaining momentum.XRP dips slightly, market shows mixed signals",
  "XRP dips slightly, market shows mixed signals.",
  "Solana climbs steadily, potential for strong breakout.XRP dips slightly, market shows mixed signals.",
  "Dogecoin pumps hard, meme coin rally continues.Dogecoin pumps hard, meme coin rally continues",
]

const cardData = [
  {
    image: "/img/card1.png",
    title: "Another Unexpected Loss for Tesla Company",
    description:
      "Tesla's shares fell 30% this year, attributed in part to protests and vandalism targeting its dealerships.",
    link: "/news/tesla-loss",
  },
  {
    image: "/img/news1.png",
    title: "Bitcoin Surges Amid Market Chaos",
    description: "Bitcoin has risen 15% in just one week as investors seek decentralized safety amid global inflation.",
    link: "/news/bitcoin-surge",
  },
  {
    image: "/img/card1.png",
    title: "Ethereum 2.0 Launches Successfully",
    description: "The long-awaited Ethereum 2.0 upgrade is live, bringing proof-of-stake and scalability improvements.",
    link: "/news/ethereum-2",
  },
]

const Watchlist = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [showAlerts, setShowAlerts] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length)
        setIsVisible(true)
      }, 400)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleCardClick = (link: string) => {
    navigate(link)
  }

  const currentCard = cardData[currentIndex]

  return (
    <div className="flex h-full min-h-[calc(90vh-30px)] rounded-3xl overflow-hidden flex-col md:flex-row p-2">
      {/* Main Content Area with Animated Gradient Border */}
      <div className="flex-grow mx-2 relative group">
        {/* Animated gradient border */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#00f0ff] via-[#8b00ff] to-[#ff00c8] animate-gradient-x z-0"></div>

        {/* Content with dark gradient background */}
        <div className="relative m-[2px] rounded-3xl bg-gradient-to-b from-[#000000] via-[#0a0a0a] via-[#1a1a2e] to-[#16213e] p-4 text-white shadow-[0px_2.41px_2.42px_rgba(100,28,59,0.21)] overflow-y-auto overflow-x-hidden md:overflow-hidden z-10">
          <h4 className="mb-4 text-xl font-semibold">Trending News</h4>

          {/* Mobile Alert Toggle Button */}
          <div className="mb-4 lg:hidden">
            <Button
              className="bg-gradient-to-r from-[#343442] to-[#4a4a5a] hover:from-[#4a4a5a] hover:to-[#343442] text-white px-4 py-2 rounded-xl w-full transition-all duration-300"
              onClick={() => setShowAlerts(!showAlerts)}
            >
              {showAlerts ? "Hide Alerts" : "Show Alerts"}
            </Button>
          </div>

          {/* Alerts for Mobile */}
          {showAlerts && (
            <div className="p-4 rounded-2xl lg:hidden mb-4 relative">
              {/* Alert container with gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00f0ff] via-[#8b00ff] to-[#ff00c8] animate-gradient-x opacity-50"></div>
              <div className="relative m-[1px] rounded-2xl bg-gradient-to-b from-[#000000] via-[#0a0a0a] to-[#1a1a2e] p-4">
                <h2 className="text-lg font-semibold mb-4">Alerts</h2>
                <ul className="space-y-3">
                  {cryptoAlerts.map((alert, idx) => (
                    <li
                      key={idx}
                      className="flex justify-center items-center px-3 py-2 border border-[#343442] rounded-2xl transition-all hover:border-[#00f0ff] hover:shadow-lg hover:shadow-[#00f0ff]/20"
                    >
                      <p className="text-sm text-gray-300 font-thin">{alert}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* News Cards Grid */}
          <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
            {cardData.slice(0, 2).map((card, index) => (
              <div
                key={index}
                className="relative group cursor-pointer hover-float card-shadow"
                onClick={() => handleCardClick(card.link)}
              >
                {/* Card gradient border */}
                <div className="p-[1px] absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00f0ff] via-[#8b00ff] to-[#ff00c8] animate-gradient-x opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Card content */}
                <div className="relative m-[2px] rounded-2xl bg-gradient-to-b from-[#000000] via-[#0a0a0a] to-[#16213e] p-4 min-h-[250px] transition-all duration-300">
                  {/* Image with gradient border */}
                  <div className="relative mb-3">
                    <div className="absolute inset-0 rounded-md bg-gradient-to-r from-[#00f0ff] via-[#8b00ff] to-[#ff00c8] animate-gradient-x"></div>
                    <div className="relative m-[1px] rounded-md overflow-hidden">
                      <img
                        src={card.image || "/placeholder.svg"}
                        alt={card.title}
                        className="w-full h-36 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  <h2 className="text-lg font-semibold text-white my-2 group-hover:text-[#00f0ff] transition-colors duration-300">
                    {card.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-gray-300 font-light font-inter mb-3">{card.description}</p>
                  <Link
                    className="text-sm text-[#00f0ff] hover:text-[#8b00ff] hover:underline transition-colors duration-300"
                    to={card.link}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Read Full News
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Third Card - Full Width */}
          <div className=" flex w-full flex-grow my-3 rounded-2xl">
            <div
              className="relative group cursor-pointer hover-float card-shadow w-full"
              onClick={() => handleCardClick(cardData[2].link)}
            >
              {/* Card gradient border */}
              <div className=" absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00f0ff] via-[#8b00ff] to-[#ff00c8] animate-gradient-x opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Card content */}
              <div className="relative m-[2px] rounded-2xl bg-gradient-to-b from-[#000000] via-[#0a0a0a] to-[#16213e] p-6 flex flex-col flex-1">
                {/* Image with gradient border */}
                <div className="relative mb-3">
                  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-[#00f0ff] via-[#8b00ff] to-[#ff00c8] animate-gradient-x"></div>
                  <div className="relative m-[1px] rounded-md overflow-hidden">
                    <img
                      src={cardData[2].image || "/placeholder.svg"}
                      alt={cardData[2].title}
                      className="w-full h-48 object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                <h2 className="text-lg font-semibold text-white my-2 group-hover:text-[#00f0ff] transition-colors duration-300">
                  {cardData[2].title}
                </h2>
                <p className="text-sm leading-relaxed text-gray-300 font-light font-inter">{cardData[2].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Alerts Sidebar with Animated Gradient Border */}
      <aside className="min-w-64 max-w-64 px-4 py-4 text-white hidden lg:block relative">
        {/* Sidebar gradient border */}
        <div className="absolute inset-0  animate-gradient-x z-0"></div>

        {/* Sidebar content */}
     {/* Sidebar content */}
<div className="relative m-[-13px] rounded-2xl p-4 h-full shadow-[0px_2.41px_2.42px_rgba(100,28,59,0.21)] z-10">
 {/* Outer gradient border */}
 <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-[#00f0ff] via-[#8b00ff] via-[#ff00c8] to-[#00f0ff] opacity-70">
   <div className="w-full h-full bg-gradient-to-b from-[#0a0a0a] via-[#1a1a2e] to-[#000000] rounded-[22px]"></div>
 </div>
 
 <div className="relative z-10 p-4">
  <h2 className="text-xl font-semibold mb-6 text-white">Alerts</h2>
  <ul className="space-y-3">
    {cryptoAlerts.map((alert, idx) => (
      <li
        key={idx}
        className="relative p-[1px] rounded-2xl bg-gradient-to-br from-[#00f0ff] via-[#8b00ff] to-[#ff00c8] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00f0ff]/30"
      >
        <div className="flex justify-center items-center px-3 py-2 rounded-[15px] bg-gradient-to-br from-[#000000] via-[#0a0a0a] to-[#101828]">
          <p className="text-sm text-gray-300 font-thin">{alert}</p>
        </div>
      </li>
    ))}
  </ul>
</div>




</div>
      </aside>
    </div>
  )
}

export default Watchlist
