import React from "react";
import SkillTile from "./SkillTile";
function SkillsSection({ skillTitles, className }) {
  const skillsLogosBasePath = "../assets/skills";
  return (
    <section
      id="skills"
      className={`flex flex-col justify-center min-h-screen m-12 md:mx-48 md:p-4 ${className}`}
    >
      <h1 className="font-sans font-bold text-4xl text-primary ">My Toolkit</h1>
      <div className="flex flex-wrap justify-center items-baseline my-12">
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
