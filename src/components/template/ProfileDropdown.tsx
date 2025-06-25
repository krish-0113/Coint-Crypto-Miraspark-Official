import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PATHS } from "@/constants/page-paths";
import { useAppConfig } from "../layouts/AppConfigProvider";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";

interface ProfileMenuList {
  title: string;
  path: string;
}

export function ProfileDropdown() {
  const navigate = useNavigate();

  return (
    <>
      <style>
        {`
          @keyframes gradientFlow {
            0%, 100% {
              background-position: 0% 50%;
            }
            25% {
              background-position: 25% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            75% {
              background-position: 75% 50%;
            }
          }
          
          .glow-container {
            position: relative;
            display: inline-block;
            padding: 2px;
            border-radius: 0.7rem;
            background: linear-gradient(90deg, #00f0ff, #0099ff, #8b00ff, #ff00cc, #8b00ff, #0099ff, #00f0ff);
            background-size: 300% 100%;
            animation: gradientFlow 4s ease-in-out infinite;
            transition: all 0.3s ease-in-out;
            box-shadow: 0 0 8px rgba(0, 240, 255, 0.8), 0 0 15px rgba(139, 0, 255, 0.8);
            filter: brightness(1.0) saturate(1.2);
            max-width: 90vw;
            width: auto;
            min-width: 100px;
            margin-right: 8px;
          }
          
          .glow-container:hover {
            box-shadow: 0 0 15px rgba(0, 240, 255, 0.7), 0 0 25px rgba(139, 0, 255, 0.6);
            filter: brightness(1.1) saturate(1.3);
          }
          
          .glow-button {
            background: linear-gradient(90deg, #000000, #000814);
            color: white;
            font-weight: 600;
            border-radius: 0.5rem;
            border: none;
            box-shadow: 0 0 6px #00f0ff;
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease-in-out;
            cursor: pointer;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            user-select: none;
            -webkit-user-select: none;
            -webkit-tap-highlight-color: transparent;
          }
          
          .glow-button:hover {
            background: linear-gradient(90deg, #00f0ff, #8b00ff);
            box-shadow: 0 0 18px #8b00ff;
          }
          
          .glow-button:active {
            transform: scale(0.96);
            box-shadow: 0 0 10px #00f0ff;
          }
          
          /* Mobile styles */
          @media (max-width: 640px) {
            .glow-container {
              min-width: 80px;
              margin-right: 4px;
            }
            .glow-button {
              font-size: 0.8rem;
              padding: 0.4rem 0.8rem;
              min-height: 36px;
            }
          }
          
          /* Tablet styles */
          @media (min-width: 641px) and (max-width: 768px) {
            .glow-button {
              font-size: 0.9rem;
              padding: 0.5rem 1.2rem;
              min-height: 42px;
            }
          }
          
          /* Desktop styles */
          @media (min-width: 769px) {
            .glow-button {
              font-size: 1rem;
              padding: 0.6rem 1.5rem;
              min-height: 48px;
            }
          }
        `}
      </style>
      
      <div className="glow-container">
        <button
          className="glow-button"
          onClick={() => {
            console.log("Navigating to login...");
            navigate("/login");
          }}
          onTouchStart={(e) => {
            e.currentTarget.style.transform = "scale(0.96)";
            e.currentTarget.style.background = "linear-gradient(90deg, #00f0ff, #8b00ff)";
          }}
          onTouchEnd={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            setTimeout(() => {
              e.currentTarget.style.background = "linear-gradient(90deg, #000000, #000814)";
            }, 150);
          }}
        >
          <div className="relative z-10 truncate">Login</div>
        </button>
      </div>
    </>
  );
}