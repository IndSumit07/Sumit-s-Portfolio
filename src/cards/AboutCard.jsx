import React from "react";

const AboutCard = ({ props }) => {
  return (
    <div className="relative w-full max-w-[400px] min-h-[300px] bg-[#222223]/10 backdrop-blur-md border-white border-2 shadow-2xl shadow-blue-500/10 px-6 py-6 cursor-pointer group hover:scale-105 transition-all duration-500 rounded-xl">
      {/* Hover background overlay */}
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl z-0" />

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-center text-3xl md:text-4xl font-[nebula] mb-4 group-hover:text-black transition-all duration-500">
          {props.title}
        </h3>
        <p className="text-justify font-[poppins] text-sm md:text-base leading-relaxed tracking-wide group-hover:text-black transition-all duration-500">
          {props.desc}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
