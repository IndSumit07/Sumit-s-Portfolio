import React from "react";
const ProjectsCard = ({ props }) => {
  return (
    <div className="w-[350px] h-[530px] rounded-xl bg-gradient-to-br from-[#1a1b53] via-[#020234] to-[#01011b]  overflow-hidden group cursor-pointer flex-shrink-0 relative transition-all duration-300 hover:scale-105 shadow-lg shadow-[black]">
      <div className="w-full h-auto overflow-hidden bg-cover z-50">
        <img src={props.image} alt="" />
      </div>
      <div className="w-full py-5 px-5">
        <h1 className="font-[nebula] text-start text-2xl  backdrop-blur-lg rounded-md">
          {props.title}
        </h1>
        <div className="mt-2">
          {props.features.map((feature) => (
            <p className="text-lg">{feature}</p>
          ))}
        </div>
        <div className="py-5 flex justify-center items-center">
          <button className="bg-gradient-to-br from-[#1a1b53] via-[#020234] to-[#01011b] py-3 px-5 rounded-full  transition-bg duration-150 hover:scale-105">
            Get Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
