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
    "px-3 py-2 max-sm:hover:text-accent text-primary tracking-wider rounded-lg md:border-transparent md:border-2 md:hover:border-accent md:hover:border-2 transition duration-200 ease-in-out";
  const smallNavBarHeight = "16";
  return (
    <nav
      className={`flex flex-col bg-background min-w-full h-${smallNavBarHeight} md:pt-24 ${className}`}
    >
      <div
        id="nav bar menu"
        className="flex flex-col md:flex-row items-start justify-start"
      >
        <Socials className="md:hidden flex self-end absolute top-10 space-y-6"></Socials>

        <button
          className="flex absolute top-10 mx-4 md:hidden font-sans font-bold text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuHamburgerSVG className="fill-primary hover:fill-accent h-5"></MenuHamburgerSVG>
        </button>
        <ul
          id="navbar-menu-list"
          className={`${isMenuOpen ? "flex" : "hidden"}
            md:flex md:flex-row flex-col bg-background font-extralight md:text-lg text-3xl md:space-x-10 max-sm:space-y-4 max-sm:w-2/3 max-sm:py-4 max-sm:mt-${smallNavBarHeight} max-sm:bg-opacity-95`}
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
