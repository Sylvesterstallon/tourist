import React from "react";
import "./Europe.css";
import desktop1 from "../../assets/projects/desktophoto1.png";
import Destination2 from "../../assets/projects/Destination 2.png";
import Destination3 from "../../assets/projects/Destination 3.png";
import Destination4 from "../../assets/projects/Destination 4.png";
import mask from "../../assets/projects/Mask Group.png";
import { motion } from "framer-motion";

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

const Europe = () => {
  return (
    <div className="Europe-section">
      <div className="first-europe">
        <motion.h4
 whileInView={{opacity: 1, y: 0}}
 initial={{opacity: 0, y:-100}}
 transition={{duration: 1.5}}
        >PROMOTION</motion.h4>
        <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        >
          We Provide You Best Eastern <br />
          Sightseeing Tours
        </motion.h2>
        <motion.p
        whileInView={{opacity:1, x: 0}}
        initial={{opacity:0, x: 100}}
        transition={{duration: 0.5}}
       
        >
          Abia, is one of the best state in Nigeria is moving from a mega city
          to a smart city where technology will drive development, innovations
          and security in the stride to grow from the 5th to the 3rd largest
          economy in Africa.
        </motion.p>
        <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }} 
        
        className="image-column">
          <motion.div
           variants={iconVariants(2.5)}
           initial="initial"
           animate="animate"
          
          className="overlap">
            <img
        //      whileInView={{opacity: 3, y: 0}}
        //      initial={{opacity: 0, y: -100}}
        //  transition={{duration: 1.5}}
             src={desktop1} alt="desktop1" />
            <p
        //     whileInView={{opacity: 3, y: 0}}
        //     initial={{opacity: 0, y: 100}}
        // transition={{duration: 1.5}}
            >
              Azumini Blue <br /> River
            </p>
          </motion.div>
          <div className="overlap">
            <img src={Destination2} alt="destination2" />
            <motion.p
            whileInView={{opacity: 3, y: 0}}
            initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
            >
              Aba Nigeria <br /> Temple
            </motion.p>
          </div>
          <div className="overlap">
            <motion.img
             whileInView={{opacity: 3, y: 0}}
             initial={{opacity: 0, y: -100}}
         transition={{duration: 1.5}}
             src={Destination3} alt="destination3" />
            <motion.p
            whileInView={{opacity: 3, y: 0}}
            initial={{opacity: 0, y: 100}}
        transition={{duration: 1.5}}
            >
              National War <br /> Museum
            </motion.p>
          </div>
          <div className="overlap">
            <img src={Destination4} alt="destination4" />
          </div>
        </motion.div>
      </div>

      <div className="europe-tunnel">
        <img src={mask} alt="mask2" />
      </div>
    </div>
  );
};

export default Europe;
