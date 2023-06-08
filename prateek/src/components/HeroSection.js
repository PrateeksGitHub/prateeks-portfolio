import React from "react";
import Socials from "./Socials";
import TypingAnimation from "./TypingAnimation";
import MessageTypingAnimation from "./MessageTypingAnimation";
import prateeksBlobPicture from "../assets/prateek-blob-profile-display-picture.png";

function HeroSection() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center md:my-6 mx-8 px-3"
    >
      <div
        id="hero-text-and-action"
        className="flex flex-col md:w-1/2 sm:h-1/2 max-w-7xl my-8 md:my-0 order-2 md:order-1 md:px-8 justify-center items-start"
      >
        <h1 className="text-4xl md:text-5xl text-secondary font-sans py-1">
          Welcome! I am
        </h1>
        <h1 className="text-5xl text-primary font-bold font-sans py-1">
          Prateek Agrawal
        </h1>
        <TypingAnimation
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
          className="pt-4 md:py-1"
        ></TypingAnimation>
        <MessageTypingAnimation
          message={"Contact me"}
          waveDuration={2000}
          typingSpeed={200}
          className="py-16"
        ></MessageTypingAnimation>
      </div>
      <div
        id="profile-picture-and-socials"
        className="flex flex-row md:w-1/2 order-1 md:order-2 justify-between items-center"
      >
        <div className="flex-grow"></div>
        <img
          src={prateeksBlobPicture}
          alt="Prateek Profile"
          className="aspect-auto h-96 flex"
        />
        <div className="flex-grow"></div>
        <Socials className="flex self-start md:self-auto"></Socials>
      </div>
    </section>
  );
}

export default HeroSection;
