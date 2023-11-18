import React from 'react'
import ShopCategory from '@/components/ShopCategory'

const women = () => {
  const category="women"
  return (
    <>
    <img src="/Assets/banner_women.png" alt="" />
    <ShopCategory category={category}/>
    </>
  )
}

export default women