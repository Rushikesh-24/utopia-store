import React from 'react'

const Footer = () => {
  return (
    <div id="footer" className='flex flex-col justify-center items-center gap-10 mt-20 flex-wrap'>
        <div id="footerlogo" className='flex items-center gap-5 flex-wrap'>
            <img src="/Assets/logo-black.png" alt="" className='w-40'/>
            <p className='text-2xl font-semibold '>UTOPIA STORE</p></div>
            <ul id="footerlinks" className='flex list-none gap-10 text-lg'>
                <li className='cursor-pointer '>Company</li>
                <li className='cursor-pointer '>Products</li>
                <li className='cursor-pointer '>Offices</li>
                <li className='cursor-pointer '>About</li>
                <li className='cursor-pointer '>Contact</li>
            </ul>
            <div id="socialicons" className=' flex gap-5 '>
                <div id="container" className='p-3 pb-1 bg-white border border-white'>
                    <img src="/Assets/instagram_icon.png" alt="insta" /></div>
                    <div id="container" className='p-3 pb-1 bg-white border border-white'><img src="/Assets/pintester_icon.png" alt="" /></div>
                    <div id="container" className='p-3 pb-1 bg-white border border-white'><img src="/Assets/whatsapp_icon.png" alt="" /></div>
                </div>
            <div id="copyright" className=' flex flex-col items-center gap-7 w-screen mb-7 text-lg'>
                <hr className=' w-10/12 border-none rounded-md h-1 bg-gray-200 '/>
                <p>Copyrigth @2023 -All Rights Reserved</p>
            </div>
            </div>
       
        
  )
}

export default Footer