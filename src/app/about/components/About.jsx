import Image from 'next/image'
import React from 'react'
import myImage from "../../../../public/unsplash_wKOKidNT14w.svg"
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";

const About = () => {
  return (
    <div className="max-w-[1170px] mx-auto my-[60px] md:my-[100px] px-4 md:px-6 rounded-[20px] shadow-2xl">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

        {/* Image Left (top on mobile) */}
        <div className="w-full flex justify-center items-center">
          <Image
            src={myImage}
            alt="About Image"
            className="w-full max-w-[400px] md:max-w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Right side - Text Content */}
        <div className="flex flex-col justify-center items-center md:items-start gap-6 text-center md:text-left">
          <h1 className="text-[28px] sm:text-[36px] md:text-[40px] font-[600] text-mainHeadingColor leading-tight md:leading-[50px]">
            I am Professional User Experience Designer
          </h1>
          <p className="text-[16px] font-[400] text-subHeadingColor max-w-[600px]">
            I design and develop services for customers specializing in creating stylish, modern websites, web services, and online stores. My passion is to design digital user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-buttonColors text-buttonTextColor font-[600] text-[16px] px-10 py-3 rounded-[5px]">
              Portfolio
            </button>
            <button className="bg-transparent border border-buttonColors text-buttonColors font-[600] text-[16px] px-10 py-3 rounded-[5px]">
              Download CV
            </button>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6 mt-2 py-[40px] md:p-0">
            <FaFacebookF className="h-[30px] w-[30px] text-buttonColors hover:opacity-80 transition" />
            <FaInstagram className="h-[30px] w-[30px] text-buttonColors hover:opacity-80 transition" />
            <FaGithub className="h-[30px] w-[30px] text-buttonColors hover:opacity-80 transition" />
            <FaUpwork className="h-[30px] w-[30px] text-buttonColors hover:opacity-80 transition" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
