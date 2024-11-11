import React from "react";
import "./Desktop.css";
import desktop1 from "../../assets/projects/desktophoto1.png";
import desktop2 from "../../assets/projects/desktophoto2.png";
import desktop3 from "../../assets/projects/desktophoto3.png";
import scroll from "../../assets/projects/Scroll.png";
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: "infinity",
      repeatType: "reverse",
    },
  },
});

const Desktop = () => {
  return (
    <div className="hero-section">
      <div className="left-column">
        <motion.h1
         whileInView={{opacity: 3, y: 0}}
          initial={{opacity: 0, y:-100}}
      transition={{duration: 1.5}}
        >AbiaTours</motion.h1>
        <motion.p
         whileInView={{opacity:1, x: 0}}
         initial={{opacity:0, x: 100}}
         transition={{duration: 0.5}}
        
        className="abaiatours-description">
          Discover your utimate holiday vibe through Abia's amazing tours,
          shopping entertainment and attractions
        </motion.p>
        <button className="button-icon">Discover More</button>
        <img src={scroll} alt="scroll-image" />
      </div>
      <motion.div 
        whileInView={{opacity:1, x: 0}}
        initial={{opacity:0, x: 100}}
        transition={{duration: 0.5}}
      className="right-column">
        <div className="image-container">
          <img src={desktop1} alt="image1" />
          <motion.p
          whileInView={{opacity: 3, y: 0}}
          initial={{opacity: 0, y: 100}}
      transition={{duration: 1.5}}
           className="img-container-content">Azumini Blue River</motion.p>
        </div>

        <img src={desktop2} alt="image2" className="img-desktop1" />
        <img src={desktop3} alt="image3" className="img-desktop2" />
      </motion.div>
    </div>
  );
};

export default Desktop;
