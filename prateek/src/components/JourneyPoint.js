import React, { useState } from "react";

function JourneyPoint({
  className,
  organisation,
  title,
  smallBody,
  duration,
  links,
}) {
  const componentHeight = "72";
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
  };
  return (
    <div
      id="a journey"
      className={`flex flex-row items-center ${
        isClicked ? `h-auto` : `min-h-${componentHeight}`
      }`}
    >
      <div
        id="duration"
        className="flex flex-col -rotate-90 text-accent text-base md:text-xl min-w-fit max-h-min"
      >
        {/* TODO: calendar logo */}
        {duration}
      </div>
      <div className="items-center justify-center">
        <div className="flex h-4 w-4 bg-accent rounded-full justify-center items-center">
          <div
            className={`flex min-h-max h-${componentHeight} w-1 bg-accent items-center justify-center`}
          >
            <div className="flex h-1 w-1 bg-background rounded-full items-center"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-4 md:mx-8 md:p-8">
        <h2 className="heading-2 py-1 md:py-2">{organisation}</h2>
        <h2 className="heading-2 font-light italic py-1 md:py-2">{title}</h2>
        <p
          className={`paragraph-sm overflow-hidden py-1 md:py-2 ${
            isClicked ? "" : "max-h-48"
          }`}
        >
          {smallBody}
        </p>
      </div>
    </div>
  );
}

export default JourneyPoint;
