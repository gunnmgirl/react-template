import { createBrowserRouter } from "react-router-dom";

import { Login } from "pages/auth";
import { Dashboard } from "pages/dashboard";
import PrivateRoute from "router/PrivateRoute";
import { NotFound } from "layouts";

const routes = [
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    )
  },
  {
    path: "*",
    element: <NotFound />
  }
];

export const router = createBrowserRouter(routes);
