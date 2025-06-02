import React, { useState } from 'react';

const testimonials = [
  {
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    name: "Adam Williams",
    title: "Market Researcher",
    text: "I absolutely love how easy and intuitive this app is! It provides up-to-date.",
    rating: 5
  },
  {
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    name: "Emma George",
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
  }
];

const TestimonialCard = ({ testimonial, index, clickedCards, setClickedCards, hoveredCard, setHoveredCard, isMobile = false }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span 
          key={i} 
          className={`text-base transition-all duration-300 ${
            i <= rating 
              ? (clickedCards.has(index) || hoveredCard === index 
                ? 'text-yellow-400 drop-shadow-lg scale-110' 
                : 'text-yellow-400')
              : (clickedCards.has(index) || hoveredCard === index 
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
      className={`relative group animate-fadeInUp ${isMobile ? 'px-2' : ''}`}
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
        <div
          className={`relative bg-opacity-95 rounded-xl p-6 flex flex-col justify-between transition-all duration-300 overflow-hidden cursor-pointer h-80 bg-gradient-to-br from-[#000000] via-[#001f3f] to-[#0a0a0a]`}
          style={{
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
  );
};

const TestimonialFeatureSection = () => {
  const [clickedCards, setClickedCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div 
      className="relative w-full py-10 md:py-20 px-4 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #000000, #0a0a14, #0f0f1f, #0a0a14, #000000)'
      }}
    >
      {/* Background overlay with more black tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center mx-6">
        <h2 className="text-white text-3xl md:text-5xl font-bold text-center mb-4">
          What Our Users Say
        </h2>
        <p className="text-white/80 text-center max-w-2xl text-sm md:text-base mb-8">
          Real testimonials from our satisfied users who trust us for their crypto news and market insights.
        </p>
        
        {/* Desktop View with Navigation */}
        <div className="hidden md:block w-full max-w-7xl">
          {/* Desktop Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                index={index}
                clickedCards={clickedCards}
                setClickedCards={setClickedCards}
                hoveredCard={hoveredCard}
                setHoveredCard={setHoveredCard}
              />
            ))}
          </div>
          
          {/* Desktop Navigation Controls */}
          <div className="flex items-center justify-center mt-10 gap-4">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 active:scale-95 group"
              style={{
                boxShadow: '0 8px 25px rgba(0, 240, 255, 0.3), 0 4px 15px rgba(139, 0, 255, 0.2)'
              }}
            >
              <svg className="w-6 h-6 text-white transition-transform duration-300 group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Desktop Dots Indicator */}
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-7 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-lg scale-110'
                      : 'w-2 h-2 bg-gray-500 rounded-full hover:bg-gray-400 hover:scale-110'
                  }`}
                  style={{
                    boxShadow: index === currentSlide 
                      ? '0 4px 15px rgba(0, 240, 255, 0.4), 0 2px 8px rgba(139, 0, 255, 0.3)'
                      : 'none'
                  }}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 active:scale-95 group"
              style={{
                boxShadow: '0 8px 25px rgba(0, 240, 255, 0.3), 0 4px 15px rgba(139, 0, 255, 0.2)'
              }}
            >
              <svg className="w-6 h-6 text-white transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden relative w-full">
          <div className="relative max-w-sm mx-auto px-8">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 active:scale-95"
              style={{
                boxShadow: '0 8px 25px rgba(0, 240, 255, 0.3), 0 4px 15px rgba(139, 0, 255, 0.2)'
              }}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 active:scale-95"
              style={{
                boxShadow: '0 8px 25px rgba(0, 240, 255, 0.3), 0 4px 15px rgba(139, 0, 255, 0.2)'
              }}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Carousel Container */}
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <TestimonialCard
                      testimonial={testimonial}
                      index={index}
                      clickedCards={clickedCards}
                      setClickedCards={setClickedCards}
                      hoveredCard={hoveredCard}
                      setHoveredCard={setHoveredCard}
                      isMobile={true}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

         {/* Dots Indicator */}
<div className="flex justify-center mt-8 space-x-2">
  {testimonials.map((_, index) => (
    <button
      key={index}
      onClick={() => goToSlide(index)}
      className={`transition-all duration-300 ${
        index === currentSlide
          ? 'w-3 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-lg scale-110'
          : 'w-3 h-1.5 bg-gray-500 rounded-full hover:bg-gray-400 hover:scale-110'
      }`}
      style={{
        boxShadow: index === currentSlide 
          ? '0 2px 8px rgba(0, 240, 255, 0.4), 0 1px 4px rgba(139, 0, 255, 0.3)'
          : 'none'
      }}
    />
  ))}
</div>

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