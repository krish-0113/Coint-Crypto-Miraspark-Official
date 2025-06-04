"use client"
import { useSearchParams, useLocation, useNavigate } from "react-router-dom"
import { Card, CardContent } from "../ui/card"

function AuthSectionImage() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  let imageName = "default.jpg"; // Optional default image

  if (path === "/signup") {
    imageName = "signup.jpg";
  } else if (path === "/login") {
    imageName = "login.jpg";
  } else if (path === "/forget-password") {
    imageName = "forget-password.jpg";
  }

  const [searchParams] = useSearchParams()
  const twin = searchParams.get("twin")

  const handleLogoClick = () => {
    navigate('/');
  }

  return (
    <Card className="h-screen w-full border-none rounded-none relative overflow-hidden">
      <CardContent className="flex h-full items-center justify-center p-0">
        <div className="w-full h-full relative">
          {/* Background Image */}
          <img
            src={`/img/${imageName}`}
            alt="Auth Background"
            className="w-full h-full object-cover absolute inset-0 scale-105 transition-transform duration-[20s] ease-linear hover:scale-110"
          />

          {/* Enhanced Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20 z-10" />

          {/* Animated Particles/Dots */}
          <div className="absolute inset-0 z-20">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <div className="particle particle-5"></div>
            <div className="particle particle-6"></div>
          </div>

          {/* Glowing Border Effect */}
          <div className="absolute inset-0 z-20">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-60"></div>
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-60"></div>
            <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-60"></div>
          </div>

          {/* Logo in Bottom Center - Clickable */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 sm:bottom-8 md:bottom-10 z-40">
            <div className="relative cursor-pointer" onClick={handleLogoClick}>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 scale-150 animate-pulse"></div>
              <img
                src="/img/Logo.png"
                alt="Logo"
                className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 xl:h-36 xl:w-36 drop-shadow-2xl transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </div>
          </div>

          {/* Content Container */}
          <div className="absolute inset-0 z-30 flex flex-col justify-center items-center text-white px-4 sm:px-6 md:px-8">
            {/* Title with Enhanced Styling */}
            <div className="text-center space-y-3 sm:space-y-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-pink-400 drop-shadow-lg leading-tight">
                Crypto News Platform
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-light leading-relaxed">
                Stay ahead of the market with real-time crypto insights and analysis
              </p>

              {/* Animated Stats or Features */}
              <div className="flex justify-center space-x-4 sm:space-x-6 md:space-x-8 mt-6 sm:mt-8 text-xs sm:text-sm md:text-base">
                <div className="text-center">
                  <div className="text-cyan-400 font-bold text-base sm:text-lg md:text-xl">24/7</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Live Updates</div>
                </div>
                <div className="text-center">
                  <div className="text-purple-400 font-bold text-base sm:text-lg md:text-xl">1000+</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Cryptocurrencies</div>
                </div>
                <div className="text-center">
                  <div className="text-pink-400 font-bold text-base sm:text-lg md:text-xl">Expert</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Analysis</div>
                </div>
              </div>
            </div>

            {/* Floating Elements - Responsive positioning */}
            <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute top-1/3 right-1/4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-400 rounded-full animate-pulse opacity-75"></div>
            <div className="absolute bottom-1/3 left-1/3 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-pink-400 rounded-full animate-bounce opacity-75"></div>
          </div>
        </div>
      </CardContent>

      <style>{`
        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: linear-gradient(45deg, #00f0ff, #8b00ff);
          border-radius: 50%;
          opacity: 0.6;
          animation: float 6s ease-in-out infinite;
        }
        
        @media (min-width: 640px) {
          .particle {
            width: 4px;
            height: 4px;
          }
        }
        
        @media (min-width: 1024px) {
          .particle {
            width: 5px;
            height: 5px;
          }
        }
        
        .particle-1 {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .particle-2 {
          top: 60%;
          left: 20%;
          animation-delay: 1s;
        }
        
        .particle-3 {
          top: 30%;
          right: 15%;
          animation-delay: 2s;
        }
        
        .particle-4 {
          bottom: 40%;
          right: 25%;
          animation-delay: 3s;
        }
        
        .particle-5 {
          top: 70%;
          left: 60%;
          animation-delay: 4s;
        }
        
        .particle-6 {
          top: 15%;
          right: 40%;
          animation-delay: 5s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-15px) scale(1.1);
            opacity: 1;
          }
        }
        
        @media (min-width: 768px) {
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) scale(1);
              opacity: 0.6;
            }
            50% {
              transform: translateY(-20px) scale(1.1);
              opacity: 1;
            }
          }
        }
        
        /* Subtle background animation */
        @keyframes backgroundShift {
          0% { filter: hue-rotate(0deg); }
          50% { filter: hue-rotate(10deg); }
          100% { filter: hue-rotate(0deg); }
        }
        
        .bg-image {
          animation: backgroundShift 20s ease-in-out infinite;
        }

        /* Custom responsive breakpoints for better mobile experience */
        @media (max-width: 320px) {
          .particle {
            width: 2px;
            height: 2px;
          }
        }
        
        @media (min-width: 320px) and (max-width: 480px) {
          .particle {
            width: 3px;
            height: 3px;
          }
        }
      `}</style>
    </Card>
  )
}

export default AuthSectionImage