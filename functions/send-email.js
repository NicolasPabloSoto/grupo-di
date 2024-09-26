const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  const body = JSON.parse(event.body);

  // Configurar el transporte de nodemailer
  let transporter = nodemailer.createTransport({
    service: 'gmail', // Puedes cambiarlo si usas otro proveedor de email
    auth: {
      user: 'comunidad.grupodi@gmail.com', // Reemplaza con tu correo
      pass: 'grupodiadmin'        // Reemplaza con la contraseña del correo
    }
  });

  // Enviar el correo
  let info = await transporter.sendMail({
    from: '"Formulario de Contacto" <tu-correo@gmail.com>',
    to: 'comunidad.grupodi@gmail.com', // Correo que recibirá las notificaciones
    subject: 'Nueva correo desde grupodi.cl',
    text: `Nombre: ${body.name}\nCorreo: ${body.email}\nMensaje: ${body.message}`
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Email enviado correctamente' })
  };
};
