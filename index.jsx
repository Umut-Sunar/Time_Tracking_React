
import App from "./src/Pages/App";


import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./src/Pages/NotFoundPage";

import "./index.less";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App/>,
    errorElement: <ErrorPage />,

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);