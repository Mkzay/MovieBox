import React, { useState, useEffect } from "react";
import Nav from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";

const Movies = () => {
  const [MovieItems, setMovieItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=1218ed0aec5ef5e169ede8abbe7ace3d&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setMovieItems(data.results));
  }, []);

  return (
    <div>
      <Nav />
      {MovieItems.map((movie) => {
        const { id, name, overview } = movie;
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

export default Movies;
