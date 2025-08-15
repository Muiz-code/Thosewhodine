import { IoLogoInstagram } from "react-icons/io";
// import TypewriterText from "./TypewriterText";
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
          <img src={logo} className="md:w-[7%] w-[20%]" alt="" />
        </Link>
        <Link
          to={"www.instagram.com"}
          className="flex items-center justify-center space-x-4"
        >
          <IoLogoInstagram className="text-[#E5E2D9] text-2xl" />
        </Link>
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
