"use client";

import React, { useState } from "react";

import {
  LinkedInLogo,
  GithubLogo,
  DiscordLogo,
  RiotValorantLogo,
} from "@/assets";
import clsxm from "@/utils/clsxm";

const Socials = ({ className }) => {
  const socialButtonConfig =
    "md:p-2 rounded-lg transition duration-300 ease-in-out";
  const logoConfig = "fill-primary hover:fill-accent aspect-square h-5";
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const tooltipConfig = clsxm(
    tooltipVisible ? "absolute" : "hidden",
    " -top-full md:left-full max-md:right-full transform translate-y-50 m-4",
    "bg-secondary bg-opacity-50 text-white py-2 px-4 rounded-md"
  );

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setTooltipVisible(true);
    setTimeout(() => {
      setTooltipVisible(false);
    }, 2000); // Hide tooltip after 2 seconds
  };

  return (
    <ul
      className={`flex flex-col items-center space-y-4 md:space-y-8 ${className}`}
    >
      <li className={socialButtonConfig}>
        <a
          href="https://www.linkedin.com/in/prtkagrawal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInLogo className={logoConfig} />
        </a>
      </li>
      <li className={socialButtonConfig}>
        <a
          href="https://github.com/PrateeksGitHub/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubLogo className={logoConfig} />
        </a>
      </li>
      <li className={socialButtonConfig}>
        <div
          className="relative"
          onClick={() => {
            copyToClipboard("ezpzhowez");
          }}
        >
          <DiscordLogo className={logoConfig} />
          <div className={tooltipConfig}>Discord username copied!</div>
        </div>
      </li>
      <li className={socialButtonConfig}>
        <a
          href="https://tracker.gg/valorant/profile/riot/ezpz%23howez/overview"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiotValorantLogo className={logoConfig} />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
