import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import Description from "./pages/Description";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/movies",
      element: <MainPage />,
    },

    {
      path: "/movies/:id",
      element: <Description />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default AppRoutes;
