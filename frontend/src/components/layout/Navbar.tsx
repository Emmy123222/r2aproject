import React from "react";

interface NavBarProps {
  links: { name: string; href: string }[];
  logo: string;
  donateLink: string;
}

const Navbar: React.FC<NavBarProps> = ({ links, donateLink }) => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="   ">
        <div className="flex justify-between items-center h-16">
          {/* Left Section: Logo */}
          <div className="flex-shrink-0">
            <a href="/">
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
            </a>
          </div>

          {/* Middle Section: Links */}
          <div className=" md:flex space-x-8 items-center">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-700 hover:text-red-600 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Section: Donate Button */}
          <div className="flex items-center">
            <a
              href={donateLink}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
