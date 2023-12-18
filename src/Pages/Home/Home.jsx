import Nav from "../../components/Header/Navbar";
import Body from "./Body";
import Footer from "../../components/Footer/Footer";
import DemoCarousel from "./Carousel";
import { useState, useEffect } from "react";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=1218ed0aec5ef5e169ede8abbe7ace3d&language=en-US&append_to_response=all/week?"
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <div>
      <Nav />
      <DemoCarousel movies={movies} />
      <Body movies={movies} />
      <Footer />
    </div>
  );
};

export default Home;
