import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaHeart,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaDiscord,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate random positions for flickering stars
    const newStars = [];
    for (let i = 0; i < 40; i++) {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative py-12 md:py-20 overflow-hidden bg-black border-t border-gray-800">
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
        {/* Main Footer Grid - RESPONSIVE FIXES */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Brand Section - RESPONSIVE FIXES */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Sumit Kumar
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
                Computer Science Student at GLA University passionate about
                problem-solving, development, and creating innovative solutions.
                Combining academic knowledge with practical experience to build
                exceptional digital experiences.
              </p>

              {/* Contact Info - RESPONSIVE FIXES */}
              <div className="space-y-2 sm:space-y-3 mb-6">
                <div className="flex items-center text-gray-400 text-sm sm:text-base">
                  <FaMapMarkerAlt className="mr-3 flex-shrink-0" />
                  <span className="break-words">
                    GLA University, Mathura, India
                  </span>
                </div>
                <div className="flex items-center text-gray-400 text-sm sm:text-base">
                  <FaEnvelope className="mr-3 flex-shrink-0" />
                  <span className="break-all">sumit.kumar@gla.ac.in</span>
                </div>
                <div className="flex items-center text-gray-400 text-sm sm:text-base">
                  <FaPhone className="mr-3 flex-shrink-0" />
                  <span>+91 XXXXX XXXXX</span>
                </div>
              </div>

              {/* Social Media - RESPONSIVE FIXES */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
                <a
                  href="https://github.com/IndSumit07"
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-all duration-300 group flex items-center justify-center">
                  <FaGithub className="text-white text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sumit-kumar-b0486631a/"
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-all duration-300 group flex items-center justify-center">
                  <FaLinkedin className="text-white text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="https://www.instagram.com/codrsumit?igsh=MXJ6bnhucDJ3NXBjMg=="
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-all duration-300 group flex items-center justify-center">
                  <FaInstagram className="text-white text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links - RESPONSIVE FIXES */}
          <div className="order-2 lg:order-none">
            <div className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-gray-800 h-full">
              <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">
                Quick Links
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform block text-sm sm:text-base">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform block text-sm sm:text-base">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#education"
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform block text-sm sm:text-base">
                    Education
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform block text-sm sm:text-base">
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform block text-sm sm:text-base">
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform block text-sm sm:text-base">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Services - RESPONSIVE FIXES */}
          <div className="order-3 lg:order-none">
            <div className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-gray-800 h-full">
              <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">
                Services
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform block text-sm sm:text-base">
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform block text-sm sm:text-base">
                    Video Editing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform block text-sm sm:text-base">
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform block text-sm sm:text-base">
                    Cloud Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform block text-sm sm:text-base">
                    Consulting
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform block text-sm sm:text-base">
                    Custom Development
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section - RESPONSIVE FIXES */}
        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
              <p className="text-gray-400 text-xs sm:text-sm">
                © 2025 Sumit Kumar. All rights reserved.
              </p>
              <p className="text-gray-400 text-xs sm:text-sm flex items-center">
                Made with{" "}
                <FaHeart className="text-gray-500 mx-1 animate-pulse" /> by
                Sumit Kumar
              </p>
            </div>

            {/* Back to Top Button - RESPONSIVE FIXES */}
            <button
              onClick={scrollToTop}
              className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all duration-300 flex items-center group text-sm sm:text-base">
              <FaArrowUp className="mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Additional Info - RESPONSIVE FIXES */}
        <div className="mt-6 md:mt-8 text-center">
          <div className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-gray-800 max-w-2xl mx-auto">
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Currently pursuing Computer Science Engineering at GLA University.
              Open to internships, freelance projects, and collaborative
              opportunities. Let's build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
