import React from "react";
import Categories from "../components/Categories";
import Stores from "../components/Stores";
import NearMe from "../components/NearMe";
import Ratings from "../components/Ratings";
import OrderNow from "../components/OrderNow";
import "../styles/FeaturedStore.css";

const FeaturedStore = () => {
  return (
    <div className="main">
      <div className="categories">
        <Categories />
      </div>

      <div className="rightmain">
        <div>
          <OrderNow/>
        </div>
        <div>
          <Stores />
        </div>

        <div>
          <NearMe />
        </div>
        <div>
          <Ratings />
        </div>
      </div>

    </div>
  );
};

export default FeaturedStore;
