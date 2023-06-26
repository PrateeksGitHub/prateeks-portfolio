"use client";

import React, { useState, useEffect } from "react";

const MessageTypingAnimation = ({
  typingSpeed,
  waveDuration,
  message,
  className,
  onClick = () => console.log("to be implemeted"),
}) => {
  const [wavePosition, setWavePosition] = useState(0);
  const [isWaveActive, setIsWaveActive] = useState(true);
  const messageBubbleConfig =
    "flex px-4 bg-secondary p-2 rounded-2xl rounded-bl-none h-10 items-center";

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
        <div className={`${messageBubbleConfig} py-4`}>
          <div className="flex items-center">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className={`h-2 w-2 bg-primary rounded-full mx-1 ${
                  wavePosition === index ? `animate-chat-typing` : ""
                }`}
              ></div>
            ))}
          </div>
        </div>
      ) : (
        <button onClick={onClick}>
          <div className={`${messageBubbleConfig}`}>
            <p className="text-primary font-sans font-semibold text-xl">
              {message}
            </p>
          </div>
        </button>
      )}
    </div>
  );
};

export default MessageTypingAnimation;
