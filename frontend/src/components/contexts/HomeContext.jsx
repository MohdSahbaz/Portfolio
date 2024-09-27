import axios from "axios";
import { createContext, useState, useEffect } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

const HomeContext = createContext();

const HomeProvider = ({ children }) => {
  const [profileInfo, setProfileInfo] = useState(null);
  const [error, setError] = useState(null);
  const [proError, setProError] = useState(null);

  const getProfileInfo = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/profile`);
      setProfileInfo(data);
    } catch (error) {
      setProError("Error while fetching home info");
      console.log("Error while fetching home info: " + error.message);
    }
  };

  const handleLoveCount = async (name, email) => {
    setError(null);
    if (!name || !email) {
      setError("Name and Email are required");
      return;
    }
    try {
      await axios.post(`${apiUrl}/setlovecount`, {
        name,
        email,
      });
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getProfileInfo();
    };
    fetchData();
  }, []);

  return (
    <HomeContext.Provider
      value={{ error, profileInfo, handleLoveCount, proError }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export { HomeContext, HomeProvider };
