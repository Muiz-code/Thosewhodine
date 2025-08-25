import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { X, ChevronRight } from "lucide-react";
import logo from "../assets/Logo black.png";
import "aos/dist/aos.css";
import AOS from "aos";
import Footer from "./Footer";
import ReactGA from "react-ga4";

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [activeBgColor, setActiveBgColor] = useState("");

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: `/${activeSection}`,
    });
  }, [activeSection]);

  // Effect to handle screen size changes and initial state
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

  // Effect to handle scroll-based active section
  useEffect(() => {
    const sections = [
      "home",
      "about-us",
      "what-we-do",
      "events",
      "work-with-us",
      "contact",
      "newsletter",
    ];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      let newActiveSection = null;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const section = document.getElementById(sectionId);
        if (section) {
          if (scrollY >= section.offsetTop - 100) {
            newActiveSection = sectionId;
            break;
          }
        }
      }

      if (newActiveSection && newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
        const activeEl = document.getElementById(newActiveSection);
        if (activeEl) {
          const computedStyle = window.getComputedStyle(activeEl);
          setActiveBgColor(computedStyle.backgroundColor);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // NEW EFFECT: Locks body scrolling when navbar is open on mobile
  useEffect(() => {
    if (isSmallScreen && isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isSmallScreen, isOpen]);

  return (
    <div className="flex flex-col">
      <nav
        className={`h-screen p-4 py-4 fixed transition-all duration-300 z-40 ${
          isOpen
            ? "w-full md:w-[10%] min-w-[200px] overflow-hidden"
            : "w-0 overflow-hidden hidden"
        }`}
        style={{
          backgroundColor: isSmallScreen ? "#E5E2D9" : activeBgColor,
        }}
      >
        <div className="flex justify-center">
          <img
            src={logo}
            alt="Logo"
            className={`${isSmallScreen ? "w-[30%]" : "w-[100%] p-5"}`}
          />
        </div>
        {isOpen && (
          <div className="relative flex flex-col justify-center h-[35vh] gap-2 md:text-left text-center">
            {isSmallScreen && (
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-10 text-[#2B3210] p-2"
              >
                <X size={25} />
              </button>
            )}
            <ul className="playfair text-[#2B3210] text-[21px] montez textSpace2 font-extrabold space-y-3 w-full md:w-auto">
              <li>
                <a
                  href="#home"
                  className={activeSection === "home" ? "active-nav-link" : ""}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about-us"
                  className={
                    activeSection === "about-us" ? "active-nav-link" : ""
                  }
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#what-we-do"
                  className={
                    activeSection === "what-we-do" ? "active-nav-link" : ""
                  }
                >
                  What we do
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className={
                    activeSection === "events" ? "active-nav-link" : ""
                  }
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#work-with-us"
                  className={
                    activeSection === "work-with-us" ? "active-nav-link" : ""
                  }
                >
                  Work with us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={
                    activeSection === "contact" ? "active-nav-link" : ""
                  }
                >
                  Contact
                </a>
              </li>
              {/* <li>
                <a
                  href="#newsletter"
                  className={
                    activeSection === "newsletter" ? "active-nav-link" : ""
                  }
                >
                  Newsletter
                </a>
              </li> */}
            </ul>
          </div>
        )}
      </nav>

      {isSmallScreen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-4 left-2 z-50 text-[#2B3210] p-2 rounded-r-md transition-all duration-300"
          style={{
            backgroundColor: "#E5E2D9",
            display: isOpen ? "none" : "flex",
          }}
        >
          <ChevronRight size={20} />
        </button>
      )}

      <div
        className={`flex-1 transition-all duration-300 ${
          isSmallScreen
            ? isOpen
              ? "ml-0"
              : "ml-0"
            : isOpen
            ? "ml-[13.15%]"
            : "ml-[0]"
        }`}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
