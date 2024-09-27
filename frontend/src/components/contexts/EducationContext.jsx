import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const EducationContext = createContext();

export const EducationProvider = ({ children }) => {
  const [educationData, setEducationData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await axios.get(`${apiUrl}/education`);
        setEducationData(response.data);
        setError(false);
      } catch (error) {
        setError(true);
        console.error("Failed to fetch education data", error);
      }
    };
    fetchEducation();
  }, []);

  return (
    <EducationContext.Provider value={{ educationData, error }}>
      {children}
    </EducationContext.Provider>
  );
};
