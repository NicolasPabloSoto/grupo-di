import React, { useState } from 'react';
import styles from '../components/Formulario.module.css';

const Formulario: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    empresa: '',
    telefono: '',
    asunto: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/Envio.php', {
        method: 'POST',
        body: new FormData(e.currentTarget)
      });
      
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.text();
      setMessage(result);
      setFormData({
        nombre: '',
        correo: '',
        empresa: '',
        telefono: '',
        asunto: ''
      });
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setMessage('Error al enviar el formulario. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    
          <div className={styles.formContEsp}>
            <form onSubmit={handleSubmit}>
              <p className={styles.textFormulario}>Nombre:</p>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Martina Enrione" 
                required
                className={styles.textArea}
              />
              <p className={styles.textFormulario}>Correo:</p>
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                placeholder="m.enrione@gmail.com"
                required
                className={styles.textArea}
              />
              <p className={styles.textFormulario}>Empresa:</p>
              <input
                type="text"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                placeholder="Urbanica"
                required
                className={styles.textArea}
              />
              <p className={styles.textFormulario}>Número de Contacto:</p>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="+569 6523251"
                required
                className={styles.textArea}
              />
              <p className={styles.textFormulario}>Qué tienes en Mente:</p>
              <textarea
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                cols={30}
                rows={10}
                required
                className={styles.textMensaje}
              ></textarea>
              <input
                type="submit"
                value="ENVIAR"
                className={styles.subFormEnviar}
              />
            </form>
            {message && <p id="success">{message}</p>}
          </div>
       
  );
};

export default Formulario;