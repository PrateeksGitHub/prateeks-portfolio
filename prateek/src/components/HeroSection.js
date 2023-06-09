import React from "react";
import Socials from "./Socials";
import TypingAnimation from "./TypingAnimation";
import MessageTypingAnimation from "./MessageTypingAnimation";
import prateeksBlobPicture from "../assets/prateek-blob-profile-display-picture.png";

function HeroSection({ className }) {
  return (
    <section
      id="hero"
      className={`flex flex-col md:flex-row items-center md:my-6 mx-8 px-3 ${className}`}
    >
      <div
        id="hero-text-and-action"
        className="flex flex-row md:w-1/2 sm:h-1/2 max-w-7xl my-8 md:my-0 order-2 md:order-1 md:px-8 justify-end items-start"
      >
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-6xl text-secondary font-sans py-1">
            Welcome! I am
          </h1>
          <h1 className="text-6xl text-primary font-extrabold font-sans py-1">
            Prateek Agrawal
          </h1>
          <TypingAnimation
            className="text-white text-2xl md:text-3xl font-light pt-4 md:py-1"
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
            className="py-16"
          ></MessageTypingAnimation>
        </div>
      </div>
      <div
        id="profile-picture-and-socials"
        className="flex flex-row md:w-1/2 order-1 md:order-2 justify-between items-center"
      >
        <img
          src={prateeksBlobPicture}
          alt="Prateek Profile"
          className="aspect-auto md:h-full md:w-96 flex md:mx-16 md:ml-28 p-4"
        />
        <div className="flex-grow"></div>
        <Socials className="hidden md:flex self-center"></Socials>
      </div>
    </section>
  );
}

export default HeroSection;
