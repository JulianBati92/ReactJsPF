import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Components/cartContext';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Footer from './Components/Footer';
import Formulario from './Components/Formulario';
import CartPreview from './Components/CartPreview';


function App() {
  const [showCartPreview, setShowCartPreview] = useState(false);

  const handleCartPreviewToggle = () => {
    setShowCartPreview(!showCartPreview);
  };

  const closeCartPreview = () => {
    setShowCartPreview(false);
  };

  return (
    <Router>
      <CartProvider>
        <div className="App">
          <Navbar
            navbarLogo="Tu Matteoli"
            showCartPreview={showCartPreview}
            handleCartPreviewToggle={handleCartPreviewToggle}
            closeCartPreview={closeCartPreview}
          />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/category/:id" element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/contacto" element={<Formulario />} />
          </Routes>
          <Footer />
          {showCartPreview && <CartPreview />}
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
