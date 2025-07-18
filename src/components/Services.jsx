import React, { useEffect, useState } from "react";
import {
  FaCode,
  FaVideo,
  FaMobile,
  FaDesktop,
  FaCloud,
  FaTools,
  FaCog,
  FaRocket,
  FaChartLine,
} from "react-icons/fa";

const Services = () => {
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

  const services = [
    {
      icon: <FaDesktop className="text-white" />,
      title: "Web Development",
      description:
        "Full-stack web development using modern frameworks like React, Node.js, and MongoDB. Creating responsive, scalable, and user-friendly applications with cutting-edge technologies.",
      features: [
        "React.js Applications",
        "Full-stack Solutions",
        "Responsive Design",
        "API Integration",
        "Database Management",
      ],
    },
    {
      icon: <FaVideo className="text-white" />,
      title: "Video Editing",
      description:
        "Professional video editing services including motion graphics, color correction, and post-production. Creating engaging content for various platforms and audiences.",
      features: [
        "Professional Editing",
        "Motion Graphics",
        "Color Correction",
        "Multi-platform Content",
        "Visual Storytelling",
      ],
    },
    {
      icon: <FaMobile className="text-white" />,
      title: "Mobile Development",
      description:
        "Cross-platform mobile app development using React Native and Flutter. Building native-like experiences for iOS and Android with optimal performance.",
      features: [
        "React Native",
        "Cross-platform",
        "Native Performance",
        "App Store Deployment",
        "Mobile UI/UX",
      ],
    },
    {
      icon: <FaCloud className="text-white" />,
      title: "Cloud Solutions",
      description:
        "Cloud infrastructure setup and deployment using AWS, Firebase, and other cloud platforms. Scalable and secure solutions for modern applications.",
      features: [
        "AWS Deployment",
        "Firebase Integration",
        "Scalable Architecture",
        "Security Implementation",
        "Performance Optimization",
      ],
    },
    {
      icon: <FaTools className="text-white" />,
      title: "Technical Consulting",
      description:
        "Technical consultation for software projects, code reviews, and architecture planning. Helping businesses make informed technology decisions and optimize their development process.",
      features: [
        "Code Reviews",
        "Architecture Planning",
        "Technology Selection",
        "Performance Optimization",
        "Best Practices",
      ],
    },
    {
      icon: <FaCode className="text-white" />,
      title: "Custom Development",
      description:
        "Custom software solutions tailored to specific business needs. From automation tools to complex web applications, delivering innovative solutions that drive growth.",
      features: [
        "Custom Solutions",
        "Automation Tools",
        "Integration Services",
        "Maintenance Support",
        "Scalable Systems",
      ],
    },
  ];

  return (
    <section
      id="services"
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
            Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional services I offer to help bring your ideas to life and
            drive your business forward
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105 group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section - Service Philosophy */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <FaRocket className="text-white text-3xl mr-3" />
              <h3 className="text-2xl font-bold text-white">My Approach</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              As a Computer Science student at GLA University, I combine
              academic knowledge with practical experience to deliver
              high-quality solutions. I believe in writing clean, maintainable
              code and creating user-centric designs that solve real-world
              problems. Every project is an opportunity to learn, grow, and
              exceed expectations.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <FaCog className="text-white text-2xl mb-3 mx-auto" />
                <h4 className="text-white font-semibold mb-2">
                  Technical Excellence
                </h4>
                <p className="text-gray-400 text-sm">
                  Modern technologies and best practices for optimal performance
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <FaChartLine className="text-white text-2xl mb-3 mx-auto" />
                <h4 className="text-white font-semibold mb-2">
                  Growth Focused
                </h4>
                <p className="text-gray-400 text-sm">
                  Solutions designed to scale with your business needs
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <FaRocket className="text-white text-2xl mb-3 mx-auto" />
                <h4 className="text-white font-semibold mb-2">
                  Innovation Driven
                </h4>
                <p className="text-gray-400 text-sm">
                  Cutting-edge solutions using the latest technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
