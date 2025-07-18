import React, { useEffect, useState } from "react";
import {
  FaGraduationCap,
  FaSchool,
  FaCalendar,
  FaAward,
  FaBook,
  FaStar,
} from "react-icons/fa";

const Education = () => {
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

  const education = [
    {
      degree: "Bachelor of Technology - Computer Science",
      institution: "GLA University",
      location: "Mathura, India",
      year: "2023 - 2027",
      status: "Current",
      description:
        "Pursuing Computer Science Engineering with focus on software development, algorithms, and data structures. Actively participating in coding competitions and technical events.",
      icon: <FaGraduationCap className="text-white" />,
      highlights: [
        "Data Structures & Algorithms",
        "Web Development",
        "Database Management",
        "Software Engineering",
        "Machine Learning Fundamentals",
      ],
    },
    {
      degree: "Senior Secondary (12th)",
      institution: "Board School",
      location: "India",
      year: "2022 - 2023",
      status: "Completed",
      description:
        "Completed with Science stream focusing on Mathematics, Physics, and Chemistry. Built strong foundation in logical thinking and analytical skills.",
      icon: <FaSchool className="text-white" />,
      highlights: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Computer Science",
        "English",
      ],
    },
    {
      degree: "Secondary (10th)",
      institution: "Board School",
      location: "India",
      year: "2020 - 2021",
      status: "Completed",
      description:
        "Strong foundation in core subjects with excellent academic performance. Developed interest in technology and problem-solving during this period.",
      icon: <FaSchool className="text-white" />,
      highlights: [
        "Mathematics",
        "Science",
        "English",
        "Social Studies",
        "Computer Applications",
      ],
    },
  ];

  return (
    <section
      id="education"
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
            Education
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My academic journey and continuous learning path in Computer Science
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-white via-gray-400 to-gray-600 rounded-full opacity-30"></div>

          {education.map((edu, index) => (
            <div
              key={index}
              className={`mb-16 flex items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}>
              <div
                className={`w-5/12 ${
                  index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                }`}>
                <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          edu.status === "Current"
                            ? "bg-white text-black"
                            : "bg-gray-800 text-white border border-gray-700"
                        }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <h4 className="text-xl text-gray-300 mb-2">
                    {edu.institution}
                  </h4>

                  <div className="flex items-center text-gray-400 mb-4">
                    <FaCalendar className="mr-2" />
                    <span className="mr-4">{edu.year}</span>
                    <span className="text-gray-500">• {edu.location}</span>
                  </div>

                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <h5 className="text-white font-semibold flex items-center">
                      <FaBook className="mr-2" />
                      Key Subjects
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, hIndex) => (
                        <span
                          key={hIndex}
                          className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs border border-gray-700">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Circle */}
              <div className="w-2/12 flex justify-center">
                <div className="relative">
                  <div className="w-8 h-8 bg-white rounded-full border-4 border-black shadow-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-black rounded-full"></div>
                  </div>
                  {edu.status === "Current" && (
                    <div className="absolute -inset-2 bg-white rounded-full animate-ping opacity-30"></div>
                  )}
                </div>
              </div>

              <div className="w-5/12"></div>
            </div>
          ))}
        </div>

        {/* Bottom Section - Academic Achievements */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <FaAward className="text-white text-3xl mr-3" />
              <h3 className="text-2xl font-bold text-white">Academic Focus</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Currently pursuing Computer Science Engineering at GLA University
              with a strong focus on software development, algorithms, and
              emerging technologies. My academic journey has been driven by
              curiosity and a passion for solving complex problems through code.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <FaStar className="text-white text-2xl mb-3 mx-auto" />
                <h4 className="text-white font-semibold mb-2">
                  Problem Solving
                </h4>
                <p className="text-gray-400 text-sm">
                  Strong focus on algorithmic thinking and competitive
                  programming
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <FaGraduationCap className="text-white text-2xl mb-3 mx-auto" />
                <h4 className="text-white font-semibold mb-2">Development</h4>
                <p className="text-gray-400 text-sm">
                  Hands-on experience with modern web technologies and
                  frameworks
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <FaBook className="text-white text-2xl mb-3 mx-auto" />
                <h4 className="text-white font-semibold mb-2">
                  Continuous Learning
                </h4>
                <p className="text-gray-400 text-sm">
                  Always exploring new technologies and industry best practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
