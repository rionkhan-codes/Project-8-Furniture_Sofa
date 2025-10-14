import React from 'react'
import { Link } from 'react-router'

export const Banner = () => {
  return (
    <>
    <section id='banner' className='py-[50px] bg-[#FBEBB5]'>
        <div className='container'>
            <div className='row'>
                <div>
                    <h1 className='font-medium font-poppins text-[65px] text-black w-[440px] text-center'>Rocket single seater</h1>
                    <Link class="animated-button inline-block w-[160px] h-[60px] mt-[37px] ml-[80px]">
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
            </div>
        </div>
    </section>
    </>
  )
}
