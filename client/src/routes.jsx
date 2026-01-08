import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ArticleDetail from "./pages/ArticleDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Write from "./pages/Write";
import ProtectedRoute from "./components/GuardRoute";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/articles/:slug", element: <ArticleDetail /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/write",
    element: (
      <ProtectedRoute>
        <Write />
      </ProtectedRoute>
    ),
  },
]);
