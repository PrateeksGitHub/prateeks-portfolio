import React from "react";

function JourneyPoint({
  className,
  organisation,
  title,
  smallBody,
  duration,
  links,
}) {
  const componentHeight = "h-72";
  return (
    <div
      id="a journey"
      className={`flex flex-row ${componentHeight} items-center -mx-40`}
    >
      <div
        id="duration"
        className="flex flex-col -rotate-90 text-accent text-xl w-40"
      >
        {/* TODO: calendar logo */}
        {duration}
      </div>
      <div className="items-center justify-center">
        <div className="flex h-4 w-4 bg-accent rounded-full justify-center items-center">
          <div
            className={`flex ${componentHeight} w-1 bg-accent items-center justify-center`}
          >
            <div className="flex h-1 w-1 bg-background rounded-full items-center"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-8 p-8">
        <h2 className="heading-2 py-2">{organisation}</h2>
        <h2 className="heading-2 font-light italic py-2">{title}</h2>
        <p className="paragraph max-w-3xl py-2"> {smallBody} </p>
      </div>
    </div>
  );
}

export default JourneyPoint;
