import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Admin from "./Admin";
import Movie from "./Movie";
import Movies from "./Movies";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
      path: "admin",
    children: [
      {
        index: true,
        element: <Admin />
      },
      {
        path: "movie",
        element: <Movies />,
      },
    ],
  },
  {
    path: "movie/:id",
    element: <Movie />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
