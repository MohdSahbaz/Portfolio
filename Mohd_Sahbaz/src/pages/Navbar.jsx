import React from "react";

const Navbar = ({ darkMode }) => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const nightMode =
    "linear-gradient(45deg, rgba(30,30,30,1) 50%, rgba(5,143,89,1) 50%, rgba(5,143,89,1) 100%)";
  const dayMode =
    "linear-gradient(45deg, rgba(249,255,110) 50%, rgba(84,255,188,1) 50%, rgba(84,255,188,1) 100%)";

  return (
    <nav
      className="p-4 fixed w-full top-0 shadow-md z-50"
      style={{
        background: darkMode ? nightMode : dayMode,
      }}
    >
      <div className="flex justify-between items-center px-10">
        <h1
          className={`${
            darkMode ? "text-white" : "text-[#003e21]"
          } text-xl font-bold`}
        >
          Mohd Sahbaz
        </h1>
        <ul className="flex space-x-6">
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className={`${
                darkMode ? "text-white" : "text-[#003e21]"
              } hover:text-gray-600 font-semibold cursor-pointer transition-all duration-300`}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className={`${
                darkMode ? "text-white" : "text-[#003e21]"
              } hover:text-gray-600 font-semibold cursor-pointer transition-all duration-300`}
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("skills")}
              className={`${
                darkMode ? "text-white" : "text-[#003e21]"
              } hover:text-gray-600 font-semibold cursor-pointer transition-all duration-300`}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("projects")}
              className={`${
                darkMode ? "text-white" : "text-[#003e21]"
              } hover:text-gray-600 font-semibold cursor-pointer transition-all duration-300`}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("work-experience")}
              className={`${
                darkMode ? "text-white" : "text-[#003e21]"
              } hover:text-gray-600 font-semibold cursor-pointer transition-all duration-300`}
            >
              Work Experience
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className={`${
                darkMode ? "text-white" : "text-[#003e21]"
              } hover:text-gray-600 font-semibold cursor-pointer transition-all duration-300`}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
