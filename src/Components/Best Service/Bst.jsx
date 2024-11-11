import React from "react";
import "./Bst.css";
import picture1 from "../../assets/projects/Group 7 (1).png";
import picture2 from "../../assets/projects/Group 12.png";
import picture3 from "../../assets/projects/Group 11 (1).png";
import picture4 from "../../assets/projects/Rectangle 17.png";
import picture5 from "../../assets/projects/image 872.png";
import options from "../../assets/projects/OPTIONS.png";
import Photoimg from "../../assets/projects/image 32.png";
import rectangle from "../../assets/projects/Rectangle 20.png";
import love from "../../assets/projects/Group (3).png";

const Bst = () => {
  return (
    <div className="best-service-container">
      <div className="best-service-left">
        <h3>Fast & Easy</h3>
        <h2>Get Your Favourite Resort Bookings</h2>

        <div className="image-group">
          <div className="picture1">
            <img src={picture1} alt="img1" />
            <div>
              <h4>Choose Destination</h4>
              <p>Choose the country/state where you plan to visit</p>
            </div>
          </div>
          <div className="picture2">
            <img src={picture2} alt="img2" />
            <div>
              <h4>Check Availability</h4>
              <p>Check to know the availability of your prefer destination</p>
            </div>
          </div>

          <div className="picture3">
            <img src={picture3} alt="img3" />
            <div>
              <h4>Let’s Go</h4>
              <p>Just click on the confirm button and you are ready to Go.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="best-service-right">
        
        <img src={picture5} alt="img5" className="Background-Pic" />
      
        
        <div className="image-group-container">
          <img src={picture4} alt="image4" className="wrapper" />
          <h4>Trip to Abia</h4>
          <p>14-29 june | by JR Martin</p>
          <img src={options} alt="image5" className="icons" />
          <p>60 people are interested</p>
          <div className="miniphoto">
            <img src={Photoimg} alt="image6" className="mini-img" />
            <div>
              <p>Ongoing</p>
              <h4>Trip to Umuahia</h4>
              <p>
                <span>40%</span>completed
              </p>
              <img src={rectangle} alt="image7" className="rectangle-img" />
              <div>
                <img src={love} alt="loveimg" className="love-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bst;
