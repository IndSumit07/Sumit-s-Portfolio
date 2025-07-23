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
      year: "2024 - 2028",
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
      year: "2023 - 2024",
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
      year: "2021 - 2022",
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
      className="relative min-h-[80vh] py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden bg-black">
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
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2 sm:px-4">
            My academic journey and continuous learning path in Computer Science
          </p>
        </div>

        {/* Fully Responsive Timeline */}
        <div className="relative">
          {/* Responsive Timeline Line */}
          <div className="absolute left-4 sm:left-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-0.5 sm:w-1 h-full bg-gradient-to-b from-white via-gray-400 to-gray-600 rounded-full opacity-30"></div>

          {/* Animated pulse line for large screens */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-white to-transparent rounded-full opacity-20 animate-pulse"></div>

          {education.map((edu, index) => (
            <div
              key={index}
              className="mb-8 sm:mb-12 lg:mb-16 xl:mb-20 relative">
              {/* Responsive Layout Container */}
              <div
                className={`lg:flex lg:items-center lg:justify-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}>
                {/* Content Card - FULLY RESPONSIVE */}
                <div
                  className={`w-full lg:w-5/12 pl-12 sm:pl-16 lg:pl-0 ${
                    index % 2 === 0
                      ? "lg:pr-8 xl:pr-16 lg:text-right"
                      : "lg:pl-8 xl:pl-16 lg:text-left"
                  } transform transition-all duration-700 hover:scale-105`}>
                  {/* Enhanced Responsive Card */}
                  <div className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg sm:rounded-xl lg:rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-500 group shadow-xl hover:shadow-white/10">
                    {/* Responsive Header */}
                    <div
                      className={`flex flex-col xs:flex-row items-start xs:items-center mb-4 sm:mb-6 space-y-2 xs:space-y-0 xs:space-x-3 ${
                        index % 2 === 0
                          ? "lg:justify-end lg:flex-row-reverse lg:space-x-reverse"
                          : "lg:justify-start"
                      }`}>
                      <div className="flex items-center">
                        <div className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl mr-2 xs:mr-3 sm:mr-4 group-hover:scale-110 lg:group-hover:scale-125 transition-transform duration-500 text-white">
                          {edu.icon}
                        </div>
                        <span
                          className={`px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full text-xs xs:text-sm font-bold shadow-lg ${
                            edu.status === "Current"
                              ? "bg-gradient-to-r from-white to-gray-200 text-black animate-pulse"
                              : "bg-gradient-to-r from-gray-800 to-gray-700 text-white border border-gray-600"
                          }`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>

                    {/* Responsive Content */}
                    <h3 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                      {edu.degree}
                    </h3>
                    <h4 className="text-base xs:text-lg sm:text-xl lg:text-2xl text-gray-300 mb-3 sm:mb-4 font-medium">
                      {edu.institution}
                    </h4>

                    {/* Responsive Date and Location */}
                    <div
                      className={`flex flex-col xs:flex-row xs:items-center text-gray-400 mb-4 sm:mb-6 space-y-1 xs:space-y-0 ${
                        index % 2 === 0
                          ? "lg:justify-end lg:text-right"
                          : "lg:justify-start lg:text-left"
                      }`}>
                      <div className="flex items-center">
                        <FaCalendar className="mr-2 sm:mr-3 text-white text-sm sm:text-base" />
                        <span className="font-semibold text-sm sm:text-base">
                          {edu.year}
                        </span>
                      </div>
                      <span className="hidden xs:inline xs:mx-2 sm:mx-4 text-gray-600">
                        •
                      </span>
                      <span className="text-gray-500 ml-6 xs:ml-0 font-medium text-sm sm:text-base">
                        {edu.location}
                      </span>
                    </div>

                    <p className="text-sm xs:text-base sm:text-base lg:text-lg text-gray-300 mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Responsive Highlights */}
                    <div className="space-y-3 sm:space-y-4">
                      <h5
                        className={`text-white font-bold flex items-center text-sm xs:text-base sm:text-lg ${
                          index % 2 === 0
                            ? "lg:justify-end"
                            : "lg:justify-start"
                        }`}>
                        <FaBook className="mr-2 sm:mr-3 text-white text-sm sm:text-base" />
                        Key Subjects
                      </h5>
                      <div
                        className={`flex flex-wrap gap-2 sm:gap-3 ${
                          index % 2 === 0
                            ? "lg:justify-end"
                            : "lg:justify-start"
                        }`}>
                        {edu.highlights.map((highlight, hIndex) => (
                          <span
                            key={hIndex}
                            className="bg-gradient-to-r from-gray-800 to-gray-700 text-gray-200 px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full text-xs xs:text-sm border border-gray-600 hover:border-gray-500 transition-colors duration-300 shadow-lg">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Responsive Timeline Circle */}
                <div className="absolute left-4 sm:left-6 lg:relative lg:left-auto lg:w-2/12 lg:flex lg:justify-center">
                  <div className="relative">
                    {/* Responsive Circle */}
                    <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-white rounded-full border-2 xs:border-3 sm:border-4 lg:border-6 border-black shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <div className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-black rounded-full"></div>
                    </div>

                    {/* Enhanced Current Status Animation */}
                    {edu.status === "Current" && (
                      <>
                        <div className="absolute -inset-1 xs:-inset-1.5 sm:-inset-2 lg:-inset-4 bg-white rounded-full animate-ping opacity-30"></div>
                        <div className="absolute -inset-0.5 xs:-inset-1 sm:-inset-1 lg:-inset-2 bg-white rounded-full animate-pulse opacity-20"></div>
                      </>
                    )}

                    {/* Connecting Line to Card (Large Screens Only) */}
                    <div
                      className={`hidden lg:block absolute top-1/2 ${
                        index % 2 === 0 ? "left-full" : "right-full"
                      } w-8 xl:w-16 h-0.5 bg-gradient-to-${
                        index % 2 === 0 ? "r" : "l"
                      } from-white to-transparent opacity-30`}></div>
                  </div>
                </div>

                {/* Spacer for desktop layout */}
                <div className="hidden lg:block lg:w-5/12"></div>
              </div>

              {/* Responsive Year Label (Large Screens Only) */}
              <div
                className={`hidden xl:block absolute top-0 ${
                  index % 2 === 0 ? "left-8" : "right-8"
                } bg-gradient-to-r from-gray-800 to-gray-700 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg border border-gray-600`}>
                {edu.year.split(" - ")[0]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
