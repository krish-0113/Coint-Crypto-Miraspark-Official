import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Particles from "@/components/shared/Particles";
import { motion } from "framer-motion";

import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link,useNavigate } from "react-router-dom";

const newsItems = [
  {
    img: "/img/news1.png",
    title: "Another Unexpected Loss for Tesla Company",
    description:
      "Tesla's shares fell 30% this year due to protests and vandalism at its dealerships.",
  },
  {
    img: "/img/news2.png",
    title: "Meta Faces Legal Battle",
    description:
      "Meta is under fire for data privacy issues in Europe as regulators tighten their grip.",
  },
  {
    img: "/img/news3.png",
    title: "AI Is Reshaping Jobs",
    description:
      "AI automation is expected to impact 40% of global jobs, according to a new report.",
  },
  {
    img: "/img/bitcoin.png",
    title: "Meta Faces Legal Battle",
    description:
      "Meta is under fire for data privacy issues in Europe as regulators tighten their grip.",
  },
];

// Animated Particles Component
const AnimatedParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(120)].map((_, i) => {
        const randomX = Math.random() * 100;
        const randomSize = 2 + Math.random() * 2; // small dots
        const randomDelay = Math.random() * 10;
        const randomOpacity = 0.3 + Math.random() * 0.5;
        const glowColor = "rgba(0, 240, 255, 0.6)"; // neon blue glow

        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            initial={{
              x: `${randomX}vw`,
              y: 0,
              opacity: randomOpacity,
              scale: 1,
            }}
            animate={{
              y: "100vh",
              opacity: 0,
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: randomDelay,
              ease: "linear",
            }}
            style={{
              top: 0,
              width: `${randomSize}px`,
              height: `${randomSize}px`,
              backgroundColor: glowColor,
              filter: `blur(1px)`,
              opacity: randomOpacity,
            }}
          />
        );
      })}
    </div>
  );
};

const Section1 = () => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);
  const resumeTimeout = useRef(null);

  const handleResume = () => {
    clearTimeout(resumeTimeout.current);
    resumeTimeout.current = setTimeout(() => {
      if (swiperRef.current?.autoplay) {
        swiperRef.current.autoplay.start();
      }
    }, 1000); // Reduced delay for quicker resume
  };

  useEffect(() => {
    return () => clearTimeout(resumeTimeout.current);
  }, []);

  const handlePrev = () => {
    if (swiperRef.current) {
      // Stop autoplay first
      if (swiperRef.current.autoplay) {
        swiperRef.current.autoplay.stop();
      }
      // Then slide - CORRECTED DIRECTION
      swiperRef.current.slideNext(); // This will go LEFT (previous items)
      // Resume after delay
      handleResume();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      // Stop autoplay first
      if (swiperRef.current.autoplay) {
        swiperRef.current.autoplay.stop();
      }
      // Then slide - CORRECTED DIRECTION  
      swiperRef.current.slidePrev(); // This will go RIGHT (next items)
      // Resume after delay
      handleResume();
    }
  };

  return (
    <div className="w-full py-20 flex flex-col items-center justify-center px-4 bg-gradient-to-b from-[#000000] via-[#001f3f] to-[#000000]">
      {/* Add Particles as a background */}
      {/* <Particles /> */}
      {/* Animated Particles Background */}
      {/* <AnimatedParticles /> */}
        
      <h1 className="text-2xl md:text-4xl font-bold text-center text-white">
        Trending News
      </h1>
      <p className="mt-4 text-sm md:text-base font-normal text-white max-w-3xl w-full text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
  
      <div className="w-full mt-10 relative">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={2000} // Reduced speed for smoother manual navigation
          autoplay={{
            delay: 1000, // Added proper delay
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // Changed to true for better UX
            reverseDirection: false,
          }}
          slidesPerView={1}
          spaceBetween={20}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={() => {
            // Ensure autoplay continues after slide change
            if (swiperRef.current?.autoplay) {
              clearTimeout(resumeTimeout.current);
              handleResume();
            }
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {[...newsItems, ...newsItems].map((item, index) => (
            <SwiperSlide key={index}>
              <div
                onClick={() => {
                  if (swiperRef.current?.autoplay) {
                    swiperRef.current.autoplay.stop();
                  }
                  navigate("/login");
                }}
                onMouseEnter={() => {
                  if (swiperRef.current?.autoplay) {
                    swiperRef.current.autoplay.stop();
                  }
                  clearTimeout(resumeTimeout.current);
                }}
                onMouseLeave={handleResume}
                className="cursor-pointer p-[2px] rounded-xl bg-gradient-to-br from-[#00f0ff] via-[#4c00ff] to-[#ff00c8]"
              >
                {/* Inner Card – zoom effect applied here only */}
                <div className="bg-gradient-to-br from-[#000000] via-[#001f3f] to-[#0a0a0a] rounded-xl h-full flex flex-col shadow-md overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105">
                  <div className="p-[1px] rounded-lg bg-gradient-to-br from-[#00f0ff] via-[#4c00ff] to-[#ff00c8] mx-4 mt-4">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between flex-1">
                    <p className="text-sm text-white font-light font-inter">
                      {item.description}
                    </p>
                    <span className="mt-4 text-blue-500 hover:underline text-sm font-medium">
                      Read more →
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
  
        {/* Scroll Buttons - Fixed styling and positioning */}
        <button
          onClick={handlePrev}
          className="absolute text-white left-2 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 p-3 rounded-full hidden md:block transition-all duration-200 backdrop-blur-sm border border-white/20"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className="absolute text-white right-2 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 p-3 rounded-full hidden md:block transition-all duration-200 backdrop-blur-sm border border-white/20"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Section1;