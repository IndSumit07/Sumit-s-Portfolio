import React, { useEffect, useRef } from "react";
import ServicesCard from "../cards/ServicesCard";
import webdev from "../../public/webdev.jpg";
import uiux from "../../public/uiux.jpg";
import deployer from "../../public/deployer.jpg";

const Services = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => console.log("Autoplay blocked:", error));
    }
  }, []);

  const services = [
    {
      title: "UI/UX Design",
      image: uiux,
      features: [
        "• Modern UI Layouts",
        "• Design Systems & Components",
        "• Figma to Code Translation",
        "• High-Fidelity Prototypes",
        "• Dark & Light Mode Interfaces",
      ],
    },
    {
      title: "Web Development",
      image: webdev,
      features: [
        "• Responsive Web Designs",
        "• Custom Website Design",
        "• Fullstack Websites",
        "• Cool landing pages",
        "• Personal branding sites and more",
      ],
    },
    {
      title: "Deployment",
      image: deployer,
      features: [
        "• Live Server Hosting",
        "• Domain Setup & DNS Configuration",
        "• CI/CD Integration",
        "• Environment Variables Management",
        "• SEO & Performance Optimization",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full min-h-screen h-auto bg-black overflow-hidden text-white">
      {/* Optional: background video or image can be placed here */}
      {/* <video ref={videoRef} src="/services-bg.mp4" className="hidden" /> */}

      <div className="relative z-10 w-full px-5 md:px-10 lg:px-20 py-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-[nebula] text-center mb-12">
          My Services
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {services.map((service, index) => (
            <ServicesCard props={service} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
