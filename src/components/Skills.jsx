import React from "react";
import SkillCard from "../cards/SkillCard";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
const Skills = () => {
  const skills = [
    {
      skills: "HTML",
      pic: <FaHtml5 className="text-[150px]" />,
    },
    {
      skills: "CSS",
      pic: <SiCss3 className="text-[150px]" />,
    },
    {
      skills: "JS",
      pic: <IoLogoJavascript className="text-[150px]" />,
    },
    {
      skills: "React",
      pic: <FaReact className="text-[150px]" />,
    },
    {
      skills: "Taiwind",
      pic: <RiTailwindCssFill className="text-[150px]" />,
    },
    {
      skills: "Java",
      pic: <FaJava className="text-[150px]" />,
    },
    {
      skills: "Python",
      pic: <FaPython className="text-[150px]" />,
    },
    {
      skills: "Node.js",
      pic: <FaNode className="text-[150px]" />,
    },
  ];
  return (
    <div id="skills" className="w-full min-h-[100vh] h-auto bg-cover relative">
      <div className="absolute inset-0 bg-black/75"></div>
      <div className="w-full h-full py-12 px-20 relative z-50">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-[nebula] text-center mb-12">
          My Skills
        </h2>
        <div className="flex justify-center items-center gap-16 flex-wrap">
          {skills.map((skill, index) => (
            <SkillCard props={skill} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
