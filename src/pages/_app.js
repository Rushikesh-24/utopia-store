// pages/_app.js
import { CartProvider } from '@/utils/CartContext';
import React from 'react';
import '@/app/globals.css'
import { SessionProvider} from 'next-auth/react'
import Header from '@/components/Header';
import Footer from '@/components/Footer';



function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
    <CartProvider >
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </CartProvider>
    </SessionProvider>
  );
}

export default MyApp;
