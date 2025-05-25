"use client";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const tiltRef = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const rect = tiltRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -(y - centerY) / 20;
    const rotateY = (x - centerX) / 20;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: "transform 0.1s ease",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
      transition: "transform 0.3s ease",
    });
  };

  return (
    <div className="relative w-full flex justify-center items-center px-4 md:px-10 lg:px-16 py-24 bg-[#0a0e12]">
      {/* Overlay Background Light */}
      <img
        src="/img/green.svg"
        alt="Green Light"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 pointer-events-none opacity-70 z-0"
      />

      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-left">
          <h1 className="text-white font-lexend text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            About Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed font-light">
            <span className="text-primary font-semibold">CryptoDigest</span> is redefining how the world engages with crypto news. We are an AI-powered crypto news intelligence platform, built to help traders, investors, and enthusiasts cut through the noise, stay informed, and make smarter decisions — faster.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed font-light">
            In the fast-moving world of cryptocurrency, timing is everything. That's why we built <span className="text-primary font-semibold">CryptoDigest</span> — to deliver real-time, relevant, and AI-enhanced insights that give our users an edge in the market.
          </p>
          <Button
            variant="outline"
            className="bg-primary px-8 py-4 text-sm font-medium rounded-full shadow-md"
          >
            Learn More
          </Button>
        </div>

        {/* Right Content (Tilt Effect Added) */}
        <div
          ref={tiltRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={style}
          className="w-full sm:w-[380px] md:w-[450px] lg:w-[420px] xl:w-[460px] aspect-video flex items-center justify-center border rounded-3xl overflow-hidden shadow-[0_0_30px_#00FFFF44] border-cyan-500 bg-[#111111]"
        >
          <img
            src="/img/bitcoin.png"
            alt="Bitcoin"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
