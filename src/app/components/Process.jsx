import React from 'react'
import Image from 'next/image'
import clipboard from "../../../public/notes.svg"
import pencil from "../../../public/Pencil.svg"
import device from "../../../public/Vector.svg"
import trend from "../../../public/growth graph.svg"

const Process = () => {
  return (
    <div className="max-w-[1170px] mx-auto my-[60px] md:my-[100px] px-4 md:px-6 rounded-[20px]">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Left Side: Heading and Paragraph */}
        <div className="flex flex-col justify-center gap-6 text-center md:text-left">
          <h1 className="text-[28px] sm:text-[34px] md:text-[40px] font-[600] text-mainHeadingColor leading-tight md:leading-[50px]">
            Work Process
          </h1>
          <p className="text-[16px] font-[400] text-subHeadingColor max-w-[600px] text-center md:text-left">
            I follow a user-centered and collaborative approach to design and development. Whether it’s a sleek website, a dynamic web app, or an eCommerce store, I focus on delivering stylish, modern, and highly functional digital products. From idea to execution, every step is guided by clean code, responsive design, and a deep understanding of the user's journey.
          </p>
        </div>

        {/* Right Side: Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-[10px]">
          {[
            { title: "1. Research", icon: clipboard, description: "I start by understanding your business goals, target audience, and user needs. This foundation ensures every design and development decision is purposeful and aligned with your objectives." },
            { title: "2. Analyze", icon: trend, description: "Using data, competitor insights, and user behavior, I identify opportunities and define a strategic direction for your website or web application." },
            { title: "3. Design", icon: pencil, description: "With a user-first approach, I create clean, responsive, and modern UI/UX designs. Every layout is crafted to ensure usability, accessibility, and visual appeal across devices." },
            { title: "4. Launch", icon: device, description: "After thorough development and testing, I deploy the final product — optimized for performance, SEO, and scalability. Post-launch support ensures everything runs smoothly." },
          ].map((step, index) => (
            <div key={index} className="flex flex-col gap-4 p-4 rounded-lg bg-white shadow-sm">
              <div className={`w-[60px] h-[60px] rounded-[5px] p-4 flex justify-center items-center ${index === 0 ? 'bg-buttonColors' : 'bg-boxesBackgroundColor'}`}>
                <Image src={step.icon} alt={step.title} />
              </div>
              <h2 className="text-[18px] sm:text-[20px] font-[600] text-mainHeadingColor">
                {step.title}
              </h2>
              <p className="text-[14px] sm:text-[16px] font-[400] text-subHeadingColor">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Process
