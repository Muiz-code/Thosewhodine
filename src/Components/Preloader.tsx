// Preloader.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assets/Logo black.png"; // Replace with actual path

const Preloader = () => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
    }, 4000); // animation time

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-[#E5E2D9] z-[9999] flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          <motion.img
            src={logo}
            alt="Logo"
            className="w-[250px] h-auto"
            initial={{ strokeDashoffset: 1000, opacity: 0 }}
            animate={{
              opacity: 1,
              strokeDashoffset: 0,
            }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
            }}
            style={{
              maskImage: `url(${logo})`,
              WebkitMaskImage: `url(${logo})`,
              maskRepeat: "no-repeat",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              backgroundColor: "#000",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
