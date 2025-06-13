import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef } from "react"

export default function CryptoNewsCard() {
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const scrollContainerRef = useRef(null)

  const handleCardClick = () => {
    console.log("Card clicked - navigate to news detail")
  }

  const handleBackClick = () => {
    console.log("Back button clicked")
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  return (
    <div className="h-auto px-4 md:px-10 lg:px-24 py-20 text-white relative group">
      <img
        src="/img/green.svg"
        alt="Green Light"
        className="absolute top-0 left-0 transform -translate-x-1/2 pointer-events-none opacity-70 z-0"
      />
      
      {/* Outer container with scroll arrows */}
      <div className="max-w-7xl mx-auto relative mt-6">
        {/* Gradient scroll arrows */}
        <button
          onClick={scrollLeft}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 z-30 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-2 ${
            canScrollLeft ? 'opacity-100' : 'opacity-50 cursor-not-allowed'
          }`}
          disabled={!canScrollLeft}
        >
          <ChevronLeft className="w-4 h-4 text-white" />
        </button>
        
        <button
          onClick={scrollRight}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 z-30 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-2 ${
            canScrollRight ? 'opacity-100' : 'opacity-50 cursor-not-allowed'
          }`}
          disabled={!canScrollRight}
        >
          <ChevronRight className="w-4 h-4 text-white" />
        </button>

        {/* Scrollable container */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="overflow-x-auto scrollbar-hide cursor-pointer card-shadow transform transition-transform duration-300 ease-in-out hover:-translate-y-2 relative z-20"
          onClick={handleCardClick}
          style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}
        >
          <div className="min-w-full">
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00f0ff] via-[#8b00ff] to-[#ff00c8] animate-gradient-x z-0 transition-all duration-300 group-hover:opacity-90"></div>

            {/* Card content with dark gradient background */}
            <div className="relative m-[2px] rounded-2xl bg-gradient-to-b from-[#000000] via-[#0a0a0a] to-[#16213e] p-6 z-10">
              <ArrowLeft
                className="mr-2 cursor-pointer text-primary hover:text-white"
                onClick={(e) => {
                  e.stopPropagation() // Prevent card click when clicking the arrow
                  handleBackClick()
                }}
              />

              {/* Header */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between my-6 gap-3">
                <h1 className="text-xl md:text-3xl font-bold">U.S. Justice Department Disbands Crypto Enforcement Unit</h1>
                <div className="mr-4 flex space-x-2 text-xl md:text-2xl">
                  <span>🪙</span>
                  <span>🧑‍⚖️</span>
                  <span>🌐</span>
                  <span>📉</span>
                </div>
              </div>

              {/* Main content */}
              <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,600px)_1fr] gap-6 items-start">
                {/* Image container with animated gradient border */}
                <div className="w-full max-w-[600px] h-auto mx-auto xl:mx-0 relative">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00f0ff] via-[#8b00ff] to-[#ff00c8] animate-gradient-x"></div>
                  <div className="relative m-[2px] rounded-xl overflow-hidden">
                    <img src="/img/news.png" alt="U.S. Department of Justice" className="w-full h-auto object-cover" />
                  </div>
                </div>

                {/* Text content */}
                <div className="text-sm md:text-base leading-relaxed text-gray-300">
                  <p className="mb-4">
                    In a surprising policy shift, the U.S. Justice Department has officially disbanded its National
                    Cryptocurrency Enforcement Team (NCET), which was originally formed to monitor and prosecute crimes
                    involving digital assets...
                  </p>

                  <p className="mb-4">
                    Sources say the department will now redirect its efforts toward investigating digital financial crimes
                    related to terrorism, money laundering, and organized cybercrime.
                  </p>

                  <p>
                    President Javier Milei is facing massive public outrage after backing $LIBRA — a cryptocurrency promoted
                    as Argentina's digital economic savior — which has now lost over 90% of its value. Allegations of
                    insider trading and a potential rug pull have shaken investor confidence. Economic analysts fear this
                    incident could hurt Argentina's attempts to modernize its economy, through blockchain technology and
                    deepen the country's financial instability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style >{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  )
}