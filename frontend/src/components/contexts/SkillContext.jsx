import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const SkillContext = createContext();

export const SkillProvider = ({ children }) => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchSkills = async () => {
    try {
      const response = await axios.get(`${apiUrl}/skills`);
      setSkills(response.data);
      setError(false);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.error("Error fetching skills:", error);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <SkillContext.Provider value={{ skills, error, loading }}>
      {children}
    </SkillContext.Provider>
  );
};
