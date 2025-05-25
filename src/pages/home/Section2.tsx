import React, { useState } from 'react';

const features = [
  {
    icon: (
      <div className="w-12 h-12 p-0.5 rounded-full bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500">
        <div className="bg-[#0a0f1a] w-full h-full flex items-center justify-center rounded-full">
          <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
        </div>
      </div>
    ),
    title: "Political Bias Detection",
    description: "Understand the slant in crypto news with our AI-driven analysis.",
  },
  {
    icon: (
      <div className="w-12 h-12 p-0.5 rounded-full bg-gradient-to-tr from-red-400 via-pink-500 to-yellow-500">
        <div className="bg-[#0a0f1a] w-full h-full flex items-center justify-center rounded-full">
          <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
          </svg>
        </div>
      </div>
    ),
    title: "Personalized Alerts",
    description: "Get instant notifications on events affecting your chosen cryptocurrencies.",
  },
  {
    icon: (
      <div className="w-12 h-12 p-0.5 rounded-full bg-gradient-to-tr from-yellow-400 via-orange-400 to-red-400">
        <div className="bg-[#0a0f1a] w-full h-full flex items-center justify-center rounded-full">
          <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <line x1="12" y1="20" x2="12" y2="4"/>
            <line x1="18" y1="20" x2="18" y2="8"/>
            <line x1="6" y1="20" x2="6" y2="12"/>
          </svg>
        </div>
      </div>
    ),
    title: "Simplify Complex News",
    description: "Choose your reading level—from expert to beginner.",
  },
  {
    icon: (
      <div className="w-12 h-12 p-0.5 rounded-full bg-gradient-to-tr from-green-400 via-cyan-400 to-blue-400">
        <div className="bg-[#0a0f1a] w-full h-full flex items-center justify-center rounded-full">
          <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        </div>
      </div>
    ),
    title: "Global Accessibility",
    description: "Read news in your preferred language with our translation feature.",
  },
];


const FeatureSection = () => {
  const [clickedCards, setClickedCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div 
  className="relative w-full py-10 md:py-20 px-4 flex flex-col items-center justify-center overflow-hidden"
  style={{
    background: 'linear-gradient(135deg, #000000, #0a0a14, #0f0f1f, #0a0a14, #000000)' // more black/dark blue mix
  }}
>
      {/* Floating Particles Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
  {/* Background overlay with more black tint */}
  <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center mx-6">
        <h2 className="text-white text-3xl md:text-5xl font-bold text-center mb-4">
          Features
        </h2>
        <p className="text-white/80 text-center max-w-2xl text-sm md:text-base mb-8">
          Stay ahead with tailored crypto news—intelligently simplified, translated, and delivered instantly with bias detection.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
          {features.map((item, index) => (
            <div
              key={index}
              className="relative group animate-fadeInUp"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                transform: hoveredCard === index ? 'translateY(-15px) scale(1.03)' : 'translateY(0) scale(1)',
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                zIndex: hoveredCard === index ? 50 : 10
              }}
              onClick={() => {
                const newClickedCards = new Set(clickedCards);
                if (clickedCards.has(index)) {
                  newClickedCards.delete(index);
                } else {
                  newClickedCards.add(index);
                }
                setClickedCards(newClickedCards);
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
          
              {/* Outer gradient border container */}
              <div 
                className="relative p-0.5 rounded-xl transition-all duration-300"
                style={{
                  background: clickedCards.has(index) || hoveredCard === index
                    ? 'linear-gradient(135deg, #00f0ff, #8b00ff, #ff00c8, #00f0ff)'
                    : 'linear-gradient(135deg, #00f0ff, #8b00ff, #ff00c8, #00f0ff)',
                  opacity: clickedCards.has(index) ? 1 : hoveredCard === index ? 0.8 : 0.6,
                  boxShadow: hoveredCard === index 
                    ? '0 20px 50px rgba(0, 240, 255, 0.5), 0 10px 30px rgba(139, 0, 255, 0.3)'
                    : clickedCards.has(index)
                    ? '0 25px 50px rgba(0, 240, 255, 0.4), 0 15px 30px rgba(139, 0, 255, 0.3)'
                    : 'none'
                }}
              >
                {/* Card */}
                <div 
                  className={`relative bg-opacity-95 rounded-xl px-6 py-8 md:py-12 flex flex-col items-center text-center transition-all duration-300 overflow-hidden cursor-pointer`}
                  style={{
                    backgroundColor: '#0a0f1a',
                    transform: clickedCards.has(index) ? 'scale(0.98)' : 'scale(1)',
                  }}
                >
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-600/5 transition-opacity duration-300 ${
                    clickedCards.has(index) ? 'opacity-30' : hoveredCard === index ? 'opacity-20' : 'opacity-0'
                  }`} />
                  
                  {/* 3D highlight effect for clicked/hovered cards */}
                  {(clickedCards.has(index) || hoveredCard === index) && (
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 pointer-events-none" />
                  )}
                  
                  {/* Icon container */}
                  <div className={`relative z-10 w-14 h-14 flex items-center justify-center rounded-full mb-4 md:mb-6 transition-all duration-300 ${
                    clickedCards.has(index) 
                      ? 'scale-110 shadow-2xl' 
                      : hoveredCard === index 
                      ? 'scale-110 shadow-xl' 
                      : 'scale-100'
                  }`}
                  style={{
                    background: clickedCards.has(index) || hoveredCard === index
                      ? 'linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(139, 0, 255, 0.2), rgba(255, 0, 200, 0.1))'
                      : 'linear-gradient(135deg, rgba(55, 65, 81, 0.5), rgba(17, 24, 39, 0.8))',
                    border: clickedCards.has(index) || hoveredCard === index
                      ? '1px solid rgba(0, 240, 255, 0.3)'
                      : '1px solid rgba(75, 85, 99, 0.3)',
                    boxShadow: clickedCards.has(index) || hoveredCard === index
                      ? '0 8px 25px rgba(0, 240, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                      : '0 4px 15px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                  }}>
                    <div className={`transition-all duration-300 ${
                      clickedCards.has(index) || hoveredCard === index ? 'drop-shadow-lg' : ''
                    }`}>
                      {item.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className={`relative z-10 text-lg font-semibold mb-3 transition-all duration-300 ${
                    clickedCards.has(index) || hoveredCard === index ? 'text-white drop-shadow-lg' : 'text-white'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`relative z-10 text-sm font-light leading-relaxed transition-all duration-300 ${
                    clickedCards.has(index) || hoveredCard === index ? 'text-white/90 drop-shadow-md' : 'text-white/70'
                  }`}>
                    {item.description}
                  </p>
                </div>
              </div>
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

  .fadeInUp {
    animation: fadeInUp 0.6s ease-out forwards;
    opacity: 0; /* Initial opacity set for animation */
  }
`}</style>

    </div>
  );
};

export default FeatureSection;