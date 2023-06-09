import React from "react";

function SkillTile({
  className,
  skillName = "Python",
  svgLogoPath = "../assets/skills/Python.svg",
  svgClassName,
}) {
  return (
    <div
      className={`flex flex-col items-center p-3 m-4 md:m-10 justify-center content-center border-2 border-accent rounded-xl border-opacity-0 hover:border-opacity-75 text-primary ${className}`}
    >
      <img
        src={svgLogoPath}
        alt={skillName}
        className={`h-20 p-2 ${svgClassName}`}
      />
      {skillName}
    </div>
  );
}

export default SkillTile;
