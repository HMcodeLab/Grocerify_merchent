import React, { useState } from "react";
import { Link } from "react-router-dom";

const SellerRateUs = ({ onClose }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`flex flex-col gap-8 pl-10 pr-10 pt-10 pb-10 ${
        isHovered ? "overflow-auto" : "overflow-hidden"
      }`}
      style={{ maxHeight: "600px" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-row gap-4 text-2xl font-Gorditas items-center text-[#333333]">
        {" "}
        <Link to="/sellersettings" className="text-3xl" onClick={onClose}>
          {" "}
          {" < "}{" "}
        </Link>
        RATE US
      </div>
    </div>
  );
};

export default SellerRateUs;
