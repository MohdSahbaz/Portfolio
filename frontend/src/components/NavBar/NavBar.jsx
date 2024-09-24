import { Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      {/* Navigation Menu */}
      <div className="bg-gradient-to-tl from-slate-950 to-slate-800 text-white px-6 py-2 flex justify-between items-center shadow-lg">
        <ul className="flex gap-10">
          <li>
            <a
              href=""
              className="hover:text-gray-300 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-gray-300 transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-gray-300 transition-colors duration-300"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-gray-300 transition-colors duration-300"
            >
              Portfolio
            </a>
          </li>
        </ul>

        {/* GitHub Button */}
        <a
          href="https://github.com/MohdSahbaz"
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
