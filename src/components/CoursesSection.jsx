import "../assets/css/CoursesSection.css";
import React from "react";

const courses = [
  {
    id: 1,
    title: "Content Marketing Certification Course",
    rating: 4.7,
    fees: "₹12L - ₹25L",
    providers: "12+",
    features: ["Globally Recognised Certificate"],
  },
  {
    id: 2,
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    rating: 4.7,
    fees: "₹12L - ₹25L",
    providers: "12+",
    features: ["Live Classes"],
  },
  {
    id: 3,
    title: "Online MBA in Finance",
    rating: 4.7,
    fees: "₹12L - ₹25L",
    providers: "12+",
    features: ["1:1 Mentorship"],
  },
  {
    id: 4,
    title: "Web Developer Course 3.0",
    rating: 4.7,
    fees: "₹12L - ₹25L",
    providers: "12+",
    features: ["Industry Recognised Certificate"],
  },
];

const trendingCourses = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    rating: 4.7,
    features: ["Live Classes", "Industry Recognised Certificate"],
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    rating: 4.7,
    features: ["Live Classes", "Industry Recognised Certificate"],
  },
  {
    id: 3,
    title: "Web Development Bootcamp",
    rating: 4.7,
    features: ["Live Classes", "Industry Recognised Certificate"],
  },
];

const whatsNew = [
  {
    id: 1,
    date: "June 12, 2025",
    description: "MBA Placements 2024: Check Report, Highest & Average Package",
  },
  {
    id: 2,
    date: "June 19, 2025",
    description: "MBA Placements 2024: Check Report, Highest & Average Package",
  },
  {
    id: 3,
    date: "June 19, 2025",
    description: "MBA Placements 2024: Check Report, Highest & Average Package",
  },
];

const CourseCard = ({ title, rating, fees, providers, features }) => (
  <div className="course-card">
    <h3 className="course-title">{title}</h3>
    <p className="course-rating">⭐ {rating}</p>
    <p className="course-fees">Fees: {fees}</p>
    <p className="course-providers">Providers: {providers}</p>
    <p className="course-features">Key Features: {features.join(", ")}</p>
    <button className="enroll-button">Enroll Now</button>
  </div>
);

const TrendingCard = ({ title, rating, features }) => (
  <div className="trending-card">
    <h3 className="trending-title">{title}</h3>
    <p className="trending-rating">⭐ {rating}</p>
    <p className="trending-features">Key Features: {features.join(", ")}</p>
    <button className="enroll-button">Enroll Now</button>
  </div>
);

const CoursesSection = () => {
  return (
    <div className="courses-section">
      {/* Filters and Header */}
      <div className="filters-header">
        <h2>Courses (4,657 results)</h2>
        <div className="active-filters">
          <span>&lt;30mins</span>
          <span>Certificate</span>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="courses-grid">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>

      {/* Trending Section */}
      <div className="trending-courses">
        <h2>Trending Courses</h2>
        <div className="trending-grid">
          {trendingCourses.map((course) => (
            <TrendingCard key={course.id} {...course} />
          ))}
        </div>
      </div>

      {/* What's New Section */}
      <div className="whats-new">
        <h2>What’s New & What’s Next?</h2>
        <ul className="whats-new-list">
          {whatsNew.map((item) => (
            <li key={item.id}>
              <strong>{item.date}</strong>: {item.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CoursesSection;
