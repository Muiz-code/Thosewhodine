import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import logo from "../assets/Logo NoBg White.png";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#505631] text-white z-100">
      <div className="flex flex-col items-center justify-center text-white footerBg bg-cover bg-center bg-no-repeat w-[100%] h-[50vh] relative">
        <div className="bg-black/30 h-[100%] absolute w-[100%]"></div>
        <h1 className="z-100 text-center text-4xl montez font-bold text-[#E5E2D9] capitalize">
          Newsletter
        </h1>
      </div>
      <footer className="p-8 md:p-12 bg-[#505631] h-auto">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center md:flex-row md:justify-between md:items-start md:text-left">
            {/* Logo and Copyright Section */}
            <div className="mb-6 md:mb-0 flex flex-col items-center">
              <img src={logo} alt="TWD Logo" className="w-24 md:w-32 mb-4" />
              <p className="text-[#E5E2D9] playfair text-sm">
                &copy; {new Date().getFullYear()} Those Who Dine. All rights
                reserved.
              </p>
            </div>

            {/* Navigation Links Section */}
            <div className="mb-6 md:mb-0">
              <h4 className="text-xl font-bold montez text-[#E5E2D9] mb-2">
                Explore
              </h4>
              <ul className="space-y-2 playfair text-gray-700">
                <li>
                  <a href="#home" className="text-[#E5E2D9] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about-us"
                    className="text-[#E5E2D9] transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#what-we-do"
                    className="text-[#E5E2D9] transition-colors"
                  >
                    What We Do
                  </a>
                </li>
                <li>
                  <a
                    href="#events"
                    className="text-[#E5E2D9] transition-colors"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#work-with-us"
                    className="text-[#E5E2D9] transition-colors"
                  >
                    Work With Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-[#E5E2D9] transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media and Contact Section */}
            <div>
              <h4 className="text-xl font-bold montez text-[#E5E2D9] mb-2">
                Connect
              </h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-[#E5E2D9] hover:text-[#505631] transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-[#E5E2D9] hover:text-[#505631] transition-colors"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-[#E5E2D9] hover:text-[#505631] transition-colors"
                >
                  <Twitter size={24} />
                </a>
              </div>
              <p className="mt-4 playfair text-[#E5E2D9]">
                thosewdine@gmail.com
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
