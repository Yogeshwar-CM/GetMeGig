import React, { useEffect, useRef, useState } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [cursorColor, setCursorColor] = useState("var(--col1)"); // Default color

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;

        // Check the background color of the element under the cursor
        const element = document.elementFromPoint(e.clientX, e.clientY);
        if (element) {
          const bgColor = window.getComputedStyle(element).backgroundColor;

          // Convert RGB color to HEX
          const rgbToHex = (rgb) => {
            const [r, g, b] = rgb.match(/\d+/g).map(Number);
            return `#${((1 << 24) + (r << 16) + (g << 8) + b)
              .toString(16)
              .slice(1)}`;
          };

          // Compare the background color with the specified HEX color
          if (rgbToHex(bgColor) === "#211c1d") {
            setCursorColor("var(--col4)");
          } else {
            setCursorColor("var(--col1)");
          }
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{ backgroundColor: cursorColor }}
      ref={cursorRef}
    ></div>
  );
};

export default CustomCursor;
