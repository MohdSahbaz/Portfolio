import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Slider from "react-slick"; // Import Slider from react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel CSS
import { useContext } from "react";

import { ProjectContext } from "../contexts/ProjectContext";
import Loader from "../Loader/Loader";

const Projects = () => {
  const { projects, loading, error } = useContext(ProjectContext);

  // Slider settings for react-slick
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of images to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading) return <Loader />;
  if (error) {
    return (
      <h1
        style={{
          minHeight: "calc(100vh - 47.8px)",
          background: "linear-gradient(to right, #001F3F, #002f4f, #3A6D8C)",
        }}
        className="font-bold text-center text-yellow-400 bg-gray-800 p-4 shadow-md w-full"
      >
        Somthing went wrong
      </h1>
    );
  }

  return (
    <div
      className="w-full md:px-28 md:pt-10 md:pb-5 px-5 py-2 text-white flex flex-col"
      style={{
        minHeight: "calc(100vh - 47.8px)",
        background: "linear-gradient(to right, #001F3F, #002f4f, #3A6D8C)",
      }}
    >
      {!error ? (
        <>
          <h1 className="md:text-3xl text-2xl font-bold mb-8">PROJECTS</h1>

          {/* Slider Section */}
          <div className="mb-10 mx-5 md:mx-0 bg-gray-800 rounded-lg shadow-lg p-2">
            <Slider {...sliderSettings}>
              {projects.map((project, index) => (
                <a
                  key={index}
                  className="px-2"
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* Display project title above the image */}
                  <h3 className="text-center text-lg font-semibold mb-2">
                    {project.title}
                  </h3>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-40 object-cover rounded-lg shadow-lg bg-gray-700 p-2"
                  />
                </a>
              ))}
            </Slider>
          </div>

          <div className="space-y-8 text-lg leading-relaxed">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col space-y-4 group"
              >
                <h2 className="text-2xl font-semibold group-hover:text-yellow-400">
                  {project.title}
                </h2>
                <p className="text-gray-300">{project.description}</p>
                <div className="flex justify-center space-x-4 mt-4">
                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-2" /> Visit Website
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                  >
                    <FaGithub className="mr-2" /> View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <h1 className="font-bold text-center text-yellow-400 bg-gray-800 p-4 rounded-lg shadow-md">
          I am working on adding projects details. Please check back later!
        </h1>
      )}
    </div>
  );
};

export default Projects;
