import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="w-full min-h-[100vh] h-auto">
      <div className="w-full h-auto min-h-[100vh] py-5 px-5 md:px-20 ">
        <Navbar />
        <Hero />
      </div>
      <hr className="w-full border-[2px] px-20" />
      <About />
      <hr className="w-full border-[2px] px-20" />
      <Skills />
      <hr className="w-full border-[2px] px-20" />
      <Services />
      <hr className="w-full border-[2px] px-20" />
      <Projects />
    </div>
  );
};

export default App;
