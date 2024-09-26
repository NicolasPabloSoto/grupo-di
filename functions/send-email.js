const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  let body;
  try {
    body = JSON.parse(event.body);
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Error parsing JSON body", error: error.message })
    };
  }

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,  // Tu correo
      pass: process.env.EMAIL_PASS   // Contraseña de la aplicación de Gmail
    }
  });

  try {
    let info = await transporter.sendMail({
      from: `"Formulario de Contacto" <${process.env.EMAIL_USER}>`,
      to: 'comunidad.grupodi@gmail.com', 
      subject: 'Nueva consulta desde grupodi.cl',
      text: `Nombre: ${body.nombre}\nCorreo: ${body.correo}\nEmpresa: ${body.empresa}\nTeléfono: ${body.telefono}\nMensaje: ${body.asunto}`
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email enviado correctamente' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error enviando el correo", error: error.message })
    };
  }
};
