import "../assets/css/PopularSpecialisations.css";
import React, { useState } from "react";
import arrow from "../assets/Images/arrow.png";
const PopularSpecialisations = () => {
  const categories = ["Management", "Engineering", "Medical", "Label", "Label"];
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
      <div className="categories">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-button ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="course-list">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <p className="course-title">{course.title}</p>
            <span className="course-icon">
              <img src={arrow} alt="" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSpecialisations;
