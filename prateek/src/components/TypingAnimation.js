import React, { useState, useEffect } from "react";

const TypingAnimation = ({ strings, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const currentString = strings[currentIndex];
      setCurrentText(currentString.substring(0, currentText.length + 1));

      if (currentText === currentString) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentText("");
          setCurrentIndex((currentIndex + 1) % strings.length);
        }, 700); // Pause for 1 seconds before starting next string
      }
    }, 100);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex, currentText, strings]);

  return (
    <div className={`${className}`}>
      <span className="font-sans">{currentText}</span>
      <span className="animate-blink">|</span>
    </div>
  );
};

export default TypingAnimation;
