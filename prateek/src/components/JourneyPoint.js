import React, { useState, useRef, useEffect } from "react";
import { CalendarIcon, LocationIcon } from "@/assets";
import clsxm from "@/utils/clsxm";

function JourneyPoint({
  className,
  organisation,
  title,
  details,
  duration,
  location,
  links,
}) {
  const [isClicked, setIsClicked] = useState(false);
  const journeyRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const journeyElement = journeyRef.current;
    const lineElement = lineRef.current;

    if (journeyElement && lineElement) {
      const height = journeyElement.clientHeight;
      lineElement.style.height = `${height}px`;
    }
  });

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      ref={journeyRef}
      className={clsxm("flex flex-row items-center", className)}
    >
      <div
        id="duration"
        className="flex flex-row -rotate-90 text-accent justify-center text-center items-center whitespace-nowrap text-sm md:text-xl md:w-24 w-8"
      >
        <div className="aspect-square w-4 h-4 mx-3">
          <CalendarIcon />
        </div>
        {duration}
      </div>
      <div id="timeline-line" className="flex items-center justify-center">
        <div
          id="big-circle"
          className="flex max-h-3 w-3 md:max-h-4 md:w-4 bg-accent rounded-full justify-center items-center"
        >
          <div
            ref={lineRef}
            id="line"
            className={`flex w-0.5 md:w-1 bg-accent items-center justify-center`}
          >
            <div
              id="small-circle"
              className="flex h-0.5 w-0.5 md:h-1 md:w-1 bg-background rounded-full items-center"
            ></div>
          </div>
        </div>
      </div>
      <div
        id="journey-point-info"
        className="flex flex-col w-full mx-4 md:mx-12 my-4 md:my-8 p-6 rounded-xl border-2 border-accent border-opacity-75 hover:border-opacity-100 transition-transformation ease-in-out duration-300"
        onClick={handleClick}
      >
        <h2 className="heading-2 py-1 md:py-2">{organisation}</h2>
        <h2 className="heading-2 md:text-2xl font-light italic py-1 md:py-2">
          {title}
        </h2>
        <span
          className={`overflow-hidden py-1 md:py-2 md:text-lg ${
            isClicked ? "max-h-fit" : "max-h-48 md:max-h-32"
          }`}
        >
          {details}
        </span>
        <p className="!text-accent mt-4 md:text-lg">
          {isClicked ? `read less.` : `read more.`}
        </p>
        <div className="flex flex-row">
          <div
            className={clsxm(
              "font-sans text-primary font-medium flex flex-row items-center mt-4",
              location ? "" : "hidden"
            )}
          >
            <div className="h-4 w-4 mr-3">
              <LocationIcon />
            </div>
            {location}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JourneyPoint;
