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
    <div
      className="relative inline-block"
      style={{
        // Responsive padding - mobile first
        padding: "2px",
        borderRadius: "0.7rem",
        background: "linear-gradient(90deg, #00f0ff, #0099ff, #8b00ff, #ff00cc, #8b00ff, #0099ff, #00f0ff)",
        backgroundSize: "300% 100%",
        animation: "gradientFlow 4s ease-in-out infinite",
        display: "inline-block",
        transition: "all 0.3s ease-in-out",
        // Mobile-friendly box shadow
        boxShadow: "0 0 8px rgba(0, 240, 255, 0.8), 0 0 15px rgba(139, 0, 255, 0.8)",
        filter: "brightness(1.0) saturate(1.2)",
        // Responsive max width
        maxWidth: "90vw",
        width: "auto",
        minWidth: "120px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 0 15px rgba(0, 240, 255, 0.7), 0 0 25px rgba(139, 0, 255, 0.6)";
        e.currentTarget.style.filter = "brightness(1.1) saturate(1.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 0 8px rgba(0, 240, 255, 0.8), 0 0 15px rgba(139, 0, 255, 0.8)";
        e.currentTarget.style.filter = "brightness(1.0) saturate(1.2)";
      }}
    >
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
          
          @media (max-width: 640px) {
            .mobile-login-btn {
              font-size: 0.875rem !important;
              padding: 0.5rem 1.25rem !important;
              min-height: 44px !important;
            }
          }
          
          @media (min-width: 641px) and (max-width: 768px) {
            .mobile-login-btn {
              font-size: 0.9375rem !important;
              padding: 0.59rem 1.75rem !important;
              min-height: 48px !important;
            }
          }
          
          @media (min-width: 769px) {
            .mobile-login-btn {
              font-size: 1rem !important;
              padding: 0.59rem 2rem !important;
              min-height: 52px !important;
            }
          }
        `}
      </style>
      
      <button
        className="glow-button mobile-login-btn"
        onClick={() => {
          console.log("Navigating to login...");
          navigate("/login");
        }}
        style={{
          background: "linear-gradient(90deg, #000000, #000814)",
          color: "white",
          fontWeight: "600",
          // Default mobile styles
          fontSize: "0.875rem",
          padding: "0.5rem 1.25rem",
          borderRadius: "0.5rem",
          border: "none",
          boxShadow: "0 0 6px #00f0ff",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.3s ease-in-out",
          cursor: "pointer",
          width: "100%",
          minHeight: "44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // Prevent text selection on mobile
          userSelect: "none",
          WebkitUserSelect: "none",
          WebkitTapHighlightColor: "transparent",
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.boxShadow = "0 0 10px #00f0ff";
          e.currentTarget.style.transform = "scale(0.96)";
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.boxShadow = "0 0 12px #00f0ff";
          e.currentTarget.style.transform = "scale(1)";
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "linear-gradient(90deg, #00f0ff, #8b00ff)";
          e.currentTarget.style.boxShadow = "0 0 18px #8b00ff";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "linear-gradient(90deg, #000000, #000814)";
          e.currentTarget.style.boxShadow = "0 0 6px #00f0ff";
        }}
        // Touch events for mobile
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
  );
}