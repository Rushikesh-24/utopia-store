import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/app/globals.css'
import ShopCategory from '@/components/ShopCategory'
const men = () => {
  const category="men"
  return (
    <>
    <Header/>
    <img src="/Assets/banner_mens.png" alt="" />
    <ShopCategory category={category}/>
    <Footer/>
    </>
  )
}

export default men