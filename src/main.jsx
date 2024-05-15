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
import AddVolunteer from "./pages/AddVolunteer/AddVolunteer";
import PrivateRoute from "./routes/PrivateRoute";
import VolunteerPostDetails from "./pages/VolunteerPostDetails/VolunteerPostDetails";
import NeedVolunteers from "./pages/NeedVolunteers/NeedVolunteers";
import ManagePost from "./pages/ManagePost/ManagePost";
import UpdateVolunteer from "./pages/UpdateVolunteer/UpdateVolunteer";
import Error from "./pages/Error/Error";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
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
      {
        path: "/add-volunteer-post",
        element: (
          <PrivateRoute>
            <AddVolunteer></AddVolunteer>
          </PrivateRoute>
        ),
      },
      {
        path: "/need-volunteers",
        element: <NeedVolunteers></NeedVolunteers>,
      },
      {
        path: "/manage-posts",
        element: (
          <PrivateRoute>
            <ManagePost></ManagePost>
          </PrivateRoute>
        ),
      },
      {
        path: "/need-volunteer-post/details/:id",
        element: (
          <PrivateRoute>
            <VolunteerPostDetails></VolunteerPostDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/volunteer-post-details/${params.id}`),
      },
      {
        path: "/update-volunteer-post/:id",
        element: (
          <PrivateRoute>
            <UpdateVolunteer></UpdateVolunteer>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/volunteer-post-details/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <Toaster richColors></Toaster>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
