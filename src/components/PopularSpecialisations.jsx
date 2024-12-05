import "../assets/css/PopularSpecialisations.css";
import React, { useState } from "react";
import { arrow, pin } from "../assets/Images/imageTransfer.js";
import { motion } from "motion/react";
const PopularSpecialisations = () => {
  const categories = [
    "Management",
    "• Engineering",
    "• Medical",
    "• Accountant",
    "• Computer Science",
    "• Mathematics",
    "• Label",
    "• Label",
  ];
  const [activeCategory, setActiveCategory] = useState("Management");

  const courses = [
    { title: "Online M.Sc", category: "Management" },
    {
      title: "Online Bachelors of Design in User Experience",
      category: "Management",
    },
    {
      title: "Online Post Graduation Diploma & Certificate",
      category: "Management",
    },
    { title: "Online MBA", category: "Management" },
    { title: "Online PG Diploma & Certificate", category: "Management" },
    { title: "Online PG Diploma & Certificate", category: "Management" },
    { title: "Online M.Sc", category: "Management" },
    { title: "Online M.Sc", category: "Management" },
    { title: "Online M.Sc", category: "Management" },
    { title: "Online M.Sc", category: "Management" },
  ];

  return (
    <div className="popular-specialisations">
      <h2 className="section-title">
        Most Popular <span className="highlight">Specialisations</span>
      </h2>
      <div className="categories relative flex items-center justify-start gap-4 flex-nowrap overflow-x-auto">
        <img className="absolute -left-3 -top-1" src={pin} alt="pin" />
        {categories.map((category, index) => (
          <motion.button
            key={index}
            className={`category-button flex-shrink-0 ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
            whileTap={{ scale: 0.55 }}
          >
            {category}
          </motion.button>
        ))}
      </div>
      <div className="course-list">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className="course-card cursor-pointer"
            whileTap={{ scale: 0.55 }}
          >
            <p className="course-title">{course.title}</p>
            <span className="course-icon">
              <img src={arrow} alt="arrow" />
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PopularSpecialisations;
