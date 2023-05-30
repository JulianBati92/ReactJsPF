import React, { useContext, useState } from 'react';
import { CartContext } from './cartContext';

import setCompletoImage from '../assets/imgproduct/set_completo.jpg';
import mateImperialImage from '../assets/imgproduct/mate_imperial.jpg';
import mateTorpedoImage from '../assets/imgproduct/mate_torpedo.jpg';
import mateCamioneroImage from '../assets/imgproduct/mate_camionero.jpg';

import CartPreview from './CartPreview';

const ItemDetailContainer = ({ product }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);
  const [cartItemQuantity, setCartItemQuantity] = useState(0);

  const handleAddToCart = () => {
    addToCart(product);
    setCartItemQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
    setCartItemQuantity((prevQuantity) => prevQuantity - 1);
  };

  let productImage;
  switch (product.id) {
    case 1:
      productImage = setCompletoImage;
      break;
    case 2:
      productImage = mateImperialImage;
      break;
    case 3:
      productImage = mateTorpedoImage;
      break;
    case 4:
      productImage = mateCamioneroImage;
      break;
    default:
      productImage = null;
  }

  return (
    <div className="product-item">
      {productImage && <img src={productImage} alt={product.title} />}

      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <div>
        <h4>Características adicionales</h4>
        <ul>
          <li>Hecho a mano con madera de calidad</li>
          <li>Acabado suave y duradero</li>
          <li>Diseño único y elegante</li>
        </ul>
      </div>
      <div>
        <h4>Opciones de personalización</h4>
        <select>
          <option value="natural">Natural</option>
          <option value="oscuro">Oscuro</option>
        </select>
      </div>
      <div>
        <button onClick={handleAddToCart}>Agregar al carrito</button>
        {cartItemQuantity > 0 && (
          <button onClick={handleRemoveFromCart}>Quitar del carrito</button>
        )}
        {cartItemQuantity > 0 && <p>Cantidad en el carrito: {cartItemQuantity}</p>}
      </div>

      <CartPreview />
    </div>
  );
};

export default ItemDetailContainer;
