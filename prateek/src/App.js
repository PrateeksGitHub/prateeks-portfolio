import React from "react";
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";

function App() {
  return (
    <div className="bg-background min-h-screen min-w-full">
      <header className="mx-8 md:px-8 relative z-10">
        <Navbar></Navbar>
      </header>
      <main className="relative z-0">
        <HeroSection></HeroSection>
        <SkillsSection></SkillsSection>
      </main>
    </div>
  );
}

export default App;
