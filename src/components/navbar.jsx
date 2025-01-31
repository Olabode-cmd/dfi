import React, { useState } from "react";
import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router'
import { useLocation } from "react-router";
import { FaArrowRight } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "unset";
  };

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Courses", href: "/courses" },
    { label: "FAQs", href: "/faq" },
    { label: "Blogs", href: "/blog" },
    { label: "Enquiry", href: "/enquiry" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 right-1 p-4 z-80">
        <button
          onClick={toggleMenu}
          className="flex items-center gap-1 hover:opacity-70 transition-opacity"
        >
          {isOpen ? (
            <GoArrowUpRight className="w-6 h-6 text-black" />
          ) : (
            <GoArrowDownLeft className="w-6 h-6 text-white" />
          )}
          <span
            className={`font-bold mix-blend-difference ${
              isOpen ? "text-black" : "text-white"
            } text-xl`}
          >
            {isOpen ? "CLOSE" : "MENU"}
          </span>
        </button>
      </nav>

      {/* Overlay Menu */}
      <div
        className={`fixed inset-0 bg-white transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Menu Items */}
        <div className="h-full grid grid-cols-2">
          <div className="nav-bg hidden md:inline-block"></div>
          <div className="flex flex-col items-center justify-center gap-4 w-full h-screen">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.href;

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`flex items-center ${
                    !isActive ? "navlink-bg" : ""
                  } justify-between text-2xl font-bold transition-opacity px-4 py-3 w-[55%] md:w-[25%] ${
                    isActive ? "text-white bg-red-700" : ""
                  }`}
                  onClick={toggleMenu}
                >
                  {isActive && <FaArrowRight className="ml-2 text-primary" />}
                  {item.label}{" "}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;