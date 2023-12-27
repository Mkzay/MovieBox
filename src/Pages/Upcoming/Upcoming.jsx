import React, { useState, useEffect } from "react";
import Nav from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";

const Upcoming = () => {
  const [movieItems, setMovieItems] = useState([]);
  const [selectedHeart, setSelectedHeart] = useState({});
  const [expandedShowId, setExpandedShowId] = useState(null);

  useEffect(() => {
    const storedHeart = JSON.parse(
      localStorage.getItem("selectedUpcomingHeart")
    );
    if (storedHeart) {
      setSelectedHeart(storedHeart);
    }
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=1218ed0aec5ef5e169ede8abbe7ace3d&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setMovieItems(data.results));
  }, []);

  const onHeart = (id) => {
    const updatedSelectedHeart = { ...selectedHeart };
    updatedSelectedHeart[id] = !updatedSelectedHeart[id];
    setSelectedHeart(updatedSelectedHeart);
    localStorage.setItem(
      "selectedUpcomingHeart",
      JSON.stringify(updatedSelectedHeart)
    );
  };

  const onShow = (id) => {
    setExpandedShowId(expandedShowId === id ? null : id);
  };

  return (
    <div>
      <Nav />
      <section className="flex items-center justify-center flex-wrap gap-10 pt-24 pb-20 md:pt-[5.8rem]">
        {movieItems.map((movieItem) => {
          const {
            id,
            title,
            overview,
            poster_path,
            vote_average,
            vote_count,
            release_date,
          } = movieItem;

          const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

          return (
            <article key={id} className="flex items-center justify-center">
              <section
                className="flex flex-col w-11/12 md:w-56 gap-3 h-[45rem] md:h-[29rem]"
                onDoubleClick={() => onShow(id)}
              >
                <div className="flex items-center justify-between relative top-14 px-4">
                  <button
                    onClick={() => onHeart(id)}
                    className="flex items-center justify-center rounded-full w-[1.875rem] h-[1.82569rem] bg-[#F3F4F680] backdrop-blur-[1px]"
                  >
                    {selectedHeart[id] ? (
                      <img src="images/tomato.png" alt="red-heart-logo" />
                    ) : (
                      <img src="images/heart.svg" alt="gray-heart-logo" />
                    )}
                  </button>
                </div>
                <img
                  src={imageUrl}
                  alt={title}
                  className="rounded-2xl w-full"
                />
                <div className="relative">
                  <p className="text-xs text-white text-center font-bold absolute -top-44 p-2 ">
                    {expandedShowId === id ? overview.slice(0, 250) : ""}
                  </p>
                </div>
                <p className="text-gray-400 text-xs/normal font-bold">
                  {release_date}
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
              </section>
            </article>
          );
        })}
      </section>
      <Footer />
    </div>
  );
};

export default Upcoming;
