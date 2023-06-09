import React from "react";
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import Socials from "./components/Socials";

function App() {
  return (
    <div className="bg-background min-h-screen min-w-full flex flex-col">
      <main className="flex flex-col">
        <div className="flex flex-col h-screen">
          <Navbar className="relative z-10 px-6 md:px-20"></Navbar>
          <HeroSection className="flex-grow max-h-screen relative z-0"></HeroSection>
        </div>
        <SkillsSection></SkillsSection>
      </main>
    </div>
  );
}

export default App;
