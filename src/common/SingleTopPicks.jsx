import React from 'react'
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';

export const SingleTopPicks = ({proimg,proname,proprice,prodis,prorate,hello}) => {
  return (
    <div>
        <div className='hidden lg:block'>
        <div className='w-[287px] h-[372px]'>
            <div className='w-[287px] h-[287px] overflow-hidden bg-gray-100 rounded-[25px]'>
                <img src={proimg} alt="product" />
            </div>
            <h2 className='font-normal font-poppins text-[19px] text-black mt-[14px] truncate w-[250px]'>{proname}</h2>
            <div className='mt-[11px] flex justify-between items-center'>
                <p className='text-[16px] text-black font-medium font-poppins'>{proprice}</p>
                <p className='text-[16px] text-black font-medium font-poppins line-through'>{prodis}</p>
            </div>
            <div className='mt-[11px] flex gap-[11px] items-center text-[18px] font-poppins font-medium text-black'><FaStar className='text-[#FBBF24] text-[19px]'/>{prorate}</div>
        </div>
        <Link className='button flex w-[190px] justify-center items-center m-auto mt-[69px]'> View More
        </Link>
        </div>
        {/* ----------- responsive ------------- */}
        <div className='w-[160px] h-[330px] lg:hidden'>
            <div className='w-[160px] h-[190px] overflow-hidden bg-gray-100 rounded-[15px]'>
                <img src={proimg} alt="product" />
            </div>
            <h2 className='font-normal font-poppins text-[15px] text-black mt-[14px] truncate w-[150px]  '>{proname}</h2>
            <div className='mt-[11px] flex justify-between items-center'>
                <p className='text-[13px] text-black font-medium font-poppins'>{proprice}</p>
                <p className='text-[13px] text-black font-medium font-poppins line-through'>{prodis}</p>
            </div>
            <div className='mt-[11px] flex gap-[7px] items-center text-[17px] font-poppins font-medium text-black'><FaStar className='text-[#FBBF24] text-[18px]'/>{prorate}</div>
        </div>
    </div>
  )
}
