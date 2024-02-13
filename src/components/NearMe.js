import React from "react";
import MapCard from "./MapCard";
import "../styles/FeaturedStore.css";

const NearMe = () => {

  return (
    <div className="nearme">
      <div className="nearme-text">
        <h3>
          <span className="nearme-icon">
            <img src="../assests/images/storeicon.svg" />
          </span>
          Stores Near Me
        </h3>
        <h4>
          Show More <span className="arrow-down-icon">&#9660;</span>
        </h4>
      </div>

      <div className="location">
        <img src="../assests/images/location.svg" />
        <MapCard />
      </div>
    </div>
  );
};

export default NearMe;
