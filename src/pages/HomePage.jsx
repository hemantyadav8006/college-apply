import { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Streams from "../components/Streams";
import PopularSpecialisations from "../components/PopularSpecialisations";
import TopOnlineColleges from "../components/TopOnlineColleges";
import CareerAdvisorSection from "../components/CareerAdvisorSection";
import Features from "../components/Features";
import Courses from "../components/Courses";
import Footer from "../components/Footer";

const HomePage = () => {
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = (query) => {
    // Mock filtering logic (replace with API integration if needed)
    const filteredCourses = mockCourses.filter((course) =>
      course.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredCourses);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <HeroSection />
      <Streams />
      <PopularSpecialisations />
      <TopOnlineColleges />
      <CareerAdvisorSection />
      <Features />
      <Courses courses={searchResults || mockCourses} />
      <Footer />
    </>
  );
};

export default HomePage;

const mockCourses = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    price: "₹20,000",
    duration: "100 hours",
  },
  {
    id: 2,
    title: "Content Marketing Certification",
    price: "₹15,000",
    duration: "60 hours",
  },
  {
    id: 3,
    title: "Content Marketing Certification",
    price: "₹15,000",
    duration: "60 hours",
  },
  {
    id: 4,
    title: "Content Marketing Certification",
    price: "₹15,000",
    duration: "60 hours",
  },
  {
    id: 5,
    title: "Content Marketing Certification",
    price: "₹15,000",
    duration: "60 hours",
  },
  {
    id: 6,
    title: "Content Marketing Certification",
    price: "₹15,000",
    duration: "60 hours",
  },
  {
    id: 7,
    title: "Content Marketing Certification",
    price: "₹15,000",
    duration: "60 hours",
  },
];
