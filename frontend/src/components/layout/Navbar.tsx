import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface NavBarProps {
  links: { name: string; path: string }[];
  logo?: string; // Optional logo prop
  donateText: string;
}

const Navbar: React.FC<NavBarProps> = ({ links, donateText }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black border-b border-gray-200 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Section: Home Icon */}
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => handleNavigation("/")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </div>

          {/* Middle Section: Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {links.map((link, index) => (
              <div
                key={index}
                className="text-white hover:text-red-600 font-medium cursor-pointer"
                onClick={() => handleNavigation(link.path)}
              >
                {link.name}
              </div>
            ))}
          </div>

          {/* Right Section: Donate Button */}
          <div className="hidden md:flex items-center">
            <div
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 cursor-pointer"
              onClick={() => handleNavigation("/donate")}
            >
              {donateText}
            </div>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button
              className="text-white hover:text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden  ">
            <div className="space-y-2 px-4 py-4">
              {links.map((link, index) => (
                <div
                  key={index}
                  className="text-white hover:text-red-600 font-medium cursor-pointer"
                  onClick={() => handleNavigation(link.path)}
                >
                  {link.name}
                </div>
              ))}
              <div
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 cursor-pointer"
                onClick={() => handleNavigation("/donate")}
              >
                {donateText}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
