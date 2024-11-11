import React from "react";
import "./AbiaFooter.css";
import app from "../../assets/projects/appLogo 2 (1).png";
import button2 from "../../assets/projects/Button2.png";
import button from "../../assets/projects/Button.png";
import logoicon from "../../assets/projects/Socials.png";

const AbiaFooter = () => {
  return (
    <div className="abiafooter-container">
      <div className="abiafooter-content">
        <div className="abia-header">
          <img src={app} alt="app-logo" />
          <h1>
            EXPLORE<span>ABIA</span>
          </h1>
        </div>
        <div className="abia-contacts-card">
        <div className="abia-logo">
          <img src={button2} alt="" />
          <div>
            <p>Tel</p>
            <h3>08133784235</h3>
          </div>
        </div>
        <div className="abia-logo2">
          <img src={button} alt="" />
          <div>
            <p>Mail</p>
            <h3>oluogusylvester@gmail.com</h3>
          </div>
        </div>
        </div>
        
        <div className="last-child-logo-icon">
          <img src={logoicon} alt="logo-icon" />
        </div>


      
      </div>
      <div className="list-item-content">
      <div className="abia-footer-items">
        <h2>Company</h2>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className="abia-footer-item2">
        <h2>Places</h2>
        <ul>
          <li>War Museum</li>
          <li>Azumini Blur river</li>
          <li>Ojukwu Bunker</li>
          <li>Arochukwu Cave</li>
        </ul>
      </div>
      <div className="abia-footer-item3">
        <h2>Join Our Newsletter</h2>
        <div>
          <input type="email" placeholder="Your email address" />
          <button>Subscribe</button>
        </div>

        <p>*Will send you weekly updates for your better tour packages.</p>
      </div>
      </div>
      
    </div>
  );
};

export default AbiaFooter;
