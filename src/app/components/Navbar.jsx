"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItem = [
    { path: "#home", name: "Home" },
    { path: "#about", name: "About" },
    { path: "#process", name: "Process" },
    { path: "#projects", name: "Projects" },
    { path: "#services", name: "Services" },
    { path: "#testimonials", name: "Testimonials" },
    // { path: "#contact", name: "Contact" },
  ];

  const mobileNavItem = [
    { path: "#home", name: "Home" },
    { path: "#about", name: "About" },
    { path: "#process", name: "Process" },
    { path: "#projects", name: "Projects" },
    { path: "#services", name: "Services" },
    { path: "#testimonials", name: "Testimonials" },
    { path: "#contact", name: "Contact" },
  ];

  return (
    <div className="w-[100%] fixed top-0 left-0 z-50 bg-white shadow-xl overflow-x-hidden">
      <div className="w-[100%] md:max-w-[1170px] mx-auto px-4 md:px-6 h-[70px] flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1 className="h-[36px] w-[36px] md:h-[50px] md:w-[50px] flex justify-center items-center rounded-full bg-buttonColors text-buttonTextColor font-semibold text-[12px] sm:text-[14px]">
            Mh
          </h1>
          <h1 className="text-textColor font-[600] text-[16px] md:text-[24px] whitespace-nowrap">
            Mustansar Hussain
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItem.map((item, index) => (
            <a
              href={item.path}
              key={index}
              className="text-textColor font-medium text-[16px] hover:text-buttonColors transition"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-buttonColors text-buttonTextColor font-semibold text-[16px] px-6 py-2 rounded-[5px] hover:opacity-90 transition"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl text-buttonColors">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden w-full bg-white shadow-md py-4 px-4 flex flex-col gap-4 transition-all duration-300">
          {mobileNavItem.map((item, index) => (
            <a
              href={item.path}
              key={index}
              className="text-textColor font-medium text-[16px] hover:text-buttonColors transition"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
