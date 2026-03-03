import { motion } from "framer-motion";
import { useEffect } from "react";
import logo from "../assets/Logo black.png";

interface PreloaderProps {
  onDone: () => void;
}

// Preloader is intentionally stateless — App.tsx owns visibility via AnimatePresence.
// When onDone fires, App removes this from the tree and AnimatePresence runs the exit.
const Preloader = ({ onDone }: PreloaderProps) => {
  useEffect(() => {
    const timer = setTimeout(onDone, 3000);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen bg-[#E5E2D9] z-[9999] flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <motion.img
        src={logo}
        alt="Those Who Dine logo"
        className="w-[250px] h-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
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
  );
};

export default Preloader;
