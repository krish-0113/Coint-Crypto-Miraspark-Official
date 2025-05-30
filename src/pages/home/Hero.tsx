"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const cardData = [
  {
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
    title: "Another Unexpected Loss for Tesla Company",
    description:
      "Tesla's shares fell 30% this year, attributed in part to protests and vandalism targeting its dealerships.",
  },
  {
    image: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=400&h=300&fit=crop",
    title: "Bitcoin Surges Amid Market Chaos",
    description:
      "Bitcoin has risen 15% in just one week as investors seek decentralized safety amid global inflation.",
  },
  {
    image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=400&h=300&fit=crop",
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
      className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 md:px-16 pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 md:pb-16"
      style={{
        background: "linear-gradient(135deg, #000000, #000305, #000814, #000305, #000000)"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/60 to-black/95 z-0"></div>

      <div
        className="absolute top-0 left-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] -translate-x-1/2 rounded-full blur-3xl opacity-60 z-0"
        style={{
          background: "radial-gradient(circle, rgba(0,50,150,0.4) 0%, rgba(0,20,80,0.3) 40%, rgba(0,0,0,0) 70%)"
        }}
      ></div>

      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 sm:gap-12">
        {/* Left Content */}
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col justify-start items-start space-y-4 sm:space-y-6 text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            ease: "easeOut" 
          }}
        >
          <motion.h1 
            className="text-white font-lexend text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Stay Ahead in
            <motion.span 
              className="bg-gradient-to-r from-blue-400 via-cyan-400 via-purple-500 via-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent font-bold ml-2 block sm:inline"
              animate={{
                textShadow: [
                  "0 0 5px rgba(30,144,255,0.5)",
                  "0 0 20px rgba(139,0,255,1)",
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
            className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            with Ai powered insights
          </motion.h3>
          
          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed max-w-2xl"
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
            className="w-full sm:w-auto"
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
                boxShadow: "0 0 10px rgba(0, 240, 255, 0.9), 0 0 18px rgba(139, 0, 255, 0.9)",
                filter: "brightness(1.0) saturate(1.2)",
                width: "100%",
                maxWidth: "200px"
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
                  @keyframes gradientShift {
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
                `}
              </style>
              <button
                className="glow-button w-full"
                style={{
                  background: "linear-gradient(90deg, #000000, #000814)",
                  color: "white",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  padding: "0.6rem 1.5rem",
                  borderRadius: "0.5rem",
                  border: "none",
                  boxShadow: "0 0 2px #00f0ff",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease-in-out",
                  cursor: "pointer",
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
                <div className="relative z-10">Get Started</div>
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Animated News Card */}
        <motion.div
          className="w-full lg:w-2/5 flex justify-center lg:justify-end mt-8 lg:mt-0"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="rounded-xl overflow-hidden w-full max-w-sm min-h-[320px] sm:min-h-[360px] relative cursor-pointer"
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
                  className="absolute inset-0 p-4 sm:px-6 sm:py-8"
                >
                  <motion.img
                    src={currentCard.image}
                    alt={currentCard.title}
                    className="w-full h-36 sm:h-48 object-cover rounded-md"
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
                    className="text-base sm:text-lg font-semibold text-white my-2 leading-tight"
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
                    className="text-xs sm:text-sm leading-relaxed text-white font-light font-inter"
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