import React from 'react'
import { BreadCrumb } from '../components/BreadCrumb'
import { BlogPage1 } from '../components/BlogPage1'
import { SingleDelivery } from '../common/SingleDelivery'
import { ContactComp2 } from '../components/ContactComp2'
import { FooterNav } from '../components/FooterNav'
import { BlogPage1LeftSide } from '../components/BlogPage1LeftSide'

export const BlogPage = () => {
  return (
    <>
    <BreadCrumb Name={'Blog'} pageName={'Blog'}/>
    <div className='container flex justify-between'>
    <BlogPage1/>
    <BlogPage1LeftSide/>
    </div>
    <ContactComp2/>
    <FooterNav/>
    </>
  )
}
