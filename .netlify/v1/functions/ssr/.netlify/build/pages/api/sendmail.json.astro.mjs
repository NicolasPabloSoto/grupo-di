import { SMTPClient } from 'emailjs';
export { renderers } from '../../renderers.mjs';

const sender = process.env.SENDINBLUE_SENDER || "default@sender.com";
const post = async ({ request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    const formData = await request.json();
    const message = {
      text: formData.message,
      from: sender,
      to: `${formData.name} <${formData.email}>`,
      subject: formData.subject
    };
    try {
      const client = new SMTPClient({
        user: process.env.SENDINBLUE_USER,
        password: process.env.SENDINBLUE_PASS,
        host: "smtp-relay.sendinblue.com",
        ssl: true
      });
      await client.sendAsync(message);
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
      console.error("Error sending email:", error);
      return new Response(JSON.stringify({ error: "Error sending email" }), { status: 500 });
    }
  }
  return new Response(null, { status: 400 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  post
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
