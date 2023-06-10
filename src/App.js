import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Components/cartContext';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Footer from './Components/Footer';
import Formulario from './Components/Formulario'; // Importa el componente formulario

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <Navbar navbarLogo={'Tu Matteoli'} />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/category/:id" element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/contacto" element={<Formulario />} /> {/* Agrega esta ruta */}
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
