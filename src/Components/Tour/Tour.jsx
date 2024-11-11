import React from "react";
import River from "../../assets/projects/Rectangle 2492.png";
import Arochukwu from "../../assets/projects/Rectangle 2493.png";
import Umuahia from "../../assets/projects/Rectangle 2494.png";
import hands from "../../assets/projects/hands 1 (1).png";
import traveller from "../../assets/projects/travelling 1 (1).png";
import tour from "../../assets/projects/tour-guide 1 (1).png";
import Mteam from "../../assets/projects/medical-team 1 (1).png";
// import "./Trip.css";
// import Trip from '../Components/Trip/Trip'
import "./Tour.css";

const Tour = () => {
  return (
    <div className="tour-container">
      <h1>Outstanding Tour</h1>
      <p>
        Abia, is one of the best state in Nigeria is moving from a mega city to
        a smart city where technology will drive <br /> development, innovations
        and security in the stride to grow from the 5th to the 3rd largest
        economy in Africa.
      </p>
      <div className="image-gallery">
        <div className="image-container">
          <img src={River} alt="rectangle-img" />
          <h2>Azumini Blue River</h2>
          <span className="img-content2">Azumini</span>
        
        </div>
        <div className="image-container">
          <img src={Arochukwu} alt="rectangle-img2" />
          
          <h2>Arochukwu Cave</h2>
          <span className="img-content">Arochukwu</span>

        </div>
        <div className="image-container">
          <img src={Umuahia} alt="rectangle-img3" />
          <h2>National War Museum</h2>
          <span className="img-content1">Umuahia</span>
        </div>
      </div>

  
      <div className="tour-header-component">
        <h2>Plan Your Trip</h2>
     <p>Discover the best of Abia</p>
      </div>
      <div className="tour-image-component">
        <div className="tour-photo-component1">
          <img src={tour} alt="tour-img" />
        
          <h4>Where to Stay</h4>
          <p>
            We have a lot of Hotels all across Abia state the can make your stay
            beautiful.
          </p>
      
          
        </div>
        <div className="tour-photo-component2">
          <img src={traveller} alt="travels-img" />
      
          <h4>Travel</h4>
          <p>
            Our Travel agent can provide any booking of your choice and
            location.
          </p>
      
          
        </div>
        <div className="tour-photo-component3">
          <img src={hands} alt="hands-img" />
         
          <h4>What to See</h4>
          <p>
            So many beautiful pleases to visit and tour with a large experience.
          </p>
        
          
        </div>
        <div className="tour-photo-component4">
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

export default Tour;
