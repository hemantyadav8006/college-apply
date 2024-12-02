import { useState } from "react";
import CourseCard from "./CourseCard";
import Pagination from "./Pagination";

const Courses = ({ courses }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedCourses = courses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold">Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {paginatedCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <Pagination
        totalItems={courses.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </section>
  );
};

export default Courses;
