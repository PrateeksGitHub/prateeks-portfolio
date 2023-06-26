import React from "react";

function SkillTile({ className, skillName, SkillLogo }) {
  return (
    <div
      className={` flex flex-col items-center m-4 md:m-8 p-2 justify-center content-center border-2 hover:border-accent rounded-xl border-transparent hover:border-opacity-75 duration-200 ease-in-out font-sans text-primary ${className}`}
    >
      <div className="flex aspect-square w-14 h-14 md:w-20 md:h-20 p-2">
        <SkillLogo />
      </div>
      <p>{skillName}</p>
    </div>
  );
}

export default SkillTile;
