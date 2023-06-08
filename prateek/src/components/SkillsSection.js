import React from "react";
import { ReactComponent as PythonLogo } from "../assets/skills/python.svg";
function SkillsSection() {
  const logoClassName =
    "h-20 p-3 m-4 md:m-10 justify-center content-center border-2 border-accent rounded-xl border-opacity-0 hover:border-opacity-75";
  return (
    <section id="skills" className="flex flex-col justify-center">
      <h1 className="font-sans font-bold text-4xl text-primary m-12 md:mx-16 md:p-4">
        Skills
      </h1>
      <div className="flex flex-wrap justify-center items-baseline">
        <PythonLogo className={logoClassName} />
        <PythonLogo className={logoClassName} />
        <PythonLogo className={logoClassName} />
        <PythonLogo className={logoClassName} />
        <PythonLogo className={logoClassName} />
        <PythonLogo className={logoClassName} />
        <PythonLogo className={logoClassName} />
        <PythonLogo className={logoClassName} />
        <PythonLogo className={logoClassName} />
        <PythonLogo className={logoClassName} />
        <PythonLogo className={logoClassName} />
      </div>
    </section>
  );
}

export default SkillsSection;
