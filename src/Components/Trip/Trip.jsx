import React from "react";
import "./Trip.css";
import hands from "../../assets/projects/hands 1 (1).png";
import traveller from "../../assets/projects/travelling 1 (1).png";
import tour from "../../assets/projects/tour-guide 1 (1).png";
import Mteam from "../../assets/projects/medical-team 1 (1).png";
import { motion } from "framer-motion";

const Trip = () => {
  return (
    <div className="trip-component">
      <div className="trip-header-component">
        <motion.h4
         whileInView={{opacity:1, x:0}}
         initial={{opacity:0, x:-100}}
         transition={{duration: 1}}
        >CATEGORY</motion.h4>
        <motion.h2
         whileInView={{opacity:1, x:0}}
         initial={{opacity:0, x: 100}}
         transition={{duration: 1}}
        >Plan Your Trip</motion.h2>
        <motion.p
         whileInView={{opacity:1, x:0}}
         initial={{opacity:0, x:-100}}
         transition={{duration: 1}}
        >Discover the best of Abia</motion.p>
      </div>
      <div className="trip-image-component">
        <div className="trip-photots-component1">
          <img src={tour} alt="tour-img" />

          <h4>Where to Stay</h4>
          <p>
            We have a lot of Hotels all across Abia state the can make your stay
            beautiful.
          </p>
        </div>
        <div className="trip-photots-component2">
          <img src={traveller} alt="travels-img" />
          <h4>Travel</h4>
          <p>
            Our Travel agent can provide any booking of your choice and
            location.
          </p>
        </div>
        <div className="trip-photots-component3">
          <img src={hands} alt="hands-img" />
          <h4>What to See</h4>
          <p>
            So many beautiful pleases to visit and tour with a large experience.
          </p>
        </div>
        <div className="trip-photots-component4">
          <img src={Mteam} alt="Mteam-img" />
          <h4>What to Do</h4>
          <p>
            We have a lot of exciting things to do at your stay and you will
            love it .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trip;
