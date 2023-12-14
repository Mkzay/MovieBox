const Main = () => {
  return (
    <article className="flex items-center justify-between flex-col gap-10 p-5 md:flex-row md:py-10 md:px-20">
      <section className="flex flex-col justify-center md:justify-start gap-5 md:gap-4 text-white">
        <h1 className="text-4xl md:text-5xl/[56px] font-bold md:w-96">
          John Wick 3 : Parabellum
        </h1>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <img src="images/imdb.png" alt="imdb-logo" />
            <p className="text-base/3 md:text-xs/3 font-normal">86.0/100</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="images/tomato.png" alt="rottenTomato-logo" />
            <p className="text-base/3 md:text-xs/3 font-normal">97%</p>
          </div>
        </div>
        <p className="text-lg/6 md:text-sm/[18px] font-medium md:w-[18.875rem] h-[4.5rem]">
          John Wick is on the run after killing a member of the international
          assassins&apos; guild, and with a $14 million price tag on his head,
          he is the target of hit men and women everywhere.
        </p>
        <div className="pt-20">
          <button className="bg-rose-700 rounded-md py[6px] px-4 flex items-center gap-2 h-9">
            <img src="images/play.svg" alt="play-icon" />
            WATCH TRAILER
          </button>
        </div>
      </section>
      <section className="flex items-center gap-5 md:flex-col text-white">
        <button className="text-gray-400 text-xs/[0.875rem] font-bold">
          1
        </button>
        <button className="text-gray-400 text-xs/[0.875rem] font-bold">
          2
        </button>
        <button className="text-gray-400 text-xs/[0.875rem] font-bold">
          3
        </button>
        <button className="text-gray-400 text-xs/[0.875rem] font-bold">
          4
        </button>
        <button className="text-gray-400 text-xs/[0.875rem] font-bold">
          5
        </button>
        <button className="text-gray-400 text-xs/[0.875rem] font-bold">
          6
        </button>
        <button className="text-gray-400 text-xs/[0.875rem] font-bold">
          7
        </button>
        <button className="text-gray-400 text-xs/[0.875rem] font-bold">
          8
        </button>
        <button className="text-gray-400 text-xs/[0.875rem] font-bold">
          9
        </button>
        <button className="text-gray-400 text-xs/[0.875rem] font-bold">
          10
        </button>
      </section>
    </article>
  );
};

export default Main;
