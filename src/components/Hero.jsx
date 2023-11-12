import React from 'react'

const hero = () => {
  return (
    <>
    <div id="container" className=' h-screen flex bg-gradient-to-b from-gray-300 to-white'>
    <div id="left" className='flex-1 flex flex-col justify-center gap-5 pl-40 leading-tight'>
      <h2 className='text-lg font-semibold'>NEW ARRIVALS ONLY</h2>
      <div>
      <div id="handIcon" className='flex items-center gap-5'>
        <p className='text-7xl font-semibold'>new</p>
        <img src="/Assets/hand_icon.png" alt="" className='w-24'/>
      </div>
      <p className='text-7xl font-semibold'>collections</p>
      <p className='text-7xl font-semibold'>for everyone</p>
    </div>
    <div id="latestBtn" className='flex justify-center items-center gap-4 w-80 h-20 rounded-3xl mt-7 bg-red-500 text-white text-lg font-medium'>
      <div>Latest Collection</div>
      <img src="/Assets/arrow.png" alt="hi" />
    </div>
    </div>
    <div id="right" className='flex-1 flex items-center justify-center'><img src="/Assets/hero_image.png" alt="" /></div>
    </div>
    </>
  )
}

export default hero