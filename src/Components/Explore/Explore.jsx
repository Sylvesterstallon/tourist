import React from "react";
import "./Explore.css";
import Rectangle from "../../assets/projects/Rectangle 19301.png";
import Promotion from "../../assets/projects/Rectangle 19302.png";
const Explore = () => {
  return (
    <div className="explore-container">
      <div className="left-side">
        <img src={Rectangle} alt="rectangle-image" className="image1" />

        <h4>PROMOTION</h4>
        <h2>Explore Culture</h2>
      </div>
      <div className="right-side">
        <img src={Promotion} alt="promotion-img2" className="image1" />

        <h4>PROMOTION</h4>
        <h2>Explore Cities</h2>
      </div>
    </div>
  );
};

export default Explore;
