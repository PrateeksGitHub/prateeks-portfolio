import { NextResponse } from "next/server";

export const runtime = "edge";
export const dynamic = "force-dynamic";

const RESEND_API_KEY = process.env.RESEND_API_KEY;

export async function POST(request) {
  try {
    console.log(request.body);
    const requestData = await request.json(); // Await the JSON data
    const { name, email, phone, message } = requestData;
    const confirmationEmailBody = `Thanks for getting in touch! I've received your message and will respond shortly.\nFollowing is your form submission summary:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    console.log(
      `Sending email from ${process.env.SENDER_EMAIL_ID} to ${email} and ${process.env.MY_EMAIL_ID} using API Key ${RESEND_API_KEY}.`
    );
    const confirmationEmailResponse = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: `Prateek <${process.env.SENDER_EMAIL_ID}>`,
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
        }),
      }
    );

    if (confirmationEmailResponse.ok) {
      const data = await confirmationEmailResponse.json();
      console.log(data);
      return NextResponse.json(data);
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}
