import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close mobile menu
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const sections = [
    "home",
    "about",
    "skills",
    "projects",
    "work-experience",
    "contact",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const nightMode =
    "linear-gradient(45deg, rgba(30,30,30,1) 50%, rgba(5,143,89,1) 50%, rgba(5,143,89,1) 100%)";
  const dayMode =
    "linear-gradient(45deg, rgba(249,255,110) 50%, rgba(84,255,188,1) 50%, rgba(84,255,188,1) 100%)";

  const renderLinks = (isMobile = false) =>
    sections.map((item) => (
      <li key={item}>
        <button
          onClick={() => scrollToSection(item)}
          className={`relative font-semibold transition-all duration-300 ${
            activeSection === item
              ? darkMode ? "text-cyan-300" : "text-fuchsia-700"
              : darkMode
              ? "text-white"
              : "text-[#003e21]"
          }`}
        >
          <span
            className={`after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100 ${
              activeSection === item ? "after:scale-x-100" : ""
            }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </span>
        </button>
      </li>
    ));

  return (
    <nav
      className="p-4 fixed w-full top-0 shadow-md z-50"
      style={{
        background: darkMode ? nightMode : dayMode,
      }}
    >
      <div className="flex justify-between items-center px-6 md:px-10 max-w-7xl mx-auto">
        {/* Logo */}
        <h1
          className={`${
            darkMode ? "text-white" : "text-[#003e21]"
          } text-xl font-bold`}
        >
          Mohd Sahbaz
        </h1>

        <div className="flex gap-4 justify-center items-center">
          {/* Dark Mode Toggle */}
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

          {/* Desktop Nav */}
          <ul className="md:flex space-x-6 hidden">{renderLinks()}</ul>
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
          {renderLinks(true)}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
