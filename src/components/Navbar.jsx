import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { LuUserRound } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router';



export const Navbar = () => {

    // --------- usestate for responsive ----------
    const [active,setActive] =useState(false)







  return (
    <>
    <nav id='Navbar' className='py-[17px]  border-b border-[#00000038] hidden lg:block'>
        <div className='container'>
            <div className='row flex justify-between items-center'>
                {/* ----------- logo ---------- */}
                <Link to={'/'}>
                    <img className='rounded-[17px]' src={logo} alt="logo" />
                </Link>
                {/* ----------- items ------ */}
                <div>
                    <ul className='flex items-center gap-[75px]'>
                        <li><Link className='font-medium font-poppins text-[16px] text-black'>Home</Link></li>
                        <li><Link className='font-medium font-poppins text-[16px] text-black'>Shop</Link></li>
                        <li><Link to={'/blog'} className='font-medium font-poppins text-[16px] text-black'>About</Link></li>
                        <li><Link to={'/contact'} className='font-medium font-poppins text-[16px] text-black'>Contact</Link></li>
                    </ul>
                </div>
                {/* ------------ buttons --------- */}
                <div className='flex items-center gap-[45px]'>
                    <button><LuUserRound className='text-[25px]' /></button>
                    <button><CiSearch className='text-[25px]' /></button>
                    <button><BsCart3 className='text-[25px]' /></button>
                </div>
            </div>
        </div>
    </nav>


    {/* -------------- responsive ------------ */}
    <nav id='resNav' className=' lg:hidden py-[15px] border-b border-[#00000037]'>
        <div className='container'>
            <div className='row flex items-center justify-between'>
                {/* ----------- logo ------------- */}
                <Link to={'/'} className='w-[70px]'>
                    <img className=' rounded-[13px]' src={logo} alt="logo" />
                </Link>
                {/* ------------- input ----------- */}
                <div className='w-[170px] h-[33px] rounded-[9999px] bg-[#F8F8F8] flex items-center pl-[11px] gap-[7px]'>
                    <CiSearch className='text-[19px]'/>
                    <input className='w-full h-full outline-none border-none' type="text" placeholder='Search' />
                </div>
                {/* -------- buttons ---------- */}
                <div className='flex gap-[19px] items-center'>
                    <div>
                        <button><BsCart3 className='text-[17px]' /></button>
                    </div>
                    <div>
                        <button onClick={()=>setActive(!active)} className='w-[20px] h-[15px] relative'>
                            <span className={`w-[20px] h-[3px] bg-black rounded-full flex absolute top-0 right-0 ${active? 'top-[7px] rotate-45' : 'top-0 rotate-0'} duration-[.4s]`}
                            ></span>
                            <span className={`w-[20px] h-[3px] bg-black rounded-full flex absolute top-[50%] right-0 ${active? 'hidden' : 'block'}`}></span>
                            <span className={`w-[20px] h-[3px] bg-black rounded-full flex absolute  right-0 ${active? 'top-[7px] rotate-[-45deg]' : 'top-full rotate-0'} duration-[.4s]`}></span>
                        </button>
                        {/* -------- items ---------- */}
                        <div className={`w-[80%] bg-gray-500 py-[15px] rounded-[15px] px-[15px] flex justify-center absolute top-[70px] text-center ${active? 'right-[40px]' : 'right-[100%]'} duration-[.4s]`}>
                            <ul className='flex flex-col gap-[11px]'>
                                <li><Link className='font-poppins font-medium text-[15px] text-white'> Home</Link></li>
                                <li><Link className='font-poppins font-medium text-[15px] text-white'> Shop</Link></li>
                                <li><Link className='font-poppins font-medium text-[15px] text-white'> About</Link></li>
                                <li><Link className='font-poppins font-medium text-[15px] text-white'>Contact</Link></li>
                                <li><Link className='font-poppins font-medium text-[15px] text-white flex items-center gap-[5px]'><LuUserRound/>Log in</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}
