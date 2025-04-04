import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close menu on link click
  };

  const toggleMenu = () => setIsOpen(!isOpen);

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
      <div className="flex justify-between items-center px-6 md:px-10">
        {/* Logo */}
        <h1
          className={`${
            darkMode ? "text-white" : "text-[#003e21]"
          } text-xl font-bold`}
        >
          Mohd Sahbaz
        </h1>

        <div className="flex gap-4 justify-center items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="font-semibold cursor-pointer flex items-center gap-2"
          >
            {darkMode ? (
              <MdDarkMode
                size={20}
                color="white"
                className="hover:scale-150 transition-all duration-300"
              />
            ) : (
              <MdLightMode
                size={20}
                className="hover:scale-150 transition-all duration-300"
              />
            )}
          </button>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="md:hidden text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <FaTimes className={darkMode ? "text-white" : "text-[#003e21]"} />
            ) : (
              <FaBars className={darkMode ? "text-white" : "text-[#003e21]"} />
            )}
          </button>

          {/* Navigation Links */}
          <ul
            className={`md:flex space-x-6 hidden ${
              darkMode ? "text-white" : "text-[#003e21]"
            }`}
          >
            {[
              "home",
              "about",
              "skills",
              "projects",
              "work-experience",
              "contact",
            ].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="hover:text-gray-600 font-semibold cursor-pointer transition-all duration-300"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul
          className={`md:hidden absolute top-15 right-0 py-5 px-4 flex flex-col items-center space-y-4 transition-all duration-300 ${
            darkMode
              ? "bg-gray-900/[0.9] text-white"
              : "bg-white text-[#003e21]"
          } shadow-md`}
        >
          {[
            "home",
            "about",
            "skills",
            "projects",
            "work-experience",
            "contact",
          ].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className="hover:text-gray-600 font-semibold cursor-pointer transition-all duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
