import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartItemQuantity = (itemId) => {
    const items = cartItems.filter((item) => item.id === itemId);
    let quantity = 0;
    items.forEach((item) => {
      quantity += item.quantity;
    });
    return quantity;
  };

  const getCartCount = () => {
    return cartItems.length;
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, getCartCount, getCartItemQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
