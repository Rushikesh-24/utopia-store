import React from 'react'
import ShopCategory from '@/components/ShopCategory'
const men = () => {
  const category="men"
  return (
    <>
    <img src="/Assets/banner_mens.png" alt="" />
    <ShopCategory category={category}/>
    </>
  )
}

export default men