import React from "react";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const buttonClassConfig =
    "px-3 py-2 rounded-lg border-transparent border-2 hover:border-accent hover:border-2 transition duration-200 ease-in-out";

  return (
    <nav className="bg-background text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex"></div>
          <div className="flex font-extralight text-lg space-x-10">
            <button
              className={buttonClassConfig}
              onClick={() => scrollToSection("hero")}
            >
              home
            </button>
            <button
              className={buttonClassConfig}
              onClick={() => scrollToSection("about")}
            >
              about
            </button>
            <button
              className={buttonClassConfig}
              onClick={() => scrollToSection("experience")}
            >
              experience
            </button>
            <button
              className={buttonClassConfig}
              onClick={() => scrollToSection("skills")}
            >
              skills
            </button>
            <button
              className={buttonClassConfig}
              onClick={() => scrollToSection("contact")}
            >
              connect
            </button>
          </div>
          <div className="flex"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
