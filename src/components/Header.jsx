import { useState } from "react";
import { IoMdArrowDropdown, IoIosSearch } from "react-icons/io";
import { logo } from "../assets/Images/imageTransfer";
import { motion } from "motion/react";
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
    <motion.header
      className="bg-customBlue-default text-white flex justify-between items-center px-6 py-4 z-10 relative w-full nav-header"
      initial={{ y: -500 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.3 }}
    >
      {/* Logo */}
      <motion.div
        className="flex items-center space-x-2"
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <img
          src={logo}
          alt="Kollege Apply"
          className="logo w-15 h-8 ml-6 pl-10"
        />
      </motion.div>

      {/* Navigation Menu */}
      <motion.nav
        className="flex space-x-5 items-center text-sm navigation"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <motion.div
          className="relative group flex items-center space-x-1"
          whileHover={{ scale: 1.1, originX: 0, color: "#ffe7df" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <a href="#" className="hover:underline flex items-center">
            Management
          </a>
          <IoMdArrowDropdown />
        </motion.div>

        <motion.div
          className="relative group flex items-center space-x-1"
          whileHover={{ scale: 1.1, originX: 0, color: "#ffe7df" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <a href="#" className="hover:underline flex items-center">
            Technology
          </a>
          <IoMdArrowDropdown />
        </motion.div>

        <motion.div
          className="relative group flex items-center space-x-1"
          whileHover={{ scale: 1.1, originX: 0, color: "#ffe7df" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <a href="#" className="hover:underline flex items-center">
            Data Science
          </a>
          <IoMdArrowDropdown />
        </motion.div>

        <motion.div
          className="relative group flex items-center space-x-1"
          whileHover={{ scale: 1.1, originX: 0, color: "#ffe7df" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <a href="#" className="hover:underline flex items-center">
            Finance
          </a>
          <IoMdArrowDropdown />
        </motion.div>

        <motion.div
          className="relative group flex items-center space-x-1"
          whileHover={{ scale: 1.1, originX: 0, color: "#ffe7df" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <a href="#" className="hover:underline flex items-center">
            Creativity & Design
          </a>
          <IoMdArrowDropdown />
        </motion.div>

        <motion.div
          className="relative group flex items-center space-x-1"
          whileHover={{ scale: 1.1, originX: 0, color: "#ffe7df" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <button
            className="hover:underline flex items-center"
            onClick={toggleDropdown}
          >
            More
          </button>
          <IoMdArrowDropdown />
          {dropdownVisible && (
            <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-lg">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
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
        </motion.div>
      </motion.nav>

      {/* Search Bar */}
      <motion.form
        onSubmit={handleSearch}
        className="flex space-x-2 items-center mr-10"
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-customBluetransparent px-4 py-1 rounded-full outline-none text-white text-sm"
          whileHover={{ scale: 1.01, originX: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        {/* <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-1 rounded-full flex items-center hover:bg-orange-400"
        >
          <IoIosSearch className="mr-1" /> Search
        </button> */}
      </motion.form>
    </motion.header>
  );
};

export default Header;
