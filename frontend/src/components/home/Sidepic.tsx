import React from "react";
import image from "@/assets/image2.jpg";
import img from "@/assets/image3.jpg";
import imgs from "@/assets/image4.jpg";
import imag from "@/assets/image5.jpg";
const Sidepic = () => {
  return (
    <div className="bg-gray-100 p-5 relative ">
      <div className="space-y-5">
        {" "}
        <img src={image} alt="" className="w-[500px]   h-auto object-contain" />
        <img src={img} alt="" className="w-[500px]   h-auto object-contain" />
        <img src={imgs} alt="" className="w-[500px]   h-auto object-contain" />
        <img src={imag} alt="" className="w-[500px]   h-auto object-contain" />
      </div>
    </div>
  );
};

export default Sidepic;
