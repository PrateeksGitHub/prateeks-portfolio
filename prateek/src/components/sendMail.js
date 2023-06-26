// "use client";
import { Resend } from "resend";

async function SendEmail({ body }) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  console.log(`RESEND API KEY env: ${RESEND_API_KEY}`);
  const resend = new Resend(RESEND_API_KEY);

  await resend.emails.send({
    from: "contact@prateekagrawal.com",
    to: "prateekagrawalhere@gmail.com",
    subject: "hello world",
    text: { body },
    tags: [
      {
        name: "category",
        value: "confirm_email",
      },
    ],
  });
}

export default SendEmail;
