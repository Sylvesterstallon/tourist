import React from "react";
import "./ExAbia.css";
import { Link } from "react-router-dom";
import logo from "../../assets/projects/appLogo 1.png";
import group4 from "../../assets/projects/Group 4.png";
import group5 from "../../assets/projects/Group 5.png";
import search from "../../assets/projects/search-status.png";
import { FaArrowRightLong } from "react-icons/fa6";
import bar from "../../assets/projects/vert bar.png"
import substract from "../../assets/projects/Subtract.png"
import substract2 from "../../assets/projects/Subtract (1).png"

const ExAbia = () => {
  return (
    <div className="exploreabia-container">
      <nav className="navbar">
        <div className="logo-section">
          <Link to="/" className="navbar-tittle">
            <img src={logo} alt="applogo" />
            <h1>Explore Abia</h1>
          </Link>
          <div className="make-we-move">
            <img src={group5} alt="group5" className="group5-img"/>
            <img src={group4} alt="group4" className="group4-img"/>
          </div>
        </div>

        <ul className="nav-links-items">
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Tour</a>
          </li>
          <li>
            <a href="#">Hotels</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <img src={search} alt="search-status" className="link-img" />
          </li>
        </ul>
      </nav>

      <img src={bar} alt="line" className="bar"/>
      {/* <img src={frame2} alt="frame-2" className="frame"/> */}

      <div className="content">
        <h1>EXPLORE ABIA</h1>
        <p>Discover your utimate holiday vibe through Abia's amazing</p>
        <button>Explore
        <FaArrowRightLong className="icon2" />{" "}
        </button>
      </div>


      <div className="substract-img">
        <img src={substract} alt="substract-img" />
        <p className="tour">Tour</p>
        <img src={substract2} alt="substract-img2" />
        <p className="hotels">Hotel s</p>
        
      </div>
    </div>
  );
};

export default ExAbia;
