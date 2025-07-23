import React, { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaPaperPlane,
  FaTwitter,
  FaDiscord,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  const [stars, setStars] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-white" />,
      title: "Email",
      value: "sumitkumar692005@gmail.com",
      description: "Drop me a line anytime!",
      link: "mailto:sumit.kumar@gla.ac.in",
    },
    {
      icon: <FaPhone className="text-white" />,
      title: "Phone",
      value: "+91 XXXXX XXXXX",
      description: "Call me for quick discussions",
      link: "tel:+91XXXXXXXXX",
    },
    {
      icon: <FaMapMarkerAlt className="text-white" />,
      title: "Location",
      value: "GLA University, Mathura",
      description: "Uttar Pradesh, India",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-white" />,
      url: "https://www.linkedin.com/in/sumit-kumar-b0486631a/",
      description: "Connect professionally",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-white" />,
      url: "https://github.com/IndSumit07",
      description: "View my code repositories",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-white" />,
      url: "https://www.instagram.com/codrsumit?igsh=MXJ6bnhucDJ3NXBjMg==",
      description: "Follow my journey",
    },
  ];

  return (
    <section
      id="contact"
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
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate? Let's discuss your project ideas and bring
            innovative solutions to life together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with
                amazing people. Whether you have a project in mind, need
                technical consultation, or just want to say hello, feel free to
                reach out! As a Computer Science student at GLA University, I'm
                passionate about problem-solving and development.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 group">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-lg">
                        {info.title}
                      </h4>
                      <p className="text-gray-300 font-medium">{info.value}</p>
                      <p className="text-gray-400 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="pt-8">
              <h4 className="text-white font-semibold mb-6 text-lg">
                Follow Me
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 group flex items-center">
                    <div className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                    <div>
                      <div className="text-white font-medium">
                        {social.name}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {social.description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 border border-gray-700 transition-all duration-300"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 border border-gray-700 transition-all duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 border border-gray-700 transition-all duration-300"
                  placeholder="Project Inquiry / Collaboration / Question"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none border border-gray-700 transition-all duration-300"
                  placeholder="Tell me about your project, collaboration idea, or any questions you have..."
                  required></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-200 font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group">
                <FaPaperPlane className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
