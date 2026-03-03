import { useState } from "react";

interface CardProps {
  staticImage: string;
  altText: string;
  title: string;
  description: string;
}

const FoodieCardWithHoverDescription = ({
  staticImage,
  altText,
  title,
  description,
}: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative md:flex md:flex-row grid max-w-3xl mx-auto rounded-lg overflow-hidden shadow-xl bg-[#2b3210] text-[#E5E2D9] h-auto md:h-96"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative md:w-1/2 w-full h-[40vw] md:h-auto flex-shrink-0 overflow-hidden">
        <img
          src={staticImage}
          alt={altText}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 w-full flex-shrink-0 md:p-6 p-4 flex flex-col justify-center relative">

        {/* Title — always visible on mobile, fades out on desktop hover */}
        <h3
          className={`font-bold montez textSpace2 md:text-3xl text-2xl mb-2 md:mb-0 md:absolute md:inset-0 md:flex md:items-end md:justify-start md:pb-3 md:pl-6 transition-opacity duration-300 ${
            isHovered ? "md:opacity-0" : "md:opacity-100"
          }`}
        >
          {title}
        </h3>

        {/* Description — always visible on mobile, slides in on desktop hover */}
        <p
          className={`playfair md:text-base text-sm transition-all duration-500 ease-in-out md:absolute md:inset-0 md:flex md:items-center md:px-6 ${
            isHovered
              ? "md:translate-x-0 md:opacity-100"
              : "md:translate-x-full md:opacity-0"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default FoodieCardWithHoverDescription;
