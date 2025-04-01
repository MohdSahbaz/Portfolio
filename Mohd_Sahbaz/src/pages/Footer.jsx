import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center p-6">
      <p>&copy; {new Date().getFullYear()} Mohd Sahbaz. All rights reserved.</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a
          href="https://github.com/MohdSahbaz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/Mohd-Sahbaz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          LinkedIn
        </a>
        <a href="mailto:cshabaz188@email.com" className="hover:text-gray-400">
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;
