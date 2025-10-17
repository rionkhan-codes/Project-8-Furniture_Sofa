import React from 'react'
import { BreadCrumb } from '../components/BreadCrumb'
import { Login } from '../components/Login'

export const Account = () => {
  return (
    <>
    <BreadCrumb Name={'My Account'} pageName={'My Account'}/>
    <div>
      <Login/>
    </div>
    </>
  )
}
