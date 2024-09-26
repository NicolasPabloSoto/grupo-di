import React, { useState } from "react";
import './formSubmit.css';

const FormSubmit: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    empresa: "",
    telefono: "",
    asunto: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulario enviado, datos:", formData);

    try {
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        console.error("Error en la respuesta del servidor:", response.statusText);
        alert("Error en la respuesta del servidor");
        return;
      }

      const result = await response.json();
      console.log("Respuesta del servidor:", result);
      alert(result.message);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Error al enviar el formulario");
    }
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit} className="formContenedor">
      <p className="textFormulario">Nombre:</p>
      <input
        type="text"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        className="textArea"
        placeholder="Martina Enrione"
        required
      />
      <p className="textFormulario">Correo:</p>
      <input
        type="email"
        name="correo"
        value={formData.correo}
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
      <p className="textFormulario">Número de Contacto:</p>
      <input
        type="tel"
        name="telefono"
        value={formData.telefono}
        onChange={handleChange}
        className="textArea"
        placeholder="+569 6523251"
        required
      />
      <p className="textFormulario esp">Qué tienes en mente:</p>
      <textarea
        name="asunto"
        value={formData.asunto}
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
