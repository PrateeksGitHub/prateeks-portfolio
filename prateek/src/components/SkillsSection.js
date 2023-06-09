import React from "react";
import SkillTile from "./SkillTile";
function SkillsSection({ skillTitles, className }) {
  const skillsLogosBasePath = "../assets/skills";
  return (
    <section
      id="skills"
      className={`flex flex-col justify-center mx-12 md:mx-48 md:px-4 ${className}`}
    >
      <h1 className="font-sans font-bold text-4xl text-primary ">My Toolkit</h1>
      <div className="flex flex-wrap justify-normal items-baseline my-12">
        {skillTitles.map((skill) => (
          <SkillTile
            key={`${skill}`}
            skillName={skill}
            svgLogoPath={`${skillsLogosBasePath}/${skill}.svg`}
          ></SkillTile>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
