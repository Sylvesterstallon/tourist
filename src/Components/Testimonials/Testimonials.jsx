import React from "react";
import "./Testimonials.css";
import rectangle205 from "../../assets/projects/Rectangle 2509 (2).png";
import mike from "../../assets/projects/Rectangle 2511 (1).png";
import sylvester from "../../assets/projects/sylvesterstallone.jpg"

const Testimonials = () => {
  return (
    <div className="testimonials-main-container">
      <h1>Testimonials</h1>
      <div className="testimonials-img-content">
        <div className="testimonials-left">
          <img src={rectangle205} alt="frame-img" className="chisom-testimoni"/>
          <div className="chisom-mike-container">
            <div className="chisom-mike">
              <img src={mike} alt="mike-img" />
              <p>- Chisom Mike</p>
              <span>Tourists</span>
          
            </div>
           
            <p className="chisom-mike-body-content">
            My stay at this hotel was nothing short of magical. From the moment
            I stepped in, I was greeted with warm smiles and an incredibly
            hospitable staff. <br />The room's elegant decor and the breathtaking view
            from the balcony added to the charm. <br />The in-house dining options
            were delightful, offering a blend of local and international
            cuisines. I found the entire experience to be an exquisite fusion of
            luxury and comfort.
            </p>
           
          </div>
        </div>
        <div className="testimonials-right">
          <img src={rectangle205} alt="frame-img" className="testimoni-img"/>
          <div className="oluogu-sylvester-container">
            <div className="oluogu-sylvester">
              <img src={sylvester} alt="sylvester-stallone" className="stallone-profile-photo"/>
              <p>- Oluogu Sylvester</p>
              <span>Tourists</span>
            </div>
          
            <p className="sylvester-body-content">
            My stay at this hotel was nothing short of magical. From the moment
            I stepped in, I was greeted with warm smiles and an incredibly
            hospitable staff. <br />The room's elegant decor and the breathtaking view
            from the balcony added to the charm. <br />The in-house dining options
            were delightful, offering a blend of local and international
            cuisines. I found the entire experience to be an exquisite fusion of
            luxury and comfort.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
