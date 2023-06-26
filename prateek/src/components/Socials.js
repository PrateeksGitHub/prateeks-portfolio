"use client";

import React from "react";
import {
  LinkedInLogo,
  GithubLogo,
  DiscordLogo,
  RiotValorantLogo,
} from "@/assets";

const Socials = ({ className }) => {
  const socialButtonConfig =
    "md:p-2 rounded-lg hover:fill-accent transition duration-300 ease-in-out";
  const logoConfig = "aspect-square h-5";
  return (
    <ul
      className={`flex flex-col fill-primary items-center space-y-4 md:space-y-8 ${className}`}
    >
      <li className={socialButtonConfig}>
        <LinkedInLogo className={logoConfig} />
      </li>
      <li className={socialButtonConfig}>
        <GithubLogo className={logoConfig} />
      </li>
      <li className={socialButtonConfig}>
        <DiscordLogo className={logoConfig} />
      </li>
      <li className={socialButtonConfig}>
        <RiotValorantLogo className={logoConfig} />
      </li>
    </ul>
  );
};

export default Socials;
