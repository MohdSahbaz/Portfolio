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
              target="_blank"
              rel="noopener noreferrer"
              className={`py-2 px-4 rounded-sm sm:w-fit w-full text-center border-2 outline-none font-semibold transition-all duration-300 ${
                darkMode
                  ? "bg-emerald-600 text-white border-emerald-400 hover:bg-emerald-700"
                  : "bg-emerald-400 text-black border-emerald-600 hover:bg-emerald-500"
              }`}
            >
              Resume
            </a>

            <a
              href={`mailto:${introductionDetails.email}`}
              className={`py-2 px-4 rounded-sm sm:w-fit w-full text-center border-2 outline-none font-semibold transition-all duration-300 ${
                darkMode
                  ? "bg-blue-600 text-white border-blue-400 hover:bg-blue-500"
                  : "bg-blue-500 text-white border-blue-600 hover:bg-blue-600"
              }`}
            >
              Hire Me!
            </a>
          </div>
        </div>
        <div>
          <img
            src={introductionDetails.image}
            alt="Mohd Sahbaz"
            className="w-[150px] h-[250px] object-cover rounded-full border-4 border-gray-300 shadow-md m-1"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
