"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="relative h-[40vh] md:h-[350px] flex items-center justify-center px-4 md:px-8 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url('/img/main.jpg')`,
      }}
    >
      {/* Blue Light Effect */}
      <img
        src="/img/blue.png"
        alt="Green Light"
        className="absolute top-0 left-1/2 h-full w-full transform -translate-x-1/2 pointer-events-none opacity-80 z-10"
      />

      {/* Enhanced Gradient Overlay - Darker with more blue */}
      <div 
        className="absolute inset-0 z-5"
        style={{
          background: `
            linear-gradient(135deg, 
              rgba(0,0,0,0.95) 0%, 
              rgba(0,5,15,0.92) 15%,
              rgba(0,10,25,0.90) 30%, 
              rgba(5,15,35,0.88) 45%,
              rgba(0,8,30,0.90) 60%,
              rgba(0,5,20,0.92) 75%,
              rgba(0,0,0,0.95) 100%
            ),
            radial-gradient(circle at 25% 30%, 
              rgba(0,20,50,0.3) 0%, 
              rgba(0,10,30,0.2) 35%, 
              rgba(0,5,15,0.15) 60%,
              transparent 80%
            ),
            radial-gradient(circle at 75% 70%, 
              rgba(0,15,40,0.25) 0%, 
              rgba(0,8,25,0.18) 40%, 
              rgba(0,3,12,0.12) 65%,
              transparent 85%
            ),
            radial-gradient(ellipse at center, 
              rgba(0,0,0,0.4) 0%, 
              rgba(0,8,20,0.6) 50%, 
              rgba(0,0,0,0.8) 100%
            )
          `
        }}
      />

      {/* Additional Dark Gradient Overlay - Intensified */}
      <div 
        className="absolute inset-0 z-8"
        style={{
          background: `
            linear-gradient(45deg, 
              rgba(0,0,0,0.85) 0%, 
              rgba(0,5,18,0.8) 20%,
              rgba(0,12,28,0.75) 40%,
              rgba(0,8,22,0.8) 60%,
              rgba(0,3,15,0.85) 80%,
              rgba(0,0,0,0.9) 100%
            ),
            linear-gradient(180deg,
              rgba(0,0,0,0.3) 0%,
              rgba(0,8,20,0.5) 50%,
              rgba(0,0,0,0.7) 100%
            )
          `
        }}
      />

      {/* Animated Particles */}
      <div className="absolute inset-0 z-9">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              scale: 0 
            }}
            animate={{ 
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 max-w-7xl w-full flex flex-col md:flex-row items-start justify-center text-white gap-6 md:gap-12"
      >
        {/* Left Text Block */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-left pl-0 md:pl-4"
        >
          <h2 
            className="text-2xl md:text-5xl font-bold leading-snug bg-clip-text text-transparent"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #00f0ff 50%, #8b00ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Crypto moves fast.<br />
            <span 
              className="bg-clip-text text-transparent"
              style={{
                background: "linear-gradient(135deg, #00f0ff 0%, #ff00c8 50%, #8b00ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              We move faster
            </span>
          </h2>
        </motion.div>

        {/* Right Text Block */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="w-full md:w-1/2"
        >
          <h3 
            className="text-xl md:text-3xl font-semibold mb-2 bg-clip-text text-transparent"
            style={{
              background: "linear-gradient(90deg, #00f0ff 0%, #8b00ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Join Us
          </h3>
          <p className="text-sm md:text-lg text-gray-200 leading-relaxed font-light mb-4">
            We're more than a news app — we're a{" "}
            <span 
              className="font-semibold bg-clip-text text-transparent"
              style={{
                background: "linear-gradient(90deg, #00f0ff, #8b00ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              movement
            </span>
            .
            <br />
            Join thousands of traders and investors around the world who use
            <span className="text-cyan-400 font-medium"> CryptoDigest</span> to stay one step ahead.
          </p>

        {/* Subtitle with Subtle Animation */}
<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="max-w-2xl text-lg text-center md:text-left text-gray-300 leading-relaxed"
>
  We move fast — and we've got your back every step of the way
</motion.p>

{/* Decorative Elements */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.6 }}
  className="flex items-center gap-2 mt-6 justify-center md:justify-start mb-1"
>
  <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#00f0ff]"></div>
  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00f0ff] to-[#8b00ff] animate-pulse"></div>
  <div className="w-8 h-[1px] bg-gradient-to-r from-[#8b00ff] to-transparent"></div>
</motion.div>


          {/* Enhanced Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-2"
          >
            {/* <button
              className="glow-button relative"
              style={{
                background: "linear-gradient(90deg, #000000, #000814)",
                color: "white",
                fontWeight: "600",
                fontSize: "1rem",
                padding: "0.75rem 2.5rem",
                borderRadius: "0.5rem",
                border: "1px solid rgba(0,240,255,0.3)",
                boxShadow: "0 0 5px rgba(0,240,255,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease-in-out",
                cursor: "pointer",
                width: "auto",
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.boxShadow = "0 0 8px rgba(0,240,255,0.7), inset 0 1px 0 rgba(255,255,255,0.1)";
                e.currentTarget.style.transform = "scale(0.98)";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.boxShadow = "0 0 15px rgba(139,0,255,0.8), inset 0 1px 0 rgba(255,255,255,0.1)";
                e.currentTarget.style.transform = "scale(1)";
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(90deg, #00f0ff, #8b00ff)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(139,0,255,0.9), inset 0 1px 0 rgba(255,255,255,0.2)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "linear-gradient(90deg, #000000, #000814)";
                e.currentTarget.style.boxShadow = "0 0 5px rgba(0,240,255,0.5), inset 0 1px 0 rgba(255,255,255,0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div className="relative z-10">Join with us</div> */}
              {/* Button shine effect */}
              {/* <div 
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
                  transform: "translateX(-100%)",
                  animation: "shine 2s infinite"
                }}
              />
            </button> */}
          </motion.div>
          
        </motion.div>
      </motion.div>
      
      {/* Bottom Gradient Fade with Blue Tint */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 via-blue-950/30 to-transparent z-25" />

      <style >{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
      
    </div>
  );
};

export default Hero;