const Nav = () => {
  return (
    <div className="flex items-center justify-between py-7 px-2 md:py-10 md:px-14 lg:px-20">
      <logo className="flex items-center gap-2 md:gap-6">
        <img src="images/tv.png" alt="tv-logo" />
        <h2 className="text-white text-2xl/[1.5rem] hidden font-bold lg:block">
          MovieBox
        </h2>
      </logo>
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
        <button className="w-10 h-10 bg-rose-700 flex items-center justify-center rounded-full">
          <img src="images/menu.svg" alt="menu-logo" />
        </button>
      </sidebar>
    </div>
  );
};

export default Nav;
