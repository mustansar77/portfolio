import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import myImage from "../../../../public/me.png"
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf"; // file path in public folder
    link.download = "Mustansar-Hussain-CV.pdf"; // file name
    link.click();
  };

  return (
    <div className="max-w-[1170px] mx-auto my-[60px] md:my-[100px] px-4 md:px-6 ">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

        {/* Image Left (top on mobile) */}
        <div className="w-full flex justify-center items-center">
          <Image
            src={myImage}
            alt="About Image"
            className="w-full max-w-[400px] md:max-w-[500px] h-auto object-contain"
            priority
          />
        </div>

        {/* Right side - Text Content */}
        <div className="flex flex-col justify-center items-center md:items-start gap-6 text-center md:text-left">
          <h1 className="text-[28px] sm:text-[36px] md:text-[40px] font-[600] text-mainHeadingColor leading-tight md:leading-[50px]">
            I’m a MERN Stack Developer specializing in building modern and scalable web applications.
          </h1>
          <p className="text-[16px] font-[400] text-subHeadingColor max-w-[600px]">
            As a MERN Stack Developer, I create fast, scalable, and user-friendly digital solutions. I specialize in crafting engaging front-end experiences with React and building secure, high-performance backends using Node.js, Express, and MongoDB. My goal is to help businesses and individuals turn their ideas into reality with clean design, smooth functionality, and reliable technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#projects">
              <button className="bg-buttonColors text-buttonTextColor font-[600] text-[16px] px-10 py-4 rounded-[5px]">
                Projects
              </button>
            </Link>

            <button
              onClick={handleDownload}
              className="bg-transparent border border-buttonColors text-buttonColors font-[600] text-[16px] px-10 py-4 rounded-[5px]"
            >
              Download CV
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center md:justify-start gap-6 mt-2 py-[40px] md:p-0">
            <Link href="https://www.facebook.com/share/17KEDPjoDy/" target="_blank">
              <FaFacebookF className="h-[30px] w-[30px] text-buttonColors hover:opacity-80 transition" />
            </Link>

            <Link href="https://www.instagram.com/mustansarhussain2023?igsh=Y2g1eGw2NGY0eTB5" target="_blank">
              <FaInstagram className="h-[30px] w-[30px] text-buttonColors hover:opacity-80 transition" />
            </Link>

            <Link href="https://github.com/mustansar77" target="_blank">
              <FaGithub className="h-[30px] w-[30px] text-buttonColors hover:opacity-80 transition" />
            </Link>

            <Link href="https://www.upwork.com/freelancers/~0146639e1043d9002b" target="_blank">
              <FaUpwork className="h-[30px] w-[30px] text-buttonColors hover:opacity-80 transition" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
