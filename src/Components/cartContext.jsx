import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const getCartItemQuantity = (itemId) => {
    return cartItems.filter((item) => item.id === itemId).length;
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getCartItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

