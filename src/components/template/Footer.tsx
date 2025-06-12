import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
// import { Logo } from "../shared/Logo";
import { Link } from "react-router-dom";
import { PATHS } from '@/constants/page-paths';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Custom CSS for animations */}
      <style >{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 240, 255, 0.3); }
          50% { box-shadow: 0 0 30px rgba(139, 0, 255, 0.5), 0 0 40px rgba(255, 0, 200, 0.3); }
        }
        
        @keyframes rotate-border {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .gradient-bg {
          background: linear-gradient(135deg, #000000, #0d0d0d, #000428, #000000);
          position: relative;
        }
        
        .gradient-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #000000, #000000, #001f3f, #000000);
          background-size: 400% 400%;
          animation: gradient-shift 8s ease infinite;
          opacity: 0.1;
          z-index: 0;
        }
        
        /* Dark black gradient overlay on right side */
        .gradient-bg::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent 0%,
            rgba(0,0,0,0.3) 20%,
            rgba(0,0,0,0.6) 50%,
            rgba(0,0,0,0.8) 70%,
            rgba(0,0,0,0.95) 100%
          );
          z-index: 0;
          pointer-events: none;
        }
        
        /* Add a smoother gradient animation */
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .content-wrapper {
          position: relative;
          z-index: 1;
        }
        
        .animated-logo {
          animation: float 6s ease-in-out infinite;
        }
        
        .social-icon {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00f0ff, #8b00ff, #ff00c8);
          background-size: 300% 300%;
          animation: gradient-shift 4s ease infinite;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        
        .social-icon::before {
          content: '';
          position: absolute;
          top: 2px;
          left: 2px;
          right: 2px;
          bottom: 2px;
          background: #001025;
          border-radius: 50%;
          z-index: 1;
        }
        
        .social-icon:hover {
          transform: scale(1.1);
          animation: glow-pulse 2s ease infinite;
        }
        
        .social-icon svg {
          position: relative;
          z-index: 2;
          color: #fff;
          transition: all 0.3s ease;
        }
        
        .social-icon:hover svg {
          color: #00f0ff;
          filter: drop-shadow(0 0 10px #00f0ff);
        }
        
        .scroll-to-top {
          background: linear-gradient(135deg, #00f0ff, #8b00ff, #ff00c8);
          background-size: 300% 300%;
          animation: gradient-shift 3s ease infinite;
          position: relative;
          overflow: hidden;
        }
        
        .scroll-to-top::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          animation: shimmer 2s infinite;
        }
        
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #00f0ff, #8b00ff, #ff00c8);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 300% 300%;
          animation: gradient-shift 5s ease infinite;
          font-weight: 600;
        }
        
        .hover-glow {
          transition: all 0.3s ease;
        }
        
        .hover-glow:hover {
          color: #00f0ff;
          text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
        }
        
        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #00f0ff, #8b00ff, #ff00c8, transparent);
          border: none;
          animation: gradient-shift 6s ease infinite;
          background-size: 300% 300%;
        }
        
        .fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
        
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

        /* Additional dark gradient effect for right side columns */
        .right-side-dark {
          position: relative;
        }
        
        .right-side-dark::before {
          content: '';
          position: absolute;
          top: -20px;
          left: -20px;
          right: -20px;
          bottom: -20px;
          background: linear-gradient(135deg, 
            transparent 0%,
            rgba(0,0,0,0.2) 30%,
            rgba(0,0,0,0.4) 60%,
            rgba(0,0,0,0.6) 100%
          );
          border-radius: 12px;
          z-index: -1;
          pointer-events: none;
        }
      `}</style>

      <footer className="gradient-bg text-white py-14 px-6 sm:px-8 md:px-10 lg:px-20 relative overflow-hidden">
        <div className="content-wrapper">
          {/* Top Section */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start fade-in-up">
            {/* 1. Logo & Description */}
{/* 1. Logo & Description */}
<div className="flex flex-col items-start -mt-6 col-span-1 lg:col-span-1">
  <div className="animated-logo">
    <Link to={PATHS.HOME}>
      <div className="flex items-center h-full w-full">
        {/* Logo */}
        <img
          src="/img/mainLogo.png"
          className="object-contain w-12 h-12 brightness-110 contrast-125 border-4 border-white rounded-full p-1 filter drop-shadow-lg"
          alt="Company Logo"
        />

        {/* Coin and Digest vertically aligned */}
        <div className="flex flex-col justify-center ml-2 text-white leading-none -space-y-2">
          <div className="flex items-start text-2xl font-bold">
            <span className="text-2xl ">C</span>
            <span>oin</span>
          </div>
          <div className="flex items-start text-2xl font-bold">
            <span className="text-2xl ">D</span>
            <span>igest</span>
          </div>
        </div>
      </div>
    </Link>
  </div>
  <p className="text-sm text-gray-300 leading-relaxed mt-2 hover-glow">
    Welcome to <span className="gradient-text">Crypto Digest</span>, your gateway to the world of Web3 trading!
    Our user-friendly platform empowers you to explore a wide range of
    popular cryptocurrencies.
  </p>
</div>

            {/* 2. Company Links and Learn More - Side by Side on Mobile */}
            <div className="col-span-1 md:col-span-1 lg:col-span-2 grid grid-cols-2 gap-6 md:gap-8">
              {/* Company Links */}
              <div className="space-y-3">
                <h3 className="gradient-text text-base mb-1">Company</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    <Link to={'/'} className="hover-glow hover:underline transition-all duration-300">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to={'/about'} className="hover-glow hover:underline transition-all duration-300">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to={'/'} className="hover-glow hover:underline transition-all duration-300">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link to={'/'} className="hover-glow hover:underline transition-all duration-300">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to={'/'} className="hover-glow hover:underline transition-all duration-300">
                      More Templates
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Learn More Links */}
              <div className="space-y-3">
                <h3 className="gradient-text text-base mb-1">Learn More</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    <Link to="/pricing" className="hover-glow hover:underline transition-all duration-300">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover-glow hover:underline transition-all duration-300">
                      License
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover-glow hover:underline transition-all duration-300">
                      Style Guide
                    </Link>
                  </li>
                  <li>
                    <Link to="/news" className="hover-glow hover:underline transition-all duration-300">
                      News
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* 3. Social Icons - Enhanced with dark gradient */}
            <div className="space-y-3 right-side-dark col-span-1">
              <h3 className="gradient-text text-base mb-1">Follow US</h3>
              <div className="flex space-x-4">
                <a href="#" aria-label="Instagram" className="social-icon">
                  <FaInstagram className="text-xl" />
                </a>
                <a href="#" aria-label="Facebook" className="social-icon">
                  <FaFacebook className="text-xl" />
                </a>
                <a href="#" aria-label="Twitter" className="social-icon">
                  <FaXTwitter className="text-xl" />
                </a>
                <a href="#" aria-label="LinkedIn" className="social-icon">
                  <FaLinkedinIn className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="divider my-8" />

          {/* Bottom Text */}
          <div className="text-center text-sm text-gray-400 flex flex-col md:flex-row items-center justify-center gap-4 flex-wrap fade-in-up">
            <span>© 2025 <span className="gradient-text">CryptoDigest</span>. All rights reserved.</span>
            <span className="hidden md:inline text-gray-600">|</span>
            <Link to="/terms" className="hover-glow hover:underline transition-all duration-300">
              Terms & Condition
            </Link>
            <span className="hidden md:inline text-gray-600">|</span>
            <Link to="/privacy" className="hover-glow hover:underline transition-all duration-300">
              Privacy Policy
            </Link>
            <span className="hidden md:inline text-gray-600">|</span>
            <Link to="/contact-us" className="hover-glow hover:underline transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="scroll-to-top fixed bottom-5 right-5 w-12 h-12 text-white font-extrabold rounded-full shadow-2xl hover:scale-110 z-50 flex items-center justify-center transition-all duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="relative z-10" />
        </button>
      </footer>
    </>
  );
};