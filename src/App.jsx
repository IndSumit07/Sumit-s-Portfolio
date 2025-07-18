import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import TechStack from "./components/TechStack";
import Services from "./components/Services";
import Projects from "./components/Projects";
import CodingProfiles from "./components/CodingProfiles";
import Github from "./components/Github";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <TechStack />
      <Services />
      <Projects />
      <CodingProfiles />
      <Github />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
