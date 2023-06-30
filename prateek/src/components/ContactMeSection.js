import React, { useState } from "react";
// import SendEmail from "./sendMail";
import MessageTypingAnimation from "./MessageTypingAnimation";

function ContactMeSection({ className }) {
  const labelConfig = "block m-3 paragraph text-2xl";
  const inputConfig =
    "bg-background block w-full py-3 px-6 paragraph placeholder-gray-400 placeholder-opacity-60 rounded-xl border-2 border-accent border-opacity-80 hover:border-opacity-100 focus:border-opacity-100 focus:ring-1 focus-visible:outline-none focus:ring-opacity-100 transition-transformation ease-in-out duration-300";
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit() {
    // setIsSubmitting(true);

    // Retrieve input field values
    const name = document.getElementById("name-input").value;
    const email = document.getElementById("email-input").value;
    const phone = document.getElementById("phone-input").value;
    const message = document.getElementById("message-input").value;

    // Perform any necessary validation or data processing here
    console.log(name, email, phone, message);

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      });

      console.log(response);

      if (response.ok) {
        // Handle success response
        console.log("Email sent successfully");
      } else {
        // Handle error response
        console.log("Email sending unsuccessful");
      }
    } catch (error) {
      // Handle network or other errors
      console.log({ error });
    } finally {
      // Simulate submission delay
      console.log("Form submitted!");
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className={`flex flex-col justify-center ${className}`}
    >
      <h1 className="heading-1 my-8 pt-8">Contact Me</h1>
      <p id="contact-me-message" className="paragraph mb-16">
        Thank you for visiting my profile! If you have any questions or would
        like to discuss potential opportunities, please feel free to reach out
        to me. I'm available for freelance projects and open to new
        collaborations. 💼
      </p>
      <div id="contact-form">
        <div className="mb-6">
          <label for="name" className={labelConfig}>
            Name*
          </label>
          <input type="text" id="name-input" className={inputConfig}></input>
        </div>
        <div className="mb-6">
          <label for="email" className={labelConfig}>
            Email ID*
          </label>
          <input
            type="email"
            id="email-input"
            placeholder="email@example.com"
            className={`${inputConfig}`}
          ></input>
        </div>
        <div className="mb-6">
          <label for="phone" className={labelConfig}>
            Phone Number
          </label>
          <input
            type="tel"
            id="phone-input"
            placeholder="+91-1234567890"
            className={`${inputConfig}`}
          />
        </div>
        <div className="mb-6">
          <label for="message" className={labelConfig}>
            Message
          </label>
          <textarea
            id="message-input"
            className={`${inputConfig} h-48 resize-none`}
          ></textarea>
        </div>
        <MessageTypingAnimation
          message={isSubmitting ? "Submitting..." : "Contact me"}
          waveDuration={2000}
          typingSpeed={200}
          className="pt-8"
          onClick={handleSubmit}
        ></MessageTypingAnimation>
      </div>
    </section>
  );
}
export default ContactMeSection;