import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HomeProvider } from "./components/contexts/HomeContext.jsx";
import { SkillProvider } from "./components/contexts/SkillContext.jsx";
import { ProjectProvider } from "./components/contexts/ProjectContext.jsx";
import { EducationProvider } from "./components/contexts/EducationContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HomeProvider>
      <SkillProvider>
        <ProjectProvider>
          <EducationProvider>
            <App />
          </EducationProvider>
        </ProjectProvider>
      </SkillProvider>
    </HomeProvider>
  </StrictMode>
);
