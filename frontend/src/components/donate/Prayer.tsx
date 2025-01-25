import { useState } from "react";
import arrow from "../../assets/arrow.webp";

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
    <div className="flex flex-col justify-center ">
      {/* Prayer Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-gray-700">
            Prayer Requests
          </h2>
          <p className="text-gray-700">
            Submit your prayer requests below, and we will pray with you.
          </p>
        </div>
        <div>
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
        <div className="mt-4 bg-white p-4 rounded-lg shadow-lg">
          <textarea
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your prayer request..."
            value={prayerRequest}
            onChange={(e) => setPrayerRequest(e.target.value)}
          ></textarea>
          <button
            onClick={handleSubmit}
            className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
          >
            Submit Prayer Request
          </button>
        </div>
      )}
    </div>
  );
};

export default Prayer;
