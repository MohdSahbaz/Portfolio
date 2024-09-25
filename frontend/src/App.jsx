import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Index from "./components/Home/Index";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
