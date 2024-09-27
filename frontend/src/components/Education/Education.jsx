import React, { useContext } from "react";
import { EducationContext } from "../contexts/EducationContext";

const Education = () => {
  const { educationData } = useContext(EducationContext);

  return (
    <>
      <div
        className="w-full md:px-28 md:pt-10 md:pb-5 px-5 py-2 text-white flex flex-col items-center"
        style={{
          minHeight: "calc(100vh - 47.8px)",
          background: "linear-gradient(to right, #001F3F, #002f4f, #3A6D8C)",
        }}
      >
        {educationData.length > 0 ? (
          <div className="space-y-8 w-full text-lg">
            <h1 className="md:text-3xl text-2xl font-bold mb-8">EDUCATION</h1>
            {educationData.map((education) => (
              <div
                key={education._id}
                className="group p-6 bg-gray-800 rounded-lg shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-2 group-hover:text-yellow-400">
                  {education.degree}
                </h2>
                <p className="italic mb-4">{education.university}</p>
                <ul className="list-disc list-inside text-white group-hover:text-gray-100">
                  {education.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
                {education.completionYear && (
                  <p className="mt-4">
                    Year of Completion: {education.completionYear}
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <h1 className="font-bold text-center text-yellow-400 bg-gray-800 p-4 rounded-lg shadow-md">
            We are working on adding education details. Please check back later!
          </h1>
        )}
      </div>
    </>
  );
};

export default Education;
