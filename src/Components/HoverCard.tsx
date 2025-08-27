import React, { useState } from "react";

interface CardProps {
  staticImage: string;
  // gifImage: string;
  altText: string;
  title: string;
  description: string;
}

const FoodieCardWithHoverDescription: React.FC<CardProps> = ({
  staticImage,
  // gifImage,
  altText,
  title,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative md:flex md:flex-row grid  max-w-3xl mx-auto rounded-lg overflow-hidden shadow-xl bg-[#2b3210] text-[#E5E2D9] h-96"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section - takes up 50% of the card */}
      <div className="relative md:w-1/2 w-[100%] md:h-auto h-[30vh] flex-shrink-0 overflow-hidden">
        <img
          src={staticImage}
          alt={altText}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>

      {/* Description Section - This section takes up the remaining 50% */}
      <div className="md:w-1/2 w-[100%] flex-shrink-0 md:p-6 p-2 flex flex-col justify-center relative">
        <div
          className={`absolute md:left-0 left-1 inset-0 flex flex-col items-center md:text-start text-center md:justify-end justify-center pb-3 transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          <h3 className="font-bold montez textSpace2 md:text-3xl text-2xl">
            {title}
          </h3>
        </div>

        {/* Description: Hidden by default, slides in on hover */}
        <div
          className={`transition-transform duration-500 ease-in-out${
            isHovered
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <p className=" playfair md:text-base text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodieCardWithHoverDescription;
