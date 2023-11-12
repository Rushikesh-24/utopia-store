import React from 'react'
import data_product from '../../public/Assets/data'
import Items from './Items'
const Popular = () => {
  return (
    <div id="popular" className='flex flex-col items-center gap-2 h-auto mt-40'>
        <h1 className='text-4xl font-medium '>POPULAR IN WOMEN</h1>
        <hr className='w-48 h-2 rounded-lg bg-gray-400'/>
        <div id="popularItems" className='mt-12 flex-row flex gap-8'>
            {data_product.map((item,i)=>{
                return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
    
  )
}

export default Popular