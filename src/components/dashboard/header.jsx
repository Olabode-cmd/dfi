import { RiMenu3Line } from "react-icons/ri";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="fixed left-0 top-0 z-10 flex h-16 w-full items-center justify-between px-4 md:pl-68">
      <div>
        <h1 className="text-2xl font-medium">Dashboard</h1>
        <p className="text-sm text-gray-600">
          {new Date().toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <button className="rounded-full bg-gray-100 p-2">
          <img
            src="https://avatar.iran.liara.run/public/boy"
            alt="Notifications"
            className="h-10 w-10 border rounded-full border-gray-400"
          />
        </button>
        <button className="" onClick={toggleSidebar}>
          <RiMenu3Line className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;