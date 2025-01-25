import Welcome from "./Welcome";
import Sidepic from "./Sidepic";
import Home from "./Home";

const Homes = () => {
  return (
    <div className="relative mx-auto container max-sm:p-5 overflow-x-hidden space-y-6  ">
      <Home />
      <div className="flex gap-4 max-sm:gap-0 ">
        <div>
          <Welcome />
        </div>
        <div className="relative">
          <Sidepic />
        </div>
      </div>
    </div>
  );
};

export default Homes;
