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
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment integration, admin dashboard, and real-time inventory management.",
      image: "/api/placeholder/400/250",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Tailwind CSS",
        "Stripe API",
      ],
      github: "#",
      demo: "#",
      category: "Web Development",
      featured: true,
      date: "2024",
    },
    {
      title: "Task Management App",
      description:
        "A responsive task management application with real-time updates, drag-and-drop functionality, team collaboration features, and deadline tracking system.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Firebase", "Material-UI", "Redux", "React DnD"],
      github: "#",
      demo: "#",
      category: "Web Development",
      featured: true,
      date: "2024",
    },
    {
      title: "Brand Promotional Video",
      description:
        "A professional promotional video for a tech startup including motion graphics, voiceover, color grading, and multi-platform optimization for social media.",
      image: "/api/placeholder/400/250",
      technologies: [
        "Adobe Premiere Pro",
        "After Effects",
        "Audition",
        "Photoshop",
      ],
      github: "#",
      demo: "#",
      category: "Video Editing",
      featured: false,
      date: "2024",
    },
    {
      title: "Social Media Content Suite",
      description:
        "Series of engaging social media videos with animations, transitions, and brand consistency. Optimized for Instagram, YouTube, and TikTok platforms.",
      image: "/api/placeholder/400/250",
      technologies: ["Premiere Pro", "After Effects", "Photoshop", "Canva"],
      github: "#",
      demo: "#",
      category: "Video Editing",
      featured: false,
      date: "2024",
    },
    {
      title: "Weather Dashboard",
      description:
        "A comprehensive weather dashboard application with location-based forecasts, interactive charts, weather alerts, and responsive design for all devices.",
      image: "/api/placeholder/400/250",
      technologies: [
        "React",
        "Chart.js",
        "OpenWeather API",
        "Tailwind CSS",
        "Geolocation API",
      ],
      github: "#",
      demo: "#",
      category: "Web Development",
      featured: false,
      date: "2023",
    },
    {
      title: "Mobile Banking App",
      description:
        "A secure mobile banking application with biometric authentication, transaction history, real-time notifications, and modern UI/UX design.",
      image: "/api/placeholder/400/250",
      technologies: [
        "React Native",
        "Firebase",
        "Redux",
        "Expo",
        "Biometric Auth",
      ],
      github: "#",
      demo: "#",
      category: "Mobile Development",
      featured: true,
      date: "2023",
    },
    {
      title: "Algorithm Visualizer",
      description:
        "Interactive algorithm visualization tool for sorting and searching algorithms. Built to help students understand complex algorithms through visual representation.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "D3.js", "TypeScript", "Tailwind CSS"],
      github: "#",
      demo: "#",
      category: "Web Development",
      featured: false,
      date: "2023",
    },
    {
      title: "Portfolio Website",
      description:
        "My personal portfolio website showcasing projects, skills, and experience. Built with modern React and features dark theme with interactive elements.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Tailwind CSS", "React Icons", "CSS Animations"],
      github: "#",
      demo: "#",
      category: "Web Development",
      featured: false,
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
        <div className="flex justify-center mb-12">
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
        </div>

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

        {/* Bottom Section - Project Philosophy */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <FaCode className="text-white text-3xl mr-3" />
              <h3 className="text-2xl font-bold text-white">
                Project Philosophy
              </h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Each project represents a learning journey and a step forward in
              my development as a Computer Science student. I focus on building
              practical solutions that solve real problems while incorporating
              modern technologies and best practices. From web applications to
              mobile apps and creative video content, every project is an
              opportunity to grow and innovate.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <FaCode className="text-white text-2xl mb-3 mx-auto" />
                <h4 className="text-white font-semibold mb-2">Clean Code</h4>
                <p className="text-gray-400 text-sm">
                  Focus on maintainable, scalable, and well-documented code
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <FaEye className="text-white text-2xl mb-3 mx-auto" />
                <h4 className="text-white font-semibold mb-2">User-Centric</h4>
                <p className="text-gray-400 text-sm">
                  Designing with user experience and accessibility in mind
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <FaStar className="text-white text-2xl mb-3 mx-auto" />
                <h4 className="text-white font-semibold mb-2">Innovation</h4>
                <p className="text-gray-400 text-sm">
                  Exploring new technologies and creative solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
