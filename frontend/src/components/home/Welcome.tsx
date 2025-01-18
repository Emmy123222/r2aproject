import React from "react";
import AboutUs from "./AboutUs";
import Believe from "./Believe";
import Call from "./Call";
import Coordinator from "./Coordinator";

const Welcome = () => {
  const title = "Welcome Message";
  const message = `
    Welcome to Reachout To All, here, every soul counts. We are on a mission 
    to reach out to all people with the gospel with a humanitarian touch of love.
  `;
  const items = [
    {
      text: "Flash photos of some of our pictures as obtained from our Facebook page.",
      link: "https://www.facebook.com/share/1AuYV726FT/?mibextid=qi2Omg",
      linkText: " https://www.facebook.com/share/1AuYV726FT/?mibextid=qi2Omg",
    },
    { text: "3,500 people reached." },
    { text: "Over 1,200 salvation decisions." },
    {
      text: "Over 3,500 beneficiaries received free basic medical services and welfare materials distribution.",
    },
  ];

  return (
    <div className="bg-gray-100 w-[850px] p-4 space-y-4 rounded-lg shadow-lg">
      <h1 className="flex text-2xl justify-center items-center text-[40px] text-black font-bold">
        {title}
      </h1>

      <p className="text-[20px] text-gray-700 font-serif leading-relaxed">
        {message}
      </p>

      <div>
        <ul className="list-disc ml-5 text-gray-800 mt-4 space-y-2">
          {items.map((item, index) => (
            <li key={index} className="font-serif">
              {item.text}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline ml-1"
                >
                  {item.linkText || item.link}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
      <AboutUs />
      <Believe />
      <Call />
      <Coordinator />
    </div>
  );
};

export default Welcome;
