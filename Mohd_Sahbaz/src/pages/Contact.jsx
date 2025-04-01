import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = ({ darkMode, dayMode, nightMode }) => {
  const formRef = useRef();
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    setSending(true);
    e.preventDefault();
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setMessage("Message sent successfully!");
          // Ensuring form reset
          if (formRef.current) {
            formRef.current.reset(); // Clears the input fields
          }
          setSending(false);
        },
        (error) => {
          setMessage("Failed to send message.");
          setSending(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center py-16 px-5"
      style={{ background: darkMode ? nightMode : dayMode }}
    >
      <h1
        className={`text-4xl font-bold mb-8 ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        Contact Me
      </h1>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="bg-white p-8 rounded-xl shadow-lg w-full md:w-1/2 space-y-6"
      >
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
            required
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
            required
          />
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
            rows="4"
            required
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            disabled={sending}
            className={`w-full py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300}`}
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
        </div>

        {message && (
          <div
            className={`mt-4 text-center font-semibold ${
              message.includes("success") ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </div>
        )}
      </form>
    </section>
  );
};

export default Contact;
