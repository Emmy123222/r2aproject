import Welcome from "./Welcome";
import Sidepic from "./Sidepic";
import Home from "./Home";
import AboutUs from "./AboutUs";

import Coordinator from "./Coordinator";

const Homes = () => {
  return (
    <div className="relative mx-auto container max-sm:p-5 overflow-x-hidden space-y-6  ">
      <Home />
      <div className="flex gap-4 max-sm:gap-0  ">
        <div className="space-y-5 mb-6">
          <Welcome />
          <AboutUs />
          <Coordinator />
        </div>
        <div className="relative max-sm:hidden">
          <Sidepic />
        </div>
      </div>
    </div>
  );
};

export default Homes;
