import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Index from "./components/Home/Index";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";

// providers
import { HomeProvider } from "./components/contexts/HomeContext.jsx";
import { SkillProvider } from "./components/contexts/SkillContext.jsx";
import { ProjectProvider } from "./components/contexts/ProjectContext.jsx";
import { EducationProvider } from "./components/contexts/EducationContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "",
        element: (
          <HomeProvider>
            <Index />
          </HomeProvider>
        ),
      },
      {
        path: "about",
        element: (
          <HomeProvider>
            <About />
          </HomeProvider>
        ),
      },
      {
        path: "skills",
        element: (
          <SkillProvider>
            <Skills />
          </SkillProvider>
        ),
      },
      {
        path: "projects",
        element: (
          <ProjectProvider>
            <Projects />
          </ProjectProvider>
        ),
      },
      {
        path: "education",
        element: (
          <EducationProvider>
            <Education />
          </EducationProvider>
        ),
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
