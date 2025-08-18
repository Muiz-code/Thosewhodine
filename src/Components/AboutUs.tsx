import sketchedWoman3 from "../assets/sketchedWoman3.png";
import sketchedWoman from "../assets/sketchWoman2.png";
import TypewriterText from "./TypewriterText";

const AboutUs = () => {
  return (
    <div
      id="about-us"
      className="md:px-[10%] md:py-[2%] p-3 md:pt-10 pt-5 bg-[#E5E2D9] flex flex-col"
    >
      <div className="flex flex-col md:gap-5 gap-2">
        <h1 className="text-[#2B3210] md:text-4xl text-3xl font-bold montez textSpace2">
          Who are we?
        </h1>

        <TypewriterText
          text="Those Who Dine is an events agency specialising in exclusive supper
          clubs and curated dining experiences. We craft immersive, themed
          gatherings and plan bespoke dinner events, blending exceptional
          cuisine, ambiance, and hospitality. Whether joining our signature
          supper clubs or hosting your own event, we create unforgettable
          moments over great food and conversation."
          speed={20}
          style1="text-[#2B3210] md:text-xl text-[15px] playfair md:text-left text-justify mb-4"
          style2="border-r-2 border-[#2B3210] animate-pulse ml-1"
        />
      </div>

      {/* Meet the founders */}
      <div className="border-t-2 border-[#2B3210] w-[100%] mt-2 gap-10 flex flex-col justify-between md:border-0 border-r border-l md:h-auto h-[65vh]">
        <h1 className="text-[#2B3210] md:text-4xl text-3xl font-bold montez textSpace2">
          Meet the founders
        </h1>

        <div
          className="relative w-[100%] flex flex-col items-center justify-center"
          data-aos="fade-zoom-in"
          data-aos-delay="100"
          data-aos-offset="0"
        >
          <img
            src={sketchedWoman3}
            className="w-[100%] hidden md:flex"
            alt=""
          />
          <div className="absolute flex flex-col md:bottom-[25%] bottom-75 md:left-0 left-1 gap-3 text-[#2B3210]">
            <TypewriterText
              text="Ajibola Ogunranti"
              style1="md:text-3xl text-xl playfair italic font-bold"
              speed={300}
            />
            <TypewriterText
              text="- Client Lead"
              style1="md:text-xl text-sm dm-sans font-bold italic"
              speed={700}
            />
          </div>
          <div className="absolute flex flex-col md:bottom-5 bottom-50 md:left-0 left-1 gap-3 text-[#2B3210]">
            <TypewriterText
              text="Temilolu Fagbemi"
              style1="md:text-4xl text-xl playfair italic font-bold"
              speed={300}
            />
            <TypewriterText
              text="- Finance Director"
              style1="md:text-xl text-sm dm-sans font-bold italic"
              speed={700}
            />
          </div>
          <div className="flex flex-col items-end border">
            <div className="absolute flex flex-col md:bottom-[25%] bottom-65 md:right-0 right-10 gap-3 text-[#2B3210]">
              <TypewriterText
                text="Tamilore Bolu"
                style1="md:text-3xl text-xl playfair italic font-bold"
                speed={300}
              />
              <TypewriterText
                text="- Creative Director"
                style1="md:text-xl text-sm dm-sans font-bold italic"
                speed={700}
              />
            </div>
            <div className="absolute flex flex-col md:bottom-5 bottom-35 md:right-0 right-2 gap-3 text-[#2B3210]">
              <TypewriterText
                text="Zena Giwa-Osagie"
                style1="md:text-4xl text-xl playfair italic font-bold"
                speed={300}
              />
              <TypewriterText
                text="- Operations & Events Manager"
                style1="md:text-xl text-sm dm-sans font-bold italic"
                speed={700}
              />
            </div>
          </div>
          <img src={sketchedWoman} className="flex md:hidden" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
