"use client"
import React, { useState } from 'react'
import { useCart } from '@/utils/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/app/globals.css'
import all_product from '../../public/Assets/all_product';




export async function getStaticPaths() {
  const paths = all_product.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const productId = params.id;
  const product = all_product.find((p) => p.id === parseInt(productId));

  return {
    props: {
      product,
    },
  };
}


function ProductPage({ product }) {
  const [divColora, setdivColora] = useState('bg-white')
  const [divColorb, setdivColorb] = useState('bg-white')
  const [divColorc, setdivColorc] = useState('bg-white')
  const [divColord, setdivColord] = useState('bg-white')
  const [divColore, setdivColore] = useState('bg-white')
  const handleDivClicka = () => {
    const newColora = divColora === 'bg-white' ? 'bg-gray-300' : 'bg-white';
    setdivColora(newColora);
  };
  const handleDivClickb = () => {
    const newColorb = divColorb === 'bg-white' ? 'bg-gray-300' : 'bg-white';
    setdivColorb(newColorb);
  };
  const handleDivClickc = () => {
    const newColorc = divColorc === 'bg-white' ? 'bg-gray-300' : 'bg-white';
    setdivColorc(newColorc);
  };
  const handleDivClickd = () => {
    const newColord = divColord === 'bg-white' ? 'bg-gray-300' : 'bg-white';
    setdivColord(newColord);
  };
  const handleDivClicke = () => {
    const newColore = divColore === 'bg-white' ? 'bg-gray-300' : 'bg-white';
    setdivColore(newColore);
  };


  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };
 
  return (
    <>
    <Header/>
    <div id='path' className='flex gap-3 mt-3'>
    <p>Home</p><img src="/Assets/path.png" className='w-2' alt="logo" ></img><p>Product</p><img src="/Assets/path.png" alt="logo" className='w-2'></img>{product.category}<img src="/Assets/path.png" alt="logo" className='w-2'></img>{product.name}</div>

    <div id="conatiner" className='flex mt-14'>
      <div id="left" className='w-1/2 flex justify-center items-center'>
      <img src={product.image.src} alt="" className='flex justify-center items-center'/></div>
      <div id="right" className='w-1/2'>
      <h1 className='font-semibold text-4xl mx-2 mb-3'>{product.name}</h1>
       <div id="productPrice" className='flex gap-5 mt-5 mx-2 mb-1'>
      <div id="newPrices" className='text-slate-700 text-lg font-medium flex'>₹{product.new_price}</div>
            <div id="oldPrices" className='text-slate-400 text-lg font-normal line-through flex'>₹{product.old_price}</div>
      </div>
      <div id="productRating" className='flex mx-2 mb-7'>
      <img src="/Assets/star_icon.png" alt="" /><img src="/Assets/star_icon.png" alt="" /><img src="/Assets/star_icon.png" alt="" /><img src="/Assets/star_icon.png" alt="" /><img src="/Assets/star_dull_icon.png" alt="" />
      </div>
     
      <div id="productSize" className='mx-2'>
        <h2>Select Size</h2>
        <div id='sizes' className='flex gap-7 items-center mt-5'>
        <div className={`hover:bg-gray-300 ${divColora} flex items-center justify-center rounded-xl w-10 cursor-pointer`}onClick={handleDivClicka}>S</div>
        <div className={`hover:bg-gray-300 ${divColorb} flex items-center justify-center rounded-xl w-10 cursor-pointer`} onClick={handleDivClickb}>M</div>
        <div className={`hover:bg-gray-300 ${divColorc} flex items-center justify-center rounded-xl w-10 cursor-pointer`} onClick={handleDivClickc}>L</div>
        <div className={`hover:bg-gray-300 ${divColord} flex items-center justify-center rounded-xl w-10 cursor-pointer`} onClick={handleDivClickd}>XL</div>
        <div className={`hover:bg-gray-300 ${divColore} flex items-center justify-center rounded-xl w-10 cursor-pointer`} onClick={handleDivClicke}>XXL</div></div>
      </div>
      <button onClick={handleAddToCart} className='bg-gray-300 p-3 rounded-xl mt-10'>ADD TO CART</button>
      </div>
      
    </div>
    <Footer/>
    
    </>
  );
}

export default ProductPage;
