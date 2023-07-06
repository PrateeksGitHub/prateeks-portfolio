"use client";

import React from "react";

function AboutMe({ className }) {
  return (
    <section id="about" className={`flex flex-col justify-center ${className}`}>
      <h1 className="font-bold text-4xl mb-8">About Me</h1>
      <p className="text-primary text-xl leading-relaxed">
        As a FullStack Developer with 2 years of experience at Skit.ai, I have
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
