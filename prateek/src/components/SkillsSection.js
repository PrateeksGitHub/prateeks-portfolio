import React from "react";
import SkillTile from "./SkillTile";

// logos SVG imports

import PythonLogo from "../assets/skills/python.svg";
import JavaScriptLogo from "../assets/skills/javascript.svg";
import DjangoLogo from "../assets/skills/django.svg";
import PandasLogo from "../assets/skills/pandas.svg";
import PostgresqlLogo from "../assets/skills/postgresql.svg";
import ReactJSLogo from "../assets/skills/reactjs.svg";

// import NodeJSLogo from "../assets/skills/nodejs.svg";
import NextJSLogo from "../assets/skills/nextjs.svg";
import FlutterLogo from "../assets/skills/flutter.svg";
// import JavaLogo from "../assets/skills/java.svg";
// import CLogo from "../assets/skills/c.svg";
// import TensorflowLogo from "../assets/skills/tensorflow.svg";
import KubernetesLogo from "../assets/skills/kubernetes.svg";
import DockerLogo from "../assets/skills/docker.svg";
import AWSLogo from "../assets/skills/aws.svg";
import GitLogo from "../assets/skills/git.svg";
// import GitlabCILogo from "../assets/skills/gitlabci.svg";
import SentryLogo from "../assets/skills/sentry.svg";
// import LokiLogo from "../assets/skills/loki.svg";
// import PrometheusLogo from "../assets/skills/prometheus.svg";
// import ArgoWorkflowLogo from "../assets/skills/argoworkflow.svg";
import FigmaLogo from "../assets/skills/figma.svg";

//  the main component definition
function SkillsSection({ className }) {
  return (
    <section
      id="skills"
      className={`flex flex-col justify-center mx-12 md:mx-48 md:px-4 ${className}`}
    >
      <h1 className="font-sans font-bold text-4xl text-primary my-16 ">
        My Toolkit
      </h1>
      <div className="flex flex-wrap justify-normal items-baseline -mx-8">
        <SkillTile svgLogo={PythonLogo} skillName="Python" />
        <SkillTile svgLogo={JavaScriptLogo} skillName="JavaScript" />
        <SkillTile svgLogo={DjangoLogo} skillName="Django" />
        <SkillTile svgLogo={PandasLogo} skillName="Pandas" />
        <SkillTile svgLogo={ReactJSLogo} skillName="React.js" />
        <SkillTile svgLogo={FlutterLogo} skillName="Flutter" />
        <SkillTile svgLogo={PostgresqlLogo} skillName="Postgresql" />
        <SkillTile svgLogo={KubernetesLogo} skillName="Kubernetes" />
        <SkillTile svgLogo={DockerLogo} skillName="Docker" />
        <SkillTile svgLogo={AWSLogo} skillName="AWS" />
        <SkillTile svgLogo={GitLogo} skillName="Git" />
        <SkillTile svgLogo={NextJSLogo} skillName="Next.js" />
        <SkillTile svgLogo={SentryLogo} skillName="Sentry" />
        <SkillTile svgLogo={FigmaLogo} skillName="Figma" />
      </div>
    </section>
  );
}

export default SkillsSection;
