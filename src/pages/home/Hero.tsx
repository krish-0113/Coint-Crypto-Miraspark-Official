"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
    image: "/img/news2.png",
    title: "Ethereum 2.0 Launches Successfully",
    description:
      "The long-awaited Ethereum 2.0 upgrade is live, bringing proof-of-stake and scalability improvements.",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [animationTrigger, setAnimationTrigger] = useState(false);

  useEffect(() => {
    // Initial animation trigger
    setTimeout(() => setAnimationTrigger(true), 500);
    
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
    <div
    className="relative h-screen flex items-center overflow-hidden px-4 md:px-16"
    style={{
      background: "linear-gradient(135deg, #000000, #000305, #000814, #000305, #000000)"
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/60 to-black/95 z-0"></div>
  
    {[...Array(200)].map((_, i) => {
  const randomX = Math.random() * 100;
  const randomSize = 2 + Math.random() * 3; // Reduced from 4-10 to 2-5
  const randomDelay = Math.random() * 10;
  const randomOpacity = 0.4 + Math.random() * 0.4;
  const glowColor = "rgba(0, 240, 255, 1.9)"; // Tailwind blue-100
  
  return (
    <motion.div
      key={i}
      className="absolute rounded-full z-0"
      initial={{
        x: `${randomX}vw`,
        y: 0,
        opacity: randomOpacity,
        scale: 0.8,
      }}
      animate={{
        y: "100vh",
        opacity: 0,
      }}
      transition={{
        duration: 10 + Math.random() * 10,
        repeat: Infinity,
        delay: randomDelay,
        ease: "linear",
      }}
      style={{
        top: 0,
        width: `${randomSize}px`,
        height: `${randomSize}px`,
        backgroundColor: glowColor,
        filter: `blur(0.5px)`, // Reduced blur
        opacity: randomOpacity,
      }}
    />
  );
})}

<div
  className="absolute top-0 left-1/2 w-[400px] h-[400px] -translate-x-1/2 rounded-full blur-3xl opacity-60 z-0"
  style={{
    background: "radial-gradient(circle, rgba(0,50,150,0.4) 0%, rgba(0,20,80,0.3) 40%, rgba(0,0,0,0) 70%)"
  }}
></div>

      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Left Content */}
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col justify-start items-start space-y-6 text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            ease: "easeOut" 
          }}
        >
          <motion.h1 
            className="text-white font-lexend text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Stay Ahead in
            <motion.span 
  className="bg-gradient-to-r from-blue-400 via-cyan-400 via-purple-500 via-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent font-bold ml-2"
  animate={{
    textShadow: [
      "0 0 5px rgba(30,144,255,0.5)",
      "0 0 20px rgba(139,0,255,1)", // Purple glow
      "0 0 5px rgba(30,144,255,0.5)"
    ]
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    repeatType: "reverse"
  }}
  style={{
    background: 'linear-gradient(90deg, #60a5fa, #22d3ee, #a855f7, #8b5cf6, #d946ef, #ec4899)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    filter: 'brightness(1.2) saturate(1.3)',
  }}
>
  Crypto
</motion.span>
          </motion.h1>
          
          <motion.h3 
            className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            with Ai powered insights
          </motion.h3>
          
          <motion.p 
            className="text-base md:text-lg lg:text-xl text-white leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            Get unbiased, personalized news on how global events impact your
            favorite cryptocurrencies.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
      <div
  style={{
    padding: "2px",
    borderRadius: "0.7rem",
    background: "linear-gradient(90deg, #00f0ff, #0099ff, #8b00ff, #ff00cc, #8b00ff, #0099ff, #00f0ff)",
    backgroundSize: "300% 100%",
    animation: "gradientFlow 4s ease-in-out infinite",
    display: "inline-block",
    transition: "all 0.3s ease-in-out",
    boxShadow: "0 0 10px rgba(0, 240, 255, 0.9), 0 0 18px rgba(139, 0, 255, 0.9)", // ⬅️ updated
    filter: "brightness(1.0) saturate(1.2)",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.boxShadow = "0 0 12px rgba(0, 240, 255, 0.6), 0 0 25px rgba(139, 0, 255, 0.5)";
    e.currentTarget.style.filter = "brightness(1.1) saturate(1.3)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.boxShadow = "0 0 8px rgba(0, 240, 255, 0.4), 0 0 15px rgba(139, 0, 255, 0.3)";
    e.currentTarget.style.filter = "brightness(1.0) saturate(1.2)";
  }}
  
>
  <style>
    {`
      @keyframes gradientFlow {
        0%, 100% {
          background-position: 0% 50%;
        }
        25% {
          background-position: 25% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        75% {
          background-position: 75% 50%;
        }
      }
    `}
  </style>
  <button
    className="glow-button"
    style={{
      background: "linear-gradient(90deg, #000000, #000814)",
      color: "white",
      fontWeight: "600",
      fontSize: "1rem",
      padding: "0.59rem 2rem",
      borderRadius: "0.5rem",
      border: "none",
      boxShadow: "0 0 2px #00f0ff",
      position: "relative",
      overflow: "hidden",
      transition: "all 0.3s ease-in-out",
      cursor: "pointer",
      width: "100%",
    }}
    onMouseDown={(e) => {
      e.currentTarget.style.boxShadow = "0 0 3px #00f0ff";
      e.currentTarget.style.transform = "scale(0.98)";
    }}
    onMouseUp={(e) => {
      e.currentTarget.style.boxShadow = "0 0 5px #00f0ff";
      e.currentTarget.style.transform = "scale(1)";
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = "linear-gradient(90deg, #00f0ff, #8b00ff)";
      e.currentTarget.style.boxShadow = "0 0 10px #8b00ff";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "linear-gradient(90deg, #000000, #000814)";
      e.currentTarget.style.boxShadow = "0 0 5px #00f0ff";
    }}
  >
    <div className="relative z-10">Get Started </div>
  </button>
</div>
          </motion.div>
        </motion.div>
 {/* Right Animated News Card */}
<motion.div
  className="w-full lg:w-2/5 flex justify-center lg:justify-end"
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  <motion.div
    className="rounded-xl overflow-hidden w-full max-w-sm min-h-[360px] relative cursor-pointer"
    animate={animationTrigger ? {
      y: [0, 10, 0],
    } : {}}
    transition={{
      y: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }
    }}
    whileHover={{
      y: -15,
      scale: 1.03,
      boxShadow: '0 20px 50px rgba(0, 240, 255, 0.5)',
      zIndex: 50,
    }}
    whileTap={{
      scale: 0.98,
      y: -12,
    }}
    style={{
      background: 'linear-gradient(135deg, #00f0ff, #8b00ff, #ff00c8, #00f0ff)',
      backgroundSize: '300% 300%',
      animation: 'gradientShift 8s ease infinite',
      padding: '3px',
      boxShadow: '0 0 35px rgba(0, 240, 255, 0.7)',
      borderRadius: '12px',
    }}
  >
    <div className="w-full h-full bg-[#060B14] rounded-xl overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCard.title}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 px-6 py-8"
        >
          <motion.img
            src={currentCard.image}
            alt={currentCard.title}
            className="w-full h-48 object-cover rounded-md"
            style={{
              border: "2px solid rgba(64, 169, 255, 0.8)",
              boxShadow: "0 0 20px rgba(64, 169, 255, 0.2)",
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 35px rgba(64, 169, 255, 0.1)",
              borderColor: "rgba(0, 240, 255, 1)"
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.h2
            className="text-lg font-semibold text-white my-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{
              color: "#00f0ff",
              textShadow: "0 0 15px rgba(0, 240, 255, 0.2)"
            }}
          >
            {currentCard.title}
          </motion.h2>
          <motion.p
            className="text-sm leading-relaxed text-white font-light font-inter"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{
              color: "#f0f0f0"
            }}
          >
            {currentCard.description}
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </div>
  </motion.div>
</motion.div>
      </div>
    </div>
  );
};

export default Hero;