import Image from 'next/image'
import React from 'react'
import myImage from "../../../public/unsplash_wKOKidNT14w.svg"

const HeroSection = () => {
  return (
    <>
      <div className='max-w-[1170px] mx-auto bg-red-400 my-[100px] h-[70vh] p-[20px] rounded-[20px]'>

        <div className='w-[100%] grid grid-cols-2 gap-2'>
          {/* left side heading  */}
          <div className='flex flex-col justify-center gap-[20px]'>

            <h1 className='text-[62px] font-[600] text-mainHeadingColor leading-[80px]'>

              Hello, I’m
              Mustansar Hussain
            </h1>
            <p className='text-[16px] font-[500] text-subHeadingColor'>
              I'm a Freelance UI/UX Designer and Developer based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.
            </p>

            <div>
              <button className='bg-buttonColors text-buttonTextColor font-[600] text-[16px] px-6 py-3 rounded-[5px]'>
                Say Hello!
              </button>
            </div>


            <div className='flex gap-[30px] w-[100% '>

              <div className='bg-boxesBackgroundColor flex-1 flex justify-center items-center flex-col rounded-[5px] h-[80px]'>

                <h1 className='text-textColor text-[24px] font-[600]'>
                  15 Y.
                </h1>
                <p className='text-subHeadingColor text-[16px] font-[400]'>
                  Experience
                </p>
              </div>



              <div className='bg-boxesBackgroundColor flex-1 flex justify-center items-center flex-col rounded-[5px] h-[80px]'>

                <h1 className='text-textColor text-[24px] font-[600]'>
                  250+
                </h1>
                <p className='text-subHeadingColor text-[16px] font-[400]'>
                  Project Completed
                </p>
              </div>



              <div className='bg-boxesBackgroundColor flex-1 flex justify-center items-center flex-col rounded-[5px] h-[80px]'>

                <h1 className='text-textColor text-[24px] font-[600]'>
                  58
                </h1>
                <p className='text-subHeadingColor text-[16px] font-[400]'>
                  Happy Client
                </p>
              </div>

            </div>
          </div>




          {/* right side */}

          <div>
            <Image src={myImage} />
          </div>
        </div>

      </div>
    </>
  )
}

export default HeroSection