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
        className="relative z-10 max-w-7xl w-full flex flex-col items-center justify-center text-white gap-6 "
      >
         <h1 className="max-w-2xl text-center text-2xl md:text-4xl">Thank you for being part of the CryptoDigest community.</h1>
        <p className="max-w-2xl text-lg text-center text-gray-200">We move fast — and we’ve got your back every step of the way</p>
       
      </motion.div>
    </div>
  );
};

export default Hero;
