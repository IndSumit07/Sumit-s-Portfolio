import React, { useEffect, useRef } from "react";
import AboutCard from "../cards/AboutCard";

const About = () => {
  const aboutMe = [
    {
      title: "Who Am I ?",
      desc: "I’m Sumit Kumar, a B.Tech student from the spiritual city of Ayodhya in Uttar Pradesh. I’m someone who’s curious about the world, always learning, and deeply connected to where I come from. Grounded in my roots, I carry with me the values of persistence, simplicity, and growth. I believe in evolving every day — as a person, a thinker, and a learner.",
    },
    {
      title: "What I Do ?",
      desc: "I design, develop, and deploy websites and applications. I'm passionate about creating smooth, user-friendly digital experiences using modern technologies. Along with that, I'm good at problem-solving — I enjoy breaking down complex challenges and finding efficient, logical solutions. As an engineering student, I'm always learning, building, and improving.",
    },
    {
      title: "Why I Do ?",
      desc: "I love creating things that are useful, meaningful, and smart. Technology gives me the power to solve real problems and bring ideas to life. Every bug I fix and every feature I build teaches me something new. I do it because I enjoy the process — the thinking, the building, the improving — and because I believe that with the right mindset, I can make a real impact.",
    },
  ];

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => console.log("Autoplay blocked:", error));
    }
  }, []);

  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Background Video (Desktop Only) */}
      <div className="hidden xl:block absolute top-0 left-0 w-full h-full -z-10">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="/bg-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full px-5 md:px-10 lg:px-20 py-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-[nebula] text-center mb-12">
          About Me
        </h2>

        {/* Cards */}
        <div className="flex flex-wrap justify-center items-stretch gap-10">
          {aboutMe.map((about, index) => (
            <AboutCard props={about} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
