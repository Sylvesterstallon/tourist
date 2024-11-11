import React from "react";
import "./Places.css";
import photo1 from "../../assets/projects/Rectangle 9078.png";
import photo2 from "../../assets/projects/Group 3 (6).png";
import photo3 from "../../assets/projects/Group 101.png";
import photo4 from "../../assets/projects/Group 102.png";
import photo5 from "../../assets/projects/Group 103.png";
import photo6 from "../../assets/projects/Group 3 (5).png";
import photo7 from "../../assets/projects/Rectangle 9071.png";
import photo8 from "../../assets/projects/Group 106.png";
import photo9 from "../../assets/projects/Group 107.png";
import photo10 from "../../assets/projects/Group 108.png";
import photo11 from "../../assets/projects/Group 109.png";
import { motion } from "framer-motion";

const places = () => {
  return (
    <div className="places-container">
      <div className="row">
        <motion.div
whileInView={{opacity:1, x:0}}
initial={{opacity:0, x:-100}}
transition={{duration: 1}}
         className="image-wrapper">
          <img
           src={photo1} alt="img1" className="img" />
          <img src={photo2} alt="atri1" className="amakama2" />
        </motion.div>
        <motion.img
           whileInView={{opacity:1, x:0}}
           initial={{opacity:0, x: 100}}
           transition={{duration: 1}}
         src={photo3} alt="arochukwu" className="img" />
        <motion.img
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration: 1}}
         src={photo4} alt="national" className="img" />
        <motion.img
           whileInView={{opacity:1, x:0}}
           initial={{opacity:0, x: 100}}
           transition={{duration: 1}}
         src={photo5} alt="ojukwu" className="img" />
      </div>
      <div className="row">
        <motion.div
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration: 1}}
         className="image-wrapper">
          <img src={photo7} alt="murre" className="img" />
          <img src={photo6} alt="murre2" className="murre2" />
        </motion.div>
        <motion.img
         whileInView={{opacity:1, x:0}}
         initial={{opacity:0, x: 100}}
         transition={{duration: 1}}
         src={photo8} alt="naran" className="img" />
        <motion.img
         whileInView={{opacity:1, x:0}}
         initial={{opacity:0, x:-100}}
         transition={{duration: 1}}
         src={photo9} alt="akwete" className="img" />
        <motion.img
         whileInView={{opacity:1, x:0}}
         initial={{opacity:0, x: 100}}
         transition={{duration: 1}}
        src={photo10} alt="azumini" className="img" />
      </div>
      <div>
        <motion.img
         whileInView={{opacity:1, x:0}}
         initial={{opacity:0, x:-100}}
         transition={{duration: 1}}
         src={photo11} alt="swat" className="img" />
      </div>
    </div>
  );
};

export default places;
