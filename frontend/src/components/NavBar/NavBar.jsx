import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle

  return (
    <>
      {/* Navigation Menu */}
      <div className="bg-gradient-to-tr from-slate-950 to-slate-800 text-white px-6 py-2 flex justify-between items-center shadow-md shadow-white">
        {/* GitHub Button (Visible on small screens) */}
        <a
          href="https://github.com/MohdSahbaz"
          rel="noopener noreferrer"
          target="_blank"
          className="md:hidden block bg-gray-700 hover:text-yellow-500 text-white font-semibold py-1 px-4 rounded transition duration-300 ease-in-out shadow-md hover:shadow-lg"
        >
          Hire me
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:gap-10 gap-5">
          <li
            onClick={() => navigate("/")}
            className="hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => navigate("/about")}
            className="hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
          >
            About
          </li>
          <li
            onClick={() => navigate("/skills")}
            className="hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
          >
            Skills
          </li>
          <li
            onClick={() => navigate("/projects")}
            className="hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
          >
            Projects
          </li>
          <li
            onClick={() => navigate("/education")}
            className="hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
          >
            Education
          </li>
          <li
            onClick={() => navigate("/contact")}
            className="hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
          >
            Contact
          </li>
        </ul>

        {/* GitHub Button (Visible on larger screens) */}
        <a
          href="mailto:your-email@example.com?subject=Job Opportunity for MERN Stack Developer"
          rel="noopener noreferrer"
          target="_blank"
          className="hidden md:block bg-gray-700 hover:text-yellow-500 text-white font-semibold py-1 px-4 rounded transition duration-300 ease-in-out shadow-md hover:shadow-lg"
        >
          Hire me
        </a>

        {/* Hamburger Icon for mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible on small screens) */}
      <div
        className={`md:hidden bg-gradient-to-tr from-slate-950 to-slate-800 flex flex-col text-white transition-all duration-300 ease-in-out absolute right-0 px-10 py-4 z-50 ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col">
          <li
            onClick={() => {
              navigate("/");
              setIsOpen(false);
            }}
            className="py-2 hover:bg-gray-700 transition-colors duration-300"
          >
            Home
          </li>
          <li
            onClick={() => {
              navigate("/about");
              setIsOpen(false);
            }}
            className="py-2 hover:bg-gray-700 transition-colors duration-300"
          >
            About
          </li>
          <li
            onClick={() => {
              navigate("/skills");
              setIsOpen(false);
            }}
            className="py-2 hover:bg-gray-700 transition-colors duration-300"
          >
            Skills
          </li>
          <li
            onClick={() => {
              navigate("/projects");
              setIsOpen(false);
            }}
            className="py-2 hover:bg-gray-700 transition-colors duration-300"
          >
            Projects
          </li>
          <li
            onClick={() => {
              navigate("/education");
              setIsOpen(false);
            }}
            className="py-2 hover:bg-gray-700 transition-colors duration-300"
          >
            Education
          </li>
          <li
            onClick={() => {
              navigate("/contact");
              setIsOpen(false);
            }}
            className="py-2 hover:bg-gray-700 transition-colors duration-300"
          >
            Contact
          </li>
        </ul>
      </div>

      <Outlet />
    </>
  );
};

export default NavBar;
