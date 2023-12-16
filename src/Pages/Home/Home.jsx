import Nav from "../../components/Header/Navbar";
import Main from "./Main";
import Body from "./Body";
import Footer from "../../components/Footer/Footer";
import DemoCarousel from "./Carousel";
import { useState, useEffect } from "react";

const Home = () => {
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=1218ed0aec5ef5e169ede8abbe7ace3d&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setMovieItems(data.results));
  }, []);

  return (
    <div>
      <Nav />
      <DemoCarousel movieItems={movieItems} />
      <Body movieItems={movieItems} />
      <Footer />
    </div>
  );
};

export default Home;

/*useEffect(() => {
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
}, []);*/
