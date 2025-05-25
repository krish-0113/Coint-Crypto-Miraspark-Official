"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="relative h-[40vh] md:h-[350px] flex items-center justify-center px-4 md:px-8 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/img/main.jpg')`,
      }}
    >
            <img
        src="/img/blue.png"
        alt="Green Light"
        className="absolute top-0 left-1/2 h-full w-full  transform -translate-x-1/2 pointer-events-none opacity-80 z-10"
      />
      <div className="absolute inset-0 bg-[#101418] opacity-80 z-0" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-start justify-center text-white gap-6 md:gap-12"
      >
        {/* Left Text Block */}
        <div className="text-left pl-0 md:pl-4  ">
          <h2 className="text-2xl md:text-5xl font-bold leading-snug">
            Crypto moves fast.<br />

            We move faster
          </h2>
        </div>

        {/* Right Text Block */}
        <div className="w-full md:w-1/2">
          <h3 className="text-xl md:text-3xl font-semibold mb-2">Join Us</h3>
          <p className="text-sm md:text-lg text-gray-200 leading-relaxed font-light">
            We’re more than a news app — we’re a movement.
            <br />
            Join thousands of traders and investors around the world who use
            <span className="text-cyan-400 font-medium"> CryptoDigest</span> to stay one step ahead.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
