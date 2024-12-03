import React, { useState } from "react";
import "../assets/css/TopOnlineColleges.css";
import {
  icon,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  ButtonNext,
  ButtonPrevious,
} from "../assets/Images/imageTransfer.js";

const TopOnlineColleges = () => {
  const colleges = [
    { name: "UPES Online", logo: icon },
    { name: "Amity University Online", logo: icon1 },
    {
      name: "Online Manipal University",
      logo: icon2,
    },
    { name: "Jain University Online", logo: icon3 },
    {
      name: "DY Patil University Online",
      logo: icon4,
    },
    { name: "Parul University Online", logo: icon5 },
    { name: "IIT Madras Online", logo: icon6 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerView = 5;
  const totalItems = colleges.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - itemsPerView : prevIndex - itemsPerView
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerView >= totalItems ? 0 : prevIndex + itemsPerView
    );
  };

  return (
    <div className="top-online-colleges">
      <h2 className="section-title1">
        Top <span className="highlight">Online Colleges</span>
      </h2>
      <div className="carousel-container">
        <button className="carousel-button prev" onClick={handlePrev}>
          <img src={ButtonPrevious} alt="" />
        </button>
        <div className="carousel">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${(currentIndex / totalItems) * 100}%)`,
            }}
          >
            {colleges.map((college, index) => (
              <div key={index} className="carousel-item">
                <img
                  src={college.logo}
                  alt={college.name}
                  className="college-logo"
                />
                <p className="college-name">{college.name}</p>
              </div>
            ))}
          </div>
        </div>
        <button className="carousel-button next" onClick={handleNext}>
          <img src={ButtonNext} alt="" />
        </button>
      </div>
      <p className="view-all">
        <a href="#">View all colleges &#x2192;</a>
      </p>
    </div>
  );
};

export default TopOnlineColleges;
