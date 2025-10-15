import React from 'react'
import { Banner } from '../components/Banner'
import { SideTable } from '../components/SideTable'
import { TopPicks } from '../components/TopPicks'
import { NewArrival } from '../components/NewArrival'
import { Blog } from '../components/Blog'

export const Home = () => {
  return (
    <>
    <Banner/>
    <SideTable/>
    <TopPicks/>
    <NewArrival/>
    <Blog/>
    </>
  )
}
