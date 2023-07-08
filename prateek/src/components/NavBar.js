"use client";

import React, { useState } from "react";
import Socials from "@/components/Socials";
import clsxm from "@/utils/clsxm";

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
    "px-3 py-2 max-md:hover:text-accent text-primary tracking-wider rounded-lg md:border-transparent md:border-2 md:hover:border-accent md:hover:border-2 transition duration-200 ease-in-out";
  const genericHamburgerLine = `h-0.5 w-6 rounded-full bg-primary transition ease transform duration-300`;
  return (
    <nav className={`flex flex-col bg-background min-w-full ${className}`}>
      <div
        id="nav bar menu"
        className="flex flex-col md:flex-row items-start justify-start"
      >
        <Socials className="md:hidden flex self-end absolute top-4 space-y-4"></Socials>

        <button
          className="flex aspect-square font-sans font-bold text-3xl md:hidden z-10 pt-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={clsxm("flex flex-col space-y-1")}>
            <div
              className={`${genericHamburgerLine} ${
                isMenuOpen
                  ? "rotate-45 translate-y-2 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isMenuOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isMenuOpen
                  ? "-rotate-45 -translate-y-1 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
          </div>
        </button>
        <ul
          id="navbar-menu-list"
          className={`${isMenuOpen ? "flex" : "hidden"}
            md:flex md:flex-row absolute max-md:pt-16 md:top-16 flex-col bg-background backdrop-blur-md max-md:h-screen max-md:w-screen rounded-md font-light md:text-lg text-3xl md:space-x-10 max-md:space-y-4 max-md:py-4 max-md:bg-opacity-95`}
        >
          <li>
            <button
              className={buttonClassConfig}
              onClick={() => scrollToSection("hero")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className={buttonClassConfig}
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
          </li>
          <li>
            <button
              className={buttonClassConfig}
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </button>
          </li>

          <li>
            <button
              className={buttonClassConfig}
              onClick={() => scrollToSection("journey")}
            >
              Experience
            </button>
          </li>
          <li>
            <button
              className={buttonClassConfig}
              onClick={() => scrollToSection("contact")}
            >
              Connect
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
