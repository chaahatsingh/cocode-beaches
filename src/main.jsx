import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";  // Make sure this line exists
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
