import React from 'react'
import { BreadCrumb } from '../components/BreadCrumb'
import { ContactComp1 } from '../components/ContactComp1'
import { ContactComp2 } from '../components/ContactComp2'
import { FooterNav } from '../components/FooterNav'

export const Contact = () => {
  return (
    <>
    <BreadCrumb pageName={'Contact'} Name={'Contact'}/>
    <ContactComp1/>
    <ContactComp2/>
    <FooterNav/>
    </>
  )
}
