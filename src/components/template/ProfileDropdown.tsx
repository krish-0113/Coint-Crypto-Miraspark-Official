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
// import { useGetProfile } from "@/lib/hooks/api/profile.hook";

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
    style={{
      padding: "2px",
      borderRadius: "0.7rem",
      background: "linear-gradient(90deg, #00f0ff, #0099ff, #8b00ff, #ff00cc, #8b00ff, #0099ff, #00f0ff)",
      backgroundSize: "300% 100%",
      animation: "gradientFlow 4s ease-in-out infinite",
      display: "inline-block",
      transition: "all 0.3s ease-in-out",
      boxShadow: "0 0 10px rgba(0, 240, 255, 0.9), 0 0 18px rgba(139, 0, 255, 0.9)", // ⬅ updated
      filter: "brightness(1.0) saturate(1.2)",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = "0 0 18px rgba(0, 240, 255, 0.7), 0 0 30px rgba(139, 0, 255, 0.6)"; // ⬅ updated
      e.currentTarget.style.filter = "brightness(1.1) saturate(1.3)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = "0 0 10px rgba(0, 240, 255, 0.6), 0 0 20px rgba(139, 0, 255, 0.4)"; // ⬅ updated
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
      `}
    </style>
    <button
      className="glow-button"
      onClick={() => {
        console.log("Navigating to login...");
        navigate("/login");
      }}
       
      style={{
        background: "linear-gradient(90deg, #000000, #000814)",
        color: "white",
        fontWeight: "600",
        fontSize: "1rem",
        padding: "0.59rem 2rem",
        borderRadius: "0.5rem",
        border: "none",
        boxShadow: "0 0 6px #00f0ff", // ⬅ updated
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s ease-in-out",
        cursor: "pointer",
        width: "100%",
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.boxShadow = "0 0 10px #00f0ff"; // ⬅ updated
        e.currentTarget.style.transform = "scale(0.96)";
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.boxShadow = "0 0 12px #00f0ff"; // ⬅ updated
        e.currentTarget.style.transform = "scale(1)";
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "linear-gradient(90deg, #00f0ff, #8b00ff)";
        e.currentTarget.style.boxShadow = "0 0 18px #8b00ff"; // ⬅ updated
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "linear-gradient(90deg, #000000, #000814)";
        e.currentTarget.style.boxShadow = "0 0 6px #00f0ff"; // ⬅ updated
      }}
    >
      <div className="relative z-10">Login</div>
    </button>
  </div>
  
  );
}