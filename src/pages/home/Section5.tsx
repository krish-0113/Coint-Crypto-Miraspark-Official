import React, { useState } from 'react';

const testimonials = [
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    name: "Adam Williams",
    title: "Market Researcher",
    text: "I absolutely love how easy and intuitive this app is! It provides up-to-date, accurate crypto news and market analysis, making it a must-have for anyone serious about staying informed.",
    rating: 5
  },
  {
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b829?w=100&h=100&fit=crop&crop=face",
    name: "Emma Gorgoe",
    title: "Trader",
    text: "This site keeps me updated with real-time crypto news! It's a must-have for any crypto enthusiast.",
    rating: 4
  },
  {
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    name: "Ross Alex",
    title: "Student",
    text: "It offers quick, reliable updates, helping me make informed decisions and stay ahead in the ever-changing cryptocurrency market.",
    rating: 5
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    name: "James Carter",
    title: "Analyst",
    text: "An excellent resource for crypto market insights! Simple, sleek, and powerful.",
    rating: 4
  },
];

const TestimonialFeatureSection = () => {
  const [clickedCards, setClickedCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span 
          key={i} 
          className={`text-base transition-all duration-300 ${
            i <= rating 
              ? (clickedCards.has(rating) || hoveredCard === rating 
                ? 'text-yellow-400 drop-shadow-lg scale-110' 
                : 'text-yellow-400')
              : (clickedCards.has(rating) || hoveredCard === rating 
                ? 'text-gray-400 drop-shadow-lg scale-110' 
                : 'text-gray-500')
          }`}
        >
          {i <= rating ? '★' : '☆'}
        </span>
      );
    }
    return stars;
  };

  return (
    <div 
      className="relative w-full py-10 md:py-20 px-4 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #000000, #0a0a14, #0f0f1f, #0a0a14, #000000)'
      }}
    >
          
          {/* <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
        </div> */}
      {/* Background overlay with more black tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center mx-6">
        <h2 className="text-white text-3xl md:text-5xl font-bold text-center mb-4">
          What Our Users Say
        </h2>
        <p className="text-white/80 text-center max-w-2xl text-sm md:text-base mb-8">
          Real testimonials from our satisfied users who trust us for their crypto news and market insights.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative group animate-fadeInUp"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                transform: clickedCards.has(index) 
                  ? 'translateY(-15px) scale(1.03)' 
                  : hoveredCard === index 
                  ? 'translateY(-15px) scale(1.03)' 
                  : 'translateY(0) scale(1)',
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
              onMouseEnter={() => {
                if (!clickedCards.has(index)) {
                  setHoveredCard(index);
                }
              }}
              onMouseLeave={() => {
                if (!clickedCards.has(index)) {
                  setHoveredCard(null);
                }
              }}
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
                  className={`relative bg-opacity-95 rounded-xl p-6 flex flex-col justify-between transition-all duration-300 overflow-hidden cursor-pointer h-80`}
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
                  
                  {/* Quote Icon */}
                  <div className="relative z-10 mb-4">
                    <div className="text-4xl text-cyan-400 opacity-30 font-serif">"</div>
                  </div>
                  
                  {/* Testimonial Text */}
                  <div className="relative z-10 flex-1 mb-6">
                    <p className={`text-sm font-light leading-relaxed transition-all duration-300 ${
                      clickedCards.has(index) || hoveredCard === index ? 'text-white/90 drop-shadow-md' : 'text-white/70'
                    }`}>
                      {testimonial.text}
                    </p>
                  </div>

                  {/* Star Rating - Positioned above user info */}
                  <div className="relative z-10 flex gap-1 mb-4 justify-center">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  {/* User Info Section - Bottom */}
                  <div className="relative z-10 flex items-center gap-3">
                    {/* Profile Image - Left Side */}
                    <div className={`p-0.5 rounded-full transition-all duration-300 flex-shrink-0 ${
                      clickedCards.has(index) 
                        ? 'scale-110 shadow-2xl' 
                        : hoveredCard === index 
                        ? 'scale-110 shadow-xl' 
                        : 'scale-100'
                    }`}
                    style={{
                      background: 'linear-gradient(135deg, #00f0ff, #8b00ff, #ff00c8, #00f0ff)',
                      boxShadow: clickedCards.has(index) || hoveredCard === index
                        ? '0 8px 25px rgba(0, 240, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                        : '0 4px 15px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                    }}>
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-[#0a0f1a]">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          style={{
                            filter: clickedCards.has(index) || hoveredCard === index 
                              ? 'brightness(1.1) contrast(1.1)' 
                              : 'brightness(1) contrast(1)'
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Name and Title - Right Side of Image */}
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-base font-semibold mb-1 transition-all duration-300 truncate ${
                        clickedCards.has(index) || hoveredCard === index ? 'text-white drop-shadow-lg' : 'text-white'
                      }`}>
                        {testimonial.name}
                      </h3>
                      
                      <p className={`text-xs font-medium transition-all duration-300 truncate ${
                        clickedCards.has(index) || hoveredCard === index ? 'text-cyan-300 drop-shadow-md' : 'text-white/60'
                      }`}>
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
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

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default TestimonialFeatureSection;