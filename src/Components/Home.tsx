import { PiTiktokLogoLight } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import logo from "../assets/Logo NoBg White.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      id="home"
      className="w-[100%] h-[100vh] homeBg relative"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="10"
      data-aos-offset="0"
    >
      <div className="flex justify-between items-center w-[100%] px-10 absolute md:top-5 top-6">
        <Link to={"/"}>
          <img
            src={logo}
            className="md:w-[7%] w-[20%] hover:scale-105 duration-300 transition-all"
            alt=""
          />
        </Link>
        <div>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://www.instagram.com/thosewhodine?igsh=cTcyNmJucmVjaTI0"
              aria-label="Instagram"
              target="blank"
              className="text-[#E5E2D9] hover:text-[#505631] md:text-[25px] text-[20px] transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@thosewhodine?_t=ZN-8z0cOQ81ePm&_r=1"
              aria-label="Tiktok"
              target="blank"
              className="text-[#E5E2D9] hover:text-[#505631] md:text-[25px] text-[20px] transition-colors"
            >
              <PiTiktokLogoLight />
            </a>
            <a
              href="mailto:thosewdine@gmail.com"
              aria-label="Mail"
              className="text-[#E5E2D9] hover:text-[#505631] md:text-[25px] text-[20px] transition-colors"
            >
              <CiMail />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-full text-white bg-black/30">
        <h1 className="text-[50px] md:text-[100px] md:w-[85%] w-[99%] text-center md:p-0 p-[2.5px] montez text-[#fff] textSpace1">
          Flavourful Journey’s, Curated Moments.
        </h1>
        {/* 
        <TypewriterText
          text="Flavourful Journey’s, Curated Moments."
          speed={10}
          style1="text-[#fff] text-[40px] montez text-center md:w-[50%] w-[97%] dm-sans"
          style2="border-r-2 border-[#E5E2D9] animate-pulse ml-1"
        /> */}
      </div>
    </div>
  );
};

export default Home;
