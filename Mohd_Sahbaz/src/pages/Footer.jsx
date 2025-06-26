import React from "react";

const Footer = ({ darkMode, dayMode, nightMode }) => {
  return (
    <footer
      className={`text-center pt-15`}
      style={{
        background: darkMode ? nightMode : dayMode,
        color: darkMode ? "white" : "black",
      }}
    >
      <div className={`bg-gray-700/[0.5] py-4`}>
        <p>
          &copy; {new Date().getFullYear()} Mohd Sahbaz. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
