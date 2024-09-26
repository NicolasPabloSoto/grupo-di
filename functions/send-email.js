const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  const { name, email, subject, message, empresa } = JSON.parse(event.body);

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: `"Formulario" <${process.env.EMAIL_USER}>`,
      to: 'comunidad.grupodi@gmail.com',
      subject: subject || 'Nueva consulta',
      text: `Nombre: ${name}\nCorreo: ${email}\nEmpresa: ${empresa}\nMensaje: ${message}`
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email enviado correctamente' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error enviando el correo', error: error.message })
    };
  }
};
