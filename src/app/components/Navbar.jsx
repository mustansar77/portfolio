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
  ];

  const mobileNavItem = [
    ...navItem,
    { path: "#contact", name: "Contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-[1170px] mx-auto px-4 md:px-6 h-[70px] flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1 className="h-[36px] w-[36px] md:h-[50px] md:w-[50px] flex justify-center items-center rounded-full bg-buttonColors text-buttonTextColor font-semibold text-[12px] sm:text-[14px]">
            Mh
          </h1>
          <h1 className="text-textColor font-semibold text-[16px] md:text-[22px] whitespace-nowrap">
            Mustansar Hussain
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItem.map((item, index) => (
            <a
              href={item.path}
              key={index}
              className="text-textColor font-medium text-[16px] hover:text-buttonColors transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-buttonColors text-buttonTextColor font-semibold text-[16px] px-6 py-2 rounded-lg hover:opacity-90 transition"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-3xl text-buttonColors">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[70px] left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
      >
        <div className="flex flex-col gap-6 py-6 px-6">
          {mobileNavItem.map((item, index) => (
            <a
              href={item.path}
              key={index}
              className="text-textColor font-medium text-[18px] hover:text-buttonColors transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
