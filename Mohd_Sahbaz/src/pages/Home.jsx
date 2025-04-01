import React from "react";

const introductionDetails = {
  name: "Mohd Sahbaz",
  role: "Full-Stack Developer",
  resume: "link",
};

const Home = ({ darkMode, dayMode, nightMode }) => {
  return (
    <section
      id="home"
      className="min-h-screen pt-16 md:px-14 sm:px-14 px-5 flex flex-col justify-center"
      style={{
        background: darkMode ? nightMode : dayMode,
      }}
    >
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
            className={`py-2 px-4 rounded-sm sm:w-fit w-full text-center border-2 outline-none font-semibold transition-all duration-300 ${
              darkMode
                ? "bg-yellow-500 text-white border-cyan-800 hover:bg-yellow-800"
                : "bg-green-300 text-black border-yellow-700 hover:bg-green-400"
            }`}
          >
            Resume
          </a>
          <a
            href={introductionDetails.resume}
            className={`py-2 px-4 rounded-sm sm:w-fit w-full text-center border-2 outline-none font-semibold transition-all duration-300 ${
              darkMode
                ? "bg-blue-600 text-white border-blue-400 hover:bg-blue-500"
                : "bg-green-400 text-black border-yellow-700 hover:bg-green-500"
            }`}
          >
            Hire Me!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
