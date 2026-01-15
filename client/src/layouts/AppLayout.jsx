import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";

export default function AppLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-neutral-900 text-white">
      <Sidebar />
      <Home />

      {/* CONTENT OFFSET */}
      <main className="flex-1 ml-16 lg:ml-56">
        {children}
      </main>
    </div>
  );
}
