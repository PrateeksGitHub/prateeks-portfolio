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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      `Sending email from ${process.env.SENDER_EMAIL_ID} to ${email} and ${process.env.MY_EMAIL_ID}.`
=======
      `Sending email from ${process.env.SENDER_EMAIL_ID} to ${email} and ${process.env.MY_EMAIL_ID} using API Key ${RESEND_API_KEY}`
>>>>>>> c068a8b (idek)
=======
      `Sending email from ${process.env.SENDER_EMAIL_ID} to ${email} and ${process.env.MY_EMAIL_ID} using API Key ${RESEND_API_KEY}.`
>>>>>>> 49ef094 (i reallyyy don't know)
=======
      `Sending email from ${process.env.SENDER_EMAIL_ID} to ${email} and ${process.env.MY_EMAIL_ID}.`
>>>>>>> 68eb766 (updated api response)
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

<<<<<<< HEAD
<<<<<<< HEAD
    if (confirmationEmailResponse.ok) {
      console.log("Confirmation email sent successfully.");
      return NextResponse.json({ success: true });
    } else {
      console.log("Failed to send confirmation email.");
      return NextResponse.error("Failed to send confirmation email.", {
        status: 500,
      });
=======
    if (confirmationEmailResponse.status == 200) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false });
>>>>>>> 68eb766 (updated api response)
=======
    if (confirmationEmailResponse.ok) {
      console.log("Confirmation email sent successfully.");
      return NextResponse.json({ success: true });
    } else {
      console.log("Failed to send confirmation email.");
      return NextResponse.error("Failed to send confirmation email.", {
        status: 500,
      });
>>>>>>> c012fe6 (added validation and succes and failure message to the contact me form)
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}
