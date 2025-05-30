"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-[40vh] md:h-[350px] flex items-center justify-center px-4 md:px-8 overflow-hidden">
      {/* Primary Dark Background with Deep Blue */}
      <div className="absolute inset-0 bg-black z-0" />
      
      {/* Main Dark Blue-Black Gradient Base */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #000814 15%, #001122 30%, #000a1a 45%, #000611 60%, #000000 75%, #000305 90%, #000000 100%)'
        }}
      />
      
      {/* Darkest Blue with Black Gradient Overlay */}
      <div 
        className="absolute inset-0 z-1"
        style={{
          background: 'linear-gradient(225deg, rgba(0,0,0,1) 0%, rgba(0,3,8,0.95) 20%, rgba(0,8,18,0.9) 40%, rgba(0,5,12,0.85) 60%, rgba(0,2,6,0.9) 80%, rgba(0,0,0,1) 100%)'
        }}
      />
      
      {/* Deep Blue-Black Radial Gradient */}
      <div 
        className="absolute inset-0 z-1"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,6,15,0.7) 0%, rgba(0,3,10,0.8) 30%, rgba(0,1,5,0.9) 60%, rgba(0,0,0,1) 100%)'
        }}
      />

      {/* Diagonal Dark Blue Gradient */}
      <div 
        className="absolute inset-0 z-1"
        style={{
          background: 'linear-gradient(45deg, rgba(0,0,0,0.9) 0%, rgba(0,4,12,0.7) 25%, rgba(0,8,20,0.5) 50%, rgba(0,3,9,0.7) 75%, rgba(0,0,0,0.9) 100%)'
        }}
      />

      {/* Left Side Dark Blue-Black Gradient */}
      <div 
        className="absolute top-0 left-0 w-1/2 h-full z-2"
        style={{
          background: 'linear-gradient(270deg, transparent 0%, rgba(0,2,8,0.8) 70%, rgba(0,0,0,0.95) 100%)'
        }}
      />

      {/* Right Side Dark Blue-Black Gradient */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full z-2"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(0,2,8,0.8) 70%, rgba(0,0,0,0.95) 100%)'
        }}
      />

      {/* Center Dark Blue Radial Glow */}
      <div
        className="absolute top-0 left-1/2 w-[400px] h-[400px] -translate-x-1/2 rounded-full blur-3xl opacity-50 z-1"
        style={{
          background: "radial-gradient(circle, rgba(0,8,20,0.6) 0%, rgba(0,4,12,0.4) 40%, rgba(0,1,6,0.2) 70%, rgba(0,0,0,0) 100%)"
        }}
      ></div>
      
      {/* Dark Blue Corner Accents */}
      <div 
        className="absolute top-0 left-0 w-1/3 h-1/3 z-1"
        style={{
          background: 'radial-gradient(ellipse at top left, rgba(0,5,15,0.8) 0%, rgba(0,2,8,0.6) 50%, transparent 80%)'
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-1/3 h-1/3 z-1"
        style={{
          background: 'radial-gradient(ellipse at bottom right, rgba(0,5,15,0.8) 0%, rgba(0,2,8,0.6) 50%, transparent 80%)'
        }}
      />

      {/* Additional Deep Blue Atmospheric Layer */}
      <div 
        className="absolute inset-0 z-1"
        style={{
          background: 'conic-gradient(from 180deg at 50% 50%, rgba(0,0,0,1) 0deg, rgba(0,6,18,0.7) 90deg, rgba(0,10,25,0.5) 180deg, rgba(0,4,12,0.8) 270deg, rgba(0,0,0,1) 360deg)'
        }}
      />
                    
      {/* Blue Image Overlay */}
      <img
        src="/img/blue.png"
        alt="Blue Light"
        className="absolute top-0 left-1/2 h-full w-full transform -translate-x-1/2 pointer-events-none opacity-25 z-3 mix-blend-overlay"
      />
                    
      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-7xl w-full flex flex-col items-center justify-center text-white gap-6"
      >
        {/* Main Heading with Gradient Text */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl text-center text-2xl md:text-4xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent leading-tight"
        >
          Thank you for being part of the{" "}
          <span className="bg-gradient-to-r from-[#00d4ff] via-[#0099ff] via-[#00f0ff] via-[#4dd0ff] to-[#8b00ff] bg-clip-text text-transparent animate-pulse">
            CryptoDigest
          </span>{" "}
          community.
        </motion.h1>
                          
        {/* Subtitle with Subtle Animation */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl text-lg text-center text-gray-300 leading-relaxed"
        >
          We move fast — and we've got your back every step of the way
        </motion.p>
                          
        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center gap-2 mt-2"
        >
          <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#00f0ff]"></div>
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00f0ff] to-[#8b00ff] animate-pulse"></div>
          <div className="w-8 h-[1px] bg-gradient-to-r from-[#8b00ff] to-transparent"></div>
        </motion.div>
      </motion.div>
                    
      {/* Bottom Gradient Fade with Blue Tint */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 via-blue-950/30 to-transparent z-5" />
    </div>
  );
};

export default Hero;