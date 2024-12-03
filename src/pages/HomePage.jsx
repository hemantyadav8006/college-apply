import { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Streams from "../components/Streams";
import PopularSpecialisations from "../components/PopularSpecialisations";
import TopOnlineColleges from "../components/TopOnlineColleges";
import CareerAdvisorSection from "../components/CareerAdvisorSection";
import CoursesSection from "../components/CoursesSection";
import Footer from "../components/Footer";

const HomePage = () => {
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = (query) => {
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
      <CoursesSection />
      <Footer />
    </>
  );
};

export default HomePage;
