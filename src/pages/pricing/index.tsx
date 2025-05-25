import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

const pricingPlans = [
  {
    title: "Quick Scope",
    badge: "Essential",
    image: "/img/bitcoin.png",
    subtitle: "Get clarity",
    price: "$0.83",
    note: "Billed as $9.99/year*",
    color: "green-400",
    description:
      "Be informed in minutes by quickly comparing headlines from a variety of news outlets. Stay up to date with a balanced perspective.",
  },
  {
    title: "Pro Digest",
    badge: "Most popular",
    image: "/img/news3.png",
    subtitle: "Rise above the noise",
    price: "$2.49",
    note: "Billed as $29.99/year*",
    color: "yellow-400",
    description:
      "For dedicated readers who want to dig deeper. A Premium subscription helps you rise above misleading narratives and sensational reporting while saving you time and energy.",
  },
  {
    title: "Alpha Digest",
    badge: "Best value",
    image: "/img/bitcoin.png",
    subtitle: "See full picture",
    price: "$8.33",
    note: "Billed as $99.99/year*",
    color: "blue-400",
    description:
      "Challenge simple narratives and take control of your news diet with a custom dashboard that reveals what you're reading, but more importantly, what you're missing.",
  },
];

export default function PricingSection() {
  const [selected, setSelected] = useState(1);

  return (
    <section className="min-h-screen px-4 py-20 sm:px-6 md:px-10 lg:px-16 relative  text-white">
      <img
        src="/img/green.svg"
        alt="Green Light"
        className="absolute top-0 left-0 transform -translate-x-1/2 pointer-events-none opacity-70 z-0"
      />
      <div className="text-center mt-10 relative z-10">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Pricing
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-100 mt-2 max-w-md mx-auto px-2">
          Choose the plan that fits your reading needs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12 px-2 sm:px-0 relative z-10">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            animate={{
              scale: selected === index ? 1.05 : 1,
              zIndex: selected === index ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setSelected(index)}
            className={cn(
              "rounded-2xl cursor-pointer overflow-hidden transition-all duration-300 border-2",
              selected === index
                ? "border-cyan-500 shadow-[0_0_25px_5px_rgba(6,182,212,0.5)]"
                : "border-gray-700 shadow-[0_0_10px_2px_rgba(6,182,212,0.2)] hover:shadow-[0_0_20px_4px_rgba(6,182,212,0.4)]"
            )}
          >
            <Card className="bg-[linear-gradient(135deg,_#0e7490_0%,_#0f172a_50%,_#0a0a0a_100%)] text-white h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {plan.title}
                  </h3>
                  <span
                    className={`text-xs px-2 py-1 rounded-full bg-black/20 text-${plan.color} border border-${plan.color}`}
                  >
                    {plan.badge}
                  </span>
                </div>
                <div className="mb-4 relative h-32 sm:h-40 w-full overflow-hidden rounded-xl">
                  <img
                    src={plan.image}
                    alt={plan.subtitle}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/60" />
                  <span className="absolute inset-0 flex items-center justify-center font-semibold text-center text-white text-sm sm:text-base z-10">
                    {plan.subtitle}
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-bold">
                  {plan.price}
                  <span className="text-sm font-normal"> /month*</span>
                </div>
                <div className="text-sm text-gray-400 mb-4">{plan.note}</div>
                <p className="text-sm text-gray-300 mb-6 flex-grow">
                  {plan.description}
                </p>
                <Button className="w-full mt-auto text-white">Proceed</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
