import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projectsData = [
  {
    name: "Library Management System",
    description:
      "A web-based application for managing library resources, tracking book loans, and user registrations.",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    liveLink: "https://lms-client-uo7q.onrender.com/",
    repoLink: "https://github.com/MohdSahbaz/Library-Management-System-New",
  },
  {
    name: "Quiz Application",
    description:
      "An interactive multi-round quiz application with a leaderboard and scoring system.",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    liveLink: "",
    repoLink: "https://github.com/MohdSahbaz/Quiz",
  },
  {
    name: "Portfolio Website",
    description:
      "A personal portfolio showcasing my skills, projects, and work experience with dark and light mode support.",
    techStack: ["React", "Tailwind CSS"],
    liveLink: "",
    repoLink: "https://github.com/MohdSahbaz/Portfolio_New",
  },
  {
    name: "Video Player Application (80% Done)",
    description:
      "A feature-rich video player with custom controls, playlist management, and responsive design.",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    liveLink: "",
    repoLink: "https://github.com/MohdSahbaz/Video-Player",
  },
  {
    name: "Real-time Group Chat (Text Only)",
    description:
      "A simple real-time text-based group chat application using WebSockets.",
    techStack: ["Node.js", "Express", "Socket.io", "React"],
    liveLink: "https://real-time-chat-jasg.onrender.com/",
    repoLink: "https://github.com/MohdSahbaz/Real-Time-Chat",
  },
];

const Projects = ({ darkMode, dayMode, nightMode }) => {
  return (
    <section
      id="projects"
      className="min-h-[calc(100vh-56px)] scroll-mt-15 pt-16 md:px-14 sm:px-14 px-5 flex flex-col justify-start"
      style={{ background: darkMode ? nightMode : dayMode }}
    >
      <div
        className={`${
          darkMode ? "bg-gray-800/[0.3] text-gray-300" : "bg-gray-100/[0.4]"
        } p-5 rounded-sm shadow-md mb-5`}
      >
        <h1
          className={`text-3xl font-bold mb-8 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Projects
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

export default Projects;
