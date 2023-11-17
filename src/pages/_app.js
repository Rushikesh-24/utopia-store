// pages/_app.js
import { CartProvider } from '@/utils/CartContext';
import React from 'react';
import { SessionProvider} from 'next-auth/react'



function MyApp({ Component, pageProps }) {
  
  return (
    <SessionProvider session={pageProps.session}>
    <CartProvider >
      <Component {...pageProps} />
    </CartProvider>
    </SessionProvider>
  );
}

export default MyApp;
