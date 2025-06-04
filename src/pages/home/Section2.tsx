"use client"

import { useState, useEffect } from "react"

const features = [
  {
    icon: (
      <div className="w-12 h-12 p-0.5 rounded-full bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500">
        <div className="bg-[#0a0f1a] w-full h-full flex items-center justify-center rounded-full">
          <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
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
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
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
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="18" y1="20" x2="18" y2="8" />
            <line x1="6" y1="20" x2="6" y2="12" />
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
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        </div>
      </div>
    ),
    title: "Global Accessibility",
    description: "Read news in your preferred language with our translation feature.",
  },
]

const FeatureCard = ({
  feature,
  index,
  clickedCards,
  setClickedCards,
  hoveredCard,
  setHoveredCard,
  isMobile = false,
}) => {
  return (
    <div
      className="relative group animate-fadeInUp w-full"
      style={{
        animationDelay: `${index * 0.2}s`,
        transform: hoveredCard === index ? "translateY(-15px) scale(1.03)" : "translateY(0) scale(1)",
        transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        zIndex: hoveredCard === index ? 50 : 10,
      }}
      onClick={() => {
        const newClickedCards = new Set(clickedCards)
        if (clickedCards.has(index)) {
          newClickedCards.delete(index)
        } else {
          newClickedCards.add(index)
        }
        setClickedCards(newClickedCards)
      }}
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {/* FIXED: Outer gradient border container - removed size scaling on click */}
      <div
        className="relative p-0.5 rounded-xl transition-all duration-300"
        style={{
          background:
            clickedCards.has(index) || hoveredCard === index
              ? "linear-gradient(135deg, #00f0ff, #8b00ff, #ff00c8, #00f0ff)"
              : "linear-gradient(135deg, #00f0ff, #8b00ff, #ff00c8, #00f0ff)",
          opacity: clickedCards.has(index) ? 1 : hoveredCard === index ? 0.8 : 0.6,
          boxShadow:
            hoveredCard === index
              ? "0 20px 50px rgba(0, 240, 255, 0.5), 0 10px 30px rgba(139, 0, 255, 0.3)"
              : clickedCards.has(index)
                ? "0 25px 50px rgba(0, 240, 255, 0.4), 0 15px 30px rgba(139, 0, 255, 0.3)"
                : "none",
        }}
      >
        {/* FIXED: Removed inner card scaling on click to prevent border size increase */}
        <div
          className={`relative bg-opacity-95 rounded-xl px-6 py-8 md:py-12 flex flex-col items-center text-center transition-all duration-300 overflow-hidden cursor-pointer bg-gradient-to-br from-[#000000] via-[#001f3f] to-[#0a0a0a]`}
        >
          {/* Background gradient overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-600/5 transition-opacity duration-300 ${
              clickedCards.has(index) ? "opacity-50" : hoveredCard === index ? "opacity-40" : "opacity-0"
            }`}
          />

          {(clickedCards.has(index) || hoveredCard === index) && (
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 pointer-events-none" />
          )}

          {/* Icon container */}
          <div
            className={`relative z-10 w-14 h-14 flex items-center justify-center rounded-full mb-4 md:mb-6 transition-all duration-300 ${
              clickedCards.has(index)
                ? "scale-110 shadow-2xl"
                : hoveredCard === index
                  ? "scale-110 shadow-xl"
                  : "scale-100"
            }`}
            style={{
              background:
                clickedCards.has(index) || hoveredCard === index
                  ? "linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(139, 0, 255, 0.2), rgba(255, 0, 200, 0.1))"
                  : "linear-gradient(135deg, rgba(55, 65, 81, 0.5), rgba(17, 24, 39, 0.8))",
              border:
                clickedCards.has(index) || hoveredCard === index
                  ? "1px solid rgba(0, 240, 255, 0.3)"
                  : "1px solid rgba(75, 85, 99, 0.3)",
              boxShadow:
                clickedCards.has(index) || hoveredCard === index
                  ? "0 8px 25px rgba(0, 240, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                  : "0 4px 15px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
            }}
          >
            <div
              className={`transition-all duration-300 ${
                clickedCards.has(index) || hoveredCard === index ? "drop-shadow-lg" : ""
              }`}
            >
              {feature.icon}
            </div>
          </div>

          <h3
            className={`relative z-10 text-lg font-semibold mb-3 transition-all duration-300 font-bold ${
              clickedCards.has(index) || hoveredCard === index
                ? "text-white drop-shadow-lg opacity-100"
                : "text-white drop-shadow-sm opacity-100"
            }`}
            style={{
              textShadow:
                clickedCards.has(index) || hoveredCard === index
                  ? "0 2px 4px rgba(0, 0, 0, 0.5)"
                  : "0 1px 2px rgba(0, 0, 0, 0.2)",
            }}
          >
            {feature.title}
          </h3>

          <p
            className={`relative z-10 text-sm font-light leading-relaxed transition-all duration-300 ${
              clickedCards.has(index) || hoveredCard === index
                ? "text-white drop-shadow-md opacity-100"
                : "text-white/80 drop-shadow-sm opacity-100"
            }`}
            style={{
              textShadow:
                clickedCards.has(index) || hoveredCard === index
                  ? "0 1px 2px rgba(0, 0, 0, 0.5)"
                  : "0 1px 2px rgba(0, 0, 0, 0.2)",
            }}
          >
            {feature.description}
          </p>

        </div>
      </div>
    </div>
  )
}

