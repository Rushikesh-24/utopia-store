import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/app/globals.css'
import ShopCategory from '@/components/ShopCategory'

const women = () => {
  const category="women"
  return (
    <>
    <Header/>
    <img src="/Assets/banner_women.png" alt="" />
    <ShopCategory category={category}/>
    <Footer/>
    </>
  )
}

export default women