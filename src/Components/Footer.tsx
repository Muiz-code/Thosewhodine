import React from "react";
import { PiTiktokLogoLight } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import logo from "../assets/Logo NoBg White.png";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#505631] text-white z-100">
      <div className="md:flex md:flex-row flex flex-col md:pt-0 pt-5 items-center justify-center footerBg bg-cover bg-center bg-no-repeat w-[100%] md:h-[50vh] h-auto relative gap-5">
        <div>
          <h1 className="z-20 text-center md:text-4xl text-3xl montez font-bold text-[#E5E2D9] capitalize">
            Newsletter
          </h1>

          <p className="text-[#E5E2D9] text-center md:text-xl text-[15px] playfair mt-2 md:p-0 p-2">
            Stay in the loop with Those Who Dine and be the first to receive
            updates on our next unforgettable dinner parties and wellness
            experiences.
          </p>
        </div>

        <div className="md:w-[60%] w-[100%] p-8 md:p-10 flex flex-col justify-center gap-10 md:bg-black bg-black/30 h-[100%]">
          <form
            action="https://formspree.io/f/xblkogvr"
            method="POST"
            target="_blank"
            className="flex flex-col gap-3 w-full space-y-6"
          >
            <div className="flex gap-3 w-full">
              <input
                type="text"
                name="FNAME"
                placeholder="First name"
                className="block w-full rounded-md border-[#E5E2D9] outline-0 p-2 border-b text-[#E5E2D9] playfair"
                required
              />
              <input
                type="text"
                name="LNAME"
                placeholder="Last name"
                className="block w-full rounded-md border-[#E5E2D9] outline-0 p-2 border-b text-[#E5E2D9] playfair"
              />
            </div>

            <input
              type="email"
              name="EMAIL"
              placeholder="Email address"
              className="block w-full rounded-md border-[#E5E2D9] outline-0 p-2 border-b text-[#E5E2D9] playfair"
              required
            />
            <div>
              <button
                type="submit"
                className="bg-[#E5E2D9] text-black py-2 rounded-md hover:bg-[#E5E2D9]/80 hover:text-[#E5E2D9] transition w-2/5"
              >
                Subscribe
              </button>

              <p className="text-xs text-[#E5E2D9] mt-2">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </form>
        </div>
      </div>
      <footer className="p-8 md:p-12 bg-[#2B3210] md:h-[50vh] h-auto relative">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center md:flex-row md:justify-around md:items-start md:text-left">
            {/* Logo and Copyright Section */}
            <div className="mb-6 md:mb-0 flex flex-col items-center">
              <img
                src={logo}
                alt="TWD Logo"
                className="w-24 md:w-[20%] mb-4 md:absolute md:top-[30%] md:left-[5%]"
              />
              {/* <p className="text-[#E5E2D9] playfair text-sm mt-0 md:mt-20 md:flex hidden">
                &copy; {new Date().getFullYear()} Those Who Dine. All rights
                reserved.
              </p> */}
            </div>

            {/* Navigation Links Section */}
            <div className="md:mt-20 mt-0  md:mb-0">
              <h4 className="text-2xl font-bold montez text-[#E5E2D9] mb-2">
                Explore
              </h4>
              <ul className="space-y-2 playfair text-gray-700 grid md:grid-cols-2 grid-cols-1 md:gap-5">
                <li>
                  <a
                    href="#home"
                    className="relative group text-[#E5E2D9] transition-all duration-300 hover:text-white"
                  >
                    Home
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#about-us"
                    className="relative group text-[#E5E2D9] transition-all duration-300 hover:text-white"
                  >
                    About Us
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#what-we-do"
                    className="relative group text-[#E5E2D9] transition-all duration-300 hover:text-white"
                  >
                    What We Do
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#events"
                    className="relative group text-[#E5E2D9] transition-all duration-300 hover:text-white"
                  >
                    Events
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#work-with-us"
                    className="relative group text-[#E5E2D9] transition-all duration-300 hover:text-white"
                  >
                    Work With Us
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="relative group text-[#E5E2D9] transition-all duration-300 hover:text-white"
                  >
                    Contact
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media and Contact Section */}
            <div className="md:mt-20 mt-10 md:mb-0">
              <h4 className="text-2xl font-bold montez text-[#E5E2D9] mb-2">
                Connect
              </h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://www.instagram.com/thosewhodine?igsh=cTcyNmJucmVjaTI0"
                  aria-label="Instagram"
                  target="blank"
                  className="text-[#E5E2D9] hover:text-[#505631] transition-colors"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://www.tiktok.com/@thosewhodine?_t=ZN-8z0cOQ81ePm&_r=1"
                  aria-label="Tiktok"
                  target="blank"
                  className="text-[#E5E2D9] hover:text-[#505631] transition-colors"
                >
                  <PiTiktokLogoLight size={24} />
                </a>
                <a
                  href="mailto:thosewdine@gmail.com"
                  aria-label="Mail"
                  className="text-[#E5E2D9] hover:text-[#505631] transition-colors"
                >
                  <CiMail size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-8 p-4 rounded-md">
            <p className="text-[#E5E2D9] playfair md:text-[13px] text-[10px] text-center md:mt-0 mt-5 flex">
              &copy; {new Date().getFullYear()} Those Who Dine. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
