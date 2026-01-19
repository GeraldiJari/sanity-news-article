import { NavLink } from "react-router-dom";

export default function SidebarItem({ icon, label, to, open }) {
  return (
    <NavLink
      to={to}
      end={to === "/"} // penting supaya Home tidak selalu aktif
      className={({ isActive }) =>
        `
        flex items-center gap-3
        px-3 py-2 rounded-lg
        text-sm font-medium
        transition-all
        ${
          isActive
            ? "bg-yellow-400 text-black"
            : "text-gray-400 hover:bg-neutral-800 hover:text-white"
        }
      `
      }
    >
      {/* ICON */}
      <div className="shrink-0">{icon}</div>

      {/* LABEL */}
      <span
        className={`
          whitespace-nowrap overflow-hidden
          transition-all duration-300
          ${open ? "opacity-100 w-auto" : "opacity-0 w-0"}
        `}
      >
        {label}
      </span>
    </NavLink>
  );
}
