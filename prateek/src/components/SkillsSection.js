import React from "react";
import SkillTile from "./SkillTile";

// logos SVG imports

import {
  PythonLogo,
  JavaScriptLogo,
  DjangoLogo,
  PandasLogo,
  PostgresqlLogo,
  ReactJSLogo,
  NextJSLogo,
  FlutterLogo,
  KubernetesLogo,
  DockerLogo,
  AWSLogo,
  GitLogo,
  SentryLogo,
  FigmaLogo,
} from "@/assets";

//  the main component definition
function SkillsSection({ className }) {
  return (
    <section
      id="skills"
      className={`flex flex-col justify-center ${className}`}
    >
      <h1 className="flex font-sans font-bold text-4xl text-primary mb-8">
        My Toolkit
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-60 items-center -mx-4 md:-mx-12">
        <SkillTile SkillLogo={PythonLogo} skillName="Python" />
        <SkillTile SkillLogo={JavaScriptLogo} skillName="JavaScript" />
        <SkillTile SkillLogo={DjangoLogo} skillName="Django" />
        <SkillTile SkillLogo={PandasLogo} skillName="Pandas" />
        <SkillTile SkillLogo={ReactJSLogo} skillName="React.js" />
        <SkillTile SkillLogo={FlutterLogo} skillName="Flutter" />
        <SkillTile SkillLogo={PostgresqlLogo} skillName="Postgresql" />
        <SkillTile SkillLogo={KubernetesLogo} skillName="Kubernetes" />
        <SkillTile SkillLogo={DockerLogo} skillName="Docker" />
        <SkillTile SkillLogo={AWSLogo} skillName="AWS" />
        <SkillTile SkillLogo={GitLogo} skillName="Git" />
        <SkillTile SkillLogo={NextJSLogo} skillName="Next.js" />
        <SkillTile SkillLogo={SentryLogo} skillName="Sentry" />
        <SkillTile SkillLogo={FigmaLogo} skillName="Figma" />
      </div>
    </section>
  );
}

export default SkillsSection;
