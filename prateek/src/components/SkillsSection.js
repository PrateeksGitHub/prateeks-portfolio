import React from "react";
import SkillTile from "./SkillTile";
function SkillsSection({ skillTitles, className }) {
  const skillsLogosBasePath = "../assets/skills";
  return (
    <section
      id="skills"
      className={`flex flex-col justify-center min-h-screen ${className}`}
    >
      <h1 className="font-sans font-bold text-4xl text-primary m-16 md:mx-48 md:p-4">
        Skills
      </h1>
      <div className="flex flex-wrap justify-center items-baseline">
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
