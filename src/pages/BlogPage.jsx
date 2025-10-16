import React from 'react'
import { BreadCrumb } from '../components/BreadCrumb'
import { BlogPage1 } from '../components/BlogPage1'

export const BlogPage = () => {
  return (
    <>
    <BreadCrumb Name={'Blog'} pageName={'Blog'}/>
    <BlogPage1/>
    </>
  )
}
