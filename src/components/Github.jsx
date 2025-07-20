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
import sumit from "../../public/sumit.jpg";

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
    totalRepos: 10,
    totalStars: 2,
    totalForks: 0,
    contributions: 160,
    followers: 2,
    following: 3,
  };

  const repositories = [
    {
      name: "hearwear-frontend",
      description:
        "A hearing aid for partial deaf people, live translator and transcripter.",
      language: "JavaScript",
      stars: 0,
      forks: 0,
      color: "bg-gray-400",
      isPrivate: false,
      updated: "2 days ago",
      topics: ["react", "tailwind", "Vanta.js", "APIs"],
    },
    {
      name: "Conference-Website",
      description: "APGC international conference website",
      language: "HTML",
      stars: 2,
      forks: 0,
      color: "bg-gray-400",
      isPrivate: true,
      updated: "1 week ago",
      topics: ["react", "Tailwind"],
    },
    {
      name: "color-palette-generator",
      description:
        "A website that automatically generates attractive color palettes in a single click.",
      language: "JavaScript",
      stars: 0,
      forks: 0,
      color: "bg-gray-500",
      isPrivate: false,
      updated: "3 days ago",
      topics: ["react", "Tailwind"],
    },
  ];

  return (
    <section
      id="github"
      className="relative min-h-[80vh] py-12 md:py-20 overflow-hidden bg-black">
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
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            GitHub Showcase
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            My open-source contributions and project repositories showcasing
            development skills and collaborative work
          </p>
        </div>

        {/* GitHub Profile Header - RESPONSIVE FIXES */}
        <div className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-gray-800 mb-8 md:mb-12 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 space-y-4 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-800 rounded-full overflow-hidden border-2 border-gray-700 shadow-lg">
                  <img
                    src={sumit}
                    alt="Sumit Kumar GitHub Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-700">
                  <FaGithub className="text-white text-sm sm:text-lg" />
                </div>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Sumit Kumar
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">IndSumit07</p>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">
                  Computer Science Student at GLA University
                </p>
              </div>
            </div>
            <a
              href="https://github.com/IndSumit07"
              className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all duration-300 font-medium flex items-center gap-2 text-sm sm:text-base">
              <FaGithub />
              View GitHub Profile
            </a>
          </div>

          {/* GitHub Stats - RESPONSIVE FIXES */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            <div className="bg-gray-800/50 p-3 sm:p-4 rounded-lg text-center border border-gray-700">
              <div className="text-lg sm:text-2xl font-bold text-white mb-1">
                {githubStats.totalRepos}
              </div>
              <div className="text-xs sm:text-sm text-gray-400">
                Repositories
              </div>
            </div>
            <div className="bg-gray-800/50 p-3 sm:p-4 rounded-lg text-center border border-gray-700">
              <div className="text-lg sm:text-2xl font-bold text-white mb-1">
                {githubStats.totalStars}
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Stars</div>
            </div>
            <div className="bg-gray-800/50 p-3 sm:p-4 rounded-lg text-center border border-gray-700">
              <div className="text-lg sm:text-2xl font-bold text-white mb-1">
                {githubStats.totalForks}
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Forks</div>
            </div>
            <div className="bg-gray-800/50 p-3 sm:p-4 rounded-lg text-center border border-gray-700">
              <div className="text-lg sm:text-2xl font-bold text-white mb-1">
                {githubStats.contributions}
              </div>
              <div className="text-xs sm:text-sm text-gray-400">
                Contributions
              </div>
            </div>
            <div className="bg-gray-800/50 p-3 sm:p-4 rounded-lg text-center border border-gray-700">
              <div className="text-lg sm:text-2xl font-bold text-white mb-1">
                {githubStats.followers}
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Followers</div>
            </div>
            <div className="bg-gray-800/50 p-3 sm:p-4 rounded-lg text-center border border-gray-700">
              <div className="text-lg sm:text-2xl font-bold text-white mb-1">
                {githubStats.following}
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Following</div>
            </div>
          </div>
        </div>

        {/* Repository Grid - RESPONSIVE FIXES */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {repositories.map((repo, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="flex items-center flex-1 min-w-0">
                  <FaBook className="text-gray-400 mr-2 flex-shrink-0" />
                  <h3 className="text-base sm:text-lg font-semibold text-white truncate">
                    {repo.name}
                  </h3>
                </div>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 ml-2 flex-shrink-0">
                  <FaEye />
                </a>
              </div>

              <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                {repo.description}
              </p>

              {/* Topics - RESPONSIVE FIXES */}
              <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                {repo.topics.slice(0, 3).map((topic, topicIndex) => (
                  <span
                    key={topicIndex}
                    className="bg-gray-800 text-gray-300 px-2 py-1 rounded-full text-xs border border-gray-700">
                    {topic}
                  </span>
                ))}
                {repo.topics.length > 3 && (
                  <span className="text-gray-500 text-xs px-2 py-1">
                    +{repo.topics.length - 3}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className={`w-3 h-3 rounded-full ${repo.color} mr-2`}></div>
                  <span className="text-gray-400 text-xs sm:text-sm">
                    {repo.language}
                  </span>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="flex items-center text-gray-400">
                    <FaStar className="mr-1" />
                    <span className="text-xs sm:text-sm">{repo.stars}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <FaCodeBranch className="mr-1" />
                    <span className="text-xs sm:text-sm">{repo.forks}</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-700">
                <div className="flex items-center text-gray-500 text-xs">
                  <FaCalendar className="mr-1" />
                  <span>Updated {repo.updated}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section - RESPONSIVE FIXES */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-gray-800 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-4 md:mb-6">
              <FaGithub className="text-white text-2xl sm:text-3xl mb-2 sm:mb-0 sm:mr-3" />
              <h3 className="text-xl sm:text-2xl font-bold text-white text-center">
                Open Source Contribution
              </h3>
            </div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 md:mb-6 px-2">
              As a Computer Science student at GLA University, I believe in the
              power of open-source development and collaborative coding. My
              GitHub repositories showcase my learning journey, from academic
              projects to practical applications. Each repository represents a
              step forward in my development skills and problem-solving
              abilities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
              <div className="bg-gray-800/50 p-4 md:p-6 rounded-lg border border-gray-700">
                <FaCode className="text-white text-xl sm:text-2xl mb-2 sm:mb-3 mx-auto" />
                <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">
                  Clean Code
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Focus on writing maintainable, well-documented, and efficient
                  code
                </p>
              </div>

              <div className="bg-gray-800/50 p-4 md:p-6 rounded-lg border border-gray-700">
                <FaUsers className="text-white text-xl sm:text-2xl mb-2 sm:mb-3 mx-auto" />
                <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">
                  Collaboration
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Contributing to open-source projects and collaborating with
                  developers
                </p>
              </div>

              <div className="bg-gray-800/50 p-4 md:p-6 rounded-lg border border-gray-700 sm:col-span-2 lg:col-span-1">
                <FaChartLine className="text-white text-xl sm:text-2xl mb-2 sm:mb-3 mx-auto" />
                <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">
                  Continuous Learning
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm">
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
