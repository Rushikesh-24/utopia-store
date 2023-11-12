import React from 'react'

const Offers = () => {
  return (
    <div id="offers" className='w-4/5 flex flex-1 justify-center bg-gradient-to-b from-red-300 to-red-50 m-auto px-4 mb-36 mt-40'>
        <div id="left" className='flex flex-col flex-1 justify-center w-1/2'>
            <h1 className='font-semibold text-5xl mx-10'>Exclusive</h1>
            <h1 className='font-semibold text-5xl mx-10'>Offers for You</h1>
            <div id="latestBtn" className='flex justify-center items-center gap-4 w-80 h-20 rounded-3xl mt-7 bg-red-500 text-white text-lg font-medium cursor-pointer mx-10'>Check Now</div>
        </div>
        <div id="right" className='flex-1 flex items-center pt-14 justify-end w-1/2'>
            <img src="/Assets/exclusive_image.png" alt="" />
        </div>
    </div>
  )
}

export default Offers