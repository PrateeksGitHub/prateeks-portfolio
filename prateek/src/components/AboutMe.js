import React from "react";

function AboutMe({ className }) {
  return (
    <section
      id="about"
      className={`flex flex-col justify-center md:mx-48 md:p-4 ${className}`}
    >
      <h1 className="font-sans font-bold text-4xl text-primary md:my-16">
        About Me
      </h1>
      <p className="font-sans text-primary text-xl">
        As a FullStack Engineer with 2 years of experience at Skit.ai, I have
        honed my craft in designing, building, and maintaining production grade
        software & data pipelines at scale. 👨‍💻 I am a beginner at UI-UX Design
        🎨 and Music Production. 🎵 I pride myself on being an effective
        communicator and also am passionate about Sustainability. 🌏 When Im not
        being an engineer, I like to play Valorant 🎮 , take walks listening to
        audiobooks & podcasts. Also, extremely rarely, I workout.
      </p>
    </section>
  );
}

export default AboutMe;
