import React, { useState } from "react";
// import logo from
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaGit,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo_m.png";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[88px] flex justify-between items-center px-2 py-4 bg-[#252e53] fixed text-white">
      {/* Logo image */}
      <div>
        <img src={Logo} alt="logo" width={"70px"} className="rounded-full" />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger icon */}
      <div className="md:hidden z-10 cursor-pointer" onClick={handleClick}>
        {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute w-full h-screen bg-[#29335c] top-0 left-0  text-center flex flex-col justify-center text-4xl"
        }
      >
        <li className="py-6 hover:scale-110">Home</li>
        <li className="py-6 hover:scale-110">About</li>
        <li className="py-6 hover:scale-110">Skills</li>
        <li className="py-6 hover:scale-110">Project</li>
        <li className="py-6 hover:scale-110">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex flex-col left-0 top-[35%]">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#db2b39]">
            <a
              href="/"
              className="flex justify-between items-center  w-full text-gray-300 "
            >
              {" "}
              LinkedIn <FaLinkedin size={27} />{" "}
            </a>
          </li>
       
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              href="/"
              className="flex justify-between items-center  w-full text-gray-300 "
            >
              {" "}
              GitHub <FaGithub size={27} />{" "}
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              href="/"
              className="flex justify-between items-center  w-full text-gray-300 "
            >
              {" "}
              Gmail <HiOutlineMail size={27} />{" "}
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              href="/"
              className="flex justify-between items-center  w-full text-gray-300 "
            >
              {" "}
              Resume <BsFillPersonLinesFill size={27} />{" "}
            </a>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default Navbar;
