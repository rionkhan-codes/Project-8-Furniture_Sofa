import React from 'react'
import { Link } from 'react-router'
import bigpro from '../assets/images/Asgaard sofa 1.png'
export const NewArrival = () => {
  return (
   <section id='newArrival' className='py-[217px] bg-[#FFF9E5] relative'>
    <div className='absolute left-0 top-0'>
        <img className='w-[800px] h-[700px]' src={bigpro} alt="product" />
    </div>
    <div className='container'>
        <div className='row'>
            <div className='w-[500px] ml-auto text-center'>
                <h3 className='font-poppins font-medium text-[24px] text-black'>New Arrivals</h3>
                <h2 className='font-bold font-poppins text-[48px] text-black mb-[33px]'>Asgaard sofa</h2>
                <Link class="fancy">
                    <span class="top-key"></span>
                    <span class="text">Order Now</span>
                    <span class="bottom-key-1"></span>
                    <span class="bottom-key-2"></span>
                </Link>
            </div>
        </div>
    </div>
   </section>
  )
}
