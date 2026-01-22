import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ornament from "/TerrainIndonesia.png";

export default function AppLayout({ children }) {
  const location = useLocation();
  const isEditorPage = location.pathname.startsWith("/write");

  return (
    <div
      className="min-h-screen bg-neutral-900 text-white"
      style={{
        backgroundImage: `url(${ornament})`,
        backgroundSize: "100%",
      }}
    >
      {/* Sidebar hanya muncul kalau BUKAN halaman editor */}
      {!isEditorPage && <Sidebar />}

      <main
        className={`
          transition-all duration-300
          ${!isEditorPage ? "ml-16 md:ml-56" : "ml-0"}
          ${isEditorPage ? "flex justify-center" : ""}
        `}
      >
        {children}
      </main>
    </div>
  );
}
