import Sidebar from "../components/Sidebar"; 
import ornament from "/TerrainIndonesia.png"; 

export default function AppLayout({ children }) {
  return (
    <div 
        className="min-h-screen bg-neutral-900 text-white" 
        style={{
            backgroundImage: `url(${ornament})`,
            backgroundSize: "100%",
        }}
    >
      <Sidebar />

      {/* CONTENT OFFSET (WAJIB) */}
      <main className="ml-16 lg:ml-56">
        {children}
      </main>
    </div>
  );
}
