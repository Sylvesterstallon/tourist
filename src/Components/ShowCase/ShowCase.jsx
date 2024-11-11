import React from "react";
import "./ShowCase.css";
import rectangle21 from "../../assets/projects/Rectangle 21 (1).png";
import groupimg from "../../assets/projects/Group 1000005990.png";
import grup12 from '../../assets/projects/Group 12 (1).png'
import dollar from '../../assets/projects/Group 11 (2).png'
import rectangleBg from '../../assets/projects/Rectangle 18 (1).png'
import rectangle17 from '../../assets/projects/Rectangle 17 (1).png'
import options from '../../assets/projects/OPTIONS.png'
import Photoimg from "../../assets/projects/image 32.png";
import rectangle from "../../assets/projects/Rectangle 20.png";
import love from "../../assets/projects/Group (3).png";
const ShowCase = () => {
  return (
    <div className="showcase-main-container">
      <div className="showcase-container-left">
        <h2>Showcase Your Hotel With Easy</h2>
        <div className="showcase-img-group">
          <div className="showcase-pic1">
            <img src={rectangle21} alt="rectangle-img" className="img-showcase1"/>
            <img src={groupimg} alt="grup-img" className="img2" />
            <div>
              <h4>Create Account</h4>
              <p>Create a hotel owner account and login to get started</p>
            </div>
          </div>
          <div className="showcase-pic2">
                    <img src={grup12} alt="grup-img12"  className="img-showcase2"/>
                    <div>
                      <h4>Upload Hotel</h4>
                      <p>Upload your hotel and hotel rooms and make it available for booking</p>
                    </div>
          </div>
          <div className="showcase-pic3">
            <img src={dollar} alt="dollar-img" className="img-showcase3"/>
            <div>
              <h4>Make Money</h4>
              <p>Make money as your hotel rooms gets booked often</p>
            </div>

          </div>
        </div>
      </div>
      <div className="showcase-container-right">
        <img src={rectangleBg} alt="rectangle18-img" className="showcase-img-first"/>
        <div className="showcase-grup-container">
          <img src={rectangle17} alt="image4" className="reactangle-img17" />
          <h4>Trip to Abia</h4>
          <p>14-29 june | by JR Martin</p>
          <img src={options} alt="image5" className="showcase-icon" />
          <p className="people-intrested">60 people are interested</p>
          <div className="showcase-mini-photo">
            <img src={Photoimg} alt="image6" className="rounded-img" />
            <div>
              <p>Ongoing</p>
              <h4>Trip to Umuahia</h4>
              <p>
                <span>40%</span>completed
              </p>
              <img src={rectangle} alt="image7" className="=stright-rectangle-img" />
              <div className="love-img2">
                <img src={love} alt="loveimg" />
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ShowCase;
