import React from "react";

const aboutDetails = {
  name: "I am Mohd Sahbaz",
  title: "Full Stack Developer | MERN Stack Enthusiast",
  shortIntro:
    "Passionate about crafting scalable and efficient web applications.",
  descriptionOne:
    "I am a dedicated Full Stack Developer specializing in the MERN stack (MongoDB, Express, React, Node.js). I enjoy building high-performance, user-friendly applications that solve real-world problems.",
  resumeLink: "Mohd-Sahbaz-Resume.pdf",
};

const About = ({ darkMode, dayMode, nightMode }) => {
  return (
    <section
      id="about"
      className="min-h-[calc(100vh-56px)] scroll-mt-15 pt-16 md:px-14 sm:px-14 px-5 flex flex-col justify-center items-end"
      style={{
        background: darkMode ? nightMode : dayMode,
      }}
    >
      <div
        className={`${
          darkMode ? "bg-gray-800/[0.6] text-gray-300" : "bg-gray-100/[0.9]"
        } p-5 rounded-sm w-fit md:max-w-[720px] shadow-md mb-5`}
      >
        <div
          className={`${
            darkMode ? "bg-gray-800/[0.6]" : "bg-white/[0.3]"
          } p-5 rounded-sm shadow-md`}
        >
          <h1
            className={`text-3xl font-bold ${
              darkMode ? "text-white" : "text-black/[0.7]"
            }`}
          >
            About Me
          </h1>
          <h1
            className={`text-2xl font-bold ${
              darkMode ? "text-yellow-500" : "text-[#003e21]"
            }`}
          >
            {aboutDetails.name}
          </h1>
          <p className={`mb-2 text-lg font-semibold`}>
            {aboutDetails.shortIntro}
          </p>
          <p className={`mb-5 text-lg font-semibold`}>
            {aboutDetails.descriptionOne}
          </p>
          <a
            href={aboutDetails.resumeLink}
            target="blank_"
            className={`py-2 px-4 rounded-sm border-2 outline-none font-semibold transition-all duration-300 ${
              darkMode
                ? "bg-yellow-500 text-white border-cyan-800 hover:bg-yellow-800"
                : "bg-green-300 text-black border-yellow-700 hover:bg-green-400"
            }`}
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
