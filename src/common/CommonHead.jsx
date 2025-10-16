import React from 'react'

export const CommonHead = ({start,end}) => {
  return (
    <div>
        <div className='text-center hidden lg:block'>
            <h2 className='font-medium font-poppins text-[36px] text-black'>{start}</h2>
            <p className='font-medium font-poppins text-[16px] text-second mt-[13px] w-[645px] m-auto'>{end}</p>
        </div>

        {/* ---------- responsive ------------- */}
        <div className='text-center lg:hidden'>
            <h2 className='font-medium font-poppins text-[23px] text-black'>{start}</h2>
            <p className='font-normal text-[14px] font-poppins text-second mt-[7px]'>{end}</p>
        </div>
    </div>
  )
}
