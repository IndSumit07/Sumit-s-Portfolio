import React, { useEffect, useState } from "react";
import {
  FaCode,
  FaTrophy,
  FaStar,
  FaChartLine,
  FaCalendar,
  FaFire,
  FaAward,
  FaMedal,
} from "react-icons/fa";
import sumit from "../../public/sumit.jpg";
const CodingProfiles = () => {
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

  const profiles = [
    {
      platform: "LeetCode",
      username: "MainSumitHoon",
      profileImage: sumit,
      stats: {
        problemsSolved: "250+",
        rating: 1680,
        rank: "486,453",
        streak: "100+",
        contestRating: 1443,
      },
      achievements: [
        { name: "50 Days Badge", icon: <FaCalendar className="text-white" /> },
        { name: "100 Days Badge", icon: <FaCalendar className="text-white" /> },
        { name: "Problem Solver", icon: <FaTrophy className="text-white" /> },
      ],
      link: "https://leetcode.com/u/MainSumitHoon/",
      description:
        "Competitive programming platform focusing on algorithm challenges and interview preparation",
    },
    {
      platform: "GeeksforGeeks",
      username: "itzsumitkumu8f4",
      profileImage: sumit,
      stats: {
        problemsSolved: "50+",
        rating: 1580,
        rank: "1172",
        streak: 35,
        contestRating: 1580,
      },
      achievements: [
        { name: "Problem Setter", icon: <FaCode className="text-white" /> },
        {
          name: "Interview Prep",
          icon: <FaChartLine className="text-white" />,
        },
      ],
      link: "https://www.geeksforgeeks.org/user/itzsumitkumu8f4/",
      description:
        "Comprehensive programming platform with tutorials, practice problems, and interview preparation",
    },
  ];

  return (
    <section
      id="coding-profiles"
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
            Coding Profiles
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            My competitive programming journey and achievements across different
            platforms
          </p>
        </div>

        {/* Profiles Grid - RESPONSIVE FIXES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105 group">
              {/* Profile Header - RESPONSIVE FIXES */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
                <div className="flex items-center w-full sm:w-auto">
                  {/* Fixed Profile Image Container */}
                  <div className="relative mr-4 flex-shrink-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-gray-700 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={profile.profileImage || "/api/placeholder/64/64"}
                        alt={`${profile.username} profile`}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    {/* Optional: Add a small platform icon overlay */}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-700">
                      <FaCode className="text-white text-xs" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-white truncate">
                      {profile.platform}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base truncate">
                      @{profile.username}
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1 line-clamp-2 sm:line-clamp-1">
                      {profile.description}
                    </p>
                  </div>
                </div>

                <a
                  href={profile.link}
                  className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-all duration-300 text-xs sm:text-sm font-medium whitespace-nowrap self-start sm:self-auto">
                  View Profile
                </a>
              </div>

              {/* Stats Grid - RESPONSIVE FIXES */}
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6">
                <div className="bg-gray-800/50 p-3 sm:p-4 rounded-lg text-center border border-gray-700">
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {profile.stats.problemsSolved}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    Problems Solved
                  </div>
                </div>
                <div className="bg-gray-800/50 p-3 sm:p-4 rounded-lg text-center border border-gray-700">
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {profile.stats.rating}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    Current Rating
                  </div>
                </div>
                <div className="bg-gray-800/50 p-3 sm:p-4 rounded-lg text-center border border-gray-700">
                  <div className="text-base sm:text-lg font-bold text-white mb-1">
                    {profile.stats.rank}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    Rank/Level
                  </div>
                </div>
                <div className="bg-gray-800/50 p-3 sm:p-4 rounded-lg text-center border border-gray-700">
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {profile.stats.streak}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    Day Streak
                  </div>
                </div>
              </div>

              {/* Achievements - RESPONSIVE FIXES */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 flex items-center">
                  <FaTrophy className="text-white mr-2" />
                  Achievements
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {profile.achievements.map((achievement, achIndex) => (
                    <div
                      key={achIndex}
                      className="bg-gray-800/50 p-2 sm:p-3 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors duration-300">
                      <div className="flex items-center">
                        <div className="text-base sm:text-lg mr-2 flex-shrink-0">
                          {achievement.icon}
                        </div>
                        <span className="text-gray-300 text-xs sm:text-sm font-medium truncate">
                          {achievement.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
