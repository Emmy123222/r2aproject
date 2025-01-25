import React, { useState } from "react";
import arrow from "@/assets/470292.webp";
import emailjs from "emailjs-com";

const Volunteer: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");

  const units = [
    "Transportation and Organizing Unit",
    "Medical Unit",
    "Children Unit",
    "Technical Unit",
    "Media Unit",
    "Cosmetology Unit",
    "Skills Acquisition Unit",
    "Kitchen Unit",
    "Music Unit",
    "Drama Unit",
    "Welfare Unit",
    "Ushering Unit",
    "Counselling Unit",
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleUnitClick = (unit: string) => {
    setSelectedUnit(unit);
    setIsModalOpen(true);
  };

  const handleSubmit = () => {
    const templateParams = {
      name,
      phone,
      whatsapp,
      email,
      unit: selectedUnit,
    };

    emailjs
      .send(
        "service_9mgp9or", // Replace with your EmailJS service ID
        "template_nmnanfn", // Replace with your EmailJS template ID
        templateParams,
        "S-yva2i_DOnH-p24Y" // Replace with your EmailJS user ID (or public key)
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert(
            `Thank you, ${name}! You have successfully registered for ${selectedUnit}.`
          );
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("Oops! Something went wrong. Please try again.");
        }
      );

    // Reset form and close modal
    setName("");
    setPhone("");
    setWhatsapp("");
    setEmail("");
    setIsModalOpen(false);
  };

  return (
    <div className="px-4 py-6 max-sm:px-2 max-sm:py-4">
      {/* Volunteer Header */}
      <div className="flex justify-between items-start  max-sm:space-y-4">
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-700 max-sm:text-lg">
            Volunteer Opportunities
          </h2>
          <p className="text-gray-700 max-sm:text-sm">
            Explore various volunteer roles and responsibilities. Apply to make
            a difference in the lives of others.
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

      {/* Dropdown List */}
      {isDropdownOpen && (
        <div className="p-4 mt-2 rounded-lg shadow-lg w-full max-sm:p-3">
          <ul className="space-y-2 list-disc pl-6 max-sm:pl-4 max-sm:text-sm">
            {units.map((unit, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer text-gray-700 hover:text-red-700"
                onClick={() => handleUnitClick(unit)}
              >
                {unit}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4 max-sm:px-2">
          <div className="bg-white p-6 rounded-[26px] shadow-lg w-full max-w-md max-sm:p-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 max-sm:text-lg">
              Join the {selectedUnit}
            </h2>
            <form className="space-y-4 max-sm:space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 max-sm:text-sm"
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 max-sm:text-sm"
              />
              <input
                type="text"
                placeholder="WhatsApp Number"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 max-sm:text-sm"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 max-sm:text-sm"
              />
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-red-600 text-white py-2 rounded-[26px] hover:bg-red-700 max-sm:py-1 max-sm:text-sm"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-full bg-gray-300 text-gray-700 py-2 rounded-[26px] hover:bg-gray-400 mt-2 max-sm:py-1 max-sm:text-sm"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Volunteer;
