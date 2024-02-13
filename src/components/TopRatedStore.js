import React from "react";
import { MoreStore } from "../pages/MoreStore";
import { Link } from "react-router-dom";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../styles/FeaturedStore.css";

const TopRatedStore = () => {
  const options = {
    items: 2,
    rewind: true,
    dots: false,
    autoplay: true,
  };
  return (
    <div className="store1">
      <div className="store1-text">
        <h2>TOP RATED STORE</h2>
        <h4>
          Show More <span className="arrow-down-icon">&#9660;</span>
        </h4>
      </div>

      <div className="carousel-div">
        <ReactOwlCarousel className="owl-theme" {...options}>
          <div className="carousel-item">
            <Link to={"/morestore"}>
              <img
                src="../assests/images/woodenstore.svg"
                className="carousel-item-img"
              />
              <h1 className="h1">WOODEN LIFE STORE</h1>
              <div className="carousel-text">
                  <h4>Shop No, 2284/3, Mariwala Town</h4>
                  <p>1km</p>
                  <h6>FURNITURE STORE</h6>
                  <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
              </div>
            </Link>
          </div>
          <div className="carousel-item">
            <Link to={"/morestore"}>
              <img
                src="../assests/images/chandigarhstore.svg"
                className="carousel-item-img"
              />
               <h1 className="h1">WOODEN LIFE STORE</h1>
              <div className="carousel-text">
                  <h4>Shop No, 2284/3, Mariwala Town</h4>
                  <p>1km</p>
                  <h6>FURNITURE STORE</h6>
                  <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
              </div>
            </Link>
          </div>
          <div className="carousel-item">
            <Link to={"/morestore"}>
              <img
                src="../assests/images/woodenstore.svg"
                className="carousel-item-img"
              />
               <h1 className="h1">WOODEN LIFE STORE</h1>
              <div className="carousel-text">
                  <h4>Shop No, 2284/3, Mariwala Town</h4>
                  <p>1km</p>
                  <h6>FURNITURE STORE</h6>
                  <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
              </div>
            </Link>
          </div>
          <div className="carousel-item">
            <Link to={"/morestore"}>
              <img
                src="../assests/images/chandigarhstore.svg"
                className="carousel-item-img"
              />
               <h1 className="h1">WOODEN LIFE STORE</h1>
              <div className="carousel-text">
                  <h4>Shop No, 2284/3, Mariwala Town</h4>
                  <p>1km</p>
                  <h6>FURNITURE STORE</h6>
                  <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
              </div>
            </Link>
          </div>
          <div className="carousel-item">
            <Link to={"/morestore"}>
              <img
                src="../assests/images/woodenstore.svg"
                className="carousel-item-img"
              />
               <h1 className="h1">WOODEN LIFE STORE</h1>
              <div className="carousel-text">
                  <h4>Shop No, 2284/3, Mariwala Town</h4>
                  <p>1km</p>
                  <h6>FURNITURE STORE</h6>
                  <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
              </div>
            </Link>
          </div>
          <div className="carousel-item">
            <Link to={"/morestore"}>
              <img
                src="../assests/images/chandigarhstore.svg"
                className="carousel-item-img"
              />
               <h1 className="h1">WOODEN LIFE STORE</h1>
              <div className="carousel-text">
                  <h4>Shop No, 2284/3, Mariwala Town</h4>
                  <p>1km</p>
                  <h6>FURNITURE STORE</h6>
                  <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
              </div>
            </Link>
          </div>
          <div className="carousel-item">
            <Link to={"/morestore"}>
              <img
                src="../assests/images/woodenstore.svg"
                className="carousel-item-img"
              />
               <h1 className="h1">WOODEN LIFE STORE</h1>
              <div className="carousel-text">
                  <h4>Shop No, 2284/3, Mariwala Town</h4>
                  <p>1km</p>
                  <h6>FURNITURE STORE</h6>
                  <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
              </div>
            </Link>
          </div>
          <div className="carousel-item">
            <Link to={"/morestore"}>
              <img
                src="../assests/images/chandigarhstore.svg"
                className="carousel-item-img"
              />
               <h1 className="h1">WOODEN LIFE STORE</h1>
              <div className="carousel-text">
                  <h4>Shop No, 2284/3, Mariwala Town</h4>
                  <p>1km</p>
                  <h6>FURNITURE STORE</h6>
                  <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
              </div>
            </Link>
          </div>
          <div className="carousel-item">
            <Link to={"/morestore"}>
              <img
                src="../assests/images/woodenstore.svg"
                className="carousel-item-img"
              />
               <h1 className="h1">WOODEN LIFE STORE</h1>
              <div className="carousel-text">
                  <h4>Shop No, 2284/3, Mariwala Town</h4>
                  <p>1km</p>
                  <h6>FURNITURE STORE</h6>
                  <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
              </div>
            </Link>
          </div>
          <div className="carousel-item">
            <Link to={"/morestore"}>
              <img
                src="../assests/images/chandigarhstore.svg"
                className="carousel-item-img"
              />
               <h1 className="h1">WOODEN LIFE STORE</h1>
              <div className="carousel-text">
                  <h4>Shop No, 2284/3, Mariwala Town</h4>
                  <p>1km</p>
                  <h6>FURNITURE STORE</h6>
                  <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
              </div>
            </Link>
          </div>
        </ReactOwlCarousel>
      </div>
    </div>
  );
};

export default TopRatedStore;
