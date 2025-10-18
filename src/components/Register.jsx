import React from 'react'
import { Link } from 'react-router'

export const Register = () => {
  return (
    <>
    <section id='register' className='pt-[97px]'>
        <div className='container'>
            <div className='row'>
                <div className='w-[430px] m-auto'>
                    <h2 className='font-semibold text-[36px] text-black font-poppins text-center'>Register</h2>
                    {/* ---------- input Username --------------- */}
                    <div>
                        <h2 className='mt-[37px] font-poppins font-medium text-[16px] text-black'>Username</h2>
                        <input className='w-[423px] h-[75px] border border-second rounded-[11px] mt-[22px]' type="text" />
                    </div>
                    {/* ---------- input email ----------- */}
                    <div>
                        <h2 className='mt-[37px] font-poppins font-medium text-[16px] text-black'>Email address</h2>
                        <input className='w-[423px] h-[75px] border border-second rounded-[11px] mt-[22px]' type="text" />
                    </div>
                    {/* ---------- input Password */}
                    <div>
                        <h2 className='mt-[37px] font-poppins font-medium text-[16px] text-black'>Password</h2>
                        <input className='w-[423px] h-[75px] border border-second rounded-[11px] mt-[22px]' type="text" />
                    </div>
                    {/* ---------- remember me ---------- */}
                    <div className='mt-[43px] flex items-center gap-[21px]'>
                        <input className='w-[27px] h-[27px] rounded-[5px] border border-second' type="checkbox" />
                        <h2 className='font-normal font-poppins text-[16px] text-black'>Remember me</h2>
                    </div>
                    {/* ---------------- log in button ---------- */}
                    <div className='mt-[37px] flex justify-center'>
                        <button className='main'>
                            <span className='main2'>Register</span>
                        </button>
                    </div>
                    {/* ----------- new user button ---------- */}
                    <div className='mt-[25px]'>
                        <h2 className='font-normal font-poppins text-[16px] text-black text-center'>Already a member? <Link to={'/LogInPage'} className='text-[#0EA5E9]'>Log In</Link></h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
