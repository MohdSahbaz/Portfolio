import React from "react";

const introductionDetails = {
  name: "Mohd Sahbaz",
  image: "MohdSahbaz.webp",
  role: "Software Developer",
  resume: "Mohd-Sahbaz-Resume.pdf",
  email: "csahbaz188@gmail.com",
};

const Home = ({ darkMode, dayMode, nightMode }) => {
  return (
    <section
      id="home"
      className="min-h-screen md:px-30 sm:px-14 px-5 flex flex-col md:flex-row items-center md:justify-between gap-5 pt-20"
      style={{
        background: darkMode ? nightMode : dayMode,
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center w-full">
        <div
          className={`${
            darkMode ? "bg-gray-50/[0.4]" : "bg-yellow-100/[0.8]"
          } p-10 rounded-sm w-fit md:min-w-[420px] shadow-md`}
        >
          <p
            className={`text-xl md:mb-2 mb-1 font-semibold ${
              darkMode ? "text-white" : "black"
            }`}
          >
            Hello, I am{" "}
          </p>
          <h1
            className={`md:text-4xl text-3xl font-bold animate-bounce ${
              darkMode ? "text-gray-700" : "text-[#003e21]"
            }`}
          >
            {introductionDetails.name}
          </h1>
          <p
            className={`animate-pulse mb-7 ${
              darkMode ? "text-gray-800" : "text-gray-800"
            }`}
          >
            {introductionDetails.role}
          </p>
          <div className="flex flex-wrap justify-start items-center gap-4">
            <a
              href={introductionDetails.resume}
              download
              className="inline-block sm:w-fit w-full text-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-600 rounded shadow hover:shadow-lg hover:from-teal-600 hover:to-cyan-700 transition-all duration-300"
            >
              Resume
            </a>

            <a
              href={`mailto:${introductionDetails.email}`}
              className="inline-block sm:w-fit w-full text-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded shadow-md hover:shadow-lg hover:from-purple-600 hover:to-indigo-700 transition-all duration-300"
            >
              Hire Me!
            </a>
          </div>
        </div>
        <div>
          <img
            src={introductionDetails.image}
            alt="Mohd Sahbaz"
            className="h-[250px] object-cover rounded-full border-4 border-gray-300 shadow-md m-1 grayscale"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
