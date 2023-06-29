import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    console.log(request.body);
    // body = await request.body;
    // console.log(body);
    const requestData = await request.json(); // Await the JSON data

    const { name, email, phone, message } = requestData;
    // const toMeEmailBody = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    // const toMeEmailAPIResponse = await resend.emails.send({
    //   from: "contact@prateekagrawal.com",
    //   to: "prateeksworkemail@gmail.com",
    //   subject: "Contact Form Submission on your Portfolio!",
    //   text: toMeEmailBody,
    //   tags: [
    //     {
    //       name: "category",
    //       value: "contact_form",
    //     },
    //   ],
    // });
    // console.log(toMeEmailAPIResponse);

    const confirmationEmailBody = `Thanks for getting in touch! I've received your message and will respond shortly.\nFollowing is your form submission summary:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
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
