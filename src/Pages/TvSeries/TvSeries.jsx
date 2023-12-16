import React, { useState, useEffect } from "react";
import Nav from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";

const TvSeries = () => {
  const [tvShowItems, setTvShowItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/tv/day?api_key=1218ed0aec5ef5e169ede8abbe7ace3d&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setTvShowItems(data.results));
  }, []);

  return (
    <div>
      <Nav />
      {tvShowItems.map((tvShow) => {
        const { id, name, overview } = tvShow;
        return (
          <div key={id}>
            <p>{name}</p>
            <p>{overview}</p>
          </div>
        );
      })}
      <Footer />
    </div>
  );
};

export default TvSeries;
