"use client";
import React, { useEffect, useState } from "react";

const testimonialsData = [
  {
    name: "Kabir Kasam",
    position: "Founder, RecoveryCircle",
    message:
      "Working with you was a fantastic experience. You brought clarity and professionalism to a complex software idea. The UI design for each user role feels clean and intuitive. I’ve received great feedback from users since launch.",
  },
  {
    name: "Syed Hassan Naqvi",
    position: "Managing Director, Hurtech",
    message:
      "From the first draft to the final website, you truly understood our brand vision. The site design is modern, professional, and exactly what we needed to communicate our services. Outstanding work!",
  },
  {
    name: "Sarah Khan",
    position: "Creative Lead, PixelTree Studio",
    message:
      "Your sense of layout, color, and typography is top-tier. Every section feels intentional and user-friendly. Would highly recommend for anyone looking to elevate their brand’s online presence.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % testimonialsData.length
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-[1170px] mx-auto my-[100px] p-[20px] rounded-[20px]">
      {/* Section Header */}
      <div data-aos="fade-down" className="text-center">
        <h1 className="text-[32px] sm:text-[40px] font-[600] text-mainHeadingColor leading-[50px]">
          Testimonials
        </h1>
        <p className="text-[16px] font-[400] text-subHeadingColor max-w-[600px] mx-auto">
          Hear from clients who’ve experienced the impact of my web
          development services. Each project reflects a commitment to clean
          code, smooth functionality, and user-focused results.
        </p>
      </div>

      {/* Testimonial Content */}
      <div
        data-aos="fade-up"
        className="transition-all duration-700 ease-in-out text-center mt-[30px]"
      >
        <p className="text-[14px] sm:text-[18px] font-[400] text-mainHeadingColor leading-relaxed max-w-[800px] mx-auto italic">
          "{testimonialsData[currentIndex].message}"
        </p>
        <div className="flex flex-col items-center justify-center mt-[20px]">
          <h3 className="text-[18px] sm:text-[20px] font-[600] text-mainHeadingColor">
            {testimonialsData[currentIndex].name}
          </h3>
          <p className="text-[16px] font-[400] text-subHeadingColor">
            {testimonialsData[currentIndex].position}
          </p>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {testimonialsData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-[12px] w-[12px] rounded-full transition-all duration-300 ${index === currentIndex ? "bg-buttonColors" : "bg-gray-300"
              }`}
            aria-label={`Show testimonial ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
