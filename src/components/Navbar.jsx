import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaCode,
  FaHome,
  FaUser,
  FaGraduationCap,
  FaCog,
  FaBriefcase,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", href: "#home", icon: <FaHome /> },
    { name: "About", href: "#about", icon: <FaUser /> },
    { name: "Education", href: "#education", icon: <FaGraduationCap /> },
    { name: "Skills", href: "#skills", icon: <FaCog /> },
    { name: "Services", href: "#services", icon: <FaBriefcase /> },
    { name: "Projects", href: "#projects", icon: <FaProjectDiagram /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 top-0 transition-all duration-700 ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-gray-800 shadow-2xl"
            : "bg-transparent"
        }`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/20 to-transparent transform -skew-x-12 animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo */}
            <div className="flex-shrink-0 group cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-400 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>

                  <div className="relative w-12 h-12 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 border border-gray-700">
                    <FaCode className="text-white text-2xl group-hover:rotate-12 transition-transform duration-500" />

                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                  </div>
                </div>

                <div className="group-hover:translate-x-1 transition-transform duration-300">
                  <h1 className="text-2xl font-bold text-white group-hover:text-gray-200 transition-colors duration-300">
                    Sumit Kumar
                  </h1>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-mono">
                      FULL_STACK_DEV
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-2 bg-gray-900/60 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700">
                {navItems.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`relative group px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 ${
                      activeSection === item.href.slice(1)
                        ? "text-white bg-gradient-to-r from-gray-800 to-gray-700 shadow-lg scale-105 border border-gray-600"
                        : "text-gray-300 hover:text-white hover:bg-gray-800/50 hover:scale-105"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="flex items-center space-x-2">
                      <span
                        className={`text-base transition-all duration-300 ${
                          activeSection === item.href.slice(1)
                            ? "text-white scale-110"
                            : "group-hover:text-white group-hover:scale-110"
                        }`}>
                        {item.icon}
                      </span>
                      <span className="font-mono text-xs tracking-wider">
                        {item.name.toUpperCase()}
                      </span>
                    </div>

                    <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-gray-600 transition-all duration-500"></div>

                    {activeSection === item.href.slice(1) && (
                      <div className="absolute inset-0 rounded-full bg-white/5 animate-pulse"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-12 h-12 bg-gray-900/80 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gray-800 transition-all duration-300 group border border-gray-700">
                <div className="relative">
                  {isOpen ? (
                    <FaTimes className="text-white text-xl transform rotate-180 transition-all duration-500" />
                  ) : (
                    <FaBars className="text-white text-xl transform rotate-0 transition-all duration-500" />
                  )}
                </div>

                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-gray-600 transition-all duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-700 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-8"
          } overflow-hidden`}>
          <div className="bg-black/95 backdrop-blur-xl border-t border-gray-800 shadow-2xl">
            <div className="px-4 py-6 space-y-1">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full flex items-center space-x-4 px-4 py-4 rounded-xl text-left transition-all duration-500 group ${
                    activeSection === item.href.slice(1)
                      ? "text-white bg-gradient-to-r from-gray-800 to-gray-700 shadow-lg transform scale-105 border border-gray-600"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50 hover:transform hover:scale-105 border border-transparent hover:border-gray-700"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="relative">
                    <span
                      className={`text-2xl group-hover:scale-110 transition-transform duration-300 ${
                        activeSection === item.href.slice(1)
                          ? "text-white"
                          : "text-gray-400 group-hover:text-white"
                      }`}>
                      {item.icon}
                    </span>
                  </div>

                  <div className="flex-1">
                    <span className="font-mono text-sm tracking-wider">
                      {item.name.toUpperCase()}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-500 ${
                        activeSection === item.href.slice(1)
                          ? "bg-white animate-pulse"
                          : "bg-gray-600 group-hover:bg-gray-400"
                      }`}></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
