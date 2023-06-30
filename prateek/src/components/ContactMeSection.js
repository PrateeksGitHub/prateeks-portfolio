import React, { useState } from "react";
import MessageTypingAnimation from "./MessageTypingAnimation";
import { useForm } from "react-hook-form";
import clsxm from "@/utils/clsxm";

function ContactMeSection({ className }) {
  const labelConfig = "block m-3 text-2xl";
  const inputConfig =
    "bg-background block w-full py-3 px-6 placeholder-gray-400 placeholder-opacity-60 rounded-xl border-2 border-accent border-opacity-80 hover:border-opacity-100 focus:border-opacity-100 focus:ring-1 focus-visible:outline-none focus:ring-opacity-100 transition-transformation ease-in-out duration-300";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    console.log(data);
    // Perform any necessary validation or data processing here
    const { name, email, phone, message } = data;

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
        setSubmissionStatus("success");
      } else {
        // Handle error response
        console.log("Email sending unsuccessful");
        setSubmissionStatus("failure");
      }
      setIsSubmitting(false);
    } catch (error) {
      // Handle network or other errors
      console.log({ error });
      setSubmissionStatus("failure");
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className={`flex flex-col justify-center ${className}`}
    >
      <h1 className="heading-1 my-8 pt-8">Contact Me</h1>
      <p id="contact-me-message" className="mb-16">
        Thank you for visiting my profile! If you have any questions or would
        like to discuss potential opportunities, please feel free to reach out
        to me. I'm available for freelance projects and open to new
        collaborations. 💼
      </p>
<<<<<<< HEAD
      <form onSubmit={handleSubmit(onSubmit)} id="contact-form">
=======
      <form onSubmit={handleSubmit} id="contact-form">
>>>>>>> 5db8aef (minor contact me form fixes)
        <div className="mb-6">
          <label htmlFor="name" className={labelConfig}>
            Name*
          </label>
<<<<<<< HEAD
          <input type="text" {...register("name")} className={inputConfig} />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className={clsxm(labelConfig)}>
=======
          <input
            type="text"
            id="name-input"
            name="name"
            className={inputConfig}
          ></input>
        </div>
        <div className="mb-6">
          <label htmlFor="email" className={labelConfig}>
>>>>>>> 5db8aef (minor contact me form fixes)
            Email ID*
          </label>
          <input
            type="email"
<<<<<<< HEAD
            {...register("email", { required: "Email is required" })}
=======
            id="email-input"
            name="email"
>>>>>>> 5db8aef (minor contact me form fixes)
            placeholder="email@example.com"
            className={`${inputConfig}`}
          ></input>
          {errors.email && (
            <p className="text-red-400 pt-1 font-sans" role="alert">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="phone" className={labelConfig}>
            Phone Number
          </label>
          <input
            type="tel"
<<<<<<< HEAD
            {...register("phone")}
=======
            name="phone"
            id="phone-input"
>>>>>>> 5db8aef (minor contact me form fixes)
            placeholder="+91-1234567890"
            className={`${inputConfig}`}
          />
        </div>
        <div className="mb-6">
<<<<<<< HEAD
          <label
            htmlFor="message"
            className={clsxm(labelConfig, errors.message)}
          >
            Message*
          </label>
          <textarea
            {...register("message", { required: "Type in some message." })}
            className={clsxm(inputConfig, "h-48 resize-none")}
=======
          <label htmlFor="message" className={labelConfig}>
            Message
          </label>
          <textarea
            id="message-input"
            name="message"
            className={`${inputConfig} h-48 resize-none`}
>>>>>>> 5db8aef (minor contact me form fixes)
          ></textarea>
          {errors.message && (
            <p className="text-red-400 pt-1 font-sans" role="alert">
              {errors.message?.message}
            </p>
          )}
        </div>
<<<<<<< HEAD
        {submissionStatus === "success" && (
          <p className="text-green-400 font-sans">Email sent successfully!</p>
        )}
        {submissionStatus === "failure" && (
          <p className="text-red-400 font-sans">
            Email sending unsuccessful. Please try again.
          </p>
        )}

=======
>>>>>>> 5db8aef (minor contact me form fixes)
        <button type="submit" disabled={isSubmitting}>
          <MessageTypingAnimation
            message={isSubmitting ? "Submitting..." : "Contact me"}
            waveDuration={2000}
            typingSpeed={200}
            className="pt-8"
          ></MessageTypingAnimation>
        </button>
      </form>
    </section>
  );
}

export default ContactMeSection;
