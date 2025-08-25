import TypewriterText from "./TypewriterText";
import Card from "./HoverCard";
import hoverGif from "../assets/chefSelection.gif";
import img1 from "../assets/ChefSelection.jpg";
import img2 from "../assets/TWD Launch.jpg";
import img3 from "../assets/Deto30th/Deto4.webp";
import img4 from "../assets/Deto30th/Deto12.jpeg";
// import detos from "../assets/Detos 30th 2.jpg";

const WhatWeDo = () => {
  return (
    <div
      id="what-we-do"
      className="md:px-[10%] md:py-[2%] p-3 pt-5 bg-[#5056314e] flex flex-col relative h-auto md:pt-10 "
    >
      <div className="flex flex-col text-left md:gap-5 gap-2 text-[#2b3210]">
        <h1 className=" md:text-4xl text-3xl font-bold montez textSpace2">
          What we do
        </h1>
        <div className="flex gap-5 W-[100%] md:justify-start justify-center">
          <div className="flex flex-col gap-5 w-[100%] md:justify-start justify-center">
            <TypewriterText
              text="At Those Who Dine, we specialise in curating unforgettable culinary
          experiences that blend exceptional food, immersive storytelling, and
          seamless execution. Whether you're hosting an intimate dinner party, a
          brand activation, or a celebratory gathering, our team transforms your
          vision into a refined, one-of-a-kind event. Here's how we bring your
          dream to life."
              speed={20}
              style1="text-[#2b3210] md:text-xl text-[15px] playfair flex text-justify mb-4 "
              style2=" animate-pulse ml-1"
            />
          </div>
          {/* <img src={detos} className="w-[40%] rounded-[7px]" alt="" /> */}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 justify-center">
        <Card
          staticImage={img1}
          gifImage={hoverGif}
          altText="A description of the image"
          title="Chef Selection & Menu Design"
          description="We collaborate with top-tier chefs to
            craft bespoke menus that reflect your tastes and elevate the dining
            experience. Each course is complemented with expertly curated wine
            and cocktail pairings ensuring that every bite and sip is
            intentional, refined, and memorable."
        />
        <Card
          staticImage={img2}
          gifImage={hoverGif}
          altText="A description of the image"
          title="Full-Service Event Management"
          description="We take care of everything so you
            don’t have to. From managing guest lists and coordinating with
            vendors to overseeing on-site logistics, our team ensures that every
            element runs smoothly. Our clients trust us to manage the
            behind-the-scenes details so they can be fully present and enjoy the
            experience as a guest at their own event."
        />
        <Card
          staticImage={img3}
          gifImage={hoverGif}
          altText="A description of the image"
          title="Venue Sourcing & Styling"
          description="Finding the perfect setting is essential. Whether it’s a hidden gem in
        the city, a breathtaking private residence, or a contemporary gallery
        space, we source and secure venues that match the tone and purpose of
        your event. Our team handles all styling and spatial design,
        transforming the venue into an atmosphere that speaks intention, and
        aesthetic harmony."
        />
        <Card
          staticImage={img4}
          gifImage={hoverGif}
          altText="A description of the image"
          title="Concept Development & Theme Curation"
          description="No two events are the same. Our in-house creative team works closely
        with you to conceptualize and curate a distinctive event theme—down to
        the finest detail. From storytelling through menu design, decor, and
        ambiance, to the final guest experience, we create immersive
        environments that reflect your unique vision and leave a lasting
        impression."
        />
      </div>
    </div>
  );
};

export default WhatWeDo;
