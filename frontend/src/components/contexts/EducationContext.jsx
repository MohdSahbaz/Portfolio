import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const EducationContext = createContext();

export const EducationProvider = ({ children }) => {
  const [educationData, setEducationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await axios.get(`${apiUrl}/education`);
        setEducationData(response.data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchEducation();
  }, []);

  return (
    <EducationContext.Provider value={{ educationData, error, loading }}>
      {children}
    </EducationContext.Provider>
  );
};
