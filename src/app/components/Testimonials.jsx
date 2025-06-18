"use client"
import React, { useEffect, useState } from 'react';

const testimonialsData = [
  {
    name: 'Esther Howard',
    position: 'Managing Director, ABC Company',
    message:
      'Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu.',
  },
  {
    name: 'Floyd Miles',
    position: 'CTO, Tech Solutions',
    message:
      'Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien. Morbi ornare elit at libero suscipit porta.',
  },
  {
    name: 'Savannah Nguyen',
    position: 'Lead Designer, Pixel Perfect',
    message:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    name: 'Cameron Williamson',
    position: 'Project Manager, DevCorp',
    message:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',
  },
  {
    name: 'Courtney Henry',
    position: 'CEO, Visionary Ltd.',
    message:
      'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='max-w-[1170px] mx-auto my-[100px] p-[20px] rounded-[20px]'>
      {/* Section Header */}
      <div className='text-center'>
        <h1 className='text-[32px] sm:text-[40px] font-[600] text-mainHeadingColor leading-[50px]'>
          Testimonials
        </h1>
        <p className='text-[16px] font-[400] text-subHeadingColor max-w-[600px] mx-auto'>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
        </p>
      </div>

      {/* Testimonial Content */}
      <div className='transition-all duration-700 ease-in-out text-center mt-[30px]'>
        <h1 className='text-[14px] sm:text-[18px] font-[400] text-mainHeadingColor max-w-[800px] mx-auto'>
          "{testimonialsData[currentIndex].message}"
        </h1>
        <div className='flex flex-col items-center justify-center mt-[20px]'>
          <h1 className='text-[18px] sm:text-[20px] font-[600] text-mainHeadingColor'>
            {testimonialsData[currentIndex].name}
          </h1>
          <p className='text-[16px] font-[400] text-subHeadingColor'>
            {testimonialsData[currentIndex].position}
          </p>
        </div>
      </div>

      {/* Dots */}
      <div className='flex justify-center mt-8 gap-2'>
        {testimonialsData.map((_, index) => (
          <div
            key={index}
            className={`h-[12px] w-[12px] rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-buttonColors' : 'bg-gray-300'
              }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
