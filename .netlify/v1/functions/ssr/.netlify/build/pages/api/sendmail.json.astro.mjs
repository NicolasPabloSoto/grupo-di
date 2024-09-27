import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

const emailTo = "comunidad.grupodi@gmail.com";
const emailToPass = "sjqwihksbqzlwlrd";
const host = "smtp.gmail.com";
const post = async ({ request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
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
      "<br>"
    )}</div>`;
    let mailTransporter = nodemailer.createTransport({
      host,
      port: 587,
      secure: false,
      auth: {
        user: emailTo,
        pass: emailToPass
      }
    });
    let mailDetails = {
      from: email,
      to: emailTo,
      subject: `${new URL(request.url).hostname}: ${subject}`,
      text: message,
      html
    };
    let mailresult;
    try {
      mailresult = await mailTransporter.sendMail(mailDetails);
    } catch (error) {
      console.log("******* Error: ", error);
    }
    console.log("Message sent: %s", mailresult?.messageId);
    return new Response(JSON.stringify(mailDetails), {
      status: 200
    });
  }
  return new Response(null, { status: 400 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  post
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
