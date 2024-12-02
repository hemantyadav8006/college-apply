import { Link } from "react-router-dom";

const CourseCard = ({ course }) => (
  <div className="bg-white shadow-md rounded p-4">
    <h3 className="font-bold text-lg">{course.title}</h3>
    <p className="text-gray-600 mt-2">Duration: {course.duration}</p>
    <p className="font-bold text-blue-600 mt-4">Price: {course.price}</p>
    <Link
      to={`/course/${course.id}`}
      className="mt-4 inline-block bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
    >
      View Details
    </Link>
  </div>
);

export default CourseCard;
