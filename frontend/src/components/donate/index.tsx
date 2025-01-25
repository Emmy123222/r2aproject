import Donate from "./Donate";
import Prayer from "./Prayer";
import Volunteer from "./Volunteer";

const DonatePage = () => {
  return (
    <div className="flex flex-col p-5 mb-12 bg-gray-100 mx-auto container max-w-[700px] mt-12 rounded-[26px] sm:p-10 max-sm:p-4 max-sm:rounded-lg">
      <div className="space-y-6 max-sm:space-y-4">
        <Volunteer />
        <Donate />
        <Prayer />
      </div>
    </div>
  );
};

export default DonatePage;
