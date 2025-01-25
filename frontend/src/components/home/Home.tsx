import img from "../../assets/image1.jpg";

const Home = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative space-y-5">
        <img
          src={img}
          alt="Hero"
          className="h-[700px]  w-full object-cover max-sm:h-[300px]"
        />
      </div>
    </div>
  );
};

export default Home;
