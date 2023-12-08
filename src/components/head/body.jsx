const Body = () => {
  return (
    <article className="flex items-center justify-between md:py-10 md:px-20">
      <section className="flex flex-col gap-4 text-white">
        <h1 className="text-5xl/[56px] font-bold w-96">
          John Wick 3 : Parabellum
        </h1>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <img src="images/imdb.png" alt="imdb-logo" />
            <p className="text-xs/3 font-normal">86.0/100</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="images/tomato.png" alt="rottenTomato-logo" />
            <p className="text-xs/3 font-normal">97%</p>
          </div>
        </div>
        <p className="text-sm/[18px] font-medium w-[18.875rem] h-[4.5rem]">
          John Wick is on the run after killing a member of the international
          assassins&apos; guild, and with a $14 million price tag on his head,
          he is the target of hit men and women everywhere.
        </p>
        <div>
          <button className="bg-rose-700 rounded-md py[6px] px-4 flex items-center gap-2 h-9">
            <img src="images/play.svg" alt="play-icon" />
            WATCH TRAILER
          </button>
        </div>
      </section>
      <section className="flex items-center flex-col text-white">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>10</button>
      </section>
    </article>
  );
};

export default Body;
