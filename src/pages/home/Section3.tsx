"use client";
import { useState } from "react";

export default function HowItWorksSection() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [hoveredStep, setHoveredStep] = useState(null);
  const [clickedSteps, setClickedSteps] = useState(new Set());
  const [imageClicked, setImageClicked] = useState(false);
  const [imageHovered, setImageHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -30;
    setRotate({ x, y });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const steps = [
    {
      step: "01",
      title: "Choose Your Plan",
      desc: "Start your 14-day free trial of Tier 2 or Tier 3 — cancel anytime.",
    },
    {
      step: "02",
      title: "Track Your Favourite Coins",
      desc: "Follow up to 10 or 30 coins and get crypto news matched to them.",
    },
    {
      step: "03",
      title: "Understand the Market",
      desc: ": See if news is bullish or bearish and know why instantly.",
    },
  ];

  return (
    <section 
      className="relative w-full py-10 md:py-20 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #000000, #0a0a0a, #000814, #050510, #000000)'
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-transparent pointer-events-none" />
      
      {/* Background image */}
      <img
        src="/img/blue.png"
        alt="Background Overlay"
        className="absolute top-0 left-[25%] w-[700px] h-full object-cover opacity-40 z-0 pointer-events-none"
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-white text-3xl md:text-5xl font-bold animate-fadeInUp">
          How it works
        </h2>
        <p className="text-white/80 mt-4 text-sm md:text-base animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor
          incididunt ut labore et dolore magna aliqua
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Image Section with animation */}
        <div
          className="w-full lg:w-1/2 flex justify-center animate-fadeInUp"
          style={{ 
            animationDelay: '0.4s',
            perspective: "1200px",
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={() => setImageHovered(true)}
          onClick={() => setImageClicked(!imageClicked)}
        >
          {/* Subtle outer border for image */}
          <div 
            className="relative p-[3px] rounded-3xl transition-all duration-500 cursor-pointer group"
            style={{
              background: imageHovered || imageClicked
                ? 'linear-gradient(135deg, rgba(0, 240, 255, 0.9), rgba(139, 0, 255, 0.9), rgba(255, 0, 200, 0.9))'
                : 'linear-gradient(135deg, rgba(0, 240, 255, 0.5), rgba(139, 0, 255, 0.5), rgba(255, 0, 200, 0.5))',
              boxShadow: imageHovered
                ? '0 25px 50px rgba(0, 240, 255, 0.6), 0 15px 30px rgba(139, 0, 255, 0.4), 0 0 100px rgba(0, 240, 255, 0.3)'
                : imageClicked 
                ? '0 30px 60px rgba(0, 240, 255, 0.4), 0 20px 40px rgba(139, 0, 255, 0.3), 0 0 120px rgba(0, 240, 255, 0.2)'
                : '0 15px 35px rgba(0, 240, 255, 0.2), 0 10px 25px rgba(0, 0, 0, 0.4)',
              transform: imageHovered ? 'scale(1.05)' : 'scale(1)',
            }}
            onMouseLeave={() => setImageHovered(false)}
          >
            <div
             style={{
              transition: 'transform 0.2s ease-out',
              backgroundColor: 'rgba(10, 15, 26, 0.5)',
              boxShadow: imageHovered
                ? '0 0 10px rgba(0, 240, 255, 0.2), 0 0 20px rgba(0, 240, 255, 0.3)'
                : imageClicked
                ? '0 0 15px rgba(0, 240, 255, 0.2), 0 0 30px rgba(0, 240, 255, 0.3)'
                : '0 0 10px rgba(0, 0, 0, 0.3)',
              border: imageHovered || imageClicked
                ? '1px solid rgba(0, 240, 255, 0.4)'
                : '1px solid rgba(0, 240, 255, 0.2)',
              borderRadius: '12px',
            }}
            
              className="w-full max-w-[500px] rounded-3xl overflow-hidden transition-all duration-500"
            >
              <div className="p-2 transition-all duration-500">
                <img
                  src="/img/layout.png"
                  alt="Preview"
                  className="w-full h-auto object-cover rounded-2xl transition-all duration-500"
                  style={{
                    filter: imageHovered ? 'brightness(1.3) contrast(1.3) saturate(1.4) drop-shadow(0 10px 20px rgba(0,0,0,0.5))' : imageClicked ? 'brightness(1.2) contrast(1.2) saturate(1.3) drop-shadow(0 8px 16px rgba(0,0,0,0.4))' : 'brightness(1) contrast(1) saturate(1) drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                    boxShadow: imageHovered
                      ? '0 15px 40px rgba(0, 0, 0, 0.9), 0 8px 20px rgba(0, 240, 255, 0.4)' 
                      : imageClicked 
                      ? '0 12px 30px rgba(0, 0, 0, 0.8), 0 6px 15px rgba(0, 240, 255, 0.3)' 
                      : '0 8px 20px rgba(0, 0, 0, 0.6)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Text Steps */}
        <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 relative">
          {/* Connecting Dots */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-400/30 via-purple-500/30 to-pink-500/30 hidden md:block"></div>
          
          {steps.map((item, idx) => (
            <div 
              key={idx} 
              className="relative animate-fadeInUp"
              style={{ animationDelay: `${0.6 + idx * 0.2}s` }}
              onMouseEnter={() => setHoveredStep(idx)}
              onMouseLeave={() => setHoveredStep(null)}
              onClick={() => {
                const newClickedSteps = new Set(clickedSteps);
                if (clickedSteps.has(idx)) {
                  newClickedSteps.delete(idx);
                } else {
                  newClickedSteps.add(idx);
                }
                setClickedSteps(newClickedSteps);
              }}
            >
              {/* Step card with enhanced gradient border */}
              <div 
                className="relative p-[2px] rounded-xl transition-all duration-300 cursor-pointer"
                style={{
                  background: hoveredStep === idx
                    ? 'linear-gradient(135deg, #00f0ff, #8b00ff, #ff00c8, #00f0ff)'
                    : clickedSteps.has(idx)
                    ? 'linear-gradient(135deg, rgba(0, 240, 255, 0.8), rgba(139, 0, 255, 0.8), rgba(255, 0, 200, 0.8))'
                    : 'linear-gradient(135deg, rgba(0, 240, 255, 0.9), rgba(139, 0, 255, 0.9), rgba(255, 0, 200, 0.9))',
                  transform: hoveredStep === idx ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: hoveredStep === idx
                    ? '0 20px 40px rgba(0, 240, 255, 0.4), 0 10px 25px rgba(139, 0, 255, 0.3), 0 0 50px rgba(0, 240, 255, 0.2)'
                    : clickedSteps.has(idx)
                    ? '0 10px 20px rgba(0, 240, 255, 0.3), 0 5px 15px rgba(139, 0, 255, 0.2)'
                    : '0 8px 20px rgba(0, 240, 255, 0.25), 0 4px 12px rgba(139, 0, 255, 0.2), 0 0 25px rgba(0, 240, 255, 0.15)',
                  backdropFilter: 'blur(4px)',
                  WebkitBackdropFilter: 'blur(4px)',
                }}
              >
                <div 
                  className="bg-[#0a0f1a] rounded-xl p-4 md:p-6 transition-all duration-300 relative overflow-hidden"
                  style={{
                    background: hoveredStep === idx
                      ? 'linear-gradient(135deg, #0a0f1a, #0f1419, #1a1f2a)'
                      : clickedSteps.has(idx)
                      ? 'linear-gradient(135deg, #0a0f1a, #0f1419)'
                      : '#0a0f1a'
                  }}
                >
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-600/5 rounded-xl transition-opacity duration-300 ${
                    hoveredStep === idx ? 'opacity-40' : clickedSteps.has(idx) ? 'opacity-30' : 'opacity-0'
                  }`} />
                  
                  {/* Hover glow effect */}
                  {hoveredStep === idx && (
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-600/10 rounded-xl pointer-events-none" />
                  )}
                  
                  <div className="flex items-start gap-4 relative z-10">
                    {/* Step number with gradient */}
                    <div 
                      className="relative p-0.5 rounded-xl transition-all duration-300"
                      style={{
                        background: hoveredStep === idx
                          ? 'linear-gradient(135deg, #00f0ff, #8b00ff, #ff00c8)'
                          : clickedSteps.has(idx)
                          ? 'linear-gradient(135deg, rgba(0, 240, 255, 0.8), rgba(139, 0, 255, 0.8), rgba(255, 0, 200, 0.8))'
                          : 'linear-gradient(135deg, rgba(0, 240, 255, 0.5), rgba(139, 0, 255, 0.5), rgba(255, 0, 200, 0.5))',
                        transform: hoveredStep === idx ? 'scale(1.15)' : clickedSteps.has(idx) ? 'scale(1.1)' : 'scale(1)',
                      }}
                    >
                      <div 
                        className="font-bold rounded-xl flex items-center justify-center text-lg min-w-12 min-h-12 text-white transition-all duration-300"
                        style={{
                          background: hoveredStep === idx
                            ? 'linear-gradient(135deg, rgba(0, 240, 255, 0.3), rgba(139, 0, 255, 0.3), rgba(255, 0, 200, 0.2))'
                            : clickedSteps.has(idx)
                            ? 'linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(139, 0, 255, 0.2), rgba(255, 0, 200, 0.1))'
                            : 'linear-gradient(135deg, #111111, #1a1a1a)',
                          boxShadow: hoveredStep === idx
                            ? '0 10px 30px rgba(0, 240, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
                            : clickedSteps.has(idx)
                            ? '0 8px 25px rgba(0, 240, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                            : 'inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                        }}
                      >
                        {item.step}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className={`text-white text-xl font-semibold mb-2 transition-all duration-300 ${
                        hoveredStep === idx ? 'drop-shadow-lg text-white' : clickedSteps.has(idx) ? 'drop-shadow-md text-white' : ''
                      }`}>
                        {item.title}
                      </h3>
                      <p className={`text-sm transition-all duration-300 leading-relaxed ${
                        hoveredStep === idx ? 'text-white/95 drop-shadow-md' : clickedSteps.has(idx) ? 'text-white/90 drop-shadow-sm' : 'text-white/70'
                      }`}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Connecting dot */}
              {idx < steps.length - 1 && (
                <div className="absolute left-6 -bottom-3 w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full hidden md:block z-20"
                  style={{
                    boxShadow: hoveredStep === idx ? '0 0 15px rgba(0, 240, 255, 0.8)' : '0 0 8px rgba(0, 240, 255, 0.4)',
                    transform: hoveredStep === idx ? 'scale(1.3)' : 'scale(1)',
                    transition: 'all 0.3s ease-in-out'
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
}