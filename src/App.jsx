import { useState, useEffect } from "react";
import Header from "./components/head/header";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";

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
      <Header movieItems={movieItems} />
      <Body movieItems={movieItems} />
      <Footer />
    </div>
  );
}
