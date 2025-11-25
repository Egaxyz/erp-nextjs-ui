export default function Navbar() {
  return (
    <nav className="w-full h-16 bg-white shadow flex items-center justify-between py-3 px-3 font-semibold border-b">
      <div className="flex items-center gap-3">
        <span className="text-xl text-gray-800">Page Name</span>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-gray-600 hover:bg-slate-400 p-2 rounded-xl hover:text-white text-sm">
          Dashboard
        </button>
        <button className="text-gray-600 hover:bg-slate-400 p-2 rounded-xl hover:text-white text-sm">
          Profile
        </button>
        <button className="px-3 py-1 bg-black text-white rounded-lg text-sm hover:bg-white hover:text-black">
          Logout
        </button>
      </div>
    </nav>
  );
}
