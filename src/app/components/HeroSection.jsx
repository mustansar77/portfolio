import Image from 'next/image'
import React from 'react'
import myImage from "../../../public/unsplash_wKOKidNT14w.svg"

const HeroSection = () => {
  return (
    <div className="max-w-[1170px] mx-auto my-[120px] px-4 md:px-6 ">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side (Text Content) */}
        <div className="flex flex-col justify-center items-center md:items-start gap-6 text-center md:text-left">
          <h1 className="text-[32px] sm:text-[44px] md:text-[62px] font-[600] text-mainHeadingColor leading-tight md:leading-[80px]">
            Hello, I’m <br className="md:hidden" />
            Mustansar Hussain
          </h1>
          <p className="text-[16px] font-[400] text-subHeadingColor max-w-[600px]">
            I'm a Freelance UI/UX Designer and Full-Stack Developer based in Lahore, Pakistan. I strive to build immersive, beautiful web applications through clean code, thoughtful design, and seamless user experiences — using React, Next.js, Node.js, MongoDB, and MySQL.
          </p>
          <a href="#contact">
            <button className="bg-buttonColors text-buttonTextColor font-[600] text-[16px] px-10 py-4 rounded-[5px]">
              Say Hello!
            </button>
          </a>

          <div className="flex flex-row gap-4 w-full ">
            <div className="bg-boxesBackgroundColor flex-1 flex justify-center items-center flex-col rounded-[5px] h-[80px]">
              <h1 className="text-textColor text-[24px] font-[600]">2 Y.</h1>
              <p className="text-subHeadingColor text-[16px] font-[400]">Experience</p>
            </div>

            <div className="bg-boxesBackgroundColor flex-1 flex justify-center items-center flex-col rounded-[5px] h-[80px]">
              <h1 className="text-textColor text-[24px] font-[600]">8</h1>
              <p className="text-subHeadingColor text-[16px] font-[400]">Project Completed</p>
            </div>

            <div className="bg-boxesBackgroundColor flex-1 flex justify-center items-center flex-col rounded-[5px] h-[80px]">
              <h1 className="text-textColor text-[24px] font-[600]">5</h1>
              <p className="text-subHeadingColor text-[16px] font-[400]">Happy Client</p>
            </div>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="w-full flex justify-center items-center">
          <Image
            src={myImage}
            alt="Hero Image"
            className="w-full max-w-[400px] md:max-w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
