import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

// Utility function to combine class names
const cn = (...classes) => classes.filter(Boolean).join(' ');

const pricingPlans = [
  {
    title: "Quick Scope",
    badge: "Essential",
    image: "/img/radar-scanner.png",
    subtitle: "Get clarity",
    price: "$0.83",
    note: "Billed as $9.99/year*",
    color: "green-400",
    features: [
      "Compare headlines from multiple sources",
      "Stay updated with balanced perspective",
      "Quick 5-minute daily digest",
      "Basic news categorization"
    ]
  },
  {
    title: "Pro Digest",
    badge: "Most popular",
    image: "/img/brain-dashboard.png",
    subtitle: "Rise above the noise",
    price: "$2.49",
    note: "Billed as $29.99/year*",
    color: "yellow-400",
    features: [
      "Deep dive analysis and insights",
      "Filter out misleading narratives",
      "Time-saving premium summaries",
      "Advanced source verification",
      "Weekly trend reports"
    ]
  },
  {
    title: "Alpha Digest",
    badge: "Best value",
    image: "/img/globe-crypto.png",
    subtitle: "See full picture",
    price: "$8.33",
    note: "Billed as $99.99/year*",
    color: "blue-400",
    features: [
      "Custom personalized dashboard",
      "Reveal what you're missing",
      "Advanced narrative analysis",
      "Full control over news diet",
      "Premium research tools"
    ]
  },
];

