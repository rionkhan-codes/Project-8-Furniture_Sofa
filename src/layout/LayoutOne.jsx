import React from 'react'
import { Navbar } from '../components/Navbar'
import { Outlet } from 'react-router'

export const LayoutOne = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}
