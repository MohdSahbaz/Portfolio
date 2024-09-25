import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Index from "./components/Home/Index";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "",
        element: <Index />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
