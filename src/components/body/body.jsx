import { useState } from "react";

const Body = ({ movieItems }) => {
  const [heart, setHeart] = useState(true);
  const onHeart = () => {
    setHeart(!heart);
  };

  return (
    <main className="flex items-center justify-center flex-col gap-11 py-5 px-2 mb-16 md:mb-20 md:py-10 md:px-20">
      <section className="flex items-center justify-between w-full">
        <h2 className="text-xl md:text-4xl/normal font-bold">
          Featured Movies
        </h2>
        <button className="text-rose-700 text-lg/6 font-normal flex items-center gap-2">
          See more
          <img src="images/arrowRight.svg" alt="arrowRight-icon" />
        </button>
      </section>
      <section className="flex items-center justify-center flex-wrap gap-14">
        {movieItems.map((movieItem) => {
          const {
            id,
            alt,
            country,
            runtime,
            title,
            rating,
            tomatoRating,
            tvSeries,
            genre,
          } = movieItem;
          return (
            <article key={id}>
              <div className="flex flex-col gap-3 w-[15.625rem] h-[30.625rem] relative">
                <div className="flex items-center justify-between relative top-14 px-4">
                  <p className="text-gray-900 text-xs/normal font-bold bg-[#F3F4F680] backdrop-blur-[1px] px-2 rounded-2xl">
                    {tvSeries ? "TV SERIES" : ""}
                  </p>
                  <button
                    onClick={onHeart}
                    className="flex items-center justify-center rounded-full w-[1.875rem] h-[1.82569rem] bg-[#F3F4F680] backdrop-blur-[1px]"
                  >
                    {heart && (
                      <img src="images/heart.svg" alt="gray-heart-logo" />
                    )}
                    {!heart && (
                      <img src="images/tomato.png" alt="red-heart-logo" />
                    )}
                  </button>
                </div>
                <img src="images/poster1.png" alt={alt} />
                <p className="text-gray-400 text-xs/normal font-bold">
                  {country}, {runtime}
                </p>
                <h2 className="text-gray-900 text-lg/normal font-bold">
                  {title}
                </h2>
                <div className="flex items-center justify-between gap-5">
                  <div className="flex items-center gap-2">
                    <img src="images/imdb.png" alt="imdb-logo" />
                    <p className="text-xs/3 font-normal">{rating}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="images/tomato.png" alt="rottenTomato-logo" />
                    <p className="text-xs/3 font-normal">{tomatoRating}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-xs/normal font-bold">
                  {genre}
                </p>
              </div>
            </article>
          );
        })}
        <button
          onClick={onHeart}
          className="text-rose-700 text-lg/6 font-normal flex items-center gap-2 mt-24"
        >
          See more
          <img src="images/arrowRight.svg" alt="arrowRight-icon" />
        </button>
      </section>
    </main>
  );
};

export default Body;
