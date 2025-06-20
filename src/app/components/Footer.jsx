import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const footerItem = [
    { path: "#home", name: "Home" },
    { path: "#about", name: "About" },
    { path: "#process", name: "Process" },
    { path: "#projects", name: "Projects" },
    { path: "#services", name: "Services" },
    { path: "#testimonials", name: "Testimonials" },
    { path: "#contact", name: "Contact" },
  ];

  return (
    <div className="bg-mainHeadingColor w-full py-12 px-4 sm:px-6 text-center">
      <div className="mx-auto max-w-[1170px] flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">

        {/* Logo and Name */}
        <div className="flex items-center gap-3 justify-center md:justify-start">
          <h1 className="h-[36px] w-[36px] md:h-[50px] md:w-[50px] flex justify-center items-center rounded-full bg-buttonColors text-buttonTextColor font-semibold text-[12px] sm:text-[14px]">
            Mh
          </h1>
          <h1 className="text-buttonTextColor font-[600] text-[18px] md:text-[22px] whitespace-nowrap">
            Mustansar Hussain
          </h1>
        </div>

        {/* Nav Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {footerItem.map((item, index) => (
            <a
              href={item.path}
              key={index}
              className="text-buttonTextColor font-[300] text-[14px] md:text-[16px] hover:text-buttonColors transition"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-buttonTextColor font-[400] text-[14px] md:text-[16px] whitespace-nowrap text-center">
          © 2025 Mustansar Hussain
        </div>
      </div>
    </div>
  );
};

export default Footer;
