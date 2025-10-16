import React from 'react'

export const SingleDelivery = ({icon,h2,p}) => {
  return (
    <>
    <div>
        <div className='flex items-center gap-[11px]'>
            {icon}
            <div>
                <h2 className='font-medium font-poppins text-[32px] text-black'></h2>
                <p className='font-poppins font-normal text-[20px] text-second w-[375px] mt-[5px]'></p>
            </div>
        </div>
    </div>
    </>
  )
}
