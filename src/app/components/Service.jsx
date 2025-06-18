import React from 'react'

const Service = () => {
  return (
    <>
      <div className="max-w-[1170px] mx-auto px-4 my-[80px] grid grid-cols-1 md:grid-cols-2 gap-[30px] items-center">
        {/* Left Section */}
        <div className="flex flex-col justify-center gap-[20px] text-center md:text-left">
          <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-[600] text-mainHeadingColor leading-tight">
            What I do?
          </h1>
          <p className="text-[16px] sm:text-[18px] font-[400] text-subHeadingColor">
            I'm a Freelance UI/UX Designer and Developer based in London, England. I strive to build immersive and beautiful web applications through carefully crafted code and user-centric design.
          </p>
          <div>
            <button className="bg-buttonColors text-buttonTextColor font-[600] text-[16px] px-6 py-3 rounded-[5px]">
              Say Hello!
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center justify-center gap-[20px]">
          {[1, 2, 3].map((_, idx) => (
            <div
              key={idx}
              className="shadow-lg rounded-[8px] p-[20px] w-full hover:border-l-4 hover:border-l-buttonColors cursor-pointer flex flex-col gap-[10px] bg-white"
            >
              <h1 className="text-[20px] sm:text-[24px] font-[600] text-mainHeadingColor">
                User Experience (UX)
              </h1>
              <p className="text-[14px] sm:text-[16px] font-[400] text-subHeadingColor">
                I'm a Freelance UI/UX Designer and Developer based in London, England. I strive to build immersive and beautiful web applications through carefully crafted code and user-centric design.
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Service
