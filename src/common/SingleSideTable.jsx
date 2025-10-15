import React from 'react'
import { Link } from 'react-router'

export const SingleSideTable = ({proImg,proName}) => {
  return (
    <>
    <div className='w-[605px] h-[562px] text-center hidden lg:block'>
        <div className='w-[500px] h-[400px] overflow-hidden'>
            <img src={proImg} alt="product" />
        </div>
        <div>
            <h2 className='font-medium font-poppins text-[36px] text-black'>{proName}</h2>
        </div>
        <Link className='button flex w-[190px] justify-center items-center m-auto mt-[13px]'> View More
        </Link>
    </div>

    {/* ------------- responsive ------------- */}
    <div className='w-[190px] h-[300px] text-center lg:hidden'>
        <div className='w-[180px] h-[180px] overflow-hidden'>
            <img src={proImg} alt="product" />
        </div>
        <div>
            <h2 className='font-medium font-poppins text-[21px] text-black'>{proName}</h2>
        </div>
        <Link className='flex w-[100px] h-[30px] justify-center items-center m-auto mt-[11px] bg-gray-600 font-normal font-poppins text-[14px] text-white rounded-[9px]'>View More</Link>
    </div>
    </>
  )
}
