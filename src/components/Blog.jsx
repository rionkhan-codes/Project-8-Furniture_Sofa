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
    <section id='blog' className='py-[55px]'>
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

        {/* ----------- button --------------- */}
        <div className='w-full m-auto'>
            <button class="bg-gray-500 text-white border border-red-400 border-b-4 font-medium overflow-hidden relative w-[100px] h-[50px] rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span class="bg-black shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                View All Post
            </button>
        </div>
        </div>
    </section>
    </>
  )
}
