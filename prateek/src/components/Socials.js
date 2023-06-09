import React from "react";
import { ReactComponent as LinkedInLogo } from "../assets/linkedIn-logo.svg";
import { ReactComponent as GitHub } from "../assets/github-logo.svg";
import { ReactComponent as DiscordLogo } from "../assets/discord-logo.svg";
import { ReactComponent as RiotValorantLogo } from "../assets/riot-valorant-logo.svg";

const Socials = ({ className }) => {
  const socialButtonConfig =
    "md:p-2 rounded-lg hover:fill-accent transition duration-300 ease-in-out";
  const logoConfig = "h-4 md:h-6";
  return (
    <ul
      className={`flex flex-col fill-primary  items-center space-y-4 md:space-y-8 ${className}`}
    >
      <li className={socialButtonConfig}>
        <LinkedInLogo className={logoConfig}></LinkedInLogo>
      </li>
      <li className={socialButtonConfig}>
        <GitHub className={logoConfig}></GitHub>
      </li>
      <li className={socialButtonConfig}>
        <DiscordLogo className={logoConfig}></DiscordLogo>
      </li>
      <li className={socialButtonConfig}>
        <RiotValorantLogo className={logoConfig}></RiotValorantLogo>
      </li>
    </ul>
  );
};

export default Socials;
