import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  FaBitcoin,
  FaEthereum,
  FaDog,
} from "react-icons/fa";
import { SiRipple, SiBinance, SiTether, SiSolana } from "react-icons/si";
import { useNavigate } from "react-router-dom";
const coins = [
  { name: "Bitcoin", icon: <FaBitcoin />, price: "$78,750.60", change: "-1.2%", color: "bg-yellow-500" },
  { name: "Ethereum", icon: <FaEthereum />, price: "$1,494.80", change: "4.1%", color: "bg-purple-500" },
  { name: "XRP", icon: <SiRipple />, price: "$1.94", change: "-1.2%", color: "bg-blue-500" },
  { name: "BNB", icon: <SiBinance />, price: "$571.92", change: "4.1%", color: "bg-yellow-400" },
  { name: "USDC", icon: <SiTether />, price: "$1,494.80", change: "-1.2%", color: "bg-green-500" },
  { name: "Solana", icon: <SiSolana />, price: "$109.36", change: "4.1%", color: "bg-indigo-500" },
  { name: "Dogecoin", icon: <FaDog />, price: "$0.1512", change: "4.1%", color: "bg-orange-400" },
];

const languages = ["English", "Hindi", "Spanish"];
const notifications = ["Email", "SMS", "Push Notification"];
const  OnboardingModal = () => {
  const [step, setStep] = useState(1);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedNotifications, setSelectedNotifications] = useState([]);
   const navigate=useNavigate()
  const toggleNotification = (option) => {
    setSelectedNotifications((prev) =>
      prev.includes(option) ? prev.filter((n) => n !== option) : [...prev, option]
    );
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2 className="text-xl font-semibold mb-6 text-center">Choose Your Coin</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {coins.map((coin) => (
                <div
                  key={coin.name}
                  onClick={() => setSelectedCoin(coin.name)}
                  className={`p-2 rounded-2xl cursor-pointer backdrop-blur-xl border border-white/20 transition-transform duration-300 ease-in-out hover:scale-105 ${
                    selectedCoin === coin.name ? "ring-4 ring-green-400" : ""
                  } ${coin.color} text-white shadow-lg flex flex-col items-center justify-center select-none`}
                >
                  <div className="text-4xl mb-3">{coin.icon}</div>
                  <div className="font-semibold">{coin.name}</div>
                 
                </div>
              ))}
            </div>
          </>
        );

      case 2:
        return (
          <>
            <h2 className="text-xl font-semibold mb-6 text-center">Select Language</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-5 py-2 rounded-full border font-medium transition-colors duration-300 ${
                    selectedLanguage === lang ? "bg-green-500 text-white" : "bg-white text-black"
                  } hover:bg-green-400 hover:text-white`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </>
        );

      case 3:
        return (
          <>
            <h2 className="text-xl font-semibold mb-6 text-center">Notification Preferences</h2>
            <div className="flex flex-col gap-4 max-w-xs mx-auto">
              {notifications.map((note) => (
                <label
                  key={note}
                  className="inline-flex items-center gap-3 cursor-pointer select-none"
                >
                  <input
                    type="checkbox"
                    checked={selectedNotifications.includes(note)}
                    onChange={() => toggleNotification(note)}
                    className="accent-green-500 w-5 h-5"
                  />
                  <span className="text-lg">{note}</span>
                </label>
              ))}
            </div>
          </>
        );

      case 4:
        return (
          <div className="flex flex-col items-center justify-center space-y-4 py-8">
            <FaCheckCircle className="text-green-400 text-7xl animate-pulse" />
            <h2 className="text-3xl font-bold text-green-400">Thank You! 🎉</h2>
            <p className="text-lg max-w-xs text-center text-white">
              You're all set up. Enjoy the experience!
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div
        className="w-full max-w-xl p-8 rounded-3xl bg-white/20 border border-green-400 backdrop-blur-lg shadow-2xl transition-all duration-500 ease-in-out"
        style={{
          minHeight: "360px",
          maxHeight: step === 1 ? "520px" : "400px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div className="flex-grow">{renderStepContent()}</div>

        <div className="mt-8 flex justify-between">
          {step > 1 && step < 4 && (
            <button
              onClick={() => setStep(step - 1)}
              className="px-5 py-2 bg-gray-200 text-gray-700 rounded-md shadow-md hover:bg-gray-300 transition"
            >
              Back
            </button>
          )}

          {step < 4 ? (
            <button
              disabled={
                (step === 1 && !selectedCoin) ||
                (step === 2 && !selectedLanguage)
              }
              onClick={() => setStep(step + 1)}
              className={`ml-auto px-6 py-2 rounded-md text-white shadow-md transition ${
                (step === 1 && !selectedCoin) || (step === 2 && !selectedLanguage)
                  ? "bg-green-300 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              Next
            </button>
          ) : (
            <Button
              onClick={() =>navigate('/watchlist')}
              className="ml-auto px-6 py-2 bg-primary text-white rounded-md shadow-md hover:bg-blue-700 transition"
            >
              Continue
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
export default OnboardingModal;