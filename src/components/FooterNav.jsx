import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router'
export const FooterNav = () => {
  return (
    <>
    <footer id='footerNav' className='pt-[98px]'>
        <div className='container'>
            <div className='row flex justify-between'>
                {/* ------------- col 1 ------------ */}
                <div className='flex flex-col gap-[33px]'>
                    <div>
                        <img className='rounded-[17px]' src={logo} alt="logo" />
                    </div>
                    <p className='font-poppins font-normal text-[16px] text-second w-[285px]'>400 University Drive Suite 200 Coral Gables,
                    FL 33134 BD</p>
                </div>
                {/* ------------ col 2 ---------- */}
                <div className='text-center'>
                    <h2 className='font-medium font-poppins text-[19px] text-second'>Links</h2>
                    <div className='mt-[55px] flex flex-col gap-[33px]'>
                        <Link className='font-medium font-poppins text-[16px] text-black'>Home</Link>
                        <Link className='font-medium font-poppins text-[16px] text-black'>Shop</Link>
                        <Link className='font-medium font-poppins text-[16px] text-black'>About</Link>
                        <Link className='font-medium font-poppins text-[16px] text-black'>Contact</Link>
                    </div>
                </div>
                 {/* ------------ col 3 ---------- */}
                <div className='text-center'>
                    <h2 className='font-medium font-poppins text-[19px] text-second'>Help</h2>
                    <div className='mt-[55px] flex flex-col gap-[33px] '>
                        <Link className='font-medium font-poppins text-[16px] text-black'>Payment Options</Link>
                        <Link className='font-medium font-poppins text-[16px] text-black'>Returns</Link>
                        <Link className='font-medium font-poppins text-[16px] text-black'>About</Link>
                        <Link className='font-medium font-poppins text-[16px] text-black'>Privacy Policies</Link>
                    </div>
                </div>
                 {/* ------------ col 4 ---------- */}
                <div>
                    <h2 className='font-medium font-poppins text-[19px] text-second'>Links</h2>
                    <div className='mt-[53px]  flex items-center gap-[17px]'>
                        <input className='w-[197px] h-[21px] border-b outline-none' type="text" placeholder='Enter Your Email Address' />
                        <button className='main'>
                            <span className='main2'>SUBSCRIBE</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* ------------- border ---------- */}
                <div className='w-full border border-[#D9D9D9] mt-[48px] mb-[37px]'></div>
                <div>
                    <h2 className='font-poppins font-normal text-[16px] text-black mb-[37px]'>2022 Meubel House. All rights reverved</h2>
                </div>
        </div>
    </footer>
    </>
  )
}
