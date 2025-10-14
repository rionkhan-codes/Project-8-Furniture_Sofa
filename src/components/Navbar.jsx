import React from 'react'
import logo from '../assets/images/logo.png'
export const Navbar = () => {
  return (
    <>
    <nav id='Navbar' className='py-[17px]'>
        <div className='container'>
            <div className='row flex justify-between items-center'>
                <div>
                    <img className='rounded-[17px]' src={logo} alt="logo" />
                </div>
                <div>
                    <ul className='flex items-center gap-[75px]'>
                        <li className='font-medium font-poppins text-[16px] text-black'>Home</li>
                        <li className='font-medium font-poppins text-[16px] text-black'>Shop</li>
                        <li className='font-medium font-poppins text-[16px] text-black'>About</li>
                        <li className='font-medium font-poppins text-[16px] text-black'>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}
