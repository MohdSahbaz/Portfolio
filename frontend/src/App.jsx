import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Index from "./components/Home";
import NavBar from "./components/NavBar/NavBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "",
        element: <Index />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
