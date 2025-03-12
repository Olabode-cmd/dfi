import React from "react";
import {
  RiDashboardLine,
  RiProjectorLine,
  RiExchangeDollarLine,
  RiTeamLine,
  RiFileChartLine,
  RiFileTextLine,
  RiSettings4Line,
  RiQuestionLine,
} from "react-icons/ri";
// import Logo from "../assets/images/yolo-logo.png";
import { Link } from "react-router";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { icon: RiDashboardLine, label: "Dashboard", path: "/dashboard" },
    { icon: RiProjectorLine, label: "Projects", path: "/dashboard/projects" },
    {
      icon: RiExchangeDollarLine,
      label: "Transaction",
      path: "/dashboard/transaction",
    },
    { icon: RiTeamLine, label: "My Team", path: "/dashboard/team" },
    {
      icon: RiFileChartLine,
      label: "Research Data",
      path: "/dashboard/research",
    },
    { icon: RiFileTextLine, label: "Reports", path: "/dashboard/reports" },
    { icon: RiSettings4Line, label: "Settings", path: "/dashboard/settings" },
    { icon: RiQuestionLine, label: "Help", path: "/dashboard/help" },
  ];

  return (
    <div
      className={`fixed left-0 top-0 h-full bg-white transition-all duration-300 z-20 
        ${isOpen ? "w-62" : "w-0 -translate-x-full md:w-16 md:translate-x-0"}`}
    >
      <div className="flex items-center gap-4 pl-5 pt-3">
        <img
          src={"https://avatar.iran.liara.run/public/boy"}
          alt="Logo"
          className="h-10"
        />

        {isOpen ? <h1 className="font-semibold text-lg">Yolo Stores</h1> : ""}
      </div>

      <nav className="mt-8">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-center gap-4 px-4 py-3 group hover:bg-blue-600 hover:text-white duration-200 rounded-xl w-[90%] mx-auto"
          >
            <item.icon
              className={`h-5 w-5 text-gray-500 group-hover:text-white ${
                isOpen ? "" : "mx-auto"
              }`}
            />
            {isOpen && (
              <span className="text-slate-900 group-hover:text-white">
                {item.label}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;