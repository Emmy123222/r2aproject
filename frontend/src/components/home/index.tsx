import Welcome from "./Welcome";
import Sidepic from "./Sidepic";
import Home from "./Home";

const Homes = () => {
  return (
    <div className="relative mx-auto container">
      <Home />
      <div className="flex gap-4  relative mx-auto">
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
