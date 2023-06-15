import React from "react";
import Socials from "./Socials";
import TypingAnimation from "./TypingAnimation";
import MessageTypingAnimation from "./MessageTypingAnimation";
import prateeksBlobPicture from "../assets/prateek-blob-profile-display-picture.png";

function HeroSection({ className }) {
  return (
    <section
      id="hero"
      className={`flex flex-col md:flex-row items-center md:m-4  max-sm:top-32 ${className}`}
    >
      <div
        id="hero-text-and-action"
        className="flex flex-col md:w-1/2 my-8 md:my-0 order-2 md:order-1 items-start md:pl-48 pl-12"
      >
        <h1 className="text-4xl md:text-5xl text-secondary font-sans py-1">
          Welcome! I am
        </h1>
        <h1 className="text-5xl text-primary font-extrabold font-sans py-1">
          Prateek Agrawal
        </h1>
        <TypingAnimation
          className="text-white text-2xl md:text-2xl font-light pt-4 md:py-1"
          strings={[
            "Fullstack developer",
            "Python",
            "JavaScript",
            "Django",
            "React",
            "REST APIs",
            "Automations",
            "Data pipelines",
          ]}
        ></TypingAnimation>
        <MessageTypingAnimation
          message={"Contact me"}
          waveDuration={2000}
          typingSpeed={200}
          className="pt-16"
          onClick={() => {
            const section = document.getElementById("contact");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
        ></MessageTypingAnimation>
      </div>
      <div
        id="profile-picture-and-socials"
        className="flex flex-row md:w-1/2 order-1 md:order-2 justify-between md:items-center max-sm:mx-12"
      >
        <img
          src={prateeksBlobPicture}
          alt="Prateek Profile"
          className="aspect-auto md:h-full md:w-1/2 flex md:mx-16" //max-sm:h-5/6
        />
        <div className="flex-grow"></div>
        <Socials className="hidden md:flex self-center p-8"></Socials>
      </div>
    </section>
  );
}

export default HeroSection;
