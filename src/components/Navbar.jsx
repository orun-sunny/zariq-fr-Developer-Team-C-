import { useState } from "react";
import { FaShoppingCart, FaSearch, FaBars, FaFacebook } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import image1 from "../../src/assets/SCHOOL-OF-LIFE.png";
import { BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const context = useAppContext();
  const cartItems = context ? context.cartItems : [];

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div id="Home">
      {/* For large Device */}
      <div className="hidden sm:block">
        {/* Navigation Bar */}
        <nav className=" bg-white p-8 flex  justify-evenly shadow-md">
          {/* Logo (Left) */}
          <Link to={"/"} className="flex items-center mx-8">
            <img src={image1} alt="Logo" className="h-24 mr-6" />
          </Link>

          {/*  (Middle) */}
          <div className="hidden md:flex  space-x-8 px-6 py-4">
            <button className="bg-[#562e97] text-white text-xs md:text-sm lg:text-xl px-2 py-1 rounded-lg lg:px-4 lg:py-2">
              Portal Login
            </button>
            <button className="bg-[#562e97] text-white text-xs md:text-sm lg:text-xl px-2 py-1 rounded-lg lg:px-4 lg:py-2">
              Apply now
            </button>
            <button className="bg-black text-white text-xs md:text-sm lg:text-xl px-2 py-1 rounded-lg lg:px-4 lg:py-2">
              Visit selected branch
            </button>
          </div>

          {/* Cart and User Icons (Right) */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <FaFacebook className="text-gray-800 text-2xl cursor-pointer" />
            </div>

            <BsLinkedin className="text-gray-800 text-2xl cursor-pointer" />
            <BsInstagram className="text-gray-800 text-2xl cursor-pointer" />
            <BsYoutube className="text-gray-800 text-2xl cursor-pointer" />
          </div>
        </nav>

        {/* Line Separator */}
        <div className="border-t"></div>

        {/* Menu Bar */}
        <div className="bg-white py-2 px-4 md:px-20 flex-row-reverse justify-between">
          <div
            className={`flex items-center justify-center text-gray-800 ${
              isMenuOpen
                ? "flex-col fixed top-0 left-0 h-full bg-gray-200 w-3/4 z-50 transition-transform transform ease-in-out duration-300"
                : "md:flex"
            }`}
          >
            <div className="bg-white py-2 px-4 md:px-20 flex-row-reverse justify-between">
              <div
                className={`flex items-center justify-center text-gray-800 ${
                  isMenuOpen
                    ? "flex-col fixed top-0 left-0 h-full bg-gray-200 w-3/4 z-50 transition-transform transform ease-in-out duration-300"
                    : "md:flex"
                }`}
              >
                <div className="hidden md:flex text-xs md:text-md lg:text-xl">
                  <div className="relative group py-2">
                    <Link
                      to="/"
                      className="hover:bg-gray-200 px-4 py-2 rounded-lg transition duration-300"
                    >
                      About Us
                    </Link>
                    <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg py-4 mt-0 w-72">
                      <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                        Vision, Mission and Values
                      </Link>
                      <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                        Why choose us
                      </Link>
                      <Link
                        to="/"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Principal Message
                      </Link>
                      <Link
                        to="/"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Our Team
                      </Link>
                      <Link
                        to="/"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Curriculum
                      </Link>
                      <Link
                        to="/"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        History
                      </Link>
                      <Link
                        to="/"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Campus
                      </Link>
                      <Link
                        to="/"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Upcoming events
                      </Link>
                      <Link
                        to="/"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Gallery
                      </Link>
                    </div>
                  </div>
                  <div className="relative group py-2">
                    <Link
                      to="/"
                      className="hover:bg-gray-200 px-4 py-2 rounded-lg transition duration-300"
                    >
                      Admission
                    </Link>
                    <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg py-4 mt-0 w-72">
                      <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                        Admission Process
                      </Link>
                      <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                        Eligibility
                      </Link>
                      <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                        Fees and Scholarships
                      </Link>
                      <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                        How to Apply
                      </Link>
                    </div>
                  </div>
                  <Link
                    to="/"
                    className="hover:bg-gray-200 px-4 py-2 rounded-lg transition duration-300"
                  >
                    Contact us
                  </Link>
                  <Link
                    to="/"
                    className="hover:bg-gray-200 px-4 py-2 rounded-lg transition duration-300"
                  >
                    Achievements
                  </Link>
                  <Link
                    to="#"
                    className="hover:bg-gray-200 px-4 py-2 rounded-lg transition duration-300"
                  >
                    Key Information
                  </Link>
                  <Link
                    to="#"
                    className="hover:bg-gray-200 px-4 py-2 rounded-lg transition duration-300"
                  >
                    Policies
                  </Link>
                  <Link
                    to="#"
                    className="hover:bg-gray-200 px-4 py-2 rounded-lg transition duration-300"
                  >
                    Facilities
                  </Link>
                  <Link
                    to="#"
                    className="hover:bg-gray-200 px-4 py-2 rounded-lg transition duration-300"
                  >
                    Request For A Tour
                  </Link>
                  <Link
                    to="#"
                    className="hover:bg-gray-200 px-4 py-2 rounded-lg transition duration-300"
                  >
                    Login
                  </Link>
                </div>
              </div>
              <div className="md:hidden flex justify-between">
                <div>
                  <button
                    onClick={toggleMenu}
                    className="text-gray-800 hover:text-gray-700"
                  >
                    <FaBars className="text-2xl" />
                  </button>
                </div>
                <div>
                  {/* <Link to={"/exchange"}>
        <button className="block md:hidden lg:hidden bg-black text-white text-xs md:text-sm lg:text-2xl px-2 py-1 rounded-lg lg:px-4 lg:py-2 md:ml-4">
          Trade in / Exchange
        </button>
      </Link> */}
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden flex justify-between">
            <div>
              <button
                onClick={toggleMenu}
                className="text-gray-800 hover:text-gray-700"
              >
                <FaBars className="text-2xl" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t"></div>
      </div>
      {/* For large Device */}

      {/* For Small Device */}
      <div className="sm:hidden ">
        {/* Navigation Bar */}
        <nav className="bg-white py-4 flex  items-center justify-items-center justify-between shadow-md">
          {/* Logo (Left) */}
          <Link to={"/"} className="flex items-center ">
            <img src={image1} alt="Logo" className="h-12 mr-6" />
          </Link>

          {/* Search Bar (Middle) */}
          <div className="hidden md:flex-grow mx-40">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 px-3 pr-12 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring focus:border-blue-300 "
              />
              <button className="hidden md:block absolute right-2 top-1/2 transform -translate-y-1/2">
                <FaSearch className="text-gray-800" />
              </button>
            </div>
          </div>

          {/* Cart and User Icons (Right) */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Link to={`/`}>
                <FaShoppingCart className="text-gray-800 text-2xl cursor-pointer" />
              </Link>

              <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xs text-white">
                {cartItems.length}
              </span>
            </div>

            <Link
              className="text-gray-800 text-2xl cursor-pointer"
              to={"/account"}
            >
              <AiOutlineUser />
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-gray-700"
            >
              <FaBars className="text-2xl" />
            </button>
          </div>
        </nav>

        {/* Line Separator */}
        <div className="border-t"></div>

        {/* Menu Bar */}
        <div
          className={`bg-white py-2 px-4  md:px-20 ${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:flex-row-reverse justify-between`}
        >
          <div className="md:block text-xs md:text-md lg:text-xl">
            <Link
              to=""
              className="hover:bg-gray-200 px-4 py-2 rounded-lg transition duration-300 block"
            >
              About us
            </Link>
            <Link
              to="/"
              className="hover:bg-gray-200 px-4 py-2 rounded-lg transition duration-300 block"
            >
              Mission Vision
            </Link>
            <Link
              to="/"
              className="hover:bg-gray-200 px-4 py-2 rounded-lg transition duration-300 block"
            >
              Admission
            </Link>
            <Link
              to="/"
              className="hover:bg-gray-200 px-4 py-2 rounded-lg transition duration-300 block"
            >
              Contact us
            </Link>
            <Link
              to="#"
              className="hover:bg-gray-200 px-4 py-2 rounded-lg transition duration-300 block"
            >
              Achievements
            </Link>
          </div>
        </div>

        <div className="border-t"></div>
      </div>
      {/* For Small Device */}
    </div>
  );
};

export default Navbar;
