import { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Streams from "../components/Streams";
import PopularSpecialisations from "../components/PopularSpecialisations";
import TopOnlineColleges from "../components/TopOnlineColleges";
import CareerAdvisorSection from "../components/CareerAdvisorSection";
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
      <Footer />
    </>
  );
};

export default HomePage;
