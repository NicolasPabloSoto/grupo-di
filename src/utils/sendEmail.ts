import emailjs from 'emailjs-com';

export const sendEmail = (form: HTMLFormElement, setStatus: (message: string) => void) => {
  emailjs.sendForm(
    'service_neislpp',   // Reemplaza con tu Service ID
    'templateDI_8o7rgi8',  // Reemplaza con tu Template ID
    form,                // Referencia al formulario HTML
    // 'tQTAfEODwubnhIHcb'       // Reemplaza con tu User ID
  )
  .then(() => {
    setStatus('Mensaje enviado con éxito');
  })
  .catch((error) => {
    setStatus('Error al enviar el mensaje');
    console.error('Error:', error);
  });
};