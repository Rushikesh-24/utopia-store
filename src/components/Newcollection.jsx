import React from 'react'
import new_collections from '../../public/Assets/new_collections'
import Items from './Items'
const Newcollection = () => {
  return (
<div id="newcollection" className='flex flex-col items-center gap-2 h-auto mt-40'>
    <h1 className='text-4xl font-medium '>NEW COLLECTIONS</h1>
    <hr className='w-48 h-2 rounded-lg bg-gray-400'/>
    <div id="collection" className='grid grid-cols-4 mt-20 gap-5'>
        {new_collections.map((item,i) => {
                return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
})}
    </div>
</div>
    )
}

export default Newcollection