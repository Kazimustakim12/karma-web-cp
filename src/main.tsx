import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ThemeContext from "./context/ThemeProvider.tsx";
import { ThemeProvider } from "@material-tailwind/react";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ThemeContext>
          <App />
        </ThemeContext>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
