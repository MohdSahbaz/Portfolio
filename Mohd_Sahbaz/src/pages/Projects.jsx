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
    name: "GuideSpire",
    description:
      "A game guide platform featuring walkthroughs, banners, and curated content for popular titles like Wuthering Waves and Genshin Impact, with a modern and responsive UI.",
    techStack: ["React", "Tailwind CSS", "Spring Boot", "MongoDB"],
    liveLink: "https://guide-spire.vercel.app/",
    repoLink: "https://github.com/MohdSahbaz/GuideSpire", // Replace with your actual repo link
  },
  {
    name: "Portfolio Website",
    description:
      "A personal portfolio showcasing my skills, projects, and work experience with dark and light mode support.",
    techStack: ["React", "Tailwind CSS"],
    liveLink: "https://sahbaz.onrender.com/",
    repoLink: "https://github.com/MohdSahbaz/Portfolio_New",
  },
  {
    name: "Video Player Application",
    description:
      "A feature-rich video player with custom controls, playlist management, and responsive design.",
    techStack: ["PostgreSQL", "Express", "React", "Node.js"],
    liveLink: "",
    repoLink: "https://github.com/MohdSahbaz/Video-Player",
  },
];

const Projects = ({ darkMode, dayMode, nightMode }) => {
  return (
    <section
      id="projects"
      className="scroll-mt-15 py-15 md:px-14 sm:px-14 px-5 flex flex-col justify-start"
      style={{ background: darkMode ? nightMode : dayMode }}
    >
      <div
        className={`${
          darkMode ? "bg-gray-800/[0.3] text-gray-300" : "bg-gray-100/[0.4]"
        } scroll-mt-15 pt-5 md:px-5 sm:px-14 px-5 flex flex-col justify-start rounded-sm shadow-md max-w-7xl mx-auto w-full`}
      >
        <h1
          className={`text-3xl font-bold mb-4 ${
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
        <div className="mx-auto text-center py-6">
          <a
            href="https://github.com/MohdSahbaz?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-2 text-white font-medium rounded shadow-lg transition duration-300 ease-in-out
      bg-gradient-to-r
      ${
        darkMode
          ? "from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700"
          : "from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
      }`}
          >
            <FaGithub className="text-lg" />
            View More
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
