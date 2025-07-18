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
      username: "sumit_kumar",
      profileImage: "/path/to/leetcode-profile.jpg", // Update with actual image path
      stats: {
        problemsSolved: 285,
        rating: 1680,
        rank: "Knight",
        streak: 52,
        contestRating: 1680,
      },
      achievements: [
        { name: "Knight Badge", icon: <FaMedal className="text-white" /> },
        { name: "100 Days Badge", icon: <FaCalendar className="text-white" /> },
        { name: "SQL Badge", icon: <FaCode className="text-white" /> },
        { name: "Problem Solver", icon: <FaTrophy className="text-white" /> },
      ],
      link: "#",
      description:
        "Competitive programming platform focusing on algorithm challenges and interview preparation",
    },
    {
      platform: "GeeksforGeeks",
      username: "sumit_kumar_gfg",
      profileImage: "/path/to/gfg-profile.jpg", // Update with actual image path
      stats: {
        problemsSolved: 195,
        rating: 1580,
        rank: "Expert",
        streak: 35,
        contestRating: 1580,
      },
      achievements: [
        { name: "Problem Setter", icon: <FaCode className="text-white" /> },
        { name: "Article Writer", icon: <FaStar className="text-white" /> },
        {
          name: "Interview Prep",
          icon: <FaChartLine className="text-white" />,
        },
        { name: "Expert Level", icon: <FaAward className="text-white" /> },
      ],
      link: "#",
      description:
        "Comprehensive programming platform with tutorials, practice problems, and interview preparation",
    },
    {
      platform: "CodeChef",
      username: "sumit_chef",
      profileImage: "/path/to/codechef-profile.jpg", // Update with actual image path
      stats: {
        problemsSolved: 110,
        rating: 1465,
        rank: "3 Star",
        streak: 28,
        contestRating: 1465,
      },
      achievements: [
        { name: "Long Challenge", icon: <FaFire className="text-white" /> },
        { name: "Cook-off Winner", icon: <FaTrophy className="text-white" /> },
        {
          name: "Lunchtime Participant",
          icon: <FaCalendar className="text-white" />,
        },
        { name: "3 Star Coder", icon: <FaStar className="text-white" /> },
      ],
      link: "#",
      description:
        "Global competitive programming platform with monthly contests and diverse problem sets",
    },
    {
      platform: "HackerRank",
      username: "sumit_hacker",
      profileImage: "/path/to/hackerrank-profile.jpg", // Update with actual image path
      stats: {
        problemsSolved: 145,
        rating: 1420,
        rank: "Gold",
        streak: 22,
        contestRating: 1420,
      },
      achievements: [
        {
          name: "Problem Solving Gold",
          icon: <FaMedal className="text-white" />,
        },
        { name: "Algorithms Badge", icon: <FaCode className="text-white" /> },
        {
          name: "Data Structures",
          icon: <FaChartLine className="text-white" />,
        },
        {
          name: "30 Days of Code",
          icon: <FaCalendar className="text-white" />,
        },
      ],
      link: "#",
      description:
        "Skill-based coding platform with domain-specific challenges and certification programs",
    },
  ];

  return (
    <section
      id="coding-profiles"
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
            Coding Profiles
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My competitive programming journey and achievements across different
            platforms
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105 group">
              {/* Profile Header - FIXED IMAGE SECTION */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  {/* Fixed Profile Image Container */}
                  <div className="relative mr-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-700 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={profile.profileImage || "/api/placeholder/64/64"}
                        alt={`${profile.username} profile`}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    {/* Optional: Add a small platform icon overlay */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-700">
                      <FaCode className="text-white text-xs" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white">
                      {profile.platform}
                    </h3>
                    <p className="text-gray-400">@{profile.username}</p>
                    <p className="text-gray-500 text-sm mt-1">
                      {profile.description}
                    </p>
                  </div>
                </div>
                <a
                  href={profile.link}
                  className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium">
                  View Profile
                </a>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800/50 p-4 rounded-lg text-center border border-gray-700">
                  <div className="text-2xl font-bold text-white mb-1">
                    {profile.stats.problemsSolved}
                  </div>
                  <div className="text-sm text-gray-400">Problems Solved</div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg text-center border border-gray-700">
                  <div className="text-2xl font-bold text-white mb-1">
                    {profile.stats.rating}
                  </div>
                  <div className="text-sm text-gray-400">Current Rating</div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg text-center border border-gray-700">
                  <div className="text-lg font-bold text-white mb-1">
                    {profile.stats.rank}
                  </div>
                  <div className="text-sm text-gray-400">Rank/Level</div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg text-center border border-gray-700">
                  <div className="text-2xl font-bold text-white mb-1">
                    {profile.stats.streak}
                  </div>
                  <div className="text-sm text-gray-400">Day Streak</div>
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <FaTrophy className="text-white mr-2" />
                  Achievements
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {profile.achievements.map((achievement, achIndex) => (
                    <div
                      key={achIndex}
                      className="bg-gray-800/50 p-3 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors duration-300">
                      <div className="flex items-center">
                        <div className="text-lg mr-2">{achievement.icon}</div>
                        <span className="text-gray-300 text-sm font-medium">
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

        {/* Bottom Section - Competitive Programming Philosophy */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <FaCode className="text-white text-3xl mr-3" />
              <h3 className="text-2xl font-bold text-white">
                Competitive Programming Journey
              </h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              As a Computer Science student at GLA University, competitive
              programming has been instrumental in sharpening my problem-solving
              skills and algorithmic thinking. Each platform offers unique
              challenges that have helped me grow as a developer, from mastering
              data structures to optimizing complex algorithms under time
              constraints.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <FaChartLine className="text-white text-2xl mb-3 mx-auto" />
                <h4 className="text-white font-semibold mb-2">
                  Problem Solving
                </h4>
                <p className="text-gray-400 text-sm">
                  Consistent practice across multiple platforms to strengthen
                  algorithmic thinking
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <FaTrophy className="text-white text-2xl mb-3 mx-auto" />
                <h4 className="text-white font-semibold mb-2">
                  Contest Participation
                </h4>
                <p className="text-gray-400 text-sm">
                  Regular participation in coding contests to improve speed and
                  accuracy
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <FaAward className="text-white text-2xl mb-3 mx-auto" />
                <h4 className="text-white font-semibold mb-2">
                  Continuous Growth
                </h4>
                <p className="text-gray-400 text-sm">
                  Always learning new algorithms and data structures to tackle
                  complex problems
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
