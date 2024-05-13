import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./root/Root";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import AuthProvider from "./providers/AuthProvider";
import Login from "./pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <></>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster richColors></Toaster>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
