import { SMTPClient } from 'emailjs';

exports.handler = async function(event) {
  const { name, surname, email, tel, message, subject } = JSON.parse(event.body);

  const client = new SMTPClient({
    user: process.env.SENDINBLUE_USER,
    password: process.env.SENDINBLUE_PASS,
    host: 'smtp-relay.sendinblue.com',
    ssl: true,
  });

  try {
    await client.sendAsync({
      text: `Nombre: ${name} ${surname}\nCorreo: ${email}\nTeléfono: ${tel}\nMensaje: ${message}`, 
      from: process.env.SENDINBLUE_SENDER,
      to: 'comunidad.grupodi@gmail.com',
      subject: subject || 'Nueva consulta',
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email enviado correctamente' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error enviando el correo', error: error.message }),
    };
  }
};
