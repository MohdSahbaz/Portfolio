import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HomeProvider } from "./components/contexts/HomeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HomeProvider>
      <App />
    </HomeProvider>
  </StrictMode>
);
