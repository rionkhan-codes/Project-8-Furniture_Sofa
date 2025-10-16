import React from 'react'

export const Instagram = () => {
  return (
    <>
    <section id='insta' className='py-[125px] mt-[55px] bg-[#FAF4F4] hidden lg:block'>
        <div className='conatainer'>
            <div className='row'>
                <div className='text-center'>
                    <h2 className='font-bold font-poppins text-[60px] text-black'>Our Instagram</h2>
                    <p className='font-poppins text-[20px] text-black font-normal'>Follow our store on Instagram</p>
                    <button class="button2 m-auto mt-[19px]">Follow Us</button>
                </div>
            </div>
        </div>
    </section>
    
    {/* ----------- responsive ------------ */}
    <section id='insta' className='py-[25px] mt-[25px] bg-[#FAF4F4] lg:hidden'>
        <div className='conatainer'>
            <div className='row'>
                <div className='text-center'>
                    <h2 className='font-bold font-poppins text-[30px] text-black mb-[7px]'>Our Instagram</h2>
                    <p className='font-poppins text-[20px] text-black font-normal'>Follow our store on Instagram</p>
                    <button class="button2 m-auto mt-[19px]">Follow Us</button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
