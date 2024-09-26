import { useContext } from "react";
import Loader from "../Loader/Loader";
import { HomeContext } from "../contexts/HomeContext";

// Import the icons
import { IoLocationOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlinePhone, MdOutlineEmail } from "react-icons/md";

const About = () => {
  const { profileInfo } = useContext(HomeContext);

  if (!profileInfo) {
    return <Loader />;
  }

  return (
    <div
      className="w-full md:px-28 md:pt-10 md:pb-5 px-5 py-2 text-white flex flex-col"
      style={{
        minHeight: "calc(100vh - 47.8px)",
        background: "linear-gradient(to right, #001F3F, #002f4f, #3A6D8C)",
      }}
    >
      <h1 className="md:text-3xl text-2xl font-bold mb-6">ABOUT ME</h1>

      {/* Name Section */}
      <h1 className="text-xl md:text-2xl font-semibold mb-4 text-yellow-500">
        I am {profileInfo.name || "Your Name"}
      </h1>

      {/* About Section */}
      <div className="space-y-6 text-lg leading-relaxed">
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
    </div>
  );
};

export default About;
