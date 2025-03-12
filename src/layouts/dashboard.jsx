import { useState } from "react";
import Header from "../components/dashboard/header";
import Sidebar from "../components/dashboard/sidebar";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <Header toggleSidebar={toggleSidebar} />

      <main
        className={`transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-0 md:ml-16"
        } pt-20 px-4`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;