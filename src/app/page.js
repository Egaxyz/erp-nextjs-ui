import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 bg-gray-50 min-h-screen">
          <Navbar />
          <div className="p-6">
            <h1 className="text-3xl font-bold  mb-4">
              Welcome to the ERP System
            </h1>
            <p className="text-gray-700">
              This is the main content area. Select an option from the sidebar
              to get started.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
