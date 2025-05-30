"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div
      className="relative w-full flex items-center justify-center px-4 md:px-8 py-24 overflow-hidden h-[40vh] md:h-[400px]"
      style={{
        background: "linear-gradient(135deg, #000000, #000305, #000814, #000305, #000000)"
      }}
    >
      {/* Base gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/60 to-black/95 z-0"></div>
      
      {/* Primary radial gradient */}
      <div 
        className="absolute top-0 left-1/2 w-[400px] h-[400px] -translate-x-1/2 rounded-full blur-3xl opacity-60 z-0"
        style={{
          background: "radial-gradient(circle, rgba(0,50,150,0.4) 0%, rgba(0,20,80,0.3) 40%, rgba(0,0,0,0) 70%)"
        }}
      />

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 z-0">        
        {/* Secondary gradient overlay */}
        <div 
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(20,0,80,0.4) 0%, rgba(40,0,100,0.2) 40%, rgba(0,0,0,0) 80%)"
          }}
        />
        
        {/* Tertiary accent */}
        <div 
          className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-25"
          style={{
            background: "radial-gradient(circle, rgba(0,40,160,0.3) 0%, rgba(0,20,80,0.15) 50%, rgba(0,0,0,0) 100%)"
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-3xl text-center text-white p-4 md:p-8"
      >
         <h2 
          className="text-3xl md:text-5xl font-bold leading-tight mb-6 bg-clip-text text-transparent"
          style={{
            background: "linear-gradient(90deg, #ff00c8, #8b00ff, #ff00c8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Our Mission
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed font-light">
          To empower individuals around the world with personalized crypto news
          intelligence that is fast, transparent, and actionable — regardless of
          their background or experience level. We believe crypto should be
          understood, not overwhelming. That's why we've combined artificial
          intelligence, real-time data, and user-first design into a platform
          that simplifies complexity — and puts you in control.
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;