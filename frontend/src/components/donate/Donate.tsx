import React, { useState } from "react";
import arrow from "../../assets/470292.webp";

const Donate: React.FC = () => {
  const [openSection, setOpenSection] = useState(false);
  const [donationAmount, setDonationAmount] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleDonate = () => {
    alert(`Donation of ${donationAmount} processed successfully!`);
  };

  const toggleSection = () => {
    setOpenSection((prev) => !prev);
  };

  return (
    <div className="flex flex-col px-4 py-6 space-y-4 max-sm:space-y-6">
      {/* Donation Information */}
      <div className="flex justify-between items-center max-sm:flex-row max-sm:space-y-0">
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-700">
            Donation Information
          </h2>
          <p className="text-gray-700">
            Ways to give, including online donation options, mailing addresses,
            and tax information.
          </p>
        </div>
        <div>
          <img
            src={arrow}
            alt="Toggle Dropdown"
            className={`w-8 h-8 cursor-pointer transform transition-transform ${
              openSection ? "rotate-180" : "rotate-0"
            }`}
            onClick={toggleSection}
          />
        </div>
      </div>

      {/* Dropdown for Donate Using ATM Card */}
      {openSection && (
        <div className="p-6 rounded-lg shadow-lg space-y-4 max-sm:p-4">
          <h2 className="text-xl font-semibold text-gray-700 max-sm:text-lg">
            Donate Using Your ATM Card
          </h2>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Enter Donation Amount"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 max-sm:text-sm"
            />
            <input
              type="text"
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 max-sm:text-sm"
            />
            <div className="flex space-x-2 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-3">
              <input
                type="text"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 max-sm:w-full max-sm:text-sm"
              />
              <input
                type="text"
                placeholder="CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 max-sm:w-full max-sm:text-sm"
              />
            </div>
            <button
              onClick={handleDonate}
              className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 max-sm:text-sm"
            >
              Donate Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donate;
