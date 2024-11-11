import React from "react";
import "./Review.css";
import Elipse from "../../assets/projects/Ellipse 624 (1).png";
// import ri from "../../assets/projects/ri_double-quotes-l (1).png";
import arrowimg1 from "../../assets/projects/Group 1000001719 (2).png";
import arrowimg2 from "../../assets/projects/Group 1000001719 (3).png";
import travel from "../../assets/projects/Travel_Concepts_2 1 (1).png";

const Review = () => {
  return (
    <div className="Review-Container">
      <div className="Review-content">
        <h1>See What Our Clients Say About Us</h1>

        <img src={Elipse} alt="elips1" className="review-image" />
        <div>
          <h6>
            <span className="arrow-container">
              <img src={arrowimg1} alt="img3" className="arrow" />

              <span className="text">
                Thanks a million time for such a life changing experience with
                Abiatour. i really enjoyed my stay and i will love to come back
                and again. Abia state is blessed with alot of natural treasure
                inside.
              </span>

              <img src={arrowimg2} alt="img4" className="arrow" />
            </span>
          </h6>
          <h5>Christine Beckam</h5>
        </div>
      </div>
      <img src={travel} alt="img5" className="edge-img" />
    </div>
  );
};

export default Review;
