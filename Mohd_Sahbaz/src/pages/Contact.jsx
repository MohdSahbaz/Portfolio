import { useEffect, useRef, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = ({ darkMode, dayMode, nightMode }) => {
  const formRef = useRef();
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

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
    <div
      id="contact"
      className="min-h-[calc(100vh-56px)] scroll-mt-15 pt-16 md:px-14 sm:px-14 px-5 flex flex-col items-center justify-center"
      style={{
        background: darkMode ? nightMode : dayMode,
      }}
    >
      <div
        className={`${
          darkMode ? "bg-gray-800/[0.6] text-gray-300" : "bg-gray-100/[0.9]"
        } p-5 rounded-sm shadow-md mb-5`}
      >
        <div className="max-w-4xl w-full bg-white/[0.5]  text-gray-900 p-6 rounded-sm shadow-lg">
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold text-emerald-800 flex items-center">
                Get in Touch
              </h2>
              <p className="text-gray-600 mt-2">
                Feel free to reach out through social media, phone or email!
              </p>
              <div className="mt-4 space-y-3">
                <a
                  href="https://www.google.com/maps?q=Mumbai,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center w-fit text-gray-700 hover:text-emerald-900 transition"
                >
                  <FaMapMarkerAlt className="text-emerald-700 mr-2" /> Mumbai,
                  India
                </a>

                <a
                  href="tel:9136307464"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 w-fit"
                >
                  <FaPhone className="text-emerald-700 mr-2" /> +913 630 7464
                </a>
                <a
                  href="mailto:cshabaz188@gmail.com"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 w-fit"
                >
                  <FaEnvelope className="text-emerald-700 mr-2" />{" "}
                  cshabaz188@gmail.com
                </a>
              </div>

              {/* Social Media */}
              <div className="mt-4 flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/mohd-sahbaz-chaudhary/"
                  target="blank_"
                  className="text-emerald-700 hover:text-emerald-900"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://github.com/MohdSahbaz"
                  target="blank_"
                  className="text-emerald-700 hover:text-emerald-900"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.instagram.com/_sahbaz/"
                  target="blank_"
                  className="text-emerald-700 hover:text-emerald-900"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="flex flex-col space-y-4"
            >
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="border border-gray-300 p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                className="border border-gray-300 p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                name="message"
                className="border border-gray-300 p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              ></textarea>
              <button
                type="submit"
                disabled={sending}
                className="bg-emerald-700 text-white py-2 rounded-sm hover:bg-emerald-900 transition"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
              {message && (
                <div
                  className={`text-center font-semibold ${
                    message.includes("success")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
