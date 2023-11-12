import React, { useContext } from 'react'
import all_product from '../../public/Assets/all_product'
import Items from './Items'



const ShopCategory = ({category}) => {
  return (
    <div id="shopCategory">
       <div className='flex justify-between p-4 items-center'>
        <p className='font-semibold '><span>Showing 1-12 </span>out of 36 products</p>
        <div id="categorySort" className='h-10 p-2 flex my-2 justify-between items-center rounded-xl border border-gray-500 border-solid '>Sort by<img src="/Assets/dropdown_icon.png" alt="" className='justify-end' />
        </div>
       </div>
       <div id="categoryProducts" className='mx-6 my-40 grid grid-cols-4 gap-20'>
            {all_product.map((item,i)=>{
                if(item.category==category){
                    return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    
                }
                else{
                    return null;
                }

            })}
       </div>
    <div id="explore" className='flex justify-center items-center m-auto w-40 h-14 rounded-3xl bg-gray-100 text-gray-500 text-lg font-medium cursor-pointer'>
        Explore More
    </div>
    </div>
  )
}

export default ShopCategory

