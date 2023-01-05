import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { ThemeProvider } from "styled-components";

const defaultTheme = {
  textColor: "#333533",
  textDarkColor: "#242423",
  color1: "#cfdbd5",
  color2: "#e8eddf",
  pointColor: "#f5cb5c",
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
