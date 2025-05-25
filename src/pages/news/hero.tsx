import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CryptoNewsCard() {
  const navigate = useNavigate();

  return (
    <div className="h-auto px-4 md:px-10 lg:px-24 py-20 text-white relative ">
         <img
        src="/img/green.svg"
        alt="Green Light"
        className="absolute top-0 left-0 transform -translate-x-1/2 pointer-events-none opacity-70 z-0"
      />
      <div className="max-w-7xl mx-auto relative mt-6">
        <ArrowLeft
          className="mr-2 cursor-pointer text-primary hover:text-white"
          onClick={() => navigate("/")}
        />

        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between my-6 gap-3">
          <h1 className="text-xl md:text-3xl font-bold">
            U.S. Justice Department Disbands Crypto Enforcement Unit
          </h1>
          <div className="mr-4 flex space-x-2 text-xl md:text-2xl">
            <span>🪙</span>
            <span>🧑‍⚖️</span>
            <span>🌐</span>
            <span>📉</span>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,600px)_1fr] gap-6 items-start">
          {/* Image container */}
          <div className="w-full max-w-[600px] h-auto mx-auto xl:mx-0">
            <img
              src="/img/news.png"
              alt="U.S. Department of Justice"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>

          {/* Text content */}
          <div className="text-sm md:text-base leading-relaxed text-gray-300">
            <p className="mb-4">
              In a surprising policy shift, the U.S. Justice Department has
              officially disbanded its National Cryptocurrency Enforcement Team
              (NCET), which was originally formed to monitor and prosecute
              crimes involving digital assets...
            </p>

            <p className="mb-4">
              Sources say the department will now redirect its efforts toward
              investigating digital financial crimes related to terrorism, money
              laundering, and organized cybercrime.
            </p>

            <p>
              President Javier Milei is facing massive public outrage after
              backing $LIBRA — a cryptocurrency promoted as Argentina’s digital
              economic savior — which has now lost over 90% of its value.
              Allegations of insider trading and a potential rug pull have
              shaken investor confidence. Economic analysts fear this incident
              could hurt Argentina’s attempts to modernize its economy through
              blockchain technology and deepen the country's financial
              instability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
