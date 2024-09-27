import { useContext } from "react";
import { SkillContext } from "../contexts/SkillContext";

const Skills = () => {
  const { skills } = useContext(SkillContext);

  return (
    <div
      className="w-full md:px-28 md:pt-10 md:pb-5 px-5 py-2 text-white flex flex-col"
      style={{
        minHeight: "calc(100vh - 47.8px)",
        background: "linear-gradient(to right, #001F3F, #002f4f, #3A6D8C)",
      }}
    >
      <h1 className="md:text-3xl text-2xl font-bold mb-8 ">SKILLS</h1>

      {/* Group skills by category */}
      {["Front-End", "Back-End", "Tools"].map((category) => (
        <div
          className="mb-6 bg-gray-800 rounded-lg shadow-lg p-6 group"
          key={category}
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-4 group-hover:text-yellow-400">
            {category}
          </h2>
          <div className="flex flex-wrap gap-6">
            {skills
              .filter((skill) => skill.category === category) // Filter skills by category
              .map((skill) => (
                <div
                  key={skill.name}
                  className="w-28 md:w-32 h-28 md:h-36 flex flex-col items-center justify-center bg-gray-700/[0.5] rounded-lg p-3 shadow-md"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-16 h-16 md:w-20 md:h-20"
                  />
                  <p
                    className={`mt-2 text-center text-sm md:text-base font-semibold ${skill.color}`}
                  >
                    {skill.name}
                  </p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
