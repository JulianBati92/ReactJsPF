import React, { useState } from 'react';

const Formulario = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario
    // Puedes agregar aquí el código necesario para enviar los datos del formulario a través de una solicitud HTTP o realizar otras acciones necesarias.
  };

  return (
    <div className="container">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
