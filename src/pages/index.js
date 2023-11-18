import '@/app/globals.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Newcollection from '@/components/Newcollection'
import Offers from '@/components/Offers'
import Popular from '@/components/Popular'
import React from 'react'

const Home = () => {
  return (
    <>
    <Header/>
      <Hero/>
      <Popular/>  
      <Offers/> 
      <Newcollection/>
    <Footer/>
    </>
  )
}

export default Home