const FeatureSection = () => {
  const [clickedCards, setClickedCards] = useState(new Set())
  const [hoveredCard, setHoveredCard] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === features.length - 1 ? 0 : prevSlide + 1))
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === features.length - 1 ? 0 : prevSlide + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? features.length - 1 : prevSlide - 1))
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div
      className="relative w-full py-10 md:py-20 px-4 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #000000, #0a0a14, #0f0f1f, #0a0a14, #000000)",
      }}
    >
      {/* Background overlay with more black tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center mx-6 w-full max-w-7xl">
        <h2 className="text-white text-3xl md:text-5xl font-bold text-center mb-4">Features</h2>
        <p className="text-white/80 text-center max-w-2xl text-sm md:text-base mb-8">
          Stay ahead with tailored crypto news—intelligently simplified, translated, and delivered instantly with bias
          detection.
        </p>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
              clickedCards={clickedCards}
              setClickedCards={setClickedCards}
              hoveredCard={hoveredCard}
              setHoveredCard={setHoveredCard}
            />
          ))}
        </div>

        {/* Desktop Navigation Controls */}
        <div className="hidden md:flex items-center justify-center mt-10 gap-4">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 active:scale-95 group"
            style={{
              boxShadow: "0 8px 25px rgba(0, 240, 255, 0.3), 0 4px 15px rgba(139, 0, 255, 0.2)",
            }}
          >
            <svg
              className="w-6 h-6 text-white transition-transform duration-300 group-hover:-translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Desktop Dots Indicator */}
          <div className="flex justify-center space-x-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentSlide
                    ? "w-7 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-lg scale-110"
                    : "w-2 h-2 bg-gray-500 rounded-full hover:bg-gray-400 hover:scale-110"
                }`}
                style={{
                  boxShadow:
                    index === currentSlide
                      ? "0 4px 15px rgba(0, 240, 255, 0.4), 0 2px 8px rgba(139, 0, 255, 0.3)"
                      : "none",
                }}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 active:scale-95 group"
            style={{
              boxShadow: "0 8px 25px rgba(0, 240, 255, 0.3), 0 4px 15px rgba(139, 0, 255, 0.2)",
            }}
          >
            <svg
              className="w-6 h-6 text-white transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden relative w-full">
          <div className="relative max-w-sm mx-auto px-8">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 active:scale-95"
              style={{
                boxShadow: "0 8px 25px rgba(0, 240, 255, 0.3), 0 4px 15px rgba(139, 0, 255, 0.2)",
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
                boxShadow: "0 8px 25px rgba(0, 240, 255, 0.3), 0 4px 15px rgba(139, 0, 255, 0.2)",
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
                {features.map((feature, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <FeatureCard
                      feature={feature}
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

          {/* Mobile Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentSlide
                    ? "w-3 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-lg scale-110"
                    : "w-3 h-1.5 bg-gray-500 rounded-full hover:bg-gray-400 hover:scale-110"
                }`}
                style={{
                  boxShadow:
                    index === currentSlide
                      ? "0 2px 8px rgba(0, 240, 255, 0.4), 0 1px 4px rgba(139, 0, 255, 0.3)"
                      : "none",
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
  )
}

export default FeatureSection