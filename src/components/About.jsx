import React, { useEffect, useState } from "react";
import {
  FaCode,
  FaVideo,
  FaLightbulb,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaHeart,
} from "react-icons/fa";

const About = () => {
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

  return (
    <section
      id="about"
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
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A passionate developer and creative professional with expertise in
            both coding and video editing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">Who I Am</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm Sumit Kumar, a 19-year-old Computer Science student at GLA
                University with a passion for problem-solving and development. I
                combine technical expertise with creative vision to deliver
                exceptional digital solutions.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                My journey in technology spans from developing robust web
                applications to creating compelling video content. I believe in
                the power of technology to transform ideas into reality.
              </p>
            </div>

            {/* Personal Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <FaCalendarAlt className="text-gray-400 mr-2" />
                  <h4 className="font-semibold text-white">Age</h4>
                </div>
                <p className="text-gray-300 text-lg">19 Years</p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <FaMapMarkerAlt className="text-gray-400 mr-2" />
                  <h4 className="font-semibold text-white">Location</h4>
                </div>
                <p className="text-gray-300 text-lg">India</p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <FaGraduationCap className="text-gray-400 mr-2" />
                  <h4 className="font-semibold text-white">University</h4>
                </div>
                <p className="text-gray-300 text-lg">GLA University</p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <FaCode className="text-gray-400 mr-2" />
                  <h4 className="font-semibold text-white">Field</h4>
                </div>
                <p className="text-gray-300 text-lg">Computer Science</p>
              </div>
            </div>
          </div>

          {/* Right Column - Skills Cards */}
          <div className="space-y-6">
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <FaCode className="text-4xl text-white mr-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-2xl font-semibold text-white">
                  Coding Expertise
                </h4>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Proficient in multiple programming languages and frameworks,
                with a focus on web development and problem-solving algorithms.
                I enjoy tackling complex challenges and creating efficient,
                scalable solutions.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <FaVideo className="text-4xl text-white mr-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-2xl font-semibold text-white">
                  Video Editing
                </h4>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Creative video editing skills with expertise in professional
                editing software and visual storytelling techniques. I bring
                stories to life through compelling visual narratives and
                seamless post-production work.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <FaLightbulb className="text-4xl text-white mr-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-2xl font-semibold text-white">
                  Problem Solving
                </h4>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Strong analytical and problem-solving skills with experience in
                competitive programming and algorithmic challenges. I thrive on
                finding innovative solutions to complex technical problems.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Passion Statement */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <FaHeart className="text-white text-2xl mr-3" />
              <h3 className="text-2xl font-bold text-white">My Passion</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm driven by the endless possibilities that technology offers.
              Whether it's building innovative web applications, solving complex
              algorithms, or creating stunning visual content, I'm always eager
              to learn, grow, and push the boundaries of what's possible. My
              goal is to use technology to make a positive impact on the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
