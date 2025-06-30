import React from "react";

const WorkExperience = ({ darkMode, dayMode, nightMode }) => {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "NorthStar Technologies International LTD.",
      duration: "Feb 2025 - Jun 2025",
      responsibilities: [
        "Developing and optimizing user interfaces using React and Tailwind CSS.",
        "Collaborating with backend developers to integrate APIs.",
        "Enhancing UI/UX to improve accessibility and responsiveness.",
      ],
    },
  ];

  return (
    <section
      id="work-experience"
      className="scroll-mt-15 py-15 md:px-14 sm:px-14 px-5 flex flex-col justify-center items-center"
      style={{ background: darkMode ? nightMode : dayMode }}
    >
      <div
        className={`${
          darkMode ? "bg-gray-800/[0.6] text-gray-300" : "bg-gray-100/[0.4]"
        } p-5 rounded-sm shadow-md max-w-7xl mx-auto w-full`}
      >
        <h2
          className={`text-3xl font-bold mb-8 ${
            darkMode ? "text-white" : "text-black/[0.7]"
          }`}
        >
          Work Experience
        </h2>
        <div className="flex justify-between w-full flex-wrap gap-5">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`flex-1 min-w-[250px] p-5 rounded-sm w-fit md:max-w-[720px] shadow-md mb-6 ${
                darkMode
                  ? "bg-gray-800/[0.6] text-gray-300"
                  : "bg-gray-100/[0.9]"
              }`}
            >
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-sm text-gray-500">
                {exp.company} | {exp.duration}
              </p>
              <ul className="mt-2 list-disc pl-4">
                {exp.responsibilities.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
