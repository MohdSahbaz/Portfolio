import React from "react";

const aboutDetails = {
  name: "I am Mohd Sahbaz",
  title: "Software Developer | MERN & Spring Boot Specialist",
  shortIntro:
    "Driven software developer with a strong foundation in both JavaScript and Java ecosystems.",
  descriptionOne:
    "I am a passionate Software Developer specializing in the MERN stack (MongoDB, Express, React, Node.js) and Spring Boot. I love building clean, modern, and scalable web applications that solve real-world problems. I'm committed to continuous learning and delivering high-quality solutions with a strong focus on performance and usability.",
  resumeLink: "Mohd-Sahbaz-Resume.pdf",
};

const About = ({ darkMode, dayMode, nightMode }) => {
  return (
    <section
      id="about"
      className="scroll-mt-15 py-15 md:px-14 sm:px-14 px-5"
      style={{
        background: darkMode ? nightMode : dayMode,
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center w-full">
        <div
          className={`w-full p-6 sm:p-8 rounded-md shadow-md mb- ${
            darkMode ? "bg-gray-800/[0.6] text-gray-300" : "bg-gray-100/[0.9]"
          }`}
        >
          <h1
            className={`text-3xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-black/[0.7]"
            }`}
          >
            About Me
          </h1>
          <h2
            className={`text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r w-fit ${
              darkMode
                ? "from-yellow-500 to-orange-500"
                : "from-teal-500 to-cyan-600"
            }`}
          >
            {aboutDetails.name}
          </h2>
          <h3
            className={`text-lg font-semibold mb-4 ${
              darkMode ? "text-emerald-400" : "text-emerald-700"
            }`}
          >
            {aboutDetails.title}
          </h3>
          <p className="mb-3 text-lg font-medium">{aboutDetails.shortIntro}</p>
          <p className="mb-6 text-base font-normal">
            {aboutDetails.descriptionOne}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
