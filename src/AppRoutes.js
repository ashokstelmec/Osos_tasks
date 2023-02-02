import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import MoviesData from "./pages/moviesData";
import MovieDescription from "./pages/movieDescription";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/movies",
      element: <MoviesData />,
    },

    {
      path: "/movies/:id",
      element: <MovieDescription />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default AppRoutes;
