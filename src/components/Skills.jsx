import React, { useEffect, useState } from "react";
import { FaCode, FaVideo, FaDatabase, FaTools } from "react-icons/fa";

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode className="text-white" />,
      skills: [
        { name: "C", level: 100 },
        { name: "Python", level: 75 },
        { name: "Java", level: 90 },
        { name: "JavaScript", level: 75 },
      ],
    },
    {
      title: "Video Editing",
      icon: <FaVideo className="text-white" />,
      skills: [
        { name: "Adobe Premiere Pro", level: 50 },
        { name: "Alight Motion", level: 100 },
        { name: "Capcut", level: 100 },
        { name: "Filmora", level: 75 },
      ],
    },
    {
      title: "Web Development",
      icon: <FaTools className="text-white" />,
      skills: [
        { name: "HTML/CSS/JS", level: 80 },
        { name: "React.js", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Express.js", level: 80 },
      ],
    },
    {
      title: "Database & Cloud",
      icon: <FaDatabase className="text-white" />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "Firebase", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Docker", level: 65 },
      ],
    },
  ];

  return (
    <section
      id="skills"
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
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiencies
            across development and creative domains
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-white text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-gray-400 to-white h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section - Technical Focus */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <FaCode className="text-white text-3xl mr-3" />
              <h3 className="text-2xl font-bold text-white">
                Technical Expertise
              </h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              My skills span across multiple domains of technology, from
              full-stack web development to professional video editing. I'm
              constantly learning and adapting to new technologies, frameworks,
              and tools to stay current with industry trends.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <FaCode className="text-white text-2xl mb-3 mx-auto" />
                <h4 className="text-white font-semibold mb-2">
                  Development Focus
                </h4>
                <p className="text-gray-400 text-sm">
                  Full-stack development with modern frameworks and best
                  practices
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <FaVideo className="text-white text-2xl mb-3 mx-auto" />
                <h4 className="text-white font-semibold mb-2">
                  Creative Skills
                </h4>
                <p className="text-gray-400 text-sm">
                  Professional video editing and motion graphics expertise
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
