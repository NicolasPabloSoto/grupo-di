import type { APIRoute } from 'astro'; // Usamos 'import type' para los tipos
import { SMTPClient } from 'emailjs';

const sender: string = process.env.SENDINBLUE_SENDER || 'default@sender.com';

export const post: APIRoute = async ({ request }: { request: Request }) => {
  if (request.headers.get('Content-Type') === 'application/json') {
    const formData = await request.json();
    const message = {
      text: formData.message as string,
      from: sender,
      to: `${formData.name} <${formData.email}>`,
      subject: formData.subject as string,
    };

    try {
      const client = new SMTPClient({
        user: process.env.SENDINBLUE_USER as string,
        password: process.env.SENDINBLUE_PASS as string,
        host: 'smtp-relay.sendinblue.com',
        ssl: true,
      });

      await client.sendAsync(message);
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
      console.error('Error sending email:', error);
      return new Response(JSON.stringify({ error: 'Error sending email' }), { status: 500 });
    }
  }

  return new Response(null, { status: 400 });
};
