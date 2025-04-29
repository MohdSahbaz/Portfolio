import React from "react";

const aboutDetails = {
  name: "I am Mohd Sahbaz",
  title: "Software Developer | Specializing in the MERN Stack",
  shortIntro:
    "Passionate about crafting scalable and efficient web applications.",
  descriptionOne:
    "I am a dedicated Software Developer specializing in the MERN stack (MongoDB, Express, React, Node.js). I enjoy building high-performance, user-friendly applications that solve real-world problems.",
  resumeLink: "Mohd_Sahbaz_Resume.pdf",
};

const About = ({ darkMode, dayMode, nightMode }) => {
  return (
    <section
      id="about"
      className="min-h-[calc(100vh-56px)] scroll-mt-15 md:pt-0 pt-15 md:px-14 sm:px-14 px-5 flex items-center"
      style={{
        background: darkMode ? nightMode : dayMode,
      }}
    >
      <div
        className={`w-full p-6 sm:p-8 rounded-md shadow-md mb-5 ${
          darkMode ? "bg-gray-800/[0.6] text-gray-300" : "bg-gray-100/[0.9]"
        }`}
      >
        <div
          className={`p-6 sm:p-8 rounded-md shadow-md ${
            darkMode ? "bg-gray-800/[0.6]" : "bg-white/[0.3]"
          }`}
        >
          <h1
            className={`text-3xl sm:text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-black/[0.7]"
            }`}
          >
            About Me
          </h1>
          <h2
            className={`text-2xl sm:text-3xl font-bold mb-2 ${
              darkMode ? "text-yellow-500" : "text-[#003e21]"
            }`}
          >
            {aboutDetails.name}
          </h2>
          <h3
            className={`text-lg sm:text-xl font-semibold mb-4 ${
              darkMode ? "text-emerald-400" : "text-emerald-700"
            }`}
          >
            {aboutDetails.title}
          </h3>
          <p className="mb-3 text-lg font-medium">{aboutDetails.shortIntro}</p>
          <p className="mb-6 text-base font-normal">
            {aboutDetails.descriptionOne}
          </p>
          <a
            href={aboutDetails.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block py-2 px-6 rounded-md border-2 font-semibold transition duration-300 ${
              darkMode
                ? "bg-emerald-600 text-white border-emerald-400 hover:bg-emerald-700"
                : "bg-emerald-400 text-black border-emerald-600 hover:bg-emerald-500"
            }`}
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
