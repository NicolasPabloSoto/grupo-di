// // /pages/api/sendmail.json.ts
// import type { APIRoute } from 'astro'
// import nodemailer from 'nodemailer'

// const emailTo = import.meta.env.EMAIL
// const emailToPass = import.meta.env.PASS
// const host = import.meta.env.HOST

// export const post: APIRoute = async ({ request }) => {
//   // console.log('request', request)

//   if (request.headers.get('Content-Type') === 'application/json') {
//     const formData = await request.json()
//     const name = formData.name
//     const surname = formData.surname
//     const email = formData.email
//     const tel = formData.tel
//     const subject = formData.subject
//     const message = `${formData.message}
//     ---------------------------------------------------------------------- 
//     From: ${name} ${surname} • email: ${email} • tel: ${tel}
//     `
//     const html = `<div style="margin: 20px auto;font-family: Helvetica, Verdana, sans-serif">${message.replace(
//       /[\r\n]/g,
//       '<br>'
//     )}</div>`

//     // sendmail
//     let mailTransporter = nodemailer.createTransport({
//       host,
//       port: 587,
//       secure: false,
//       auth: {
//         user: emailTo,
//         pass: emailToPass,
//       },
//     })

//     let mailDetails = {
//       from: email,
//       to: emailTo,
//       subject: `${new URL(request.url).hostname}: ${subject}`,
//       text: message,
//       html,
//     }

//     let mailresult
//     try {
//       let mailresult = await mailTransporter.sendMail(mailDetails); // Usar await en lugar de callback
//       console.log('Message sent: %s', mailresult.messageId);
//     } catch (error) {
//       console.log('******* Error: ', error); // Manejo de errores
//     }

//     // return endpoint response
//     return new Response(JSON.stringify(mailDetails), {
//       status: 200,
//     })
//   }
//   return new Response(null, { status: 400 }) // if not a json request
// }


import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

const emailTo = import.meta.env.EMAIL;
const emailToPass = import.meta.env.PASS;
const host = import.meta.env.HOST;

export const post: APIRoute = async ({ request }) => {
  if (request.headers.get('Content-Type') === 'application/json') {
    try {
      const formData = await request.json();
      const name = formData.name;
      const surname = formData.surname;
      const email = formData.email;
      const tel = formData.tel;
      const subject = formData.subject;
      const message = `${formData.message}
      ---------------------------------------------------------------------- 
      From: ${name} ${surname} • email: ${email} • tel: ${tel}
      `;

      const html = `<div style="margin: 20px auto;font-family: Helvetica, Verdana, sans-serif">${message.replace(
        /[\r\n]/g,
        '<br>'
      )}</div>`;

      // sendmail
      let mailTransporter = nodemailer.createTransport({
        host,
        port: 465,
        secure: false,
        auth: {
          user: emailTo,
          pass: emailToPass,
        },
      });

      let mailDetails = {
        from: email,
        to: emailTo,
        subject: `${new URL(request.url).hostname}: ${subject}`,
        text: message,
        html,
      };

      // Usar await y manejar el error en el bloque try-catch
      let mailresult = await mailTransporter.sendMail(mailDetails);
      console.log('Message sent: %s', mailresult.messageId);

      // return endpoint response
      return new Response(JSON.stringify(mailDetails), {
        status: 200,
      });
    } catch (error) {
      console.log('******* Error: ', error); // Manejo de errores
      return new Response(JSON.stringify({ error: 'Error sending mail' }), { status: 500 });
    }
  }
  return new Response(null, { status: 400 }); // if not a json request
};
