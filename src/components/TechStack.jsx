import React, { useEffect, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiTypescript,
} from "react-icons/si";

const TechStack = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate random positions for flickering stars
    const newStars = [];
    for (let i = 0; i < 60; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 3,
      });
    }
    setStars(newStars);
  }, []);

  const technologies = [
    {
      name: "React",
      icon: <FaReact className="text-white" />,
      category: "Frontend",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-white" />,
      category: "Backend",
    },
    {
      name: "Python",
      icon: <FaPython className="text-white" />,
      category: "Programming",
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-white" />,
      category: "Programming",
    },

    {
      name: "Java",
      icon: <FaJava className="text-white" />,
      category: "Programming",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-white" />,
      category: "Frontend",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-white" />,
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-white" />,
      category: "Frontend",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-white" />,
      category: "Database",
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-white" />,
      category: "Backend",
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-white" />,
      category: "Backend",
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-white" />,
      category: "Tools",
    },
    {
      name: "Docker",
      icon: <FaDocker className="text-white" />,
      category: "Tools",
    },
    { name: "AWS", icon: <FaAws className="text-white" />, category: "Cloud" },
  ];

  const categories = [...new Set(technologies.map((tech) => tech.category))];

  return (
    <section
      id="techstack"
      className="relative min-h-[80vh] py-20 overflow-hidden bg-black">
      {/* Flickering Stars Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-flicker"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              filter: "drop-shadow(0 0 2px rgba(255,255,255,0.8))",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Categories */}
        {categories.map((category, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              {category}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {technologies
                .filter((tech) => tech.category === category)
                .map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-800 hover:border-gray-700 group">
                    <div className="text-4xl mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <h4 className="text-white font-medium">{tech.name}</h4>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
