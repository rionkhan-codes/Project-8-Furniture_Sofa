import React from 'react'
import { Register } from '../components/Register'
import { BreadCrumb } from '../components/BreadCrumb'
import { ContactComp2 } from '../components/ContactComp2'
import { FooterNav } from '../components/FooterNav'

export const RegisterPage = () => {
  return (
    <>
    <BreadCrumb Name={'My Account'} pageName={'Register'}/>
    <Register/>
    <ContactComp2/>
    <FooterNav/>
    </>
  )
}
