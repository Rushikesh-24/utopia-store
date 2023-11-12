// pages/_app.js
import { CartProvider } from '@/utils/CartContext';
import React from 'react';



function MyApp({ Component, pageProps }) {
  return (
    <CartProvider >
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
