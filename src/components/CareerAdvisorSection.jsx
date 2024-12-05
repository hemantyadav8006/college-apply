import React from "react";
import { motion } from "motion/react";
import "../assets/css/CareerAdvisorSection.css";
import { careerBackground, freeIcon } from "../assets/Images/imageTransfer.js";

const CareerAdvisorSection = () => {
  return (
    <div className="career-advisor-section carouselContainer relative">
      <img
        src={careerBackground}
        alt=""
        className="absolute -z-1 top-0 carouselImage"
      />
      <p className="title z-10">Get a professional advisor for your career</p>
      <div className="button-group">
        <motion.button
          className="btn get-updates z-10"
          whileTap={{ scale: 0.85 }}
        >
          Get Updates
        </motion.button>
        <motion.button
          className="btn get-callback relative"
          whileTap={{ scale: 0.85 }}
        >
          Get a callback
        </motion.button>
        <img src={freeIcon} className="absolute free-badge animate-bounce" />
      </div>
    </div>
  );
};

export default CareerAdvisorSection;
