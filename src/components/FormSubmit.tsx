import React, { useState } from "react";
import './formSubmit.css'; // Importa los estilos CSS

const FormSubmit: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    empresa: "", // Campo agregado
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch("../../.netlify/functions/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      alert("Error al enviar el formulario");
    }
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit} className="formContenedor">
      <p className="textFormulario">Nombre:</p>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="textArea"
        placeholder="Martina Enrione"
        required
      />
      <p className="textFormulario">Correo:</p>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="textArea"
        placeholder="m.enrione@gmail.com"
        required
      />
      <p className="textFormulario">Empresa:</p>
      <input
        type="text"
        name="empresa"
        value={formData.empresa}
        onChange={handleChange}
        className="textArea"
        placeholder="Urbanica"
        required
      />
      <p className="textFormulario">Asunto:</p>
      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        className="textArea"
      />
      <p className="textFormulario esp">Mensaje:</p>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="textMensaje"
        cols={30}
        rows={10}
        required
      ></textarea>
      <input
        type="submit"
        name="submit"
        value="ENVIAR"
        className="subFormEnviar"
      />
    </form>
  );
};

export default FormSubmit;
