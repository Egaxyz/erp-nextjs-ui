import { Home, Boxes, ShoppingCart, Receipt, Users } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-48 h-screen bg-slate-400 hover:bg-slate-500 border-r shadow-sm p-4 flex flex-col select-none">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-black tracking-wide">
          ERP Menu
        </h2>
      </div>

      <nav className="flex flex-col gap-1 text-sm font-medium">
        <a className="flex items-center gap-3 text-gray-900 hover:text-gray-500 hover:bg-gray-100 hover:ml-2 px-3 py-2 rounded-xl cursor-pointer transition">
          <Home size={18} />
          Dashboard
        </a>

        <a className="flex items-center gap-3 text-gray-900 hover:text-gray-500 hover:bg-gray-100 hover:ml-2 px-3 py-2 rounded-xl cursor-pointer transition">
          <Boxes size={18} />
          Inventory
        </a>

        <a className="flex items-center gap-3 text-gray-900 hover:text-gray-500 hover:bg-gray-100 hover:ml-2 px-3 py-2 rounded-xl cursor-pointer transition">
          <ShoppingCart size={18} />
          Purchasing
        </a>

        <a className="flex items-center gap-3 text-gray-900 hover:text-gray-500 hover:bg-gray-100 hover:ml-2 px-3 py-2 rounded-xl cursor-pointer transition">
          <Receipt size={18} />
          Sales
        </a>

        <a className="flex items-center gap-3 text-gray-900 hover:text-gray-500 hover:bg-gray-100 hover:ml-2 px-3 py-2 rounded-xl cursor-pointer transition">
          <Users size={18} />
          Users
        </a>
      </nav>
    </aside>
  );
}
