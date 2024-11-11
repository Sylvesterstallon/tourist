import React, { useState } from "react";
import "./navbar.css";
// import logo from "../../assets/projects/logo (2).png";
import Arrow from "../../assets/projects/Arrow 05.png"
import { Link } from "react-router-dom";
import { navlinks } from "../../constants";
import Dropdown from "../Dropdown/Dropdown";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { motion, useAnimation } from "framer-motion"



const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);
 

  const toggleNav = () => {
    setShowNav(!showNav);

  };

  const toggleOpen = () => setIsOpen(!isOpen);

  
  return (
    <>
      <nav className={`haeder ${showNav ? "showNav" : ""}`} >
        <div className="Abiatours">
        <Link to="/explore-Abia" className="navbar-title">
        <h1>AbiaTour</h1>
        <img src={Arrow} alt="arrow-img" />
        </Link>
        
        </div>
       
        {/* <img src={logo} alt="logo" className="logo" /> */}
        {showNav ? (
          <AiFillCloseCircle onClick={toggleNav} className="close-icon" />
        ) : (
          <TbGridDots onClick={toggleNav} className="open-icon" />
        )}

        {/* {isOpen ? (
          <AiFillCloseCircle onClick={toggleOpen} />
        ) : (
          <TbGridDots onClick={toggleOpen} />
        )} */}
        <ul

        className={`navlinks ${showNav ? "active" : ""}`}
        
        >
          {navlinks.map((link) => {
            if (link.tittle === "Tourism-Establishments") { 
              return (
                <li
                
                  key={link.id}
                  className={link.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={link.path}>{link.tittle}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li
               key={link.id} className={link.cName}>
                <Link to={link.path}>{link.tittle}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
