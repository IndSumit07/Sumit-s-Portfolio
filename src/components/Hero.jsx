import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from "react-icons/fa";
import sumit from "../../public/sumit.jpg";
const Hero = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate random positions for flickering stars
    const newStars = [];
    for (let i = 0; i < 80; i++) {
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
      id="home"
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black">
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="text-center">
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="absolute -inset-8 bg-gradient-to-r from-gray-600 via-white to-gray-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>

              <img
                src={sumit}
                alt="Sumit Kumar"
                className="relative w-48 h-48 rounded-full mx-auto mb-8 border-4 border-gray-600 shadow-2xl"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Hi, I'm Sumit Kumar
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional <span className="text-white font-semibold">Coder</span>{" "}
            &<span className="text-white font-semibold"> Video Editor</span>
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Computer Science Student at GLA University passionate about
            problem-solving, development, and creating stunning visual content
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-white text-black hover:bg-gray-200 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              View My Work
            </button>
            <button className="border-2 border-gray-600 hover:border-white hover:bg-gray-900 text-gray-300 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2 justify-center">
              <FaDownload className="group-hover:animate-bounce" />
              Download Resume
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-2xl transition-all duration-300 hover:scale-125 transform">
              <FaGithub />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-2xl transition-all duration-300 hover:scale-125 transform">
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-2xl transition-all duration-300 hover:scale-125 transform">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
