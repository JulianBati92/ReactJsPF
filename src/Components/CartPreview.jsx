import React, { useState } from 'react';

const CartPreview = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="cart-preview">
      <h4>Carrito de compras:</h4>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id} className="cart-preview-item">
              <img src={item.image} alt={item.title} />
              <span>{item.title}</span>
              <span className="cart-preview-item-price">${item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPreview;
