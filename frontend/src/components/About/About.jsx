import { useContext } from "react";
import Loader from "../Loader/Loader";
import { HomeContext } from "../contexts/HomeContext";

// Import the icons
import { IoLocationOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlinePhone, MdOutlineEmail } from "react-icons/md";

const About = () => {
  const { profileInfo, proError } = useContext(HomeContext);

  if (!profileInfo && !proError) {
    return <Loader />;
  }

  if (proError) {
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
      {profileInfo !== 0 ? (
        <>
          <h1 className="md:text-3xl text-2xl font-bold mb-6">ABOUT ME</h1>

          {/* About Section */}
          <div className="space-y-6 text-lg leading-relaxed bg-gray-800 rounded-lg shadow-lg p-6">
            {/* Name Section */}
            <h1 className="text-xl md:text-2xl font-semibold mb-4 text-yellow-500">
              I am {profileInfo.name || "Your Name"}
            </h1>
            {profileInfo.about1 && <p>{profileInfo.about1}</p>}
            {profileInfo.about2 && <p>{profileInfo.about2}</p>}
          </div>

          {/* Personal Information Section */}
          <div className="bg-gray-800/[0.5] p-5 rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center space-y-5 md:space-y-2 mt-6">
            {/* Location */}
            <div className="flex items-center space-x-3">
              <IoLocationOutline className="text-2xl text-yellow-500" />
              <p className="text-lg">
                {profileInfo.location || "Location not available"}
              </p>
            </div>

            {/* Age */}
            <div className="flex items-center space-x-3">
              <FaRegCalendarAlt className="text-2xl text-yellow-500" />
              <p className="text-lg">
                {profileInfo.age
                  ? `${profileInfo.age} years old`
                  : "Age not available"}
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-3">
              <MdOutlinePhone className="text-2xl text-yellow-500" />
              <a
                href={`tel:${profileInfo.phone}`}
                className="text-lg hover:text-yellow-300"
              >
                {profileInfo.phone || "Phone number not available"}
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3">
              <MdOutlineEmail className="text-2xl text-yellow-500" />
              <a
                href={`mailto:${profileInfo.email}`}
                className="text-lg hover:text-yellow-300"
              >
                {profileInfo.email || "Email not available"}
              </a>
            </div>
          </div>
        </>
      ) : (
        <h1 className="font-bold text-center text-yellow-400 bg-gray-800 p-4 rounded-lg shadow-md">
          I am working on adding about details. Please check back later!
        </h1>
      )}
    </div>
  );
};

export default About;
