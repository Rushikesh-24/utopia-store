'use client';
import React from "react";
import Link from "next/link";
import '@/app/globals.css'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const login = () => {
  return (
    <>
    <Header/>
    <div id="login" className=' flex w-screen h-screen pt-10 bg-gradient-to-b from-gray-400 to-white items-center justify-center'>
      <div id="container" className='w-3/5 h-4/5 bg-white shadow-2xl rounded-2xl'>
        <h1 className=' mx-5 text-5xl font-medium mt-6'>Login</h1>
        <div id="signUpField" className='flex items-center flex-col pap-5 mt-5'>
          <input className='w-4/5 h-12 rounded-xl  border border-gray-400 outline-none text-gray-500 text-lg  m-3 pl-20' type="text" placeholder='Your name'/>
          <input className='w-4/5 h-12 rounded-xl  border border-gray-400 outline-none text-gray-500 text-lg pl-20 m-3 ' type="email" placeholder='Email Address'/>
          <input className='w-4/5 h-12 rounded-xl  border border-gray-400 outline-none text-gray-500 text-lg pl-20 m-3 ' type="password" placeholder='Password' />
        </div>
        <button className='w-4/5 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center mt-6 mx-16'>Continue</button>
        
            
        <p id='login?' className='text-gray-400 w-4/5 mx-56 mt-10'>Don't have a account ?<span><Link href="/signup" className="hover:underline hover:text-red-700">Visit Signup Page</Link></span>
           </p>
        <div id="agree" className='flex mx-44 w-4/5 mt-5'>
          <input type="checkbox" name="" id="" className='mx-2'/>
          <p>By continuing,I agree to terms & privacy policy</p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default login