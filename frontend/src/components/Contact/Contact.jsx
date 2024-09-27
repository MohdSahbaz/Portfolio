import React, { useState } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [submitStaus, setSubmitStatus] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(true);
    try {
      const response = await axios.post(`${apiUrl}/contact`, formData);
      if (response.status === 200) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
      setSubmitStatus(false);
    } catch (error) {
      setSubmitStatus(false);
      setStatus("Failed to send the message. Please try again later.");
    }
  };

  return (
    <div
      className="w-full md:px-28 md:pt-10 md:pb-5 px-5 py-2 text-white flex flex-col items-center"
      style={{
        minHeight: "calc(100vh - 47.8px)",
        background: "linear-gradient(to right, #001F3F, #002f4f, #3A6D8C)",
      }}
    >
      <div className="space-y-8 w-full text-lg">
        <h1 className="md:text-3xl text-2xl font-bold mb-8">CONTACT</h1>
        <div className="group p-6 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 group-hover:text-yellow-400">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 font-semibold text-lg">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-semibold text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2 font-semibold text-lg">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                className="p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-yellow-400 hover:bg-yellow-600 text-black font-semibold rounded-lg shadow-md transition-all duration-300"
            >
              {submitStaus ? "Sending.." : "Send Message"}
            </button>
          </form>
          {status && (
            <p className="mt-4 text-center text-yellow-400">{status}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
