import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes.json";
import LoginSignUp from "../component/LoginSignUp";
import ErrorPage from "../pages/ErrorPage";
import User from "../component/User";
import { AuthUserProvider } from "../utils/AuthUser";
import { UserProvider } from "../utils/UserContext";

const PageRouter = () => {
  const route = createBrowserRouter([
    {
      path: `${routes.HOME}`,
      element: <LoginSignUp />,
      errorElement: <ErrorPage />,
    },
    {
      path: `${routes.USER}`,
      element: <User />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <>
      <AuthUserProvider>
        <RouterProvider router={route} />
      </AuthUserProvider>
    </>
  );
};

export default PageRouter;
