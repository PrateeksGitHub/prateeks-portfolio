"use client";
import Navbar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import JourneySection from "@/components/JourneySection";
import SkillsSection from "@/components/SkillsSection";
import ContactMeSection from "@/components/ContactMeSection";

export default function Home() {
  return (
    <main className="bg-background w-full min-h-screen flex flex-col self-center font-sans font-normal text-base text-primary ">
      <div className="flex flex-col min-h-screen max-w-5xl container mx-auto px-5 sm:px-10">
        {/* <p className="text-white text-xl">Hellooooo!</p> */}
        <Navbar className="relative z-10"></Navbar>
        <HeroSection className="flex-grow relative z-0"></HeroSection>
        <AboutMe className="my-24 max-md:pt-16"></AboutMe>
        <SkillsSection className="my-24"></SkillsSection>
        <JourneySection className="my-24"></JourneySection>
        <ContactMeSection className="my-24"></ContactMeSection>
      </div>
    </main>
  );
}
