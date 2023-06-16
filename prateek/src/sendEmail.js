import nodemailer from "nodemailer";

export default async function sendEmail({
  senderEmail,
  receiverEmails,
  subject,
  body,
}) {
  try {
    // Create a transporter using the Gmail SMTP service and your Google App password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: senderEmail,
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });

    // Define the email options
    const mailOptions = {
      from: senderEmail,
      to: receiverEmails,
      subject: subject,
      text: body,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

// const name = "Prateek Agrawal";
// const email = "john.doe@example.com";
// const phone = "+1-123-456-7890";
// const message = "Hello, this is a test message.";
// // `
// //         Name: ${name}
// //         Email: ${email}
// //         Phone: ${phone}
// //         Message: ${message}
// //       `
// sendEmail({
//   senderEmail: "prateeksworkemail@gmail.com",
//   receiverEmails: "prateekagrawalhere@gmail.com",
//   subject: "test",
//   body: "test body",
// });
