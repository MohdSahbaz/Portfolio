import { LiaTeamspeak } from "react-icons/lia";

import { useContext } from "react";

import Loader from "../Loader/Loader";
import { HomeContext } from "../contexts/HomeContext";

const About = () => {
  const { profileInfo } = useContext(HomeContext);

  if (!profileInfo) {
    return <Loader />;
  }

  console.log(profileInfo);

  return (
    <div
      className="w-full md:px-28 md:pt-10 md:pb-5 px-5 py-2 text-white flex flex-col"
      style={{
        minHeight: "calc(100vh - 47.8px)",
        background: "linear-gradient(to right, #001F3F, #002f4f, #3A6D8C)",
      }}
    >
      <h1 className="md:text-3xl text-2xl font-bold">ABOUT</h1>
      <LiaTeamspeak className="text-9xl text-center w-full animate-pulse" />
      <div className="space-y-6 text-lg leading-relaxed ma">
        {profileInfo.about1 && <p>{profileInfo.about1}</p>}
        {profileInfo.about2 && <p>{profileInfo.about2}</p>}
      </div>
    </div>
  );
};

export default About;