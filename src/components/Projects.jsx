import React from "react";

const Projects = () => {
  return (
    <div
      id="skills"
      className="w-full min-h-[100vh] h-auto bg-black text-white relative">
      {/* Optional overlay removed since there's no background */}
      <div className="w-full h-full py-12 px-5 md:px-10 lg:px-20 relative z-10">
        <h3 className="text-4xl sm:text-5xl md:text-6xl text-white text-center font-[nebula] mb-16 mt-4">
          My Projects
        </h3>

        <div className="flex justify-center items-center gap-10 flex-wrap">
          {/* Project cards go here */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
