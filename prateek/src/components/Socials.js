import React from "react";
import { ReactComponent as LinkedInLogo } from "../assets/linkedIn-logo.svg";
import { ReactComponent as GitHub } from "../assets/github-logo.svg";
import { ReactComponent as DiscordLogo } from "../assets/discord-logo.svg";
import { ReactComponent as RiotValorantLogo } from "../assets/riot-valorant-logo.svg";

const Socials = ({ className }) => {
  const socialButtonConfig =
    "p-0 md:p-2 rounded-lg md:border-transparent md:border-2 md:hover:border-accent md:hover:border-2 md:hover:border-opacity-75 transition duration-200 ease-in-out";

  return (
    <ul
      className={`flex flex-col fill-accent items-center space-y-4 md:space-y-8 ${className}`}
    >
      <li className={socialButtonConfig}>
        <LinkedInLogo height="24"></LinkedInLogo>
      </li>
      <li className={socialButtonConfig}>
        <GitHub height="24"></GitHub>
      </li>
      <li className={socialButtonConfig}>
        <DiscordLogo height="24"></DiscordLogo>
      </li>
      <li className={socialButtonConfig}>
        <RiotValorantLogo height="24"></RiotValorantLogo>
      </li>
    </ul>
  );
};

export default Socials;
