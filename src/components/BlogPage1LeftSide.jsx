import React from 'react'
import blogimg from '../assets/images/blogSmallimg.png'
import blogimg2 from '../assets/images/blogSmall2.png'
import blogimg3 from '../assets/images/logSmall3.png'
import blogimg4 from '../assets/images/blgSmall4.png'
import blogimg5 from '../assets/images/blogSmall5.png'
export const BlogPage1LeftSide = () => {
  return (
    <>
    <div className='pt-[107px]'>
        <div className='container'>
            <div>
                <div>
                    <input className='w-[311px] h-[58px] border border-second outline-none pl-[13px]' type="text" />
                </div>
                <div className='mt-[43px]'>
                    <h2 className='font-medium font-poppins text-[24px] text-black'>Categories</h2>
                    <div className='flex justify-between items-center mt-[33px] mb-[7px]'>
                        <button className='font-normal font-poppins text-[16px] text-second'>Crafts</button>
                        <button className='font-normal font-poppins text-[16px] text-second'>2</button>
                    </div>
                    <div className='flex justify-between items-center mt-[33px] mb-[7px]'>
                        <button className='font-normal font-poppins text-[16px] text-second'>Design</button>
                        <button className='font-normal font-poppins text-[16px] text-second'>8</button>
                    </div>
                    <div className='flex justify-between items-center mt-[33px] mb-[7px]'>
                        <button className='font-normal font-poppins text-[16px] text-second'>Handmade</button>
                        <button className='font-normal font-poppins text-[16px] text-second'>7</button>
                    </div>
                    <div className='flex justify-between items-center mt-[33px] mb-[7px]'>
                        <button className='font-normal font-poppins text-[16px] text-second'>Interior</button>
                        <button className='font-normal font-poppins text-[16px] text-second'>1</button>
                    </div>
                    <div className='flex justify-between items-center mt-[33px] mb-[7px]'>
                        <button className='font-normal font-poppins text-[16px] text-second'>Wood</button>
                        <button className='font-normal font-poppins text-[16px] text-second'>6</button>
                    </div>
                </div>
            </div>

            {/* --------- col 2 ---------- */}
            <div>
                <h2 className='font-medium font-poppins text-[24px] text-black'>Recent Posts</h2>
                {/* ---------- part 1 ---------- */}
                <div className='mt-[25px] flex items-center gap-[13px] mb-[37px]'>
                    <div className='w-[80px] h-[80px] overflow-hidden'>
                        <img src={blogimg} alt="blog" />
                    </div>
                    <div>
                        <h2 className='font-poppins font-normal text-black text-[14px]'>Going all-in with millennial design</h2>
                        <p className='font-poppins font-normal text-second text-[13px] mt-[5px]'>03 Aug 2022</p>
                    </div>
                </div>
                {/* ---------- part 2 ---------- */}
                <div className='mt-[25px] flex items-center gap-[13px] mb-[37px]'>
                    <div className='w-[80px] h-[80px] overflow-hidden'>
                        <img src={blogimg2} alt="blog" />
                    </div>
                    <div>
                        <h2 className='font-poppins font-normal text-black text-[14px]'>Exploring new ways of decorating</h2>
                        <p className='font-poppins font-normal text-second text-[13px] mt-[5px]'>03 Aug 2022</p>
                    </div>
                </div>
                {/* ---------- part 3 ---------- */}
                <div className='mt-[25px] flex items-center gap-[13px] mb-[37px]'>
                    <div className='w-[80px] h-[80px] overflow-hidden'>
                        <img src={blogimg3} alt="blog" />
                    </div>
                    <div>
                        <h2 className='font-poppins font-normal text-black text-[14px]'>Handmade pieces that took time to make</h2>
                        <p className='font-poppins font-normal text-second text-[13px] mt-[5px]'>03 Aug 2022</p>
                    </div>
                </div>
                {/* ---------- part 4 ---------- */}
                <div className='mt-[25px] flex items-center gap-[13px] mb-[37px]'>
                    <div className='w-[80px] h-[80px] overflow-hidden'>
                        <img src={blogimg4} alt="blog" />
                    </div>
                    <div>
                        <h2 className='font-poppins font-normal text-black text-[14px]'>Modern home in Milan</h2>
                        <p className='font-poppins font-normal text-second text-[13px] mt-[5px]'>03 Aug 2022</p>
                    </div>
                </div>
                    {/* ---------- part 5 ---------- */}
                <div className='mt-[25px] flex items-center gap-[13px] mb-[37px]'>
                    <div className='w-[80px] h-[80px] overflow-hidden'>
                        <img src={blogimg5} alt="blog" />
                    </div>
                    <div>
                        <h2 className='font-poppins font-normal text-black text-[14px]'>Colorful office redesign</h2>
                        <p className='font-poppins font-normal text-second text-[13px] mt-[5px]'>03 Aug 2022</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
