import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/app/globals.css'
import ShopCategory from '@/components/ShopCategory'

const kids = () => {
    const category="kid"
  return (
    <>
    <Header/>
    <img src="/Assets/banner_kids.png" alt="" />
    <ShopCategory category={category}/>
    <Footer/>
    </>
  )
}

export default kids