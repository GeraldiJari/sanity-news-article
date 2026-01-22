import { Bell, User } from "lucide-react";

export default function EditorNavbar() {
  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        h-16
        bg-neutral-800 border-b border-neutral-700
        flex items-center justify-between
        px-6
      "
    >
      {/* LEFT */}
      <div className="flex items-center gap-3">
        <span className="text-xl font-bold">
          Creation Center
        </span>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <button className="w-9 h-9 rounded-full bg-neutral-700 flex items-center justify-center hover:bg-neutral-600">
          <Bell size={18} />
        </button>

        <button className="w-9 h-9 rounded-full bg-neutral-700 flex items-center justify-center hover:bg-neutral-600">
          <User size={18} />
        </button>
      </div>
    </header>
  );
}
