import Believe from "./Believe";
import Call from "./Call";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 w-full p-4 space-y-4 shadow-lg max-sm:p-2 max-sm:space-y-3">
      <div className="p-4 max-sm:p-2">
        <h1 className="text-[40px] text-black font-bold flex justify-center items-center max-sm:text-[24px] max-sm:text-center">
          About Us
        </h1>
        <p className="text-[20px] text-gray-700 font-serif leading-relaxed max-sm:text-[16px] max-sm:leading-normal max-sm:text-justify">
          We are a group of believers from diverse denominations, united by a
          passion for missions. We aim to reach out to people everywhere,
          enabling their salvation, rededication, commitment, and discipleship,
          so that they may become effective tools in God's hands. We achieve
          this by prayerfully seeking and visiting mission fields, and
          partnering with local churches and agencies. We present the Gospel
          message in accordance with the Bible and entrust new converts to the
          care of local missionaries and pastors for follow-up and discipleship.
        </p>
      </div>
      <div className="max-sm:px-2">
        <Believe />
      </div>
      <div className="max-sm:px-2">
        <Call />
      </div>
    </div>
  );
};

export default AboutUs;
