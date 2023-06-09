import React from "react";

function SkillTile({
  className,
  skillName = "Python",
  svgLogoPath = "../assets/skills/Python.svg",
  svgClassName,
}) {
  return (
    <div
      className={`flex flex-col items-center p-2 m-4 justify-center content-center border-2 border-accent rounded-xl border-opacity-0 hover:border-opacity-75 font-sans text-primary ${className}`}
    >
      <img
        src={svgLogoPath}
        alt={skillName}
        className={`h-16 md:h-20 p-2 ${svgClassName}`}
      />
      {skillName}
    </div>
  );
}

export default SkillTile;
