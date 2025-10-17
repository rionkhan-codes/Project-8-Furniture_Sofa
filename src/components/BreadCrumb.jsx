import React from 'react'
import bread from '../assets/images/bread.png'
import logo from '../assets/images/logo2.png'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router';


export const BreadCrumb = ({Name,pageName}) => {
  return (
    <>
    <div style={{background:`url(${bread})`,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}} className='pt-[67px] pb-[97px]'>
        <div className='container'>
            <div className='w-[350px] m-auto '>
                <div>
                    <img className='w-[77px] m-auto' src={logo} alt="logo" />
                </div>
                <h2 className='font-bold font-poppins text-[48px] text-black text-center'>{Name}</h2>
                <div className='flex justify-center'>
                    <div  className='flex items-center gap-[7px] mt-[3px]'>
                        <Link to={'/'} className='font-medium font-poppins text-[16px] text-black'>Home</Link>
                        <IoIosArrowForward />
                        <Link className='font-medium font-poppins text-[16px] text-black'>{pageName}</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
