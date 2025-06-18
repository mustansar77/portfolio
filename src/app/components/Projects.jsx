"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import projectImage from "../../../public/project.svg";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      category: "UI-UX DESIGN",
      title: "Product Admin Dashboard",
      projectDescription: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    },
    {
      category: "UI-UX DESIGN",
      title: "Mobile App Wireframe",
      projectDescription: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    },
    {
      category: "UI-UX DESIGN",
      title: "E-commerce Website",
      projectDescription: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    },
    {
      category: "UI-UX DESIGN",
      title: "Fitness App",
      projectDescription: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    },
    {
      category: "UI-UX DESIGN",
      title: "Portfolio Website",
      projectDescription: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    },
    {
      category: "UI-UX DESIGN",
      title: "Restaurant App",
      projectDescription: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    },
    {
      category: "UI-UX DESIGN",
      title: "Banking Dashboard",
      projectDescription: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    },
    {
      category: "UI-UX DESIGN",
      title: "News Blog UI",
      projectDescription: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <>
      <div className='max-w-[1170px] mx-auto my-[100px] p-[20px] rounded-[20px]'>
        {/* Section Header */}
        <div className='text-center'>
          <h1 className='text-[32px] sm:text-[40px] font-[600] text-mainHeadingColor leading-[50px]'>
            My Projects
          </h1>
          <p className='text-[16px] font-[400] text-subHeadingColor max-w-[600px] mx-auto'>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
          </p>
        </div>

        {/* Projects Grid */}
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-[50px]'>
          {displayedProjects.map((project, index) => (
            <div key={index} className='bg-buttonTextColor shadow-xl rounded-md overflow-hidden hover:shadow-2xl duration-300'>
              <Image src={projectImage} alt='Project Image' className='w-full object-cover' />
              <div className='p-4'>
                <p className='text-[12px] font-[400] text-subHeadingColor uppercase tracking-wide'>
                  {project.category.trim()}
                </p>
                <h2 className='text-[18px] font-[600] text-mainHeadingColor leading-[28px] mt-1'>
                  {project.title.trim()}
                </h2>
                <p className='text-[14px] font-[400] text-subHeadingColor mt-2'>
                  {project.projectDescription.trim()}
                </p>
                <button className='mt-4 bg-transparent border border-buttonColors text-buttonColors font-[600] text-[14px] px-6 py-2 rounded-md hover:bg-buttonColors hover:text-buttonTextColor transition duration-300'>
                  Case Study
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <div className='flex justify-center'>
          {projects.length > 6 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className='bg-buttonColors text-buttonTextColor font-[600] text-[16px] px-10 py-3 rounded-md hover:bg-transparent hover:text-buttonColors border border-buttonColors transition duration-300'
            >
              {showAll ? "Show Less" : "More Projects"}
            </button>
          )}
        </div>
      </div>

      <div className="bg-mainHeadingColor w-full flex justify-center items-center py-16 px-4 text-center">
        <div className="flex flex-col items-center justify-center gap-6 max-w-[900px]">
          <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-[600] text-buttonTextColor leading-tight">
            Do you have Project Idea? <br /> Let's discuss your project!
          </h1>
          <p className="text-[16px] sm:text-[18px] font-[400] text-subHeadingColor max-w-[700px]">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
          </p>
          <button className="bg-buttonColors text-buttonTextColor font-[500] text-[16px] px-8 sm:px-12 py-3 sm:py-4 rounded-[5px] hover:opacity-90 transition">
            Let's Work Together
          </button>
        </div>
      </div>

    </>
  );
};

export default Projects;
