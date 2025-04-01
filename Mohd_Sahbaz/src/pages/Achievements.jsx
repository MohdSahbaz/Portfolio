import React from "react";

const Achievements = ({ darkMode, dayMode, nightMode }) => {
  return (
    <section
      id="achievements"
      className="min-h-[calc(100vh-56px)] scroll-mt-15 pt-16 md:px-14 sm:px-14 px-5 flex flex-col justify-start"
      style={{ background: darkMode ? nightMode : dayMode }}
    >
      <h2>Achievements</h2>
    </section>
  );
};

export default Achievements;
