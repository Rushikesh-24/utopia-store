import React from 'react'
import ShopCategory from '@/components/ShopCategory'

const kids = () => {
    const category="kid"
  return (
    <>
    <img src="/Assets/banner_kids.png" alt="" />
    <ShopCategory category={category}/>
    </>
  )
}

export default kids