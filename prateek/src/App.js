import React from "react";
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";

function App() {
  return (
    <div className="bg-background min-h-screen min-w-full flex flex-col">
      <main className="flex flex-col">
        <div className="flex flex-col h-screen">
          <Navbar className="relative z-10 px-6 md:px-20"></Navbar>
          <HeroSection className="flex-grow relative z-0"></HeroSection>
        </div>
        <SkillsSection
          skillTitles={[
            "Python",
            "Python",
            "Python",
            "Python",
            "Python",
            "Python",
            "Python",
            "Python",
            "Python",
            "Python",
            "Python",
            "Python",
            "Python",
            "Python",
          ]}
          className="relative z-0"
        ></SkillsSection>
      </main>
    </div>
  );
}

export default App;
