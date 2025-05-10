import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projectsData = [
  {
    name: "The Four Pieces",
    description:
      "A fast-paced time challenge where players must collect all four pieces before the clock runs out. Strategy and speed are key!",
    techStack: ["Godot Engine", "GDScript"],
    liveLink: "https://gamejolt.com/games/the_four_pieces_I/989741",
    repoLink: "https://github.com/MohdSahbaz/The-Four-Pieces",
  },
  {
    name: "Flappy Horror",
    description:
      "A spooky 2D mobile game inspired by Flappy Bird — but with a terrifying twist. You control a floating ghost navigating through a haunted world filled with deadly bones and eerie shadows, all while collecting glowing souls.",
    techStack: ["Godot Engine", "GDScript"],
    liveLink: "https://gamejolt.com/games/flappyhorror/992320",
    repoLink: "https://github.com/MohdSahbaz/Flappy-Horror",
  },
];

const GameProjects = ({ darkMode, dayMode, nightMode }) => {
  return (
    <section>
      <div>
        <h1
          className={`text-3xl font-bold mb-8 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Game Projects
        </h1>
        <div className="grid md:grid-cols-2 gap-6 mb-5">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`p-6 rounded-sm shadow-lg transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800/[0.9] text-gray-300"
                  : "bg-gray-100/[0.8] text-gray-800"
              }`}
            >
              <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
              <p className="mb-4">{project.description}</p>
              <div className="flex gap-2 flex-wrap mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-2 py-1 text-sm rounded ${
                      darkMode
                        ? "bg-green-600 text-white"
                        : "bg-green-200 text-green-800"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="blank_"
                    className="text-blue-500 flex items-center space-x-1 hover:underline"
                  >
                    <FaExternalLinkAlt /> <span>Live Demo</span>
                  </a>
                )}
                <a
                  href={project.repoLink}
                  target="blank_"
                  className={`${
                    darkMode ? "text-gray-300" : "text-black"
                  } flex items-center space-x-1 hover:underline`}
                >
                  <FaGithub /> <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameProjects;
