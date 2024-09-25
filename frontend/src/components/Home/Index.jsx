import { FaInstagram } from "react-icons/fa6";
import { FiYoutube, FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";

import { useContext, useState } from "react";

import Loader from "../Loader/Loader";
import { HomeContext } from "../contexts/HomeContext";

const Index = () => {
  const { profileInfo, error, handleLoveCount } = useContext(HomeContext);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!profileInfo) {
    return <Loader />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLoveCount(name, email);
    if (!error) {
      setShowForm(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('/IndexBg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        minHeight: "calc(100vh - 47.8px)",
      }}
    >
      <div
        className="w-full bg-gray-950/[0.5] px-28 py-32 text-white"
        style={{
          minHeight: "calc(100vh - 47.8px)",
        }}
      >
        <h1 className="text-4xl font-bold animate-bounce">
          {profileInfo.name}
        </h1>
        <p className="animate-pulse mb-7">{profileInfo.title}</p>
        <a
          href={profileInfo.resumeLink}
          className="border px-6 py-2 rounded-md font-bold hover:bg-white/[0.5] transition-colors duration-300"
        >
          Resume
        </a>

        {/* Social Icons */}
        {profileInfo.socialLinks && (
          <div className="absolute left-8 bottom-8 flex md:flex-row md:space-x-4 md:space-y-0 space-y-2 items-center flex-col justify-center">
            <a
              href={profileInfo.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl cursor-pointer hover:scale-110 transition-transform" />
            </a>
            <a
              href={profileInfo.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiYoutube className="text-2xl cursor-pointer hover:scale-110 transition-transform" />
            </a>
            <a
              href={profileInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiLinkedin className="text-2xl cursor-pointer hover:scale-110 transition-transform" />
            </a>
            <a
              href={profileInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub className="text-2xl cursor-pointer hover:scale-110 transition-transform" />
            </a>
          </div>
        )}

        {/* Love Count */}
        <div className="absolute right-8 bottom-8 text-center">
          <p className="text-lg">Tap to Appreciate</p>
          <div className="flex justify-center items-center gap-2 mt-2">
            <b className="text-2xl">{profileInfo.loveCount}</b>
            <GiSelfLove
              className="cursor-pointer text-5xl hover:scale-110 transition-transform"
              onClick={() => setShowForm(true)}
            />
          </div>
        </div>

        {/* Love Form */}
        {showForm && (
          <div className="absolute right-8 bottom-20 p-4 rounded-md border border-white bg-black">
            <h3 className="text-lg font-bold">Please fill details</h3>
            <form onSubmit={handleSubmit}>
              <div className="my-2">
                <label>Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoFocus
                  className="border rounded-md px-2 py-1 bg-transparent caret-green-400 text-white w-full outline-none"
                  required
                />
              </div>
              <div className="my-2">
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border rounded-md px-2 py-1 bg-transparent caret-green-400 text-white w-full outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 px-2 py-1 rounded-md hover:bg-blue-600 transition-all duration-300"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="ml-2 bg-red-500 px-2 py-1 rounded hover:bg-red-600 transition-all duration-300"
              >
                Cancel
              </button>
              {error && <h1 className="text-red-500">{error}</h1>}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
