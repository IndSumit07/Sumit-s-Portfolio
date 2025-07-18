import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaEye,
  FaCode,
  FaCalendar,
  FaChartLine,
  FaBook,
  FaUsers,
} from "react-icons/fa";

const GitHub = () => {
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

  const githubStats = {
    totalRepos: 28,
    totalStars: 156,
    totalForks: 42,
    contributions: 1247,
    followers: 95,
    following: 134,
  };

  const repositories = [
    {
      name: "portfolio-website",
      description:
        "My personal portfolio website built with React, Tailwind CSS, and modern animations. Features dark theme and responsive design.",
      language: "JavaScript",
      stars: 24,
      forks: 8,
      color: "bg-gray-400",
      isPrivate: false,
      updated: "2 days ago",
      topics: ["react", "tailwind", "portfolio", "dark-theme"],
    },
    {
      name: "ecommerce-platform",
      description:
        "Full-stack e-commerce platform with React frontend, Node.js backend, and MongoDB database. Complete with payment integration.",
      language: "JavaScript",
      stars: 18,
      forks: 6,
      color: "bg-gray-400",
      isPrivate: false,
      updated: "1 week ago",
      topics: ["react", "nodejs", "mongodb", "ecommerce"],
    },
    {
      name: "algorithm-visualizer",
      description:
        "Interactive algorithm visualization tool built with React and D3.js. Helps students understand sorting and searching algorithms.",
      language: "TypeScript",
      stars: 32,
      forks: 12,
      color: "bg-gray-500",
      isPrivate: false,
      updated: "3 days ago",
      topics: ["algorithms", "visualization", "education", "react"],
    },
    {
      name: "task-manager-app",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and team features.",
      language: "JavaScript",
      stars: 15,
      forks: 5,
      color: "bg-gray-400",
      isPrivate: false,
      updated: "5 days ago",
      topics: ["react", "firebase", "collaboration", "productivity"],
    },
    {
      name: "data-structures-cpp",
      description:
        "Implementation of various data structures and algorithms in C++. Created for academic purposes and competitive programming.",
      language: "C++",
      stars: 28,
      forks: 11,
      color: "bg-gray-600",
      isPrivate: false,
      updated: "1 week ago",
      topics: [
        "cpp",
        "data-structures",
        "algorithms",
        "competitive-programming",
      ],
    },
    {
      name: "weather-dashboard",
      description:
        "Modern weather application with location-based forecasts, interactive charts, and weather alerts using OpenWeather API.",
      language: "JavaScript",
      stars: 12,
      forks: 4,
      color: "bg-gray-400",
      isPrivate: false,
      updated: "2 weeks ago",
      topics: ["react", "weather-api", "charts", "dashboard"],
    },
    {
      name: "mobile-banking-app",
      description:
        "Secure mobile banking application built with React Native. Features biometric authentication and transaction history.",
      language: "JavaScript",
      stars: 21,
      forks: 7,
      color: "bg-gray-400",
      isPrivate: false,
      updated: "1 month ago",
      topics: ["react-native", "mobile", "banking", "security"],
    },
    {
      name: "video-editing-scripts",
      description:
        "Collection of automation scripts for video editing workflows. Includes batch processing and effect presets.",
      language: "Python",
      stars: 9,
      forks: 3,
      color: "bg-gray-700",
      isPrivate: false,
      updated: "3 weeks ago",
      topics: ["python", "video-editing", "automation", "scripts"],
    },
  ];

  return (
    <section
      id="github"
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
            GitHub Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My open-source contributions and project repositories showcasing
            development skills and collaborative work
          </p>
        </div>

        {/* GitHub Profile Header */}
        <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 mb-12 max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="relative mr-6">
                <div className="w-20 h-20 bg-gray-800 rounded-full overflow-hidden border-2 border-gray-700 shadow-lg">
                  <img
                    src="/api/placeholder/80/80"
                    alt="Sumit Kumar GitHub Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-700">
                  <FaGithub className="text-white text-lg" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Sumit Kumar</h3>
                <p className="text-gray-400">@sumit-kumar</p>
                <p className="text-gray-500 text-sm mt-1">
                  Computer Science Student at GLA University
                </p>
              </div>
            </div>
            <a
              href="#"
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium flex items-center gap-2">
              <FaGithub />
              View GitHub Profile
            </a>
          </div>

          {/* GitHub Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-800/50 p-4 rounded-lg text-center border border-gray-700">
              <div className="text-2xl font-bold text-white mb-1">
                {githubStats.totalRepos}
              </div>
              <div className="text-sm text-gray-400">Repositories</div>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg text-center border border-gray-700">
              <div className="text-2xl font-bold text-white mb-1">
                {githubStats.totalStars}
              </div>
              <div className="text-sm text-gray-400">Stars</div>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg text-center border border-gray-700">
              <div className="text-2xl font-bold text-white mb-1">
                {githubStats.totalForks}
              </div>
              <div className="text-sm text-gray-400">Forks</div>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg text-center border border-gray-700">
              <div className="text-2xl font-bold text-white mb-1">
                {githubStats.contributions}
              </div>
              <div className="text-sm text-gray-400">Contributions</div>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg text-center border border-gray-700">
              <div className="text-2xl font-bold text-white mb-1">
                {githubStats.followers}
              </div>
              <div className="text-sm text-gray-400">Followers</div>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg text-center border border-gray-700">
              <div className="text-2xl font-bold text-white mb-1">
                {githubStats.following}
              </div>
              <div className="text-sm text-gray-400">Following</div>
            </div>
          </div>
        </div>

        {/* Repository Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repositories.map((repo, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <FaBook className="text-gray-400 mr-2" />
                  <h3 className="text-lg font-semibold text-white">
                    {repo.name}
                  </h3>
                </div>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300">
                  <FaEye />
                </a>
              </div>

              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {repo.description}
              </p>

              {/* Topics */}
              <div className="flex flex-wrap gap-2 mb-4">
                {repo.topics.map((topic, topicIndex) => (
                  <span
                    key={topicIndex}
                    className="bg-gray-800 text-gray-300 px-2 py-1 rounded-full text-xs border border-gray-700">
                    {topic}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className={`w-3 h-3 rounded-full ${repo.color} mr-2`}></div>
                  <span className="text-gray-400 text-sm">{repo.language}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-gray-400">
                    <FaStar className="mr-1" />
                    <span className="text-sm">{repo.stars}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <FaCodeBranch className="mr-1" />
                    <span className="text-sm">{repo.forks}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="flex items-center text-gray-500 text-xs">
                  <FaCalendar className="mr-1" />
                  <span>Updated {repo.updated}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section - GitHub Philosophy */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <FaGithub className="text-white text-3xl mr-3" />
              <h3 className="text-2xl font-bold text-white">
                Open Source Contribution
              </h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              As a Computer Science student at GLA University, I believe in the
              power of open-source development and collaborative coding. My
              GitHub repositories showcase my learning journey, from academic
              projects to practical applications. Each repository represents a
              step forward in my development skills and problem-solving
              abilities.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <FaCode className="text-white text-2xl mb-3 mx-auto" />
                <h4 className="text-white font-semibold mb-2">Clean Code</h4>
                <p className="text-gray-400 text-sm">
                  Focus on writing maintainable, well-documented, and efficient
                  code
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <FaUsers className="text-white text-2xl mb-3 mx-auto" />
                <h4 className="text-white font-semibold mb-2">Collaboration</h4>
                <p className="text-gray-400 text-sm">
                  Contributing to open-source projects and collaborating with
                  developers
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <FaChartLine className="text-white text-2xl mb-3 mx-auto" />
                <h4 className="text-white font-semibold mb-2">
                  Continuous Learning
                </h4>
                <p className="text-gray-400 text-sm">
                  Constantly exploring new technologies and improving
                  development skills
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHub;
