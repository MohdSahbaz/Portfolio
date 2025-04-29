import React, { useState } from "react";
import WebProjects from "./WebProjects";
import GameProjects from "./GameProjects";

const Projects = ({ darkMode, dayMode, nightMode }) => {
  const [showProject, setShowProject] = useState("WebProjects");
  return (
    <section
      id="projects"
      className="min-h-[calc(100vh-56px)] scroll-mt-15 pt-16 md:px-14 sm:px-14 px-5 flex flex-col justify-start"
      style={{ background: darkMode ? nightMode : dayMode }}
    >
      <div
        className={`${
          darkMode ? "bg-gray-800/[0.3] text-gray-300" : "bg-gray-100/[0.4]"
        } min-h-[calc(100vh-56px)] mb-5 scroll-mt-15 pt-5 md:px-5 sm:px-14 px-5 flex flex-col justify-start rounded-sm shadow-md`}
      >
        <div>
          <h1
            className={`text-3xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Projects
          </h1>
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setShowProject("WebProjects")}
              className={`w-1/2 rounded-sm px-2 font-semibold py-2 hover:scale-95 transition-all duration-300 cursor-pointer border ${
                darkMode
                  ? `border-emerald-500 ${
                      showProject === "WebProjects"
                        ? "bg-cyan-500 text-black"
                        : "bg-emerald-800 text-white"
                    }`
                  : `text-gray-800 border-emerald-700 ${
                      showProject === "WebProjects"
                        ? "bg-cyan-900 text-white"
                        : "bg-emerald-400"
                    }`
              }`}
            >
              Web Projects
            </button>
            <button
              onClick={() => setShowProject("GameProjects")}
              className={`w-1/2 rounded-sm px-2 font-semibold py-2 hover:scale-95 transition-all duration-300 cursor-pointer border ${
                darkMode
                  ? `border-emerald-500 ${
                      showProject === "GameProjects"
                        ? "bg-cyan-500 text-black"
                        : "bg-emerald-800 text-white"
                    }`
                  : `text-gray-800 border-emerald-700 ${
                      showProject === "GameProjects"
                        ? "bg-cyan-900 text-white"
                        : "bg-emerald-400"
                    }`
              }`}
            >
              Game Projects
            </button>
          </div>
        </div>
        {showProject == "WebProjects" ? (
          <WebProjects
            darkMode={darkMode}
            nightMode={nightMode}
            dayMode={dayMode}
          />
        ) : (
          <GameProjects
            darkMode={darkMode}
            nightMode={nightMode}
            dayMode={dayMode}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
