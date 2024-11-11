import React from "react";
import "./BlueExplore.css";
import recimg1 from "../../assets/projects/Rectangle 2507.png";
import { FaArrowRightLong } from "react-icons/fa6";

const BlueExplore = () => {
  return (
    <div className="bluexplore-container">
      <img src={recimg1} alt="" />
      <div className="bluexplore-content">
        <h1>Explore Abia</h1>
        <p>
          Abia, is one of the best state in Nigeria is moving from a mega city
          to a smart city where technology will drive development, innovations
          and security in the stride to grow from the 5th to the 3rd largest
          economy in Africa. bet
          <button>Explore
        <FaArrowRightLong className="icon2" />{" "}
        </button>
        </p>
     
      </div>
    </div>
  );
};

export default BlueExplore;
