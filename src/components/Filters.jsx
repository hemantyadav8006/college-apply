import { useState } from "react";
import CourseCard from "./CourseCard";

const Courses = ({ courses }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold">Courses</h2>
      <div className="flex space-x-4 mt-4">
        {["All", "Technology", "Design", "Marketing"].map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className={`px-4 py-2 rounded ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default Courses;
