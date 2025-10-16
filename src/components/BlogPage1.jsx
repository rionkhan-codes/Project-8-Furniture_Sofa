import React from 'react'
import blogimg from '../assets/images/blogimg.png'
import blogimg2 from '../assets/images/blogimg2.png'
import blogimg3 from '../assets/images/blogimg3.png'
import { RiAdminFill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { IoMdPricetag } from "react-icons/io";
import { Link } from 'react-router';

export const BlogPage1 = () => {
  return (
    <>
    <section id='blogPage' className='pt-[107px]'>
        <div className='container'>
            <div className='row'>
                {/* ----------- part 1 --------- */}
                <div className='mb-[55px]'>
                    {/* ------------ image ----------- */}
                    <div>
                        <img src={blogimg} alt="blog" />
                    </div>
                    {/* --------- date -------- */}
                    <div className='mt-[17px] flex gap-[37px]'>
                        <div className='text-second flex items-center gap-[7px]'>
                            <RiAdminFill className='text-[19px]'/>
                            <h2 className='font-normal font-poppins text-[16px]'>Admin</h2>
                        </div>
                        <div className='text-second flex items-center gap-[7px]'>
                            <SlCalender className='text-[19px]'/>
                            <h2 className='font-normal font-poppins text-[16px]'>14 Oct 2022</h2>
                        </div>
                        <div className='text-second flex items-center gap-[7px]'>
                            <IoMdPricetag className='text-[19px]'/>
                            <h2 className='font-normal font-poppins text-[16px]'>Wood</h2>
                        </div>
                    </div>
                    {/* ------------- blog title ----------- */}
                    <div className='mt-[15px]'>
                        <h2 className='font-poppins font-medium text-[30px] text-black mb-[13px]'>Going all-in with millennial design</h2>
                        <p className='font-normal font-poppins text-[15px] text-second w-[815px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                    </div>
                    {/* ---------- button --------- */}
                    <div>
                        <Link className='font-poppins font-normal text-[16px] text-black border-b-2 mt-[30px] inline-block'>Read more</Link>
                    </div>
                </div>

                {/* ----------- part 2 --------- */}
                <div className='mb-[55px]'>
                    {/* ------------ image ----------- */}
                    <div>
                        <img src={blogimg2} alt="blog" />
                    </div>
                    {/* --------- date -------- */}
                    <div className='mt-[17px] flex gap-[37px]'>
                        <div className='text-second flex items-center gap-[7px]'>
                            <RiAdminFill className='text-[19px]'/>
                            <h2 className='font-normal font-poppins text-[16px]'>Admin</h2>
                        </div>
                        <div className='text-second flex items-center gap-[7px]'>
                            <SlCalender className='text-[19px]'/>
                            <h2 className='font-normal font-poppins text-[16px]'>14 Oct 2022</h2>
                        </div>
                        <div className='text-second flex items-center gap-[7px]'>
                            <IoMdPricetag className='text-[19px]'/>
                            <h2 className='font-normal font-poppins text-[16px]'>Handmade</h2>
                        </div>
                    </div>
                    {/* ------------- blog title ----------- */}
                    <div className='mt-[15px]'>
                        <h2 className='font-poppins font-medium text-[30px] text-black mb-[13px]'>Exploring new ways of decorating</h2>
                        <p className='font-normal font-poppins text-[15px] text-second w-[815px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                    </div>
                    {/* ---------- button --------- */}
                    <div>
                        <Link className='font-poppins font-normal text-[16px] text-black border-b-2 mt-[30px] inline-block'>Read more</Link>
                    </div>
                </div>

                {/* ----------- part 3 --------- */}
                <div className='mb-[55px]'>
                    {/* ------------ image ----------- */}
                    <div>
                        <img src={blogimg3} alt="blog" />
                    </div>
                    {/* --------- date -------- */}
                    <div className='mt-[17px] flex gap-[37px]'>
                        <div className='text-second flex items-center gap-[7px]'>
                            <RiAdminFill className='text-[19px]'/>
                            <h2 className='font-normal font-poppins text-[16px]'>Admin</h2>
                        </div>
                        <div className='text-second flex items-center gap-[7px]'>
                            <SlCalender className='text-[19px]'/>
                            <h2 className='font-normal font-poppins text-[16px]'>14 Oct 2022</h2>
                        </div>
                        <div className='text-second flex items-center gap-[7px]'>
                            <IoMdPricetag className='text-[19px]'/>
                            <h2 className='font-normal font-poppins text-[16px]'>Wood</h2>
                        </div>
                    </div>
                    {/* ------------- blog title ----------- */}
                    <div className='mt-[15px]'>
                        <h2 className='font-poppins font-medium text-[30px] text-black mb-[13px]'>Handmade pieces that took time to make</h2>
                        <p className='font-normal font-poppins text-[15px] text-second w-[815px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                    </div>
                    {/* ---------- button --------- */}
                    <div>
                        <Link className='font-poppins font-normal text-[16px] text-black border-b-2 mt-[30px] inline-block'>Read more</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
