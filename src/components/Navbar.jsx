import React, {useState} from "react";
// import logo from
import {FaBars, FaTimes} from 'react-icons/fa';
import Logo from "../assets/logo_m.png";

function Navbar() {

    const [nav, setNav] = useState(false);
    const handleClick = () => {setNav(!nav)};

  return (
    <div className="w-full h-[88px] flex justify-between items-center px-2 py-4 bg-[#29335c] fixed text-white">
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
        {!nav ?  <FaBars size={25}/> :  <FaTimes size={25}/>}
      </div>

      {/* Mobile Menu */}
      <ul className={(!nav ? "hidden" : "absolute w-full h-screen bg-[#29335c] top-0 left-0  text-center flex flex-col justify-center text-4xl")}>
            <li className="py-6 hover:scale-110">Home</li>
            <li  className="py-6 hover:scale-110">About</li>
            <li className="py-6 hover:scale-110">Skills</li>
            <li className="py-6 hover:scale-110">Project</li>
            <li className="py-6 hover:scale-110">Contact</li>
      </ul>

      {/* Social Icons */}
   
   
    </div>

    
  );
}

export default Navbar;
