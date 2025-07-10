import React from "react";
import { FaHtml5 } from "react-icons/fa";
const SkillCard = ({ props }) => {
  return (
    <div className="relative w-[250px] h-[250px] rounded-xl bg-gradient-to-br from-[#1a1b53] via-[#020234] to-[#01011b] shadow-lg shadow-black overflow-hidden group cursor-pointer flex-shrink-0 hover:scale-105 transition-all duration-300">
      {/* Glowing Hover Overlay */}
      <div className="absolute inset-0 bg-white transition-all duration-500 ease-in-out z-0 scale-y-0 origin-bottom group-hover:scale-y-100"></div>

      {/* Front Side (Icon) */}
      <div className="absolute inset-0 z-10 flex items-center justify-center text-white text-4xl transition duration-500 group-hover:opacity-0">
        {props.pic}
      </div>

      {/* Back Side (Skill Text) */}
      <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 text-black font-[nebula] text-4xl transition duration-500 group-hover:opacity-100">
        {props.skills}
      </div>
    </div>
  );
};

export default SkillCard;