export default function PricingSection() {
  const [selected, setSelected] = useState(1);

  return (
    <section className="min-h-screen px-4 py-20 sm:px-6 md:px-10 lg:px-16 relative text-white overflow-hidden">
      {/* Enhanced background with dominant dark black gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/60 pointer-events-none z-0" />
      
      {/* Add CSS for shine animation */}
      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .glow-button:hover .shine-effect {
          animation: shine 2s infinite;
        }
        @keyframes gradient-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .rotating-gradient {
          animation: gradient-rotate 3s linear infinite;
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
      
      <img
        src="/img/green.svg"
        alt="Green Light"
        className="absolute top-0 left-0 transform -translate-x-1/2 pointer-events-none opacity-30 z-0"
      />
      
      <div className="text-center mt-10 relative z-10">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Pricing
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-2 max-w-md mx-auto px-2">
          Choose the plan that fits your reading needs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12 px-2 sm:px-0 relative z-10 items-center">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            animate={{
              scale: selected === index ? 1.05 : 1,
              zIndex: selected === index ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setSelected(index)}
            className={cn(
              "rounded-2xl cursor-pointer overflow-hidden transition-all duration-500 ease-in-out relative group transform-gpu",
              "before:absolute before:inset-0 before:rounded-2xl before:p-[2px] before:bg-gradient-to-r before:from-cyan-400 before:via-purple-500 before:to-pink-500 before:transition-all before:duration-500",
              // Make middle card (index 1) bigger
              index === 1 ? "lg:scale-110 lg:mt-0" : "lg:mt-8",
              selected === index
                ? "before:opacity-100 shadow-[0_0_25px_8px_rgba(0,240,255,0.3)] hover:scale-105 hover:-translate-y-3 hover:shadow-[0_0_35px_12px_rgba(0,240,255,0.4)]"
                : "before:opacity-60 hover:before:opacity-100 hover:scale-103 hover:-translate-y-2 hover:shadow-[0_0_20px_6px_rgba(139,0,255,0.3)]"
            )}
            style={{
              background: 'linear-gradient(135deg, #00f0ff, #8b00ff, #ff00c8, #00f0ff)',
              padding: '2px',
            }}
          >
            <Card className="bg-black text-white h-full rounded-2xl overflow-hidden relative z-10 transition-all duration-500 ease-in-out">
              <CardContent className="p-6 flex flex-col h-full bg-gradient-to-br from-black via-gray-900/80 to-gray-800/40 rounded-2xl group-hover:from-black group-hover:via-gray-900/90 group-hover:to-black/80 transition-all duration-500 ease-in-out">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold group-hover:text-cyan-300 transition-colors duration-500">
                    {plan.title}
                  </h3>
                  {/* Enhanced Badge with Gradient Background */}
                  <div className="relative p-[1px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full group-hover:from-cyan-300 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-500">
                    <div className="bg-black rounded-full px-3 py-1">
                      <span className="text-xs font-medium bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-500">
                        {plan.badge}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Image with Gradient Border */}
                <div className="mb-4 relative h-32 sm:h-40 w-full overflow-hidden rounded-xl p-[2px] bg-gradient-to-r from-cyan-400/50 via-purple-500/50 to-pink-500/50 group-hover:from-cyan-400 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-500">
                  <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black">
                    {/* Custom Visual Icons */}
                    {index === 0 && (
                      // Radar Scanner Icon
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-24 h-24">
                          <div className="absolute inset-0 border-2 border-cyan-400 rounded-full animate-ping opacity-30"></div>
                          <div className="absolute inset-2 border-2 border-cyan-400 rounded-full animate-pulse"></div>
                          <div className="absolute inset-4 border-2 border-cyan-400 rounded-full"></div>
                          <div className="absolute top-1/2 left-1/2 w-0.5 h-12 bg-gradient-to-t from-cyan-400 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-45 animate-spin origin-bottom"></div>
                          <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                      </div>
                    )}
                    {index === 1 && (
                      // Brain Dashboard Icon
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-24 h-24">
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
                          <svg className="w-full h-full text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5S6.62 12.5 8 12.5s2.5 1.12 2.5 2.5S9.38 17.5 8 17.5zM8 11.5c-1.38 0-2.5-1.12-2.5-2.5S6.62 6.5 8 6.5s2.5 1.12 2.5 2.5S9.38 11.5 8 11.5zM16 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM16 11.5c-1.38 0-2.5-1.12-2.5-2.5S14.62 6.5 16 6.5s2.5 1.12 2.5 2.5S17.38 11.5 16 11.5z"/>
                          </svg>
                          <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                          <div className="absolute bottom-2 left-2 w-1 h-1 bg-pink-400 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    )}
                    {index === 2 && (
                      // Globe with Crypto Overlay
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-24 h-24">
                          <div className="absolute inset-0 border-2 border-blue-400 rounded-full"></div>
                          <div className="absolute inset-2 border border-blue-400/50 rounded-full"></div>
                          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-400/50 transform -translate-y-1/2"></div>
                          <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-blue-400/30 transform -translate-y-1/2 rounded-full"></div>
                          <div className="absolute top-3/4 left-0 right-0 h-0.5 bg-blue-400/30 transform -translate-y-1/2 rounded-full"></div>
                          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-blue-400/50 transform -translate-x-1/2"></div>
                          <div className="absolute top-2 right-2 text-yellow-400 text-xs">₿</div>
                          <div className="absolute bottom-2 left-2 text-green-400 text-xs">$</div>
                          <div className="absolute top-1/2 right-1 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-transparent transform -translate-y-1/2 animate-pulse"></div>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent group-hover:from-gray-900/60 transition-all duration-500" />
                    <span className="absolute inset-0 flex items-center justify-center font-semibold text-center text-white text-sm sm:text-base z-10 group-hover:text-cyan-300 transition-colors duration-500">
                      {plan.subtitle}
                    </span>
                  </div>
                </div>

                <div className="text-xl sm:text-2xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500">
                  {plan.price}
                  <span className="text-sm font-normal group-hover:text-gray-300"> /month*</span>
                </div>
                <div className="text-sm text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-500">{plan.note}</div>
                
                {/* Features as bullet points */}
                <ul className="text-sm text-gray-300 mb-6 flex-grow group-hover:text-gray-200 transition-colors duration-500 space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-cyan-400 mr-2 mt-1 text-xs">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                  {/* Enhanced Button with Gradient Border */}
                  <div className="relative p-[2px] rounded-lg bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 group-hover:from-cyan-300 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-500 animated-border">
                  <button               
                    className="glow-button relative w-full"               
                    style={{                 
                      background: "linear-gradient(90deg, #000000, #000814)",                 
                      color: "white",                 
                      fontWeight: "600",                 
                      fontSize: "1rem",                 
                      padding: "0.75rem 2.5rem",                 
                      borderRadius: "0.375rem",                 
                      border: "none",                 
                      position: "relative",                 
                      overflow: "hidden",                 
                      transition: "all 0.3s ease-in-out",                 
                      cursor: "pointer",                 
                      width: "100%",               
                    }}               
                    onMouseDown={(e) => {                 
                      e.currentTarget.style.transform = "scale(0.98)";               
                    }}               
                    onMouseUp={(e) => {                 
                      e.currentTarget.style.transform = "scale(1)";               
                    }}               
                    onMouseEnter={(e) => {                 
                      e.currentTarget.style.background = "linear-gradient(90deg, #00f0ff, #8b00ff)";                 
                      e.currentTarget.style.transform = "translateY(-2px)";               
                    }}               
                    onMouseLeave={(e) => {                 
                      e.currentTarget.style.background = "linear-gradient(90deg, #000000, #000814)";                 
                      e.currentTarget.style.transform = "translateY(0)";               
                    }}             
                  >               
                    <div className="relative z-10">Proceed</div>               
                    {/* Button shine effect */}               
                    <div                  
                      className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"                 
                      style={{                   
                        background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",                   
                        transform: "translateX(-100%)",                   
                        animation: "shine 2s infinite"                 
                      }}               
                    />             
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Subtle Animation Section - Added above bottom fade */}
      <div className="relative z-30 flex flex-col items-center justify-center mt-12 mb-0">
        {/* Subtitle with Subtle Animation */}
        <div 
          className="max-w-2xl text-lg text-center text-gray-300 leading-relaxed opacity-0 transform translate-y-5"
          style={{
            animation: 'fadeInUp 0.8s ease-out 0.4s forwards'
          }}
        >
         
        </div>
        
        {/* Decorative Elements */}
        <div 
          className="flex items-center gap-2 mt-4 opacity-0 transform scale-80"
          style={{
            animation: 'fadeInScale 0.8s ease-out 0.6s forwards'
          }}
        >
          <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#00f0ff]"></div>
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00f0ff] to-[#8b00ff] animate-pulse"></div>
          <div className="w-8 h-[1px] bg-gradient-to-r from-[#8b00ff] to-transparent"></div>
        </div>
      </div>

      {/* Bottom Gradient Fade with Blue Tint */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 via-blue-950/30 to-transparent z-25" />
      
    </section>
  );
}