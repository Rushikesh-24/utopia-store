import Link from 'next/link'
import React from 'react'


const Items = (props) => {
  return (
    <>
    <div id="item" className='w-64 hover:scale-110 delay-150 ease-in-out duration-300'>
        <Link href={`/${props.id}`}><img src={props.image.src} alt="images" className='w-48 rounded-md'/></Link>
        <p className='mx-1'>{props.name}</p>
        <div id="itemPrices" className='flex gap-3'>
            <div id="newPrices" className='text-slate-700 text-lg font-medium flex'>₹{props.new_price}</div>
            <div id="oldPrices" className='text-slate-400 text-lg font-normal line-through flex'>₹{props.old_price}</div>
        </div>
    </div>
    </>
  )
}

export default Items