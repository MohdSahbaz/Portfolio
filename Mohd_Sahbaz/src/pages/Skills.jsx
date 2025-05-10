import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPostman,
  SiGodotengine,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = ({ darkMode, dayMode, nightMode }) => {
  const skills = {
    Frontend: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400" />,
      },
    ],
    Backend: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
    ],
    Database: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
    ],
    Tools: [
      { name: "Git", icon: <FaGit className="text-red-600" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      {
        name: "VS Code",
        icon: <VscVscode className="text-blue-500" />,
      },
    ],
    "Game Development": [
      {
        name: "Godot Engine",
        icon: <SiGodotengine className="text-blue-600" />,
      },
      {
        name: "GDScript",
        icon: <SiGodotengine className="text-gray-700" />,
      },
    ],
  };

  return (
    <div
      id="skills"
      className="min-h-[calc(100vh-56px)] scroll-mt-15 pt-16 md:px-14 sm:px-14 px-5 flex flex-col justify-start"
      style={{
        background: darkMode ? nightMode : dayMode,
      }}
    >
      <div
        className={`${
          darkMode ? "bg-gray-800/[0.6] text-gray-300" : "bg-gray-100/[0.9]"
        } p-5 rounded-sm shadow-md mb-5`}
      >
        <h1
          className={`text-3xl font-bold ${
            darkMode ? "text-white" : "text-black/[0.7]"
          } mb-4`}
        >
          Skills
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className={`${
                darkMode
                  ? "bg-gray-800/[0.6] text-gray-300"
                  : "bg-gray-100/[0.9]"
              } p-5 rounded-sm shadow-md`}
            >
              <h2 className="text-xl font-semibold mb-3">{category}</h2>
              <ul className="grid grid-cols-2 gap-3">
                {items.map(({ name, icon }) => (
                  <li key={name} className="flex items-center space-x-2">
                    {icon}
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
