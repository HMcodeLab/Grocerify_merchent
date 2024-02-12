import React from "react";
import { MoreStore } from "../pages/MoreStore";
import { Link } from "react-router-dom";
import "../styles/FeaturedStore.css";

const OrderNow = () => {
  return (
    <div className="order-now">
      <img src="../assests/images/ordernowgp.svg" alt="Order Now" />
      <Link to={"/morestore"} >
      <button className="order-now-btn">ORDER NOW</button></Link>
    </div>
  );
};

export default OrderNow;
