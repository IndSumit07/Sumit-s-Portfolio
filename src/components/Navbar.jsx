import React, { useState } from "react";
import logo from "../../public/logo.png";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const handleLink = (current) => {
    setActiveLink(current);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="w-full h-[82px] backdrop-blur-lg bg-[#222223] rounded-full shadow-md border border-white flex justify-between items-center px-5  tracking-widest">
      <div className="flex justify-center items-center gap-3 ">
        <img src={logo} alt="Logo" className="w-10 md:w-12" />
        <h3 className="font-[nebula] text-3xl md:text-4xl">Sumit</h3>
      </div>
      <ul className="hidden  lg:flex justify-center items-center gap-10 font-medium font-[poppins] text-md">
        <li
          onClick={() => {
            handleLink("home");
          }}>
          <a href="#">Home</a>
          {activeLink === "home" ? (
            <hr className="w-[52px] border-[1.5px]" />
          ) : (
            ""
          )}
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
      </ul>
      <div className="hidden lg:flex justify-center items-center gap-5 font-[poppins]">
        <div className="h-[40px] rounded-full bg-inherit border-white border flex justify-center items-center px-5 text-sm cursor-pointer relative group overflow-hidden">
          <div className="w-0 h-full absolute left-0 bg-white group-hover:w-full top-0 hover:w-full transition-all duration-500 z-0"></div>
          <span className="relative z-10 group-hover:text-black transition-all duration-500">
            Get in Touch
          </span>
        </div>
      </div>

      <div className="lg:hidden flex text-3xl cursor-pointer ">
        {isMenuOpen ? (
          <RxCross2 onClick={toggleMenu} />
        ) : (
          <RiMenu3Fill onClick={toggleMenu} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
