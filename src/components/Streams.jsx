import React from "react";
import "../assets/css/Streams.css";
import {
  vector,
  vector1,
  vector2,
  vector3,
  vector4,
  vector5,
  vector6,
} from "../assets/Images/imageTransfer.js";

const PopularStreams = () => {
  const streams = [
    { title: "Technology Courses", icon: vector },
    { title: "Data Science Courses", icon: vector1 },
    { title: "Management Courses", icon: vector2 },
    { title: "Degree Programs Courses", icon: vector3 },
    { title: "Creativity & Design Courses", icon: vector4 },
    { title: "Emerging-Non CS Course", icon: vector5 },
    { title: "Healthcare Courses", icon: vector6 },
  ];

  return (
    <div className="popular-streams">
      <h2 className="section-title">
        <span className="highlight">Popular</span> Streams
      </h2>
      <div className="stream-cards">
        {streams.map((stream, index) => (
          <div key={index} className="stream-card">
            <div className="stream-icon">
              <img src={stream.icon} alt={stream.title} />
            </div>
            <p className="stream-title">{stream.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularStreams;
