/* eslint-disable react/prop-types */
import { useState } from "react";

const Body = ({ movieItems }) => {
  const [heart, setHeart] = useState(true);
  const [displayedMovies, setDisplayedMovies] = useState(8); // Initially display 6 movies

  const loadMoreMovies = () => {
    setDisplayedMovies(displayedMovies + 8);
  };
  const onHeart = () => {
    setHeart(!heart);
  };

  return (
    <main className="flex items-center justify-center flex-col py-5 px-2 mb-10 md:mb-20 md:py-10 md:px-20">
      <section className="flex items-center justify-between w-full">
        <h2 className="text-xl md:text-4xl/normal font-bold">
          Featured Movies
        </h2>
        <button
          onClick={loadMoreMovies}
          className="text-rose-700 text-lg/6 font-normal flex items-center gap-2"
        >
          See more
          <img src="images/arrowRight.svg" alt="arrowRight-icon" />
        </button>
      </section>
      <section className="flex items-center justify-center flex-wrap gap-14">
        {movieItems.slice(0, displayedMovies).map((movieItem) => {
          const {
            id,
            title,
            poster_path,
            vote_average,
            vote_count,
            release_date,
          } = movieItem;

          const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
          const releaseYear = release_date ? release_date.slice(0, 4) : "";

          return (
            <article key={id}>
              <div className="flex flex-col gap-3 w-[19rem] h-[35rem] relative md:w-[15rem] md:h-[30rem]">
                <div className="flex items-center justify-between relative top-14 px-4">
                  <button
                    onClick={onHeart}
                    className="flex items-center justify-center rounded-full w-[1.875rem] h-[1.82569rem] bg-[#F3F4F680] backdrop-blur-[1px]"
                  >
                    {heart ? (
                      <img src="images/heart.svg" alt="gray-heart-logo" />
                    ) : (
                      <img src="images/tomato.png" alt="red-heart-logo" />
                    )}
                  </button>
                </div>
                <img
                  src={imageUrl}
                  alt={title}
                  className="rounded-2xl w-full"
                />
                <p className="text-gray-400 text-xs/normal font-bold">
                  {releaseYear}
                </p>
                <h2 className="text-gray-900 text-lg/normal font-bold">
                  {title}
                </h2>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src="images/imdb.png" alt="imdb-logo" />
                    <p className="text-xs/3 font-normal">{vote_average} / 10</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="images/tomato.png" alt="rottenTomato-logo" />
                    <p className="text-xs/3 font-normal">{vote_count}</p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Body;
