import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Components/cartContext';
import CartPreview from './CartPreview';
import './Navbar.css';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const cartCount = cartItems.length;

  const [showCartPreview, setShowCartPreview] = useState(false);

  const handleCartPreviewToggle = () => {
    setShowCartPreview(!showCartPreview);
  };

  const closeCartPreview = () => {
    setShowCartPreview(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Tu Matteoli
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Página principal
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Sobre nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Redes sociales
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <button
              className="btn btn-outline-light me-2"
              onClick={handleCartPreviewToggle}
              onBlur={closeCartPreview}
            >
              <i className="bi bi-cart-fill me-1"></i>
              Carrito ({cartCount})
            </button>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Busca tus Matteoli"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </div>
      {showCartPreview && <CartPreview />}
    </nav>
  );
};

export default Navbar;