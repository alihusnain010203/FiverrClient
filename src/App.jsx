import React from "react";

import "./App.scss";
import {
  Home,
  Login,
  Register,
  Gig,
  Gigs,
  Add,
  MyGig,
  Order,
  Messages,
  Message,
  Navbar,
  Footer,
} from "./index.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const App = () => {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/gigs/:category",
          element: <Gigs />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/mygigs",
          element: <MyGig />,
        },
        {
          path: "/orders",
          element: <Order />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
