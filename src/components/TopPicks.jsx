import React from 'react'
import { CommonHead } from '../common/CommonHead'
import { SingleTopPicks } from '../common/SingleTopPicks'
import product from '../assets/images/product.png'
import { Link } from 'react-router'
export const TopPicks = () => {
  return (
    <>
    <section id='topPicks' className='py-[55px] hidden lg:block'>
        <div className='container'>
            {/* ---------- heading ------------ */}
            <div className='row'>
                <div>
                    <CommonHead start={'Top Picks For You'} end={'Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.'}/>
                </div>
            </div>
            {/* --------- row 2 ------------- */}
            <div className='row mt-[65px]'>
                <div>
                    <SingleTopPicks proimg={product} proname={'Trenton modular sofa_3'} proprice={'Rs. 25,000.00'} prodis={'5000'} prorate={'4/5'}/>
                </div>
            </div>
        </div>
    </section>

    {/* ------------- responsive --------------- */}
    <section id='ToppicksRes' className='py-[25px] lg:hidden'>
        <div className='container'>
            <div className='row'>
                <div>
                    <CommonHead start={'Top Picks For You'} end={'Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.'}/>
                </div>
            </div>

            {/* ----------- row 2 ----------- */}
            <div className='row flex justify-between mt-[15px]'>
                <div>
                    <SingleTopPicks proimg={product} proname={'Trenton modular sofa_3'} proprice={'Rs. 25,000.00'} prodis={'5000'} prorate={'4/5'}/>
                </div>
                <div>
                    <SingleTopPicks proimg={product} proname={'Trenton modular sofa_3'} proprice={'Rs. 25,000.00'} prodis={'5000'} prorate={'4/5'}/>
                </div>
            </div>
            <Link className='w-[110px] h-[35px] bg-gray-600 text-white flex justify-center items-center m-auto rounded-[13px] text-[14px] mt-[19px]'>View More</Link>
        </div>
    </section>
    
    </>
  )
}
