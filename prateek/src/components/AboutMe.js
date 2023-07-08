"use client";

import React from "react";

function AboutMe({ className }) {
  return (
    <section id="about" className={`flex flex-col justify-center ${className}`}>
      <h1 className="font-bold text-4xl mb-8">About Me</h1>
      <p className="text-primary text-xl leading-relaxed">
        I'm a FullStack Developer with 2 years of experience at Skit.ai. My
        focus is on designing and building reliable software solutions and
        managing data pipelines at scale. 👨‍💻 I'm also dipping my toes into UI-UX
        Design 🎨 and Music Production to expand my skills. 🎵 I value effective
        communication and have a keen interest in Sustainability. 🌏 During my
        downtime, I like playing Valorant 🎮, going for walks while listening to
        audiobooks and podcasts, and extremely rarely, I squeeze in a workout.
      </p>
    </section>
  );
}

export default AboutMe;
