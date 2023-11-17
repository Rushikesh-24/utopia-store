// utils/CartContext.js
import React, { createContext, useReducer, useContext, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
        if (existingItemIndex !== -1) {
            // Item already in the cart, update quantity
            const updatedCart = [...state.cartItems];
            updatedCart[existingItemIndex].quantity += action.payload.quantity || 1;
            return {
              ...state,
              cartItems: updatedCart,
            };
          } else {
            // Item not in the cart, add it
            return {
              ...state,
              cartItems: [...state.cartItems, action.payload],
            };
          }
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
        };
      default:
        return state;
    }
  };
  const getInitialCartState = () => {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : { cartItems: [] };
    };
    
    const CartProvider = ({ children }) => {
        const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });
        
        const removeFromCart = (item) => {
          dispatch({ type: 'REMOVE_FROM_CART', payload: item });
        };  
        const addToCart = (item) => {
            dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);
  return (
    <CartContext.Provider value={{ cart: state.cartItems, addToCart ,removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
    };

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};


export { CartProvider ,useCart };