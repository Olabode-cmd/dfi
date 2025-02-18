import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { CiMenuFries } from "react-icons/ci";
import { RiCloseLargeFill } from "react-icons/ri";
import { HiOutlineChevronDown } from "react-icons/hi";
import { HiBars2 } from "react-icons/hi2";
import Logo from "../assets/images/dfi-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldBeFixed = scrollPosition > window.innerHeight;

      if (shouldBeFixed !== isScrolled) {
        setIsScrolled(shouldBeFixed);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  const navLinks = [
    { title: "About", path: "/about" },
    { title: "Courses", path: "/courses" },
    // { title: "FAQs", path: "/faq" },
    {
      title: "Program",
      path: "",
      dropdown: ["Verify Certificates", "Digital School Books"],
    },
    { title: "Enquiry", path: "/enquiry" },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };


  return (
    <nav
      className={`w-full px-4 pt-2 md:px-12 transition-all z-40 duration-300 ${
        isScrolled
          ? "fixed top-0 bg-gray-900 text-white shadow-lg translate-y-0"
          : "absolute top-0 bg-transparent text-gray-900 -translate-y-1"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex-shrink-0 flex items-center"
          >
            <span
              className={`text-2xl font-bold ${
                isScrolled ? "text-white" : "text-gray-900"
              }`}
            >
              <img src={Logo} alt="logo" className="h-8" />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            {navLinks.map((link) => (
              <div key={link.title} className="relative group">
                {link.dropdown ? (
                  <button
                    className={`px-5 py-2 rounded-md flex items-center transition-colors ${
                      isScrolled
                        ? "text-white hover:text-red-500"
                        : "text-gray-900 hover:text-red-500"
                    }`}
                  >
                    {link.title}
                    <HiOutlineChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-5 py-2 rounded-md transition-colors ${
                      isScrolled
                        ? "text-white hover:text-red-500"
                        : "text-gray-900 hover:text-red-500"
                    }`}
                  >
                    {link.title}
                  </Link>
                )}

                {link.dropdown && (
                  <div
                    className={`absolute z-10 hidden group-hover:block w-48 rounded-md shadow-lg py-1 ${
                      isScrolled ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item}
                        to={`${link.path}/${item
                          .toLowerCase()
                          .replace(/ /g, "-")}`}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          isScrolled
                            ? "text-gray-100 hover:text-red-500"
                            : "text-gray-900 hover:text-red-500"
                        }`}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/auth/login"
              className={`transition-colors ${
                isScrolled
                  ? "text-white hover:text-red-500"
                  : "text-gray-900 hover:text-red-500"
              }`}
            >
              Login
            </Link>
            <Link
              to="/auth/apply"
              className={`px-4 py-2 rounded-md transition-colors ${
                isScrolled
                  ? "bg-white text-gray-900 hover:bg-gray-100"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
              Apply now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors ${
                isScrolled
                  ? "text-white hover:text-red-500"
                  : "text-gray-900 hover:text-red-500"
              }`}
            >
              {isOpen ? (
                <RiCloseLargeFill className="block h-6 w-6" />
              ) : (
                <HiBars2 className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className={`md:hidden ${isScrolled ? "bg-gray-900" : "bg-white"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <div key={link.title}>
                {link.dropdown ? (
                  <button
                    className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                      isScrolled
                        ? "text-white hover:text-red-500"
                        : "text-gray-900 hover:text-red-500"
                    }`}
                  >
                    {link.title}
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    onClick={closeMenu}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isScrolled
                        ? "text-white hover:text-red-500"
                        : "text-gray-900 hover:text-red-500"
                    }`}
                  >
                    {link.title}
                  </Link>
                )}
                {link.dropdown && (
                  <div className="pl-4 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item}
                        onClick={closeMenu}
                        to={`${link.path}/${item.toLowerCase()}`}
                        className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                          isScrolled
                            ? "text-gray-100 hover:text-red-500"
                            : "text-gray-900 hover:text-red-500"
                        }`}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-2">
              <Link
                to="/auth/login"
                onClick={closeMenu}
                className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isScrolled
                    ? "text-white hover:text-red-500"
                    : "text-gray-900 hover:text-red-500"
                }`}
              >
                Login
              </Link>
              <Link
                to="/apply"
                onClick={closeMenu}
                className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md ${
                  isScrolled
                    ? "bg-white text-gray-900 hover:bg-gray-100"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                Apply now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;