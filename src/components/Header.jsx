import { useState } from "react";
import { IoMdArrowDropdown, IoIosSearch } from "react-icons/io";
import { logo } from "../assets/Images/imageTransfer";
import "../assets/css/Header.css";

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header className="bg-customBlue-default text-white flex justify-between items-center px-6 py-4 z-10 relative w-full nav-header">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Kollege Apply" className="logo w-15 h-8 ml-6 pl-10" />
      </div>

      {/* Navigation Menu */}
      <nav className="flex space-x-5 items-center text-sm navigation">
        <div className="relative group flex items-center space-x-1">
          <a href="#" className="hover:underline flex items-center">
            Management
          </a>
          <IoMdArrowDropdown />
        </div>

        <div className="relative group flex items-center space-x-1">
          <a href="#" className="hover:underline flex items-center">
            Technology
          </a>
          <IoMdArrowDropdown />
        </div>

        <div className="relative group flex items-center space-x-1">
          <a href="#" className="hover:underline flex items-center">
            Data Science
          </a>
          <IoMdArrowDropdown />
        </div>

        <div className="relative group flex items-center space-x-1">
          <a href="#" className="hover:underline flex items-center">
            Finance
          </a>
          <IoMdArrowDropdown />
        </div>

        <div className="relative group flex items-center space-x-1">
          <a href="#" className="hover:underline flex items-center">
            Creativity & Design
          </a>
          <IoMdArrowDropdown />
        </div>

        <div className="relative group flex items-center space-x-1">
          <button
            className="hover:underline flex items-center"
            onClick={toggleDropdown}
          >
            More
          </button>
          <IoMdArrowDropdown />
          {dropdownVisible && (
            <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-lg">
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Engineering
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Medical
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Design
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex space-x-2 items-center mr-10">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-customBluetransparent px-4 py-1 rounded-full outline-none text-white text-sm"
        />
        {/* <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-1 rounded-full flex items-center hover:bg-orange-400"
        >
          <IoIosSearch className="mr-1" /> Search
        </button> */}
      </form>
    </header>
  );
};

export default Header;
