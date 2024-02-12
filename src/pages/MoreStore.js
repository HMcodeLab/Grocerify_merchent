import React from "react";
import Categories from "../components/Categories";
import OrderNow from "../components/OrderNow";
import AllStores from "../components/AllStores";
import WhatsNew from "../components/WhatsNew";
import "../styles/MoreStore.css";

const MoreStore = () => {
  return (
    <div className="main">
      <div className="categories">
        <Categories />
      </div>

      <div className="rightmain">
        <div>
          <OrderNow />
          <AllStores />
          <AllStores />
          <WhatsNew />
          <AllStores />
          <AllStores />
        </div>
        <div>
          <WhatsNew />
          <AllStores />
        </div>
      </div>
    </div>
  );
};

export default MoreStore;
