"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import projectImage from "../../../public/project.svg";
import Link from 'next/link';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      category: "Product Development",
      title: "RecoveryCircle",
      projectDescription:
        "RecoveryCircle is a role-based software platform with four user roles: Superadmin, Admin, Guide, and User—each with distinct responsibilities and dashboards. The platform integrates Zoom for live meetings, enabling guides, admins, and users to host or join sessions. It features an internal currency called KarmaCoins, which can be used for subscriptions, meeting fees, and purchasing products. All transactions are handled securely using Stripe, offering a complete, user-specific digital experience.",
      link: "https://recoverycircle.org",
    },
    {
      category: "Website Development",
      title: "Hurtech",
      projectDescription:
        "Hurtech is a professional company portfolio website designed to showcase corporate identity, services, products, and team members. This fully responsive frontend website presents comprehensive information about the business in a clean and modern format.",
      link: "https://hurtech.io",
    },
    {
      category: "Website Development",
      title: "Perfume E-commerce Store",
      projectDescription:
        "A fully functional e-commerce platform designed for selling perfumes, featuring a clean and elegant frontend coupled with a robust backend. It includes modules for user management, order tracking, product listings, transaction records, and customer history to provide a seamless shopping experience.",
      link: "https://example.com/perfume-store",
    },
    {
      category: "Website Development",
      title: "SMM Panel",
      projectDescription:
        "An advanced Social Media Marketing panel where users can purchase services such as followers, likes, watch time, and views across platforms like Facebook, YouTube, Instagram, Twitter, and TikTok. The platform includes a manual payment system, separate dashboards for admin and users, and full control over service management, user orders, and payment tracking.",
      link: "https://example.com/smm-panel",
    },
    {
      category: "Website Development",
      title: "Portfolio Website",
      projectDescription:
        "A personal portfolio website that highlights my professional background, skills, and completed projects. The site offers a clean, interactive interface that serves as a digital resume and showcases my capabilities as a developer.",
      link: "https://portfolio-ecru-nine-icr0lix060.vercel.app/",
    },
    {
      category: "Website Development",
      title: "Foodify",
      projectDescription:
        "Foodify is a restaurant management platform where restaurants can register to manage their staff, menus, tables, and floor layouts. Customers can book tables or place orders online. Designed to support a nearly waiterless dining experience, the platform streamlines restaurant operations and enhances customer convenience.",
      link: "https://example.com/foodify",
    },
    {
      category: "Website Development",
      title: "School App",
      projectDescription:
        "A role-based school management system with three roles: Admin, Teacher, and Student. Teachers can manage class schedules, student attendance, and communicate with parents. Students can access their library books, results, fee vouchers, and communicate with teachers. Admins manage both students and teachers, including salaries, fee vouchers, and data tracking.",
      link: "https://example.com/school-app",
    },
    {
      category: "Website Development",
      title: "Hospital Management System",
      projectDescription:
        "A comprehensive hospital management system designed to handle doctor, nurse, receptionist, and driver profiles. It manages hospital assets, accessories, ambulance tracking, holiday schedules, and patient records. The system enhances operational efficiency across all departments.",
      link: "https://example.com/hospital-system",
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
            <div
              key={index}
              className='bg-buttonTextColor shadow-xl rounded-md overflow-hidden hover:shadow-2xl duration-300 flex flex-col h-full'
            >
              <Image src={projectImage} alt='Project Image' className='w-full object-cover' />
              <div className='p-4 flex flex-col flex-1'>
                <p className='text-[12px] font-[400] text-subHeadingColor uppercase tracking-wide'>
                  {project.category.trim()}
                </p>
                <h2 className='text-[18px] font-[600] text-mainHeadingColor leading-[28px] mt-1'>
                  {project.title.trim()}
                </h2>
                <p className='text-[14px] font-[400] text-subHeadingColor mt-2 flex-1'>
                  {project.projectDescription.trim()}
                </p>
                <div className='mt-4'>
                  <Link href={project.link}>
                    <button className=' bg-transparent border border-buttonColors text-buttonColors font-[600] text-[14px] px-6 py-2 rounded-md hover:bg-buttonColors hover:text-buttonTextColor transition duration-300'>
                      Case Study
                    </button>
                  </Link>
                </div>
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
