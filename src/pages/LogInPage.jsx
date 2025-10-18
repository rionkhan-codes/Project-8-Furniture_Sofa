import React from 'react'
import { BreadCrumb } from '../components/BreadCrumb'
import { Login } from '../components/Login'
import { ContactComp2 } from '../components/ContactComp2'
import { FooterNav } from '../components/FooterNav'

export const LogInPage = () => {
  return (
    <>
    <BreadCrumb Name={'My Account'} pageName={'Log In'}/>
    <Login/>
    <ContactComp2/>
    <FooterNav/>
    </>
  )
}
