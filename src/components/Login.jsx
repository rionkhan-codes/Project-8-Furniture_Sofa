import React from 'react'

export const Login = () => {
  return (
    <section id='login' className='pt-[98px]'>
        <div className='container'>
            <div className='row'>
                <div>
                    <h2 className='font-semibold text-[36px] text-black font-poppins'>Log In</h2>
                    {/* ---------- input Username or email address */}
                    <div>
                        <h2 className='mt-[37px] font-poppins font-medium text-[16px] text-black'>Username or email address</h2>
                        <input className='w-[423px] h-[75px] border border-second rounded-[11px] mt-[22px]' type="text" />
                    </div>
                    {/* ---------- input Password */}
                    <div>
                        <h2 className='mt-[37px] font-poppins font-medium text-[16px] text-black'>Username or email address</h2>
                        <input className='w-[423px] h-[75px] border border-second rounded-[11px] mt-[22px]' type="text" />
                    </div>
                    {/* ---------- remember me ---------- */}
                    <div className='mt-[43px] flex items-center gap-[21px]'>
                        <input className='w-[27px] h-[27px] rounded-[5px] border border-second' type="checkbox" />
                        <h2 className='font-normal font-poppins text-[16px] text-black'>Remember me</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
