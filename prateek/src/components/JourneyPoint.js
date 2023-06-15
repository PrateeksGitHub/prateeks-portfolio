import React, { useState, useRef, useEffect } from "react";

function JourneyPoint({
  className,
  organisation,
  title,
  smallBody,
  duration,
  links,
}) {
  const componentHeight = 72;
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
    <div ref={journeyRef} className={`flex flex-row items-center`}>
      <div
        id="duration"
        className="flex flex-col -rotate-90 text-accent text-center items-center whitespace-nowrap text-sm md:text-xl md:w-24 w-8"
      >
        {/* TODO: calendar logo */}
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
        className="flex flex-col mx-4 md:mx-12 my-4 md:my-8"
      >
        <h2 className="heading-2 py-1 md:py-2">{organisation}</h2>
        <h2 className="heading-2 font-light italic py-1 md:py-2">{title}</h2>
        <p
          className={`paragraph-sm overflow-hidden py-1 md:py-2 ${
            isClicked ? "max-h-fit" : "max-h-48"
          }`}
          onClick={handleClick}
        >
          {smallBody}
        </p>
      </div>
    </div>
  );
}

export default JourneyPoint;
