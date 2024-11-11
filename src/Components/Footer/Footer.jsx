import React from "react";
import "./Footer.css";
import logo from "../../assets/projects/logo (5).png";
import group from "../../assets/projects/Group 169.png";
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-items">
        <img src={logo} alt="img1" className="img1"/>
        <p>Tour with easy and get explore with AbiaTour.</p>
        <img src={group} alt="img2" className="img2"/>
      </div>
      <motion.div
      whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:-100}}
      transition={{duration: 1}}
      
      className="footer-items1">
        <h2>Company</h2>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Pricing</li>
        </ul>
      </motion.div>
      <motion.div
   whileInView={{opacity:1, x:0}}
   initial={{opacity:0, x: 100}}
   transition={{duration: 1}}

      className="footer-items2">
        <h2>Places</h2>
        <ul>
          <li>War Museum</li>
          <li>Azumini Blur river</li>
          <li>Ojukwu Bunker</li>
          <li>Arochukwu Cave</li>
        </ul>
      </motion.div>
      
      <motion.div
       whileInView={{opacity:1, y:0}}
       initial={{opacity:0, y:-100}}
       transition={{duration: 0.5}}
       className="footer-items">
        <h2>Join Our Newsletter</h2>
        <div>
          <input type="email" placeholder="Your email address" />
          <button>Subscribe</button>
        </div>

        <p>*Will send you weekly updates for your better tour packages.</p>
      </motion.div>
    </div>
  );
};

export default Footer;
