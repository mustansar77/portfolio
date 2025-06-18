import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  const navItem = [
    {
      path: "/",
      name: "Home"
    },
    {
      path: "/about",
      name: "About"
    },
    {
      path: "/process",
      name: "Process"
    },
    {
      path: "/services",
      name: "Services"
    },
  ]
  return (
    <>
      <div className='h-[70px] bg-white shadow-xl w-[100%] '>

        <div className='max-w-[1170px] mx-auto h-[100%] flex justify-between items-center'>
          <div className='flex items-center gap-[5px]'>
            <h1 className='h-[50px] flex justify-center items-center w-[50px] rounded-[100%] bg-buttonColors text-buttonTextColor font-semibold text-[14px]'>
              Mh
            </h1>
            <h1 className='text-textColor font-[600] text-[24px] '>
              Mustansar Hussain
            </h1>
          </div>

          <div className='flex items-center gap-[50px]'>
            <div className='flex gap-[50px]'>
              {
                navItem.map((item, index) => {
                  return <Link href={item.path} key={index} className='text-textColor font-[500] text-[16px]'>{item.name}</Link>
                })
              }
            </div>
            <button className='bg-buttonColors text-buttonTextColor font-[600] text-[16px] px-6 py-3 rounded-[5px]'>
              Contact
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar