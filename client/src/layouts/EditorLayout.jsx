import EditorNavbar from "../components/EditorNavbar";

export default function EditorLayout({ children }) {
  return (
    <div className="min-h-screen w-full">
      <EditorNavbar />
      {/* PAGE CONTENT — CENTER DI SINI, TAPI TIDAK BATASI WIDTH */}
      <div className="w-full pt-16">
        <div className="w-full">
          {children}
        </div>
      </div>
    </div>
  );
}
