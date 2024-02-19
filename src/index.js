import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WhyGreen from "./WhyGreen/WhyGreen";
import Installation from "./Installation/Installation";
import Home from "./Home/Home";
import Costs from "./Costs/Costs";
import WorksCited from "./worksCited/worksCited";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/costs",
    element: <Costs />,
  },
  {
    path: "/why-green",
    element: <WhyGreen />,
  },
  {
    path: "/installation",
    element: <Installation />,
  },
  {
    path: "/works-cited",
    element: <WorksCited />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
