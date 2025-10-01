import Image from 'next/image'
import React from 'react'
import myImage from "../../../public/me.png"

const HeroSection = () => {
  return (
    <div className="max-w-[1170px] mx-auto my-[120px] px-4 md:px-6 ">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side (Text Content) */}
        <div className="flex flex-col justify-center items-center md:items-start gap-6 text-center md:text-left">
          <h1 data-aos="fade-up" className="text-[32px] sm:text-[44px] md:text-[62px] font-[600] text-mainHeadingColor leading-tight md:leading-[80px]">
            Hello, I’m <br className="md:hidden" />
            Mustansar Hussain
          </h1>
          <p className="text-[16px] font-[400] text-subHeadingColor max-w-[600px]">
            Hi, I’m a MERN Stack Developer from Bahawalpur, Pakistan. I love creating fast, modern, and interactive web applications using MongoDB, Express.js, React,Next, and Node.js. From backend APIs to frontend interfaces, I bring ideas to life with clean code, thoughtful design, and a focus on user experience.
          </p>
          <a href="#contact">
            <button className="bg-buttonColors text-buttonTextColor font-[600] text-[16px] px-10 py-4 rounded-[5px]">
              Say Hello!
            </button>
          </a>
          <div className="w-full flex flex-wrap justify-center gap-4">
            <div className="bg-boxesBackgroundColor flex-1 min-w-[100px] sm:min-w-[120px] md:min-w-[150px] flex flex-col justify-center items-center rounded-lg h-[100px] shadow-md hover:shadow-lg transition">
              <h1 className="text-textColor text-xl sm:text-2xl md:text-3xl font-bold">2 Y.</h1>
              <p className="text-subHeadingColor text-sm sm:text-base md:text-lg font-medium">Experience</p>
            </div>

            <div className="bg-boxesBackgroundColor flex-1 min-w-[100px] sm:min-w-[120px] md:min-w-[150px] flex flex-col justify-center items-center rounded-lg h-[100px] shadow-md hover:shadow-lg transition">
              <h1 className="text-textColor text-xl sm:text-2xl md:text-3xl font-bold">8</h1>
              <p className="text-subHeadingColor text-sm sm:text-base md:text-lg font-medium">Projects Completed</p>
            </div>

            <div className="bg-boxesBackgroundColor flex-1 min-w-[100px] sm:min-w-[120px] md:min-w-[150px] flex flex-col justify-center items-center rounded-lg h-[100px] shadow-md hover:shadow-lg transition">
              <h1 className="text-textColor text-xl sm:text-2xl md:text-3xl font-bold">5</h1>
              <p className="text-subHeadingColor text-sm sm:text-base md:text-lg font-medium">Happy Clients</p>
            </div>
          </div>

        </div>

        {/* Right Side (Image) */}
        <div className="w-full flex justify-center items-center">
          <Image
            src={myImage}
            alt="Hero Image"
            className="w-full max-w-[400px] md:max-w-[500px] h-auto object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
