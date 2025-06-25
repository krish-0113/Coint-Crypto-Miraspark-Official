"use client"
import { useSearchParams, useLocation, useNavigate } from "react-router-dom"
import { Card, CardContent } from "../ui/card"
import { Link } from 'react-router-dom';
import { PATHS } from '@/constants/page-paths';
import { cn } from '@/lib/utils/cn';

function AuthSectionImage() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  let imageName = "default.jpg";

  if (path === "/signup") {
    imageName = "signup.jpg";
  } else if (path === "/login") {
    imageName = "login.jpg";
  } else if (path === "/forget-password") {
    imageName = "forget-password.jpg";
  } else if(path === "/reset-password"){
    imageName = "signup.jpg";
  }

  const [searchParams] = useSearchParams()
  const twin = searchParams.get("twin")

  return (
    <Card className="h-auto md:h-screen w-full border-none rounded-none relative overflow-hidden">
      <CardContent className="flex h-auto md:h-full items-start md:items-center justify-center p-0">
        <div className="w-full h-auto md:h-full bg-transparent relative min-h-[60px] sm:min-h-[80px] md:min-h-screen">
          {/* Background Image - Hidden on mobile */}
          <div className="absolute inset-0 hidden md:block overflow-hidden">
            <img
              src={`/img/${imageName}`}
              alt="Auth Background"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] ease-linear hover:scale-105"
              style={{
                minWidth: '100%',
                minHeight: '100%',
                objectFit: 'cover',
                objectPosition: 'center center',
                transform: 'translateZ(0)'
              }}
            />
          </div>

          {/* Enhanced Gradient Overlays - Hidden on mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 z-10 hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20 z-10 hidden md:block" />

          {/* Mobile Background - Only visible on mobile */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 md:hidden min-h-[60px] sm:min-h-[80px]" />

          {/* Animated Particles/Dots - Hidden on mobile */}
          <div className="absolute inset-0 z-20 hidden md:block">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <div className="particle particle-5"></div>
            <div className="particle particle-6"></div>
          </div>

          {/* MOBILE ONLY NAVBAR - Compact & Responsive */}
          <div className="md:hidden absolute top-0 left-0 right-0 z-50 flex items-center justify-between bg-black/40 backdrop-blur-sm border-b border-gray-800/30">
            {/* Mobile Menu Button */}
            <button className="p-2 text-white hover:text-cyan-400 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Mobile Logo - Ultra Compact */}
            <Link to={PATHS.HOME} className="flex items-center flex-1 justify-center max-w-[50%]">
              <img
                src="/img/mainLogo.png"
                alt="Logo"
                className="w-4 h-4 object-contain rounded-full border border-white/50 shadow-sm brightness-110"
              />
              <span className="ml-1 text-white text-xs font-bold tracking-tight truncate">
                CoinDigest
              </span>
            </Link>

            {/* Mobile Login Button - Minimal */}
            <Link 
              to="/login" 
              className="inline-flex items-center justify-center px-2 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-medium rounded border border-blue-500/30 shadow-sm hover:shadow-md transition-all duration-200 mr-2"
            >
              Login
            </Link>
          </div>

          {/* DESKTOP NAVBAR - Original Design */}
          <div className="hidden md:block absolute top-4 left-8 z-40">
            <Link to={PATHS.HOME} className="flex items-center h-12">
              <img
                src="/img/mainLogo.png"
                alt="CoinDigest Logo"
                className="w-12 h-12 object-contain rounded-full border-2 border-white shadow-lg brightness-110 contrast-125 relative drop-shadow-2xl transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
              <span className="ml-2 text-white text-4xl font-bold tracking-tight drop-shadow">
                CoinDigest
              </span>
            </Link>
          </div>

          {/* Desktop Login Button */}
          <div className="hidden md:block absolute top-4 right-8 z-40">
            <Link 
              to="/login" 
              className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-base font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl border border-blue-500/30"
            >
              Login
            </Link>
          </div>

          {/* Content Container - Hidden on mobile */}
          <div className="absolute inset-0 z-30 flex-col justify-end items-center text-white px-4 sm:px-6 md:px-8 pb-12 hidden md:flex">
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

            {/* Floating Elements */}
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

        /* Mobile Navbar Optimizations */
        @media (max-width: 480px) {
          .mobile-navbar {
            height: 48px;
            min-height: 48px;
          }
          
          .mobile-logo-text {
            font-size: 11px !important;
            max-width: 80px;
          }
          
          .mobile-login-btn {
            padding: 4px 6px !important;
            font-size: 10px !important;
            min-width: 40px !important;
          }
        }
        
        @media (max-width: 360px) {
          .mobile-navbar {
            height: 44px;
            min-height: 44px;
          }
          
          .mobile-logo-img {
            width: 14px !important;
            height: 14px !important;
          }
          
          .mobile-logo-text {
            font-size: 10px !important;
            max-width: 70px;
          }
          
          .mobile-login-btn {
            padding: 3px 5px !important;
            font-size: 9px !important;
            min-width: 35px !important;
          }
        }
      `}</style>
    </Card>
  )
}

export default AuthSectionImage