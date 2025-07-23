import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaVideo,
  FaEye,
  FaStar,
  FaCalendar,
} from "react-icons/fa";
import ecommerce from "../../public/ecommerce.png";
import conference from "../../public/conference.png";
import hearwear from "../../public/hearwear.png";
import cp from "../../public/cp.png";
const Projects = () => {
  const [stars, setStars] = useState([]);
  const [filter, setFilter] = useState("All");

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

  const projects = [
    {
      title: "HearWear",
      description:
        "Hearing aid for partial deaf and live translator and transcripter.",
      image: hearwear,
      technologies: ["React", "Tailwind", "APIs", "Mongo DB"],
      github: "https://github.com/IndSumit07/HearWear-Frontend",
      demo: "https://hear-wear.vercel.app/",
      category: "Web Development",
      featured: true,
      date: "2024",
    },
    {
      title: "Color-Palette-Generator",
      description:
        "A website that automatically generates attractive color palettes in a single click.",
      image: cp,
      technologies: ["React", "Tailwind CSS", "Vercel"],
      github: "https://github.com/IndSumit07/color-palette-generator",
      demo: "https://color-palette-generator-khaki.vercel.app/",
      category: "Web Development",
      featured: true,
      date: "2024",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment integration, admin dashboard, and real-time inventory management.",
      image: ecommerce,
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      github: "https://github.com/IndSumit07/Project-Gravity",
      demo: "https://gravity-alpha.vercel.app/",
      category: "Web Development",
      featured: true,
      date: "2024",
    },
    {
      title: "International Conference Website",
      description:
        "A international conference website for Astrophysic Gravitational and Cosmology assigned by physics department of GLA University, Mathura.",
      image: conference,
      technologies: ["React", "Tailwind CSS", "Vercel"],
      github: "https://github.com/IndSumit07/Conference-Website",
      demo: "https://conference-website-ten.vercel.app/",
      category: "Web Development",
      featured: true,
      date: "2024",
    },
  ];

  const categories = [
    "All",
    "Web Development",
    "Video Editing",
    "Mobile Development",
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
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
            Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and creative projects spanning web
            development, mobile apps, and video editing
          </p>
        </div>

        {/* Filter Buttons */}
        {/* <div className="flex justify-center mb-12">
          <div className="bg-gray-900/50 backdrop-blur-sm p-2 rounded-lg border border-gray-800">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    filter === category
                      ? "bg-white text-black shadow-lg"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}>
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div> */}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105 group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <FaStar className="text-xs" />
                      Featured
                    </span>
                  )}
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <FaCalendar className="text-xs" />
                    {project.date}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs border border-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg">
                    <FaGithub />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg">
                    <FaExternalLinkAlt />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
