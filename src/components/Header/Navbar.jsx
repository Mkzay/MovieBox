import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const toggleMenu = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <div className="flex items-center justify-between py-7 px-2 md:py-10 md:px-14 lg:px-20">
      <Link to="/">
        <logo className="flex items-center gap-2 md:gap-6">
          <img src="images/tv.png" alt="tv-logo" />
          <h2 className="text-white text-2xl/[1.5rem] hidden font-bold lg:block">
            MovieBox
          </h2>
        </logo>
      </Link>
      <form className="relative w-full flex justify-center pl-4 lg:pl-0">
        <input
          className="w-11/12 lg:w-[32.8125rem] bg-transparent border-2 border-white py-[0.375rem] px-[0.625rem] rounded-md text-white placeholder:text-white placeholder:text-base font-normal outline-none"
          type="text"
          placeholder="Search Movies Here"
        />
        <button className="relative -left-6 lg:-left-10">
          <img src="images/search.svg" alt="search-icon" />
        </button>
      </form>
      <sidebar className="flex items-center gap-2 md:gap-6">
        <button
          onClick={toggleMenu}
          className="w-10 h-10 bg-rose-700 flex items-center justify-center rounded-full"
        >
          <img src="images/menu.svg" alt="menu-logo" />
        </button>
        <section
          className={`flex flex-col bg-white items-center justify-center gap-20 p-10 pl-5 border border-gray-500 rounded-r-[2.8125rem] z-10 absolute top-0 left-0 h-[83.7%] md:p-10 md:h-[89.7%] md:gap-24 ${
            isSideBarOpen
              ? "translate-x-0 duration-1000 ease-in delay-75 scale 75 shadow-lg shadow-gray-500"
              : "-translate-x-[100%] duration-1000 ease-out delay-100 scale-50"
          }`}
        >
          <div className="flex items-center gap-2 md:gap-6">
            <img src="images/tv.png" alt="tv-logo" />
            <h2 className="text-2xl/6 font-bold">MovieBox</h2>
          </div>
          <ul className="flex flex-col gap-14 text-xl/normal font-semibold text-gray-500 md:gap-16">
            <Link to="/">Home</Link>
            <Link to="/Movies">Movies</Link>
            <Link to="/TvSeries">TV Series</Link>
            <Link to="/Upcoming">Upcoming</Link>
          </ul>
        </section>
      </sidebar>
    </div>
  );
};

export default Nav;
