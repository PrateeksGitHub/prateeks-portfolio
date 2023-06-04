import React, { useState, useEffect } from "react";

const MessageTypingAnimation = ({
  typingSpeed,
  waveDuration,
  message,
  className,
}) => {
  const [wavePosition, setWavePosition] = useState(0);
  const [isWaveActive, setIsWaveActive] = useState(true);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setWavePosition((prevPosition) => (prevPosition + 1) % 4);
    }, typingSpeed);

    setTimeout(() => {
      setIsWaveActive(false);
      clearInterval(animationInterval);
    }, waveDuration);

    return () => {
      clearInterval(animationInterval);
    };
  }, [typingSpeed, waveDuration]);

  return (
    <div className={`flex items-center ${className}`}>
      {isWaveActive ? (
        <div className="bg-secondary p-2 rounded-lg h-10">
          <div className="flex items-center">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className={`h-2 w-2 bg-primary rounded-full mx-1 ${
                  wavePosition === index ? "animate-bounce ease-in-out" : ""
                }`}
              ></div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-secondary p-2 rounded-lg rounded-bl-none h-10">
          <p className="mx-2">{message}</p>
        </div>
      )}
    </div>
  );
};

export default MessageTypingAnimation;
