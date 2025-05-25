// src/components/shared/Particles.tsx
import { motion } from "framer-motion";

const Particles = () => {
  return (
    <>
      {[...Array(200)].map((_, i) => {
        const randomX = Math.random() * 100;
        const randomSize = 2 + Math.random() * 3;
        const randomDelay = Math.random() * 10;
        const randomOpacity = 0.4 + Math.random() * 0.4;
        const glowColor = "rgba(0, 240, 255, 1.9)";

        return (
          <motion.div
            key={i}
            className="absolute rounded-full z-0"
            initial={{
              x: `${randomX}vw`,
              y: 0,
              opacity: randomOpacity,
              scale: 0.8,
            }}
            animate={{
              y: "100vh",
              opacity: 0,
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: randomDelay,
              ease: "linear",
            }}
            style={{
              top: 0,
              width: `${randomSize}px`,
              height: `${randomSize}px`,
              backgroundColor: glowColor,
              filter: `blur(0.5px)`,
              opacity: randomOpacity,
            }}
          />
        );
      })}
    </>
  );
};

export default Particles;
