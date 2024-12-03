import {
  flexibilityImg,
  accessibilityImg,
  interactiveImg,
  costEffectivenessImg,
  herosection1,
  herosection2,
  herosection3,
  herosection4,
} from "../assets/Images/imageTransfer.js";

import React, { useState, useEffect } from "react";
import "../assets/css/HeroSection.css";

const componentsData = [
  {
    id: "flexibility",
    title: "FLEXIBILITY",
    description:
      "Say goodbye to rigid schedules! With online classes, you choose when and where you learn",
    image: flexibilityImg,
    icon: herosection1,
  },
  {
    id: "accessibility",
    title: "ACCESSIBILITY",
    description:
      "Access your courses from anywhere with an internet connection. No need to commute!",
    image: accessibilityImg,
    icon: herosection2,
  },
  {
    id: "interactive",
    title: "INTERACTIVE LEARNING",
    description:
      "Online courses engage with multimedia, discussions, and interactive tasks",
    image: interactiveImg,
    icon: herosection3,
  },
  {
    id: "cost_effectiveness",
    title: "COST-EFFECTIVENESS",
    description:
      "Online education reduces costs by eliminating commuting, housing, and campus fees",
    image: costEffectivenessImg,
    icon: herosection4,
  },
];

const HeroSection = () => {
  const [selectedComponent, setSelectedComponent] = useState("flexibility");

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedComponent((prev) => {
        const currentIndex = componentsData.findIndex(
          (component) => component.id === prev
        );
        const nextIndex =
          (currentIndex + 1) % componentsData.length; 
        return componentsData[nextIndex].id;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const selectedData = componentsData.find(
    (component) => component.id === selectedComponent
  );

  return (
    <div className="hero-section relative mt-10 mb-40">
      <div className="hero-content">
        <h1 className="text-6xl font-bold text-gray-800 mt-5 ml-20 z-50">
          Why Opt for <br /> <span className="text-customBlue-light">Online Learning?</span>
        </h1>
        <div className="components-list z-10">
          {componentsData.map((component) => (
            <div
              key={component.id}
              className={`component-item align-middle shadow-lg rounded-l-full ${
                selectedComponent === component.id ? "active" : ""
              }`}
            >
              <div className="component-icon"><img src={component.icon} alt="" /></div>
              <div className="flex flex-col box-title">
                <h3 className="font-bold">{component.title}</h3>
                <p>{component.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-image absolute animate-pulse">
        <img
        src={selectedData.image} 
        alt={selectedData.title} />
      </div>
    </div>
  );
};

export default HeroSection;