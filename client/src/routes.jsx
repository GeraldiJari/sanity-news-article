import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ArticleDetail from "./pages/Article/ArticleDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyArticles from "./pages/Article/MyArticles";
import EditArticle from "./pages/Article/EditArticle";
import Write from "./pages/Write";
import ProtectedRoute from "./components/GuardRoute";
import AppLayout from "./layouts/AppLayout";
import EditorLayout from "./layouts/EditorLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppLayout>
        <Home />
      </AppLayout>
    ),
  },
  { path: "/articles/:slug", element: <ArticleDetail /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/write",
    element: (
      <ProtectedRoute>
        <EditorLayout>
          <Write />
        </EditorLayout>
      </ProtectedRoute>
    ),
  },

  {
  path: "/my-articles",
  element: (
    <ProtectedRoute>
      <MyArticles />
    </ProtectedRoute>
  ),
  },
  {
    path: "/edit/:slug",
    element: (
      <ProtectedRoute>
        <EditArticle />
      </ProtectedRoute>
    ),
  }

]);
