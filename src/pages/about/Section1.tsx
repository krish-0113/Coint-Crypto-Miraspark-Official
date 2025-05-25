"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div
      className="relative h-[40vh] md:h-[400px] flex items-center justify-center px-4 md:px-8 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/img/main.jpg')`,
      }}
    >
         <img
        src="/img/green.svg"
        alt="Green Light"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 pointer-events-none opacity-80 z-10"
      />
      <div className="absolute inset-0 bg-[#101418] opacity-80 z-0" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-3xl text-center text-white p-4 md:p-8"
      >
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Our Mission
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed font-light">
          To empower individuals around the world with personalized crypto news
          intelligence that is fast, transparent, and actionable — regardless of
          their background or experience level. We believe crypto should be
          understood, not overwhelming. That’s why we’ve combined artificial
          intelligence, real-time data, and user-first design into a platform
          that simplifies complexity — and puts you in control.
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
