import React from "react";
import "./Background.css";
import background from "../../assets/projects/Group 34.png";
import { motion } from "framer-motion"

const Background = () => {
  return (
    <div className="background-component">
      <motion.h2
      whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x: 100}}
      transition={{duration: 1}}

      >Our Background</motion.h2>
      <div className="background-content">
        <div className="background-text">
          <p>
            Tourism in Abia State was first fashioned in 1995 by the Military
            Administration of Captain Mike Akhigbe as a department under the
            Ministry of Home Affairs. In 1991 the Government of Chief Michael
            Otedola, removed the Tourism Department from the Ministry of Home
            Affairs and merged it with the Ministry of Information and Culture,
            thus becoming the Bureau of Information, Culture & Tourism and was
            headed by a Permanent Secretary. <br /> <br /> In 1994, the Tourism Department was
            again detached from Bureau of Information, Culture and Tourism and
            was merged with the Ministry of Commerce, Industry and Tourism
            (MCIT) and was headed by a Commissioner. <br /> <br /> During that period, the
            Lagos State Tourism Board was created out of the Tourism Department;
            the functions of the Board were strictly tourism promotion and
            marketing while on the other hand the Tourism Department was in
            charge of policy matters. <br /> In 1998, the Tourism Department and the
            Lagos State Tourism Board became a full Corporation with the name
            Lagos State Waterfront and Tourism Development Corporation (LSWTDC)
            under a Managing Director
          </p>
        </div>
        <div className="background-img">
          <img src={background} alt="background-img" />
        </div>
      </div>
    </div>
  );
};

export default Background;
