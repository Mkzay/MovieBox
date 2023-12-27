import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const navigate = useNavigate(); // Access to history for navigation

  const toggleMenu = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const activeLink = "text-rose-600";

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const apiKey = "1218ed0aec5ef5e169ede8abbe7ace3d"; // Add your API key here
      const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      setSearchResults(data.results);

      // Navigate to the search results page
      navigate("/SearchResultsPage", {
        state: { searchResults: data.results },
      });
    } catch (error) {
      console.error("Error fetching search results: ", error);
    }
  };

  return (
    <div className="flex items-center justify-between py-5 px-2 md:py-5 md:px-14 lg:px-20 fixed bg-gray-700 top-0 z-50 w-full">
      <Link to="/">
        <div className="flex items-center gap-2 md:gap-6">
          <img className="hidden md:block" src="images/tv.png" alt="tv-logo" />
          <img
            className="md:hidden w-14 h-[2.8rem]"
            src="images/tv1.png"
            alt="tv-logo"
          />
          <h2 className="text-white text-2xl/[1.5rem] hidden font-bold lg:block">
            MovieBox
          </h2>
        </div>
      </Link>

      <form
        onSubmit={handleFormSubmit}
        className="relative w-full flex justify-center pl-4 lg:pl-0"
      >
        <input
          value={searchQuery}
          onChange={handleInputChange}
          className="w-11/12 lg:w-[32.8125rem] bg-transparent border-2 border-white py-[0.375rem] px-[0.625rem] rounded-md text-white placeholder:text-white placeholder:text-base font-normal outline-none"
          type="text"
          placeholder="Search Movies Here"
        />
        <button type="submit" className="relative -left-6 lg:-left-10">
          <img src="images/search.svg" alt="search-icon" />
        </button>
      </form>

      <div className="flex items-center gap-2 md:gap-6">
        <button
          onClick={toggleMenu}
          className="w-10 h-10 bg-rose-700 flex items-center justify-center rounded-full"
        >
          <img src="images/menu.svg" alt="menu-logo" />
        </button>

        <section
          className={`flex flex-col items-center justify-center gap-20 bg-white p-12 pl-5 border border-gray-500 rounded-r-[2.8125rem] h-[38rem] z-10 absolute top-0 left-0 md:p-10 md:gap-24 ${
            isSideBarOpen
              ? "translate-x-0  duration-300 ease-in shadow-lg shadow-gray-500"
              : "-translate-x-[100%] duration-500 ease-out"
          }`}
        >
          <div className="flex items-center gap-2 md:gap-6">
            <img src="images/tv.png" alt="tv-logo" />
            <h2 className="text-2xl/6 font-bold">MovieBox</h2>
          </div>
          <ul className="flex flex-col gap-14 text-xl/normal font-semibold text-gray-500 md:gap-16">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/Movies"
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              Movies
            </NavLink>
            <NavLink
              to="/TvSeries"
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              TV Series
            </NavLink>
            <NavLink
              to="/Upcoming"
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              Upcoming
            </NavLink>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Nav;
