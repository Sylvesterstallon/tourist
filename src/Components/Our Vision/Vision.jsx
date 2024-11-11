import React from 'react'
import './Vision.css'
import bunker from "../../assets/projects/Rectangle 2499.png"
import cave from "../../assets/projects/Rectangle 2516.png"
import wooden from "../../assets/projects/Rectangle 2514.png"
import river from "../../assets/projects/Rectangle 2515.png"
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion"

const Vision = () => {
  return (
    <div className='vision-component'>
      <div className='vision-header'> <motion.h1
        whileInView={{opacity: 3, y: 0}}
        initial={{opacity: 0, y:-100}}
    transition={{duration: 1.5}}
      >Our Vision</motion.h1>   
          <p>Be one of the TOP-FIVE URBAN TOURISM destination in Africa
            and recognised, as the Face of Art in Africa for its multiple
            creative and innovative tourism products and experiences</p> 

            <button>Explore <FaArrowRightLong className="icon" /></button>  </div>
         
            <div className='image-container'>
              <motion.div     
             
               className='image-box top'>
                <img src={bunker} alt="img1" />
                <h4>Ojukwu Bunker</h4>
              </motion.div>
              <motion.div className='image-box left'>
                <img src={cave} alt="img2" />
                <h4>Arochukwu Cave</h4>

              </motion.div>
              <motion.div className='image-box right'>
                <img src={wooden} alt="img3" />
                <h4>Amakama Wooden Cave</h4>

              </motion.div>
              <motion.div className='image-box bottom'>
                <img src={river} alt="img4" />
                <h4>Azumini Blue River</h4>

              </motion.div>
              </div>    
      
    </div>
  )
}

export default Vision
