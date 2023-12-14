import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Pages/Home/Home";
import Movies from "./Pages/Movies/Movies";
import TvSeries from "./Pages/TvSeries/TvSeries";
import Upcoming from "./Pages/Upcoming/Upcoming";

export default function App() {
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const apiKey = "1218ed0aec5ef5e169ede8abbe7ace3d";
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US`
        );

        if (response.ok) {
          const data = await response.json();
          setMovieItems(data.results);
        } else {
          throw new Error("Failed to fetch movie data");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieData();
  }, []);

  return (
    <div className="font-dm-sans">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home movieItems={movieItems} />} />
          <Route exact path="/Movies" element={<Movies />} />
          <Route exact path="/TvSeries" element={<TvSeries />} />
          <Route exact path="/Upcoming" element={<Upcoming />} />
        </Routes>
      </Router>
    </div>
  );
}
