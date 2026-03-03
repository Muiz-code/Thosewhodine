import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import logo from "../assets/Logo black.png";
import "aos/dist/aos.css";
import AOS from "aos";
import Footer from "./Footer";
import ReactGA from "react-ga4";

const SECTIONS = [
  "home",
  "about-us",
  "what-we-do",
  "events",
  "upcoming-events",
  "work-with-us",
  "contact",
];

const navLinks = [
  { href: "#home", id: "home", label: "Home" },
  { href: "#about-us", id: "about-us", label: "About us" },
  { href: "#what-we-do", id: "what-we-do", label: "What we do" },
  { href: "#events", id: "events", label: "Events" },
  { href: "#upcoming-events", id: "upcoming-events", label: "Dine at Night" },
  { href: "#work-with-us", id: "work-with-us", label: "Work with us" },
  { href: "#contact", id: "contact", label: "Contact" },
];

const sidebarVariants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "tween" as const, duration: 0.3, ease: "easeOut" as const },
  },
  exit: {
    x: "-100%",
    opacity: 0,
    transition: { type: "tween" as const, duration: 0.25, ease: "easeIn" as const },
  },
};

const listContainerVariants = {
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
};

const listItemVariants = {
  hidden: { x: -14, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.22 } },
};

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [activeBgColor, setActiveBgColor] = useState("");

  // Track section visibility as a custom GA event — not as fake pageviews
  useEffect(() => {
    ReactGA.event("section_view", { section: activeSection });
  }, [activeSection]);

  // Handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setIsSmallScreen(isMobile);
      if (isMobile) {
        setIsOpen(false);
      } else {
        setIsOpen(activeSection !== "home");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeSection]);

  // Scroll-based active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let next: string | null = null;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i]);
        if (el && scrollY >= el.offsetTop - 100) {
          next = SECTIONS[i];
          break;
        }
      }
      if (next && next !== activeSection) {
        setActiveSection(next);
        const el = document.getElementById(next);
        if (el) setActiveBgColor(window.getComputedStyle(el).backgroundColor);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  // AOS lives here only — LandingPage no longer initialises it
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isSmallScreen && isOpen);
  }, [isSmallScreen, isOpen]);

  return (
    <div className="flex flex-col">
      {/* ── Mobile open button ── */}
      <AnimatePresence>
        {isSmallScreen && !isOpen && (
          <motion.button
            onClick={() => setIsOpen(true)}
            className="fixed top-4 left-2 z-50 text-[#2B3210] p-2 rounded-r-md bg-[#E5E2D9] shadow-md flex"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.2 }}
            aria-label="Open navigation"
          >
            <ChevronRight size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Sidebar ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile backdrop */}
            {isSmallScreen && (
              <motion.div
                className="fixed inset-0 bg-black/40 z-30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsOpen(false)}
              />
            )}

            <motion.nav
              className="h-screen fixed top-0 left-0 z-40 flex flex-col p-5 py-6 overflow-hidden"
              style={{
                width: isSmallScreen ? "min(75vw, 280px)" : "200px",
                backgroundColor: isSmallScreen ? "#E5E2D9" : activeBgColor,
              }}
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Logo */}
              <div className="flex justify-center mb-6">
                <img
                  src={logo}
                  alt="Logo"
                  className={isSmallScreen ? "w-[40%]" : "w-full p-3"}
                />
              </div>

              {/* Mobile close button */}
              {isSmallScreen && (
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-[#2B3210] p-2 rounded-full hover:bg-[#2B3210]/10 transition"
                  aria-label="Close navigation"
                >
                  <X size={22} />
                </button>
              )}

              {/* Nav links */}
              <motion.ul
                className="montez textSpace2 font-extrabold space-y-4 mt-2 md:text-left text-center"
                variants={listContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {navLinks.map(({ href, id, label }) => (
                  <motion.li key={href} variants={listItemVariants}>
                    <a
                      href={href}
                      onClick={() => isSmallScreen && setIsOpen(false)}
                      className={`text-[20px] relative inline-block transition-colors duration-200 ${
                        activeSection === id
                          ? "active-nav-link text-[#505631]"
                          : "text-[#2B3210] hover:text-[#505631]"
                      }`}
                    >
                      {label}
                      {activeSection === id && (
                        <motion.span
                          className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-[#505631]"
                          layoutId="activeIndicator"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* ── Page content — shifts right when desktop sidebar is open ── */}
      <motion.div
        className="flex-1"
        animate={{ marginLeft: !isSmallScreen && isOpen ? "200px" : "0px" }}
        transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
      >
        <Outlet />
      </motion.div>

      <Footer />
    </div>
  );
};

export default MainLayout;
