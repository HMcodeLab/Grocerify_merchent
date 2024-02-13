import React from "react";
import { MoreStore } from "../pages/MoreStore";
import { Link } from "react-router-dom";

const AllStores = () => {
  return (
    <div className="store1">
      <div className="store1-text">
        <h3>FEATURED STORE</h3>
        <h4>
          Show More <span className="arrow-down-icon">&#9660;</span>
        </h4>
      </div>

      <div className="img-featured">
        <Link to={"/morestore"}i className="img-featured-overlay">
           <div className="overlay"> </div> 
              <div className="h1">WOODEN LIFE STORE</div>
          <div className="overlay-address">
            <div className="div1">
              <p>Shop No, 2284/3, Mariwala Town</p>
              <h6>FURNITURE STORE</h6>
            </div>
            <div className="div2">
              <p>1km</p>
              <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
            </div>
          </div>
        </Link>

        <div className="img-featured-overlay ">
        <div className="overlay"> </div>
          <div className="h1">WOODEN LIFE STORE</div>
          <div className="overlay-address">
            <div className="div1">
              <p>Shop No, 2284/3, Mariwala Town</p>
              <h6>FURNITURE STORE</h6>
            </div>
            <div className="div2">
              <p>1km</p>
              <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllStores;
