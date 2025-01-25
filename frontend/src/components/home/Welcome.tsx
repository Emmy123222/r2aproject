const Welcome = () => {
  const title = "Welcome Message";
  const message = `
    Welcome to Reachout To All. Here, every soul counts. We are on a mission 
    to reach out to all people with the gospel, accompanied by a humanitarian touch of love.
  `;
  const items = [
    {
      text: "Flash photos of some of our pictures as obtained from our Facebook page.",
      link: "https://www.facebook.com/share/1AuYV726FT/?mibextid=qi2Omg",
      linkText: "Facebook Page",
    },
    { text: "3,500 people reached." },
    { text: "Over 1,200 salvation decisions." },
    {
      text: "Over 3,500 beneficiaries received free basic medical services and welfare materials distribution.",
    },
  ];

  return (
    <div className="bg-gray-100 w-full p-4 space-y-4 shadow-lg max-sm:p-2 max-sm:space-y-3">
      {/* Title */}
      <h1 className="text-[40px] text-black font-bold text-center max-sm:text-[24px]">
        {title}
      </h1>

      {/* Message */}
      <p className="text-[20px] text-gray-700 font-serif leading-relaxed max-sm:text-[16px] max-sm:leading-normal max-sm:text-justify">
        {message}
      </p>

      {/* List Items */}
      <ul className="list-disc ml-5 text-gray-800 mt-4 space-y-2 max-sm:ml-3 max-sm:text-[14px]">
        {items.map((item, index) => (
          <li key={index} className="font-serif">
            {item.text}
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline ml-1 max-sm:ml-0"
              >
                {item.linkText}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Welcome;
