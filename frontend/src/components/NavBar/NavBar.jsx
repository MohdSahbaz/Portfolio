import { Outlet, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Navigation Menu */}
      <div className="bg-gradient-to-tl from-slate-950 to-slate-800 text-white px-6 py-2 flex justify-between items-center shadow-lg">
        <ul className="flex gap-10">
          <li
            onClick={() => navigate("/")}
            className="hover:text-gray-300 transition-colors duration-300 cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => navigate("/about")}
            className="hover:text-gray-300 transition-colors duration-300 cursor-pointer"
          >
            About
          </li>
          <li
            onClick={() => navigate("/resume")}
            className="hover:text-gray-300 transition-colors duration-300 cursor-pointer"
          >
            Resume
          </li>
          <li
            onClick={() => navigate("/portfolio")}
            className="hover:text-gray-300 transition-colors duration-300 cursor-pointer"
          >
            Portfolio
          </li>
        </ul>

        {/* GitHub Button */}
        <a
          href="https://github.com/MohdSahbaz"
          rel="noopener noreferrer"
          target="_blank"
          className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-1 px-4 rounded-full transition duration-300 ease-in-out shadow-md hover:shadow-lg"
        >
          GitHub
        </a>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
