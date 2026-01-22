import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {/* ROOT HARUS FULL WIDTH, TIDAK BOLEH FLEX CENTER */}
      <div className="w-full min-h-screen">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>
);
