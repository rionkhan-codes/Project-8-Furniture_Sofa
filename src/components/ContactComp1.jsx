import React from 'react'
import { CommonHead } from '../common/CommonHead'
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";

export const ContactComp1 = () => {
  return (
   <>
   <section id='contactComp' className='pt-[98px]'>
    <div className='container'>
        {/* ------------ row 1 ------------- */}
        <div className='row'>
            <div>
                <CommonHead start={'Get In Touch With Us'} end={'For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!'}/>
            </div>
        </div>
        {/* ----------- row 2 ---------- */}
        <div className='row flex justify-between mt-[120px]'>
            {/* -------- col 1 ----------- */}
           <div className='flex flex-col gap-[42px]'>
            {/* ----------- address ---------- */}
                <div className='flex items-center gap-[25px]'>
                        <FaLocationDot className='text-[25px]' />
                    <div>
                        <h2 className='font-medium font-poppins text-[24px] text-black'>Address</h2>
                        <p className='font-poppins font-normal text-black text-[16px] w-[213px]'>236 5th Bashundhara City Complex ,Dhaka NY10000,Bangladesh</p>
                    </div>
                </div>
                {/* ----------- Phone ---------- */}
                <div className='flex items-center gap-[25px]'>
                        <MdLocalPhone className='text-[25px]' />
                    <div>
                        <h2 className='font-medium font-poppins text-[24px] text-black'>Phone</h2>
                        <p className='font-poppins font-normal text-black text-[16px] w-[213px]'> Mobile : 0123456789 
                        Hotline : +(84) 456-6789</p>
                    </div>
                </div>
                {/* ----------- Working Time ---------- */}
                <div className='flex items-center gap-[25px]'>
                        <MdAccessTimeFilled className='text-[25px]' />
                    <div>
                        <h2 className='font-medium font-poppins text-[24px] text-black'>Working Time</h2>
                        <p className='font-poppins font-normal text-black text-[16px] w-[213px]'>Monday-Friday: 9:00 - 22:00 , Saturday-Sunday: 9:00 - 21:00</p>
                    </div>
                </div>
           </div>
           {/* ---------- col 2 ----------- */}
           <div className='flex flex-col gap-[33px]'>
            {/* ----------- name input ----------- */}
            <div>
                <h2 className='font-poppins font-medium text-[16px] text-black mb-[21px]'>Your name</h2>
                <input className='w-[530px] h-[75px] border border-[#9F9F9F] rounded-[11px] pl-[31px]' type="text" placeholder='Your name' />
            </div>
            {/* ----------- Email address input ----------- */}
            <div>
                <h2 className='font-poppins font-medium text-[16px] text-black mb-[21px]'>Email address</h2>
                <input className='w-[530px] h-[75px] border border-[#9F9F9F] rounded-[11px] pl-[31px]' type="text" placeholder='Enter your Email address' />
            </div>
            {/* ----------- Subject input ----------- */}
            <div>
                <h2 className='font-poppins font-medium text-[16px] text-black mb-[21px]'>Subject</h2>
                <input className='w-[530px] h-[75px] border border-[#9F9F9F] rounded-[11px] pl-[31px]' type="text" placeholder='This is an optional' />
            </div>
            {/* ----------- Message input ----------- */}
            <div>
                <h2 className='font-poppins font-medium text-[16px] text-black mb-[21px]'>Message</h2>
                <input className='w-[530px] h-[75px] border border-[#9F9F9F] rounded-[11px] pl-[31px]' type="text" placeholder='Hi! i’d like to ask about' />
            </div>

            {/* ---------- button ----------- */}
            <button className='main'>
                <span className='main2'>Submit</span>
            </button>
           </div>
        </div>
    </div>
   </section>
   </>
  )
}
