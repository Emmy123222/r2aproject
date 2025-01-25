import { useState } from "react";
import arrow from "../../assets/470292.webp";

const Prayer = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [prayerRequest, setPrayerRequest] = useState("");

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleSubmit = () => {
    alert(`Your prayer request has been submitted: ${prayerRequest}`);
    setPrayerRequest(""); // Clear the input field after submission
  };

  return (
    <div className="flex flex-col justify-center px-4 py-6 max-sm:px-3 max-sm:py-4">
      {/* Prayer Header */}
      <div className="flex justify-between items-center max-sm:flex-row max-sm:items-start">
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-700 max-sm:text-lg">
            Prayer Requests
          </h2>
          <p className="text-gray-700 max-sm:text-sm">
            Submit your prayer requests below, and we will pray with you.
          </p>
        </div>
        <div className="ml-4 max-sm:ml-2">
          <img
            src={arrow}
            alt="Toggle Dropdown"
            className={`w-8 h-8 cursor-pointer transform transition-transform ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
            onClick={toggleDropdown}
          />
        </div>
      </div>

      {/* Dropdown Input Section */}
      {isDropdownOpen && (
        <div className="mt-4 bg-white p-6 rounded-lg shadow-lg space-y-4 max-sm:p-4 max-sm:space-y-3">
          <textarea
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 max-sm:text-sm"
            placeholder="Enter your prayer request..."
            value={prayerRequest}
            onChange={(e) => setPrayerRequest(e.target.value)}
          ></textarea>
          <button
            onClick={handleSubmit}
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 max-sm:py-1 max-sm:text-sm"
          >
            Submit Prayer Request
          </button>
        </div>
      )}
    </div>
  );
};

export default Prayer;
