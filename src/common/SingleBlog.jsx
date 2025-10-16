import React from 'react'
import { Link } from 'react-router'
import { MdOutlineAccessTime } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

export const SingleBlog = ({blogimg,blogname,blogdate,blogtime,bloglink}) => {
  return (
    <>
    <div className='w-[393px] h-[553px] text-center hidden lg:block'>
        <div className='w-[393px] h-[393px] overflow-hidden mb-[33px]'>
            <img className='rounded-[13px]' src={blogimg} alt="blogImg" />
        </div>
        <h2 className='font-normal font-poppins text-[20px] text-black mb-[11px]'>{blogname}</h2>
        <Link to={bloglink} className='font-medium font-poppins text-[24px] text-black border-b-2 mb-[19px] inline-block'>Read More</Link>
        <div className='flex gap-[19px] items-center justify-center'>
            <div className='flex gap-[4px] items-center'>
                <MdOutlineAccessTime />
                <h2 className='font-poppins font-light text-[16px] text-black'>{blogtime}</h2>
            </div>
            <div className='flex gap-[4px] items-center'>
                <SlCalender /> 
                <h2 className='font-poppins font-light text-[16px] text-black'>{blogdate}</h2>
            </div>
        </div>
    </div>
    {/* ------- responsive --------- */}
    <div className='w-[120px] h-[300px] text-center lg:hidden'>
        <div className='w-[100px] h-[100px] overflow-hidden mb-[11px]'>
            <img className='rounded-[13px]' src={blogimg} alt="blogImg" />
        </div>
        <h2 className='font-normal font-poppins text-[13px] text-black mb-[11px] truncate w-[90px]'>{blogname}</h2>
        <Link to={bloglink} className='font-medium font-poppins text-[13px] text-black border-b-2  inline-block w-[80px] m-auto'>Read More</Link>
        <div className='flex gap-[7px] items-center justify-center mt-[15px] flex-wrap'>
            <div className='flex gap-[4px] items-center'>
                <MdOutlineAccessTime />
                <h2 className='font-poppins font-light text-[11px] text-black'>{blogtime}</h2>
            </div>
            <div className='flex gap-[3px] items-center'>
                <SlCalender /> 
                <h2 className='font-poppins font-light text-[11px] text-black'>{blogdate}</h2>
            </div>
        </div>
    </div>
    </>
  )
}
