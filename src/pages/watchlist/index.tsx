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

// export default Watchlist;
import React, { useEffect, useState } from "react";
import { FaBitcoin, FaEthereum, FaDog } from "react-icons/fa";
import { SiBinance, SiRipple, SiSolana, SiTether } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
const cryptoAlerts = [
  "Bitcoin breaks support, caution advised for investors.Dogecoin pumps hard.",
  "Ethereum price surges, bullish trend gaining momentum.XRP dips slightly, market shows mixed signals",
  "XRP dips slightly, market shows mixed signals.",
  "Solana climbs steadily, potential for strong breakout.XRP dips slightly, market shows mixed signals.",
  "Dogecoin pumps hard, meme coin rally continues.Dogecoin pumps hard, meme coin rally continues",
];

const cardData = [
  {
    image: "/img/card1.png",
    title: "Another Unexpected Loss for Tesla Company",
    description:
      "Tesla's shares fell 30% this year, attributed in part to protests and vandalism targeting its dealerships.",
  },
  {
    image: "/img/news1.png",
    title: "Bitcoin Surges Amid Market Chaos",
    description:
      "Bitcoin has risen 15% in just one week as investors seek decentralized safety amid global inflation.",
  },
  {
    image: "/img/card1.png",
    title: "Ethereum 2.0 Launches Successfully",
    description:
      "The long-awaited Ethereum 2.0 upgrade is live, bringing proof-of-stake and scalability improvements.",
  },
];

const Watchlist = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [showAlerts, setShowAlerts] = useState(false); // 🔁 Toggle for mobile alerts

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
        setIsVisible(true);
      }, 400);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentCard = cardData[currentIndex];

  return (
    <div className="flex h-full min-h-[calc(90vh-30px)] rounded-3xl overflow-hidden flex-col md:flex-row">
      <div className="flex-grow p-4 text-white mx-2 shadow-[0px_2.41px_2.42px_rgba(100,28,59,0.21)] border border-[#343442] rounded-3xl   overflow-y-auto overflow-x-hidden md:overflow-hidden">
        <h4 className="mb-4">Trending News</h4>

        {/* 🔁 Mobile Alert Toggle Button */}
        <div className="mb-4 lg:hidden">
          <Button
            className="bg-[#343442] text-white px-4 py-2 rounded-xl w-full"
            onClick={() => setShowAlerts(!showAlerts)}
          >
            {showAlerts ? "Hide Alerts" : "Show Alerts"}
          </Button>
        </div>

        {/* 🔁 Alerts for Mobile */}
        {showAlerts && (
          <div className=" p-4 rounded-2xl  lg:hidden mb-4">
            <h2 className="text-lg font-semibold mb-4">Alerts</h2>
            <ul className="space-y-3">
              {cryptoAlerts.map((aleart, idx) => (
                <li
                  key={idx}
                  className="flex justify-center items-center px-3 py-2 border border-[#343442] rounded-2xl transition-all"
                >
                  <p className="text-sm text-gray-300 font-thin">{aleart}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Cards */}
        <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          {cardData.slice(0, 2).map((card, index) => (
            <div
              key={index}
              className="bg-[#ffffff13] shadow-md overflow-hidden w-full p-4 min-h-[250px] rounded-2xl"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-36 object-cover rounded-md"
              />
              <h2 className="text-lg font-semibold text-white my-2">
                {card.title}
              </h2>
              <p className="text-sm leading-relaxed text-white font-light font-inter">
                {card.description}
              </p>
              <Link className="text-sm text-primary hover:underline " to='/news'>Read Full News </Link>
            </div>
          ))}
        </div>

        {/* Third Card */}
        <div className="flex w-full flex-grow my-3 rounded-2xl">
          <div className="bg-[#ffffff13] rounded-lg shadow-md overflow-hidden w-full p-6 flex flex-col flex-1">
            <img
              src={cardData[2].image}
              alt={cardData[2].title}
              className="w-full h-48 object-cover rounded-md object-top"
            />
            <h2 className="text-lg font-semibold text-white my-2">
              {cardData[2].title}
            </h2>
            <p className="text-sm leading-relaxed text-white font-light font-inter">
              {cardData[2].description}
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Alerts */}
      <aside className="min-w-64 max-w-64 px-4 py-4 text-white shadow-[0px_2.41px_2.42px_rgba(100,28,59,0.21)] border border-[#343442] rounded-3xl hidden lg:block">
        <h2 className="text-xl font-semibold mb-6">Alerts</h2>
        <ul className="space-y-3">
          {cryptoAlerts.map((aleart, idx) => (
            <li
              key={idx}
              className="flex justify-center items-center px-3 py-2 border border-[#343442] rounded-2xl transition-all"
            >
              <p className="text-sm text-gray-300 font-thin">{aleart}</p>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Watchlist;
