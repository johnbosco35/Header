/** @format */

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Header from "../Block/Header";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Orders from "../Pages/Orders";
import Education from "../Pages/Education";
import Community from "../Pages/Community";
import Forums from "../Pages/Forums";
import Support from "../Pages/Support";
import Account from "../Pages/Account";
import Helpdesk from "../Pages/Helpdesk";

export const Mainrouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Orders",
        element: <Orders />,
      },
      {
        path: "Education",
        element: <Education />,
      },
      {
        path: "Community",
        element: <Community />,
      },
      {
        path: "Forums",
        element: <Forums />,
      },
      {
        path: "Support",
        element: <Support />,
      },
      {
        path: "Account",
        element: <Account />,
      },
      {
        path: "Helpdesk",
        element: <Helpdesk />,
      },
    ],
  },
]);
