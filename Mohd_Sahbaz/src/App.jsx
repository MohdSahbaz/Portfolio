import { useEffect, useState } from "react";

import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Projects from "./pages/projects/Projects";
import Skills from "./pages/Skills";
import WorkExperience from "./pages/WorkExperience";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Check the current time and apply mode
  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 6 && currentHour < 18) {
      setDarkMode(false); // Day Mode
    } else {
      setDarkMode(true); // Night Mode
    }
  }, []);

  const nightMode =
    "linear-gradient(-120deg, rgba(30,30,30,1) 50%, rgba(5,143,89,1) 50%, rgba(5,143,89,1) 100%)";
  const dayMode =
    "linear-gradient(-120deg, rgba(249,255,110) 50%, rgba(84,255,188,1) 50%, rgba(84,255,188,1) 100%)";

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home darkMode={darkMode} nightMode={nightMode} dayMode={dayMode} />
      <About darkMode={darkMode} nightMode={nightMode} dayMode={dayMode} />
      <Skills darkMode={darkMode} nightMode={nightMode} dayMode={dayMode} />
      <Projects darkMode={darkMode} nightMode={nightMode} dayMode={dayMode} />
      <WorkExperience
        darkMode={darkMode}
        nightMode={nightMode}
        dayMode={dayMode}
      />
      <Contact darkMode={darkMode} nightMode={nightMode} dayMode={dayMode} />
      <Footer darkMode={darkMode} nightMode={nightMode} dayMode={dayMode} />
    </>
  );
}

export default App;
