import React from "react";
import heroImg from "../../public/heroImg.png";
const Hero = () => {
  return (
    <div className="py-10 xl:py-20 h-auto w-full min-h-[calc(100vh-100px)] flex xl:flex-row flex-col-reverse">
      <div className="xl:w-1/2 w-full h-auto pr-5 text-center xl:text-start">
        <h3 className="font-[nebula] sm:text-7xl text-4xl tracking-tighter">
          Designer.
        </h3>
        <h3 className="font-[nebula] sm:text-7xl text-4xl tracking-tighter">
          Developer.
        </h3>
        <h3 className="font-[nebula] sm:text-7xl text-4xl tracking-tighter">
          Deployer.
        </h3>
        <p className="font-[poppins] text-justify  text-md font-medium mt-10">
          "I’m Sumit Kumar — a designer with vision, a developer with precision,
          and a deployer with execution. I transform ideas into immersive
          digital experiences, blending creative design with clean code and
          scalable deployment. From crafting intuitive UIs to building
          rock-solid backends and launching to the cloud — I do it all, end to
          end."
        </p>
        <div className="mt-10 flex gap-5 xl:flex xl:justify-start justify-center items-center">
          <div className="w-[150px] md:w-[200px] h-[50px] rounded-full bg-[#111113] border border-white/10 flex justify-center items-center px-5 text-md md:text-xl cursor-pointer relative group overflow-hidden">
            <div className="w-0 h-full absolute left-0 bg-white group-hover:w-full top-0 hover:w-full transition-all duration-500 z-0"></div>
            <span className="relative z-10 group-hover:text-black transition-all duration-500 font-semibold">
              Get in Touch
            </span>
          </div>
          <div className="w-[150px] md:w-[200px] h-[50px] rounded-full bg-[#111113] border border-white/10 flex justify-center items-center px-5 text-md md:text-xl cursor-pointer relative group overflow-hidden">
            <div className="w-0 h-full absolute left-0 bg-white group-hover:w-full top-0 hover:w-full transition-all duration-500 z-0"></div>
            <span className="relative z-10 group-hover:text-black transition-all duration-500 font-semibold">
              Download CV
            </span>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-1/2 h-full flex justify-center xl:justify-end items-center mb-10">
        <div>
          <img src={heroImg} className="w-[400px] rounded-xl mr-10" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
