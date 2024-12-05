import "../assets/css/CoursesSection.css";
import { motion } from "motion/react";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { star, rupee, scholar, file } from "../assets/Images/imageTransfer.js";

const Courses = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [expandedFilter, setExpandedFilter] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };
  const filters = [
    {
      type: "Course Type",
      options: ["Certificate", "Diploma", "Graduation", "Post Graduation"],
    },
    {
      type: "Duration",
      options: [
        "< 30mins",
        "1-5hrs",
        "10-24hrs",
        "< 1month",
        "1-3 months",
        "6 months",
        "1yr & above",
      ],
    },
    { type: "Level", options: ["Beginner", "Intermediate", "Advanced"] },
    { type: "Stream-wise", options: [] },
    { type: "Specialisation", options: [] },
    { type: "Fess range-wise", options: [] },
    { type: "Rating-wise", options: [] },
  ];

  const handleFilterChange = (filter) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]
    );
  };

  const toggleFilter = (filterType) => {
    setExpandedFilter((prev) => (prev === filterType ? null : filterType));
  };

  const courses = [
    {
      title: "Content Marketing Certification Course",
      rating: 4.7,
      fees: "₹12L - 25L",
      providers: "12+",
      features: "Live Classes | Globally Recognised Certificate",
    },
    {
      title: "Web Developer Course 3.0",
      rating: 4.7,
      fees: "₹12L - 25L",
      providers: "12+",
      features: "1:1 Mentorship | Industry Recognised",
    },
    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp",
      rating: 4.7,
      fees: "₹12L - 25L",
      providers: "12+",
      features: "Live Classes",
    },
    {
      title: "Online MBA in Finance",
      rating: 4.7,
      fees: "₹12L - 25L",
      providers: "12+",
      features: "1:1 Mentorship",
    },
    {
      title: "Online MBA in Finance",
      rating: 4.7,
      fees: "₹12L - 25L",
      providers: "12+",
      features: "1:1 Mentorship",
    },
    {
      title: "Online MBA in Finance",
      rating: 4.7,
      fees: "₹12L - 25L",
      providers: "12+",
      features: "1:1 Mentorship",
    },
  ];

  return (
    <div className="course">
      <div className="heading">
        <h2 className="section-title">COURSES</h2>
        <p>(4,567 results)</p>
      </div>

      <div className="courses-container">
        <div className="flex w-full align-middle gap-2 btns">
          <button className="btn-filter rounded-full text-black">Filter</button>
          <button className="btn-filter rounded-full text-black">Stream</button>
          <button className="btn-filter rounded-full text-black">
            Courses
          </button>
        </div>
        <div className="filters shadow-md">
          <h4 className="font-semibold">Filters</h4>
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex items-center mr-10">
            <input
              type="text"
              placeholder="Find by location"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-customGrayLight px-4 rounded-s-md outline-none text-sm search"
            />
            <motion.button
              type="submit"
              className="bg-orange-500 text-white px-3 py-2 rounded-md flex items-center hover:bg-orange-400"
              whileTap={{ scale: 0.85 }}
            >
              <IoIosSearch />
            </motion.button>
          </form>
          {filters.map((filterCategory) => (
            <div
              key={filterCategory.type}
              className="filter-category shadow-sm my-6"
            >
              <motion.h5
                className="filter-header"
                onClick={() => toggleFilter(filterCategory.type)}
                whileTap={{ scale: 0.95 }}
              >
                {filterCategory.type}
                <span
                  className={`arrow ${
                    expandedFilter === filterCategory.type ? "down" : "right"
                  }`}
                >
                  {">"}
                </span>
              </motion.h5>
              {expandedFilter === filterCategory.type && (
                <div className="filter-options">
                  {filterCategory.options.map((option) => (
                    <label key={option} className="filter-option">
                      <input
                        type="checkbox"
                        value={option}
                        onChange={() => handleFilterChange(option)}
                        checked={selectedFilters.includes(option)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="content">
          <div className="selected-filters">
            {selectedFilters.map((filter, index) => (
              <span key={index} className="filter-tag">
                {filter}{" "}
                <button onClick={() => handleFilterChange(filter)}>×</button>
              </span>
            ))}
          </div>
          <div className="courses-grid">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className="course-card1"
                whileHover={{ scale: 1.02 }}
              >
                <h3>{course.title}</h3>
                <p className="flex">
                  <span className="text-orange-400 text-sm mr-1 mt-1">
                    <img src={star} alt="" />
                  </span>
                  Rating:
                </p>
                <div>{course.rating}</div>
                <p className="flex">
                  <span className="text-orange-400 text-sm mr-1 mt-1">
                    <img src={rupee} alt="" />
                  </span>
                  Fees:
                </p>
                <div>{course.fees}</div>
                <p className="flex">
                  <span className="text-orange-400 text-sm mr-1 mt-1">
                    <img src={scholar} alt="" />
                  </span>
                  Providers:
                </p>
                <div>{course.providers}</div>
                <p className="flex">
                  <span className="text-orange-400 text-sm mr-1 mt-1">
                    <img src={file} alt="" />
                  </span>
                  Key Features:
                </p>
                <div className="features">{course.features}</div>
                <div className="flex w-full justify-end align-middle my-3">
                  <motion.button
                    className="enroll-btn rounded-full text-black"
                    whileTap={{ scale: 0.85 }}
                  >
                    Enroll Now →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
