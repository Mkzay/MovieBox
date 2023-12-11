import { useState } from "react";
import Header from "./components/head/header";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";
import data from "./components/data";

export default function App() {
  const [movieItems, setMovieItems] = useState(data); // Declaring movieItems state

  return (
    <div className="font-dm-sans">
      <Header />
      <Body movieItems={movieItems} />
      <Footer />
    </div>
  );
}
