import React from 'react';
import './Footer.css';

const Formulario = () => {
  return (
    <div className="container formulario">
      <h2>Formulario de Contacto</h2>
      <form>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" className="form-control" id="nombre" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea className="form-control" id="mensaje" rows="5"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
