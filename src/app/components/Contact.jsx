import Image from 'next/image';
import React from 'react';
import myImage from "../../../public/unsplash_wKOKidNT14w.svg";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
const Contact = () => {
  return (
    <div className="max-w-[1170px] mx-auto my-[120px] px-4 md:px-6 ">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side */}
        <div className="flex flex-col justify-center items-center md:items-start gap-6 text-center md:text-left ">
          <h1 className="text-[32px] sm:text-[34px] md:text-[38px] font-[600] text-mainHeadingColor leading-tight md:leading-[60px]">
            Let’s discuss your Project
          </h1>
          <p className="text-[16px] font-[400] text-subHeadingColor max-w-[600px]">
            Have an idea in mind or need a stunning website design? I’d love to hear about your project goals and how I can bring your vision to life through clean, user-focused design.
          </p>

          <div className='flex flex-col gap-[30px] justify-center w-full py-[30px]'>
            {/* Info Items */}
            {[
              { label: "Address", value: "Johar Town, Lahore", icon: <CiLocationOn className='h-[30px] w-[30px] fill-white' /> },
              { label: "Email", value: "malikmustansarhussain7766@gmail.com", icon: <MdOutlineEmail className='h-[30px] w-[30px] fill-white' /> },
              { label: "Call me now", value: "+923115170829", icon: <MdOutlineLocalPhone className='h-[30px] w-[30px] fill-white' /> },
            ].map((item, index) => (
              <div key={index} className='flex gap-5 items-center'>
                <div className='bg-buttonColors p-[10px] rounded-[5px]'>
                  {item.icon}
                </div>
                <div className='flex flex-col justify-center text-left'>
                  <p className="text-[14px] sm:text-[16px] text-subHeadingColor">{item.label}</p>
                  <h1 className="text-[14px] sm:text-[16px] font-[600] text-mainHeadingColor">{item.value}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full">

          <form className="bg-white rounded-[20px] p-6  space-y-4">
            <p className="text-[16px] font-[400] text-subHeadingColor max-w-[600px]">
              Tell me a bit about your project — I’d love to understand your goals and how we can bring your vision to life through thoughtful, modern design.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name *"
                autoFocus
                className="w-full p-3 border-b-2 border-buttonColors focus:border-buttonColors outline-none text-buttonColors placeholder:text-buttonColors text-[16px] font-[400] transition duration-300"
              />

              <input
                type="email"
                placeholder="Email *"
                className="w-full p-3 border-b-2 border-transparent focus:border-buttonColors outline-none text-buttonColors placeholder:text-buttonColors text-[16px] font-[400] transition duration-300"
              />

              <input
                type="text"
                placeholder="Location *"
                className="w-full p-3 border-b-2 border-transparent focus:border-buttonColors outline-none text-buttonColors placeholder:text-buttonColors text-[16px] font-[400] transition duration-300"
              />

              <input
                type="text"
                placeholder="Budget *"
                className="w-full p-3 border-b-2 border-transparent focus:border-buttonColors outline-none text-buttonColors placeholder:text-buttonColors text-[16px] font-[400] transition duration-300"
              />

              <input
                type="text"
                placeholder="Subject *"
                className="w-full p-3 border-b-2 border-transparent focus:border-buttonColors outline-none text-buttonColors placeholder:text-buttonColors text-[16px] font-[400] transition duration-300"
              />
            </div>

            <textarea
              placeholder="Message *"
              rows={4}
              className="w-full p-3 border-b-2 border-transparent focus:border-buttonColors outline-none text-buttonColors placeholder:text-buttonColors text-[16px] font-[400] transition duration-300 resize-none"
            />

            <button
              type="submit"
              className="bg-buttonColors hover:bg-opacity-90 text-white py-4 px-10 rounded-[8px] font-medium transition-all w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
