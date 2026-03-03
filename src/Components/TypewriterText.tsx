import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  style1?: string;
  style2?: string;
}

// Single state (index) instead of two separate states — halves the render count.
// Also resets cleanly when the text prop changes.
const TypewriterText = ({
  text,
  speed = 30,
  style1,
  style2,
}: TypewriterTextProps) => {
  const [index, setIndex] = useState(0);

  // Reset when text prop changes
  useEffect(() => {
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index >= text.length) return;
    const timeout = setTimeout(() => setIndex((i) => i + 1), speed);
    return () => clearTimeout(timeout);
  }, [index, text.length, speed]);

  return (
    <p className={style1}>
      {text.slice(0, index)}
      <span className={style2} />
    </p>
  );
};

export default TypewriterText;
