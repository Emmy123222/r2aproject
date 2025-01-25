const Coordinator = () => {
  const title = "From the Coordinator’s Desk";
  const introduction = "Beloved,";
  const message = `
    Welcome on board, at Reachout To All, every soul matters to us because we know 
    each means a lot to God who made us all. Diverse people represent a variety of 
    needs ranging from salvation, medical care, welfare materials, and deliverance 
    among others. Love is a universal need for which humanity is a global language 
    used to meet these needs.
  `;
  const items = [
    {
      text: "We are a group of believers from diverse denominations, united by a passion for missions. Our aim is to reach out to people everywhere, enabling their salvation, rededication, commitment, rounded development, and discipleship, so that they may become effective tools in God's hands and have better lives. We achieve this by prayerfully seeking and visiting mission fields, partnering with organizations and agencies to make our deliverables possible.",
    },
    {
      text: "God continues to save souls in unprecedented ways, according to His divine agenda of ensuring that no life perishes and that all may be saved (2 Peter 3:9). We are both privileged witnesses and channels of this heaven-ordained move of God across various tribes and languages, rekindling the body of Christ with urgency towards fulfilling the Great Commission as a means to hasten His return (Matthew 24:14).",
    },
    {
      text: "We believe that God has ushered in a season of double harvest – a redoubling of efforts in soul-winning that has led to an increase in converts initially and, ultimately, disciples who populate God’s kingdom.",
    },
    {
      text: "God’s business remains mission work and so does ours, as we belong to Him. There can never be a second chance to harvest ripe souls. Among the things that will endure in heaven is the number of souls we have led to Jesus and touched positively.",
    },
  ];
  const closing = `
    You can join on board to touch lives in every means possible with your resources, talents,
    gifts, and other skill sets. We invite you to make a deliberate decision to Reach Out To All.
  `;
  const contact = [
    { label: "Phone:", value: "+234-7033740721" },
    { label: "Email:", value: "reachouttoall@yahoo.com" },
    { label: "Blog:", value: "https://bawagemmanuel.blogspot.com" },
  ];

  return (
    <div className="p-4 space-y-6 max-sm:space-y-4 max-sm:p-2 bg-gray-100 w-full    shadow-lg   ">
      {/* Title */}
      <h1 className="flex text-2xl justify-center items-center text-[40px] text-black font-bold max-sm:text-[24px] max-sm:text-center">
        {title}
      </h1>

      {/* Introduction */}
      <p className="text-[20px] text-gray-700 font-serif leading-relaxed max-sm:text-[16px] max-sm:leading-normal max-sm:text-justify">
        {introduction}
      </p>

      {/* Message */}
      <p className="text-[20px] text-gray-700 font-serif leading-relaxed max-sm:text-[16px] max-sm:leading-normal max-sm:text-justify">
        {message}
      </p>

      {/* List of Items */}
      <div className="space-y-4">
        {items.map((item, index) => (
          <p
            key={index}
            className="text-[20px] text-gray-700 font-serif leading-relaxed max-sm:text-[16px] max-sm:leading-normal max-sm:text-justify"
          >
            {item.text}
          </p>
        ))}
      </div>

      {/* Closing */}
      <p className="text-[20px] text-gray-700 font-serif leading-relaxed max-sm:text-[16px] max-sm:leading-normal max-sm:text-justify">
        {closing}
      </p>

      {/* Signature */}
      <div className="mt-6 text-[20px] text-gray-700 font-serif max-sm:text-[16px]">
        <p>On behalf of the Brethren,</p>
        <p className="font-bold">Bawa G. Emmanuel</p>
        <p>Coordinator, Reachout To All</p>
      </div>

      {/* Contact Info */}
      <div className="text-[18px] text-gray-600 font-serif space-y-2 max-sm:text-[14px]">
        {contact.map((item, index) => (
          <p key={index}>
            <strong>{item.label}</strong>{" "}
            {item.label === "Blog:" ? (
              <a
                href={item.value}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {item.value}
              </a>
            ) : (
              item.value
            )}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Coordinator;
