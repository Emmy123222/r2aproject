import img from "../../assets/image1.jpg";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative space-y-5">
        <img src={img} alt="Hero" className="h-[700px] w-full object-cover" />
      </div>
    </div>
  );
};

export default Home;
