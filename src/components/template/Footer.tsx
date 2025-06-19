import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { Send } from "lucide-react";
import { FaArrowUp } from "react-icons/fa";
import { useState } from "react";
import { FaRobot } from "react-icons/fa";
import { Logo } from "../shared/Logo"; // Make sure your Logo component includes icon + "Crypto Digest" text or adjust below

 import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { PATHS } from '@/constants/page-paths';

export const Footer = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "How can I assist you?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        { sender: "user", text: input },
        {
          sender: "bot",
          text: "I'm Luna, your AI assistant. Welcome to Coin Digest!",
        },
      ]);
      setInput("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Custom CSS for animations */}
      <style>{`
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

        /* Gradient chat bot button with outer border */
        .gradient-chatbot-wrapper {
          position: relative;
          padding: 3px;
          border-radius: 50%;
          background: linear-gradient(135deg, #8b00ff 0%, #ff00c8 50%, #1e3a8a 100%);
          background-size: 300% 300%;
          animation: gradient-border 3s ease infinite;
          
          /* Add outer gradient border line */
          border: 2px solid transparent;
          background-clip: padding-box;
        }
        
        .gradient-chatbot-wrapper::before {
          content: '';
          position: absolute;
          top: -3px;
          left: -3px;
          right: -3px;
          bottom: -3px;
          background: linear-gradient(45deg, #8b00ff, #ff00c8, #1e3a8a, #00f0ff, #8b00ff);
          background-size: 400% 400%;
          border-radius: 50%;
          z-index: -1;
          animation: gradient-border-line 4s ease infinite;
        }
        
        .gradient-chatbot {
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%);
          background-size: 300% 300%;
          animation: gradient-shift 4s ease infinite;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px 0 rgba(139, 0, 255, 0.4);
          border-radius: 50%;
          border: none;
          position: relative;
          z-index: 1;
        }
        
        /* White icon inside button */
        .gradient-chatbot svg,
        .gradient-chatbot i,
        .gradient-chatbot .icon {
          color: white !important;
          fill: white !important;
        }
        
        /* Hover effect */
        .gradient-chatbot:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 20px 0 rgba(139, 0, 255, 0.6);
        }

        /* Gradient chat box */
        .gradient-chat-box {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: 2px solid transparent;
          background-clip: padding-box;
          position: relative;
        }
        
        .gradient-chat-box::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(135deg, #667eea, #764ba2, #f093fb, #f5576c);
          background-size: 300% 300%;
          animation: gradient-shift 6s ease infinite;
          border-radius: 12px;
          z-index: -1;
        }
        
        .chat-header-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          background-size: 300% 300%;
          animation: gradient-shift 5s ease infinite;
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
          <div className="flex items-start text-xl font-bold">
            <span className="text-xl ">C</span>
            <span>oin</span>
          </div>
          <div className="flex items-start text-xl font-bold">
            <span className="text-xl ">D</span>
            <span>igest</span>
          </div>
        </div>
      </div>
    </Link>
  </div>
  <p className="text-sm text-gray-300 leading-relaxed mt-2 hover-glow">
    Welcome to <span className="gradient-text">CoinDigest</span>, your gateway to the world of Web3 trading!
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
            <span>© 2025 <span className="gradient-text">CoinDigest</span>. All rights reserved.</span>
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

        {/* Fixed Buttons Container - Positioned side by side */}
<div className="fixed bottom-5 right-5 flex items-center space-x-4 z-50">
  
  {/* Scroll to Top Button with gradient wrapper */}
  <div className="gradient-button-wrapper">
    <button
      onClick={scrollToTop}
      className="scroll-to-top w-12 h-12 text-white font-extrabold rounded-full shadow-2xl hover:scale-110 flex items-center justify-center transition-all duration-300"
      aria-label="Scroll to top"
    >
      <FaArrowUp className="relative z-10" />
    </button>
  </div>
  
  {/* Chatbot Button with gradient wrapper */}
  <div className="gradient-chatbot-wrapper">
    <button
      onClick={() => setShowChat(!showChat)}
      className="gradient-chatbot w-12 h-12 text-white rounded-full shadow-lg hover:scale-110 flex items-center justify-center transition-all duration-300"
      aria-label="Chat with bot"
    >
      <FaRobot className="relative z-10" />
    </button>
  </div>
  
</div>

       {/* Gradient Chat Box */}
       {/* Gradient Chat Box with outer border */}
{showChat && (
  <div className="fixed bottom-20 right-5 z-50">
    {/* Outer gradient border wrapper */}
    <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
      <div className="w-80 bg-black rounded-xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-4 py-3 text-base font-semibold">
          Luna (AI Assistant)
        </div>
        
        {/* Messages Container */}
        <div className="flex-1 min-h-56 max-h-64 overflow-y-auto px-3 py-2 space-y-3 bg-black text-sm">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-end space-x-2 ${
                msg.sender === "bot" ? "justify-start" : "justify-end"
              }`}
            >
              {/* Bot message (left) */}
              {msg.sender === "bot" && (
                <Avatar className="w-6 h-6 ring-2 ring-purple-400/50">
                  <AvatarImage src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png" alt="Bot" />
                  <AvatarFallback className="bg-purple-600 text-white text-xs">AI</AvatarFallback>
                </Avatar>
              )}
              
              <div
                className={`rounded-xl px-4 py-2 max-w-[75%] backdrop-blur-sm ${
                  msg.sender === "bot"
                    ? "bg-gradient-to-r from-purple-900/80 via-pink-900/80 to-blue-900/80 text-purple-100 border border-purple-500/30 shadow-lg"
                    : "bg-gradient-to-r from-slate-700/80 via-slate-600/80 to-slate-700/80 text-gray-100 border border-slate-500/30 shadow-lg"
                }`}
              >
                {msg.text}
              </div>
              
              {/* User message (right) */}
              {msg.sender !== "bot" && (
                <Avatar className="w-6 h-6 ring-2 ring-blue-400/50">
                  <AvatarImage src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" alt="User" />
                  <AvatarFallback className="bg-blue-600 text-white text-xs">U</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
        </div>
        
        {/* Input Section */}
        <div className="border-t border-purple-500/30 p-3 bg-black">
          <div className="flex space-x-2">
            {/* Input Field with gradient border */}
            <div className="flex-1 relative p-[1px] rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="w-full bg-slate-900 text-gray-100 text-sm px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400/50 placeholder-gray-400 border-0"
              />
            </div>
            
            {/* Send Button with gradient border */}
            <div className="relative p-[1px] rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
              <button
                onClick={handleSend}
                className="bg-gradient-to-r from-purple-700 via-pink-700 to-blue-700 hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 px-4 py-2 rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="Send"
              >
                <Send className="text-white w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
)}
      </footer>
    </>
  );
};