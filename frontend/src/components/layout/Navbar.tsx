import React from "react";
import { useNavigate } from "react-router-dom";

interface NavBarProps {
  links: { name: string; path: string }[];
  logo: string; // Placeholder for other logos, optional
  donateText: string;
}

const Navbar: React.FC<NavBarProps> = ({ links, donateText }) => {
  const navigate = useNavigate(); // React Router navigation hook

  const handleNavigation = (path: string) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Section: Home Icon */}
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => handleNavigation("/")} // Navigate to the home page
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </div>

          {/* Middle Section: Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {links.map((link, index) => (
              <div
                key={index}
                className="text-gray-700 hover:text-red-600 font-medium cursor-pointer"
                onClick={() => handleNavigation(link.path)} // Navigate when clicked
              >
                {link.name}
              </div>
            ))}
          </div>

          {/* Right Section: Donate Button */}
          <div className="flex items-center">
            <div
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 cursor-pointer"
              onClick={() => handleNavigation("/donate")} // Navigate to donate page
            >
              {donateText}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
