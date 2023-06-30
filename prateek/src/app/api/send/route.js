import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    console.log(request.body);
    const requestData = await request.json(); // Await the JSON data
    const { name, email, phone, message } = requestData;
    const confirmationEmailBody = `Thanks for getting in touch! I've received your message and will respond shortly.\nFollowing is your form submission summary:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    console.log(
      `Sending email from ${process.env.SENDER_EMAIL_ID} to ${email} and ${process.env.MY_EMAIL_ID}`
    );
    const confirmationEmailResponse = await resend.emails.send({
      from: process.env.SENDER_EMAIL_ID,
      to: email,
      bcc: process.env.MY_EMAIL_ID,
      subject: "Thank you for contacting me",
      text: confirmationEmailBody,
      tags: [
        {
          name: "category",
          value: "confirmation",
        },
      ],
    });
    console.log(confirmationEmailResponse);

    return NextResponse.json(confirmationEmailResponse);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}
