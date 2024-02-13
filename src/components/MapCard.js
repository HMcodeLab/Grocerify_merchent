import React, {useState} from "react";
import MoreStore from "../pages/MoreStore";
import "../styles/FeaturedStore.css";

const MapCard = () => {

  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };
  const storeInfoData = [
    {
      image: "../assests/images/shoestore.svg",
      serialNo: "1.",
      name: "Macy’s Redmond Furniture and mattress gallery",
      distance: "12km",
      timing: "Closed - Opens 10AM",
      address: "15340 N.e. 24th Street redmond, WA 98052",
      contactNumber: "32873-27863",
    },
    {
      image: "../assests/images/shoebar.png",
      serialNo: "2.",
      name: "Macy’s Redmond Furniture and mattress gallery",
      distance: "12km",
      timing: "Closed - Opens 10AM",
      address: "15340 N.e. 24th Street redmond, WA 98052",
      contactNumber: "32873-27863",
    },
    {
      image: "../assests/images/shoestore.svg",
      serialNo: "1.",
      name: "Macy’s Redmond Furniture and mattress gallery",
      distance: "12km",
      timing: "Closed - Opens 10AM",
      address: "15340 N.e. 24th Street redmond, WA 98052",
      contactNumber: "32873-27863",
    },
    {
      image: "../assests/images/shoebar.png",
      serialNo: "2.",
      name: "Macy’s Redmond Furniture and mattress gallery",
      distance: "12km",
      timing: "Closed - Opens 10AM",
      address: "15340 N.e. 24th Street redmond, WA 98052",
      contactNumber: "32873-27863",
    },
  ];

  return (
    <div className="mapcard">
      <div className="mapcard-search">
        <h1>Store</h1>
        <p>Search by store name or distance</p>
        <input type="text" />
        <button>Search</button>
        <a href="https://www.google.com/maps">Use My Location</a>
        <a href="http://www.google.com/maps" className="direction">Browse Directory</a>
        <hr />
      </div>
      <div className="filter-result">
        <p>15 results near "tukwila"</p>
        <p>Filter By +</p>
      </div>
      <hr />

      <div className="store-slider vertical-slider">
        {storeInfoData.map((store, index) => (
          <div
            key={index}
            className={`store-info ${index === activeSlide ? "active" : ""}`}
          >
            <img src={store.image} alt="store" />
            <div className="serial-no">
              <p>{store.serialNo}</p>
              <p>{store.name}</p>
              <p>{store.distance}</p>
            </div>
            <div className="timing">
              <p>{store.timing}</p>
              <p>{store.address}</p>
            </div>
            <div className="contact">
              <a href={`tel:${store.contactNumber}`}>{store.contactNumber}</a>
              <a href="/morestore">Store Details</a>
              <a href="https://www.google.com/maps">Directions</a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default MapCard;
