import React, { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  style1?: string;
  style2?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 30,
  style1,
  style2,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <p className={`${style1}`}>
      {displayedText}
      <span className={`${style2}`} />
    </p>
  );
};

export default TypewriterText;
