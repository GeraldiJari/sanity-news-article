export default function SidebarItem({ icon, label, open }) {
  return (
    <div className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-900 cursor-pointer">
      {icon}
      {open && <span className="text-sm">{label}</span>}
    </div>
  );
}
