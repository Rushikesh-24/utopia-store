import Hero from '@/components/Hero'
import Newcollection from '@/components/Newcollection'
import Offers from '@/components/Offers'
import Popular from '@/components/Popular'
import React from 'react'

const Home = () => {
  return (
    <>
      <Hero/>
      <Popular/>  
      <Offers/> 
      <Newcollection/>
    </>
  )
}

export default Home