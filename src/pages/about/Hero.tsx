"use client";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div 
      className="relative w-full flex justify-center items-center px-4 md:px-10 lg:px-16 py-24 overflow-hidden"
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

      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-left">
          <h1 className="text-white font-lexend text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            About Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed font-light">
            <span 
              className="font-semibold bg-clip-text text-transparent"
              style={{
                background: "linear-gradient(90deg, #ff00c8, #8b00ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              CryptoDigest
            </span> is redefining how the world engages with crypto news. We are an AI-powered crypto news intelligence platform, built to help traders, investors, and enthusiasts cut through the noise, stay informed, and make smarter decisions — faster.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed font-light">
            In the fast-moving world of cryptocurrency, timing is everything. That's why we built <span 
              className="font-semibold bg-clip-text text-transparent"
              style={{
                background: "linear-gradient(90deg, #ff00c8, #8b00ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              CryptoDigest
            </span> — to deliver real-time, relevant, and AI-enhanced insights that give our users an edge in the market.
          </p>
          {/* <button
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
              width: "auto",
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
            <div className="relative z-10">Learn More</div>
          </button> */}
        </div>

       {/* Right Content (Card with Outer and Inner Gradient Borders) */}
<div className="relative">
  {/* Outer Gradient Border */}
  <div className="p-[3px] rounded-[28px]" style={{ 
    background: "linear-gradient(135deg, #00f0ff, #ff00c8, #8b00ff)",
  }}>
    {/* Inner Enhanced Gradient Border Container */}
    <div className="relative">
      <div
        className="absolute inset-0 rounded-3xl p-[2px]"
        style={{
          background: "linear-gradient(135deg, #ff00c8 0%, #8b00ff 50%, #ff00c8 100%)",
          border: "2px solid transparent",
          backgroundClip: "padding-box"
        }}
      >
        <div
          className="w-full h-full rounded-3xl"
          style={{
            background: "linear-gradient(135deg, #ff00c8 0%, #8b00ff 50%, #ff00c8 100%)"
          }}
        >
          <div className="w-full h-full bg-[#0a0a0a] rounded-3xl m-[2px]"></div>
        </div>
      </div>

      {/* Inner Card */}
      <div
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        style={{
          boxShadow: isHovered
            ? '0 0 60px rgba(139, 0, 255, 0.4), 0 0 80px rgba(0, 240, 255, 0.3)'
            : '0 0 30px rgba(0, 240, 255, 0.2), 0 0 40px rgba(139, 0, 255, 0.15)',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)'
        }}
        className="relative w-full sm:w-[380px] md:w-[450px] lg:w-[420px] xl:w-[460px] aspect-video flex items-center justify-center rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] transition-all duration-300 ease-in-out cursor-pointer z-10"
      >
        <img
          src="/img/bitcoin.png"
          alt="Bitcoin"
          className="object-cover w-full h-full transition-transform duration-300"
        />
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default Hero;