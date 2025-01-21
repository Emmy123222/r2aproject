import React from 'react';

const Eventpage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Events</h1>

      {/* Upcoming Events Section */}
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-4xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Upcoming Events</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Mobilization Services:</strong> In Kaduna (twice a month) and Abuja State (once a month)
          </li>
          <li>
            <strong>Teens & Youth Camp:</strong> February, 2025 in Kano State.
          </li>
          <li>
            <strong>Teens & Youth Camp:</strong> April, 2025 in Lagos State.
          </li>
          <li>
            <strong>One Day School Outreaches:</strong> Ondo and Kaduna States.
          </li>
          <li>
            <strong>Community Outreaches:</strong> FCT Abuja, Kaduna State.
          </li>
          <li>
            <strong>December Mission Outreaches:</strong> Akwa Ibom and Kaduna States.
          </li>
        </ul>
      </div>

      {/* Past Events Section */}
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Past Events</h2>
        <p className="text-gray-600 mb-4">
          Archives of previous events, including photos, videos, and summaries.
        </p>
        {/* Placeholder for photos/videos */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-200 h-32 flex items-center justify-center rounded">
            <span className="text-gray-500">Photo/Video 1</span>
          </div>
          <div className="bg-gray-200 h-32 flex items-center justify-center rounded">
            <span className="text-gray-500">Photo/Video 2</span>
          </div>
          <div className="bg-gray-200 h-32 flex items-center justify-center rounded">
            <span className="text-gray-500">Photo/Video 3</span>
          </div>
          <div className="bg-gray-200 h-32 flex items-center justify-center rounded">
            <span className="text-gray-500">Photo/Video 4</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventpage;
