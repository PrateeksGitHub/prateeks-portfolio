import React from "react";
import Navbar from "./components/NavBar";
import TypingAnimation from "./components/TypingAnimation";
import MessageTypingAnimation from "./components/MessageTypingAnimation";

function App() {
  return (
    <div className="bg-background min-h-screen">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <section id="hero" className="py-16">
          <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:pl-16">
            <h1 className="text-5xl text-secondary font-sans py-1">
              Welcome! I am
            </h1>
            <h1 className="text-5xl text-primary font-bold font-sans py-1">
              Prateek Agrawal
            </h1>
            <TypingAnimation
              strings={["hello", "there"]}
              className="py-1"
            ></TypingAnimation>
            <MessageTypingAnimation
              message={"Hire me. Please!"}
              waveDuration={3000}
              typingSpeed={200}
              className="py-16"
            ></MessageTypingAnimation>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
