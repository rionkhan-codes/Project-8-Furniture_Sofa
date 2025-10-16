import React from 'react'
import { CommonHead } from '../common/CommonHead'
import { SingleBlog } from '../common/SingleBlog'
import blogimg from '../assets/images/blog.png'
import blogimg2 from '../assets/images/blog2.png'
import blogimg3 from '../assets/images/blog3.png'
import { Link } from 'react-router'
export const Blog = () => {
  return (
    <>
    <section id='blog' className='py-[55px] hidden lg:block'>
        <div className='container'>
            {/* ---------- row 1 ----------- */}
            <div className='row'>
                <div>
                    <CommonHead start={'Our Blogs'} end={'Find a bright ideal to suit your taste with our great selection'}/>
                </div>
            </div>
            {/* --------- row 2 ----------- */}
            <div className='row mt-[65px] flex justify-between'>
                <div>
                    <SingleBlog blogimg={blogimg} blogname={'Going all-in with millennial design'} blogdate={'12th Oct 2022'} blogtime={'5 min'}/>
                </div>
                <div>
                    <SingleBlog blogimg={blogimg2} blogname={'Going all-in with millennial design'} blogdate={'12th Oct 2022'} blogtime={'5 min'}/>
                </div>
                <div>
                    <SingleBlog blogimg={blogimg3} blogname={'Going all-in with millennial design'} blogdate={'12th Oct 2022'} blogtime={'5 min'}/>
                </div>
            </div>
            {/* ----------- button ------------ */}
            <button class="button2 m-auto mt-[75px]">View All Post</button>
        </div>
    </section>

    {/* ---------- responsive ------------- */}
    <section id='blog' className='py-[23px] lg:hidden'>
        <div className='container'>
            {/* ---------- row 1 ----------- */}
            <div className='row'>
                <div>
                    <CommonHead start={'Our Blogs'} end={'Find a bright ideal to suit your taste with our great selection'}/>
                </div>
            </div>
            {/* --------- row 2 ----------- */}
            <div className='row mt-[65px] flex justify-between'>
                <div>
                    <SingleBlog blogimg={blogimg} blogname={'Going all-in with millennial design'} blogdate={'12th Oct 2022'} blogtime={'5 min'}/>
                </div>
                <div>
                    <SingleBlog blogimg={blogimg2} blogname={'Going all-in with millennial design'} blogdate={'12th Oct 2022'} blogtime={'5 min'}/>
                </div>
                <div>
                    <SingleBlog blogimg={blogimg3} blogname={'Going all-in with millennial design'} blogdate={'12th Oct 2022'} blogtime={'5 min'}/>
                </div>
            </div>
            {/* ----------- button ------------ */}
            <button class="button2 m-auto mt-[-25px]">View All Post</button>
        </div>
    </section>
    </>
  )
}
