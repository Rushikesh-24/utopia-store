import React from 'react'
import '@/app/globals.css'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
    <Header/>
    <div style={{
        backgroundImage: 'url("/Assets/utopia.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="min-h-screen bg-[image-name] bg-cover bg-no-repeat"></div>
    <Footer/>
    </>
  )
}

export default Home