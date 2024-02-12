import React from 'react'
import "../styles/FeaturedStore.css";

const WhatsNew = () => {
  return (
    <div className="storeimg image-with-overlay">
    <img src="../assests/images/storeimg.svg" alt="what's new" />
    <div className="image-overlay">
      <h2>NEW FASHION STORE FOR GIRLS</h2>
      <p>SAVE UPTO 40% OFF</p>
    </div>
  </div>
  )
}

export default WhatsNew