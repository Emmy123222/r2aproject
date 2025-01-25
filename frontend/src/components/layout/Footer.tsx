import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <footer className="bg-black bg-opacity-30 backdrop-blur-md backdrop-opacity-60 py-8 text-gray-800 max-sm:w-full ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8  ">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="leading-relaxed">
            Reachout To All Ministry International is dedicated to spreading the
            Gospel and bringing hope to people worldwide through missions and
            community outreach.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li
              className="hover:text-blue-600 cursor-pointer"
              onClick={() => handleNavigation("/event")}
            >
              Events
            </li>
            <li
              className="hover:text-blue-600 cursor-pointer"
              onClick={() => handleNavigation("/about")}
            >
              About Us
            </li>
            <li
              className="hover:text-blue-600 cursor-pointer"
              onClick={() => handleNavigation("/resources")}
            >
              Resources
            </li>
            <li
              className="hover:text-blue-600 cursor-pointer"
              onClick={() => handleNavigation("/contact")}
            >
              Contact
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p>Phone: +234-7033740721</p>
          <p>Email: reachouttoall@yahoo.com</p>
          <p>
            Blog:{" "}
            <a
              href="https://bawagemmanuel.blogspot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              bawagemmanuel.blogspot.com
            </a>
          </p>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="mt-8 border-t border-gray-300 pt-4 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://www.facebook.com/profile.php?id=100064950391474"
            className="text-gray-600 hover:text-gray-800"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-6 w-6"
            >
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.495V14.708h-3.17v-3.623h3.17V8.237c0-3.138 1.916-4.841 4.715-4.841 1.344 0 2.5.099 2.832.145v3.283l-1.945.001c-1.524 0-1.82.725-1.82 1.788v2.345h3.641l-.474 3.623h-3.167V24h6.217C23.406 24 24 23.406 24 22.675V1.325C24 .593 23.406 0 22.675 0z" />
            </svg>
          </a>

          <a
            href="https://m.youtube.com/@reachout2all"
            className="text-gray-600 hover:text-gray-800"
            aria-label="YouTube"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-6 w-6 flex items-center"
            >
              <path d="M19.615 3.184C20.746 3.548 21.5 4.383 21.823 5.518c.352 1.237.352 3.818.352 3.818s0 2.582-.352 3.819c-.323 1.135-1.077 1.97-2.208 2.334C17.815 16 12 16 12 16s-5.815 0-7.615-.511c-1.131-.364-1.885-1.2-2.208-2.335C2.825 11.2 2.825 8.618 2.825 8.618s0-2.581.352-3.818C3.5 4.382 4.254 3.548 5.385 3.184 7.185 2.673 12 2.673 12 2.673s4.815 0 7.615.511zM9.75 6.75v6.5l5.5-3.25-5.5-3.25z" />
            </svg>
          </a>
        </div>
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Reachout To All Ministry
          International. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
