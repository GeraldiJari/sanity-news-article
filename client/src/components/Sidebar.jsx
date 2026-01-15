import { useState } from "react";
import { Home, Newspaper, PenSquare } from "lucide-react";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={`
        fixed left-0 top-0 h-screen z-50
        bg-white border-r
        transition-all duration-300
        ${open ? "w-56" : "w-16"}
      `}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="h-16 flex items-center justify-center font-bold">
        {open ? "SanityBlog" : "SB"}
      </div>

      <nav className="mt-6 space-y-2">
        <SidebarItem icon={<Home />} label="Home" open={open} />
        <SidebarItem icon={<Newspaper />} label="News" open={open} />
        <SidebarItem icon={<PenSquare />} label="Write" open={open} />
      </nav>
    </aside>
  );
}
