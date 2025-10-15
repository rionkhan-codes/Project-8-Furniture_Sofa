import React from 'react'
import { Link } from 'react-router'
import banner from '../assets/images/banner.png'
import { FaArrowRight } from "react-icons/fa";

export const Banner = () => {
  return (
    <>
    <section id='banner' className='py-[30px] bg-[#FBEBB5] hidden lg:block'>
        <div className='container'>
            <div className='row flex justify-center gap-[70px]'>
                <div className='mt-[170px]'>
                    <h1 className='font-medium font-poppins text-[65px] text-black w-[440px] '>Rocket single seater</h1>
                    <Link class="animated-button inline-block w-[160px] h-[60px] mt-[37px] ">
                    <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                    <span class="text text-[15px] font-poppins">Shop Now</span>
                    <span class="circle"></span>
                    <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                    </Link>
                </div>
                <div>
                  <img className='w-[700px] h-[700px]' src={banner} alt="banner" />
                </div>
            </div>
        </div>
    </section>

    {/* ------------- responsive ---------------- */}
    <section id='banner' className='lg:hidden py-[17px] bg-[#FBEBB5]'>
      <div className='container'>
        <div className='row flex justify-center gap-[11px]'>
          <div>
            <h1 className='font-medium font-poppins text-[23px] text-black w-[170px] mt-[50px]'>Rocket single seater</h1>
            <Link className='flex gap-[4px] items-center font-normal text-[14px] text-white font-poppins w-[110px] h-[40px] bg-gray-700 mt-[17px] rounded-[13px] justify-center border border-gray-950'>Shop Now<FaArrowRight /></Link>
          </div>
          <div>
            <img className='w-[170px] h-[200px]' src={banner} alt="banner" />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
