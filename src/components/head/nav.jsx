const Nav = () => {
  return (
    <div className="flex items-center justify-between py-5 px-2 md:py-10 md:px-20">
      <logo className="flex items-center gap-2 md:gap-6">
        <img src="images/tv.png" alt="tv-logo" />
        <h2 className="text-white text-2xl/[1.5rem] font-bold">MovieBox</h2>
      </logo>
      <form className="hidden md:block relative">
        <input
          className="w-[32.8125rem] bg-transparent border-2 border-white py-[0.375rem] px-[0.625rem] rounded-md text-white placeholder:text-white placeholder:text-base font-normal outline-none"
          type="text"
          placeholder="What do you want to watch?"
        />
        <button className="relative -left-10">
          <img src="images/search.svg" alt="search-icon" />
        </button>
      </form>
      <sidebar className="flex items-center gap-2 md:gap-6">
        <h2 className="text-white text-base font-bold">Sign in</h2>
        <button className="w-10 h-10 bg-rose-700 flex items-center justify-center rounded-full">
          <img src="images/menu.svg" alt="menu-logo" />
        </button>
      </sidebar>
    </div>
  );
};

export default Nav;
