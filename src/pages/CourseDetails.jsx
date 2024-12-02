import { useParams } from "react-router-dom";
import Header from "../components/Header";
const CourseDetails = () => {
  const { id } = useParams();

  // Mock data for demonstration
  const course = {
    id,
    title: "Web Development Bootcamp",
    description: "Learn web development with hands-on projects.",
    duration: "100 hours",
    price: "₹20,000",
  };

  return (
    <>
      <div className="p-8">
        <h1 className="text-3xl font-bold">{course.title}</h1>
        <p className="mt-4">{course.description}</p>
        <p className="mt-2 text-gray-600">Duration: {course.duration}</p>
        <p className="mt-4 font-bold text-blue-600">Price: {course.price}</p>
      </div>
    </>
  );
};

export default CourseDetails;
