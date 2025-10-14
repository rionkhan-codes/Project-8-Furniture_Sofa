import React from 'react'
import logo from '../assets/images/logo.png'
import { LuUserRound } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";



export const Navbar = () => {
  return (
    <>
    <nav id='Navbar' className='py-[17px] bg-[#FBEBB5] border-b border-[#00000038]'>
        <div className='container'>
            <div className='row flex justify-between items-center'>
                {/* ----------- logo ---------- */}
                <div>
                    <img className='rounded-[17px]' src={logo} alt="logo" />
                </div>
                {/* ----------- items ------ */}
                <div>
                    <ul className='flex items-center gap-[75px]'>
                        <li className='font-medium font-poppins text-[16px] text-black'>Home</li>
                        <li className='font-medium font-poppins text-[16px] text-black'>Shop</li>
                        <li className='font-medium font-poppins text-[16px] text-black'>About</li>
                        <li className='font-medium font-poppins text-[16px] text-black'>Contact</li>
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
    </>
  )
}
