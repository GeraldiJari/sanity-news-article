import { useState } from "react";
import { Home, Newspaper, PenSquare } from "lucide-react";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <aside
      className={`
        fixed left-0 top-0 h-screen z-50
        bg-neutral-900 border-r border-neutral-800
        transition-all duration-300
        ${open ? "w-56" : "w-16"}
      `}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* LOGO */}
      <div className="h-16 flex items-center justify-center font-bold text-white">
        {open ? "SanityBlog" : "SB"}
      </div>

      {/* MENU */}
      <nav className="mt-6 space-y-2 px-2">
        <SidebarItem
          icon={<Home size={20} />}
          label="Home"
          to="/"
          open={open}
        />

        <SidebarItem
          icon={<Newspaper size={20} />}
          label="My Articles"
          to="/my-articles"
          open={open}
        />

        <SidebarItem
          icon={<PenSquare size={20} />}
          label="Write"
          to="/write"
          open={open}
        />
      </nav>
    </aside>
  );
}
