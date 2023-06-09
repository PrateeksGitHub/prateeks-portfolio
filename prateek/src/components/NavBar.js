import React, { useState } from "react";
import { ReactComponent as MenuHamburgerSVG } from "../assets/hamburger-menu-icon.svg";
import Socials from "./Socials";

const Navbar = ({ className }) => {
  const scrollToSection = (sectionId) => {
    setIsMenuOpen(!isMenuOpen);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonClassConfig =
    "px-3 py-2 tracking-wider rounded-lg border-transparent border-2 hover:border-accent hover:border-2 transition duration-200 ease-in-out";

  return (
    <nav
      className={`bg-background text-primary min-w-full h-36 py-8 md:py-16 ${className}`}
    >
      <div
        id="nav bar menu"
        className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-end"
      >
        <Socials className="md:hidden flex self-end pr-4 top-4 relative z-20"></Socials>

        <button
          className="md:hidden p-4 font-sans font-bold text-3xl absolute"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuHamburgerSVG className="fill-accent"></MenuHamburgerSVG>
        </button>
        <ul
          id="navbar-menu-list"
          className={`${isMenuOpen ? "" : "hidden"}
            md:flex flex-col bg-background md:flex-row font-extralight md:text-lg text-3xl md:space-x-10 max-md:space-y-4 max-md:w-2/3 max-md:py-4 max-md:bg-opacity-95`}
        >
          <li>
            <button
              className={buttonClassConfig}
              onClick={() => scrollToSection("hero")}
            >
              home
            </button>
          </li>
          <li>
            <button
              className={buttonClassConfig}
              onClick={() => scrollToSection("about")}
            >
              about
            </button>
          </li>
          <li>
            <button
              className={buttonClassConfig}
              onClick={() => scrollToSection("experience")}
            >
              experience
            </button>
          </li>
          <li>
            <button
              className={buttonClassConfig}
              onClick={() => scrollToSection("skills")}
            >
              skills
            </button>
          </li>
          <li>
            <button
              className={buttonClassConfig}
              onClick={() => scrollToSection("contact")}
            >
              connect
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
