import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Movies from "./Pages/Movies/Movies";
import TvSeries from "./Pages/TvSeries/TvSeries";
import Upcoming from "./Pages/Upcoming/Upcoming";
import SearchResultsPage from "./Pages/Result/SearchResultsPage";

export default function App() {
  return (
    <div className="font-dm-sans">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Movies" element={<Movies />} />
          <Route exact path="/TvSeries" element={<TvSeries />} />
          <Route exact path="/Upcoming" element={<Upcoming />} />
          <Route
            exact
            path="/SearchResultsPage"
            element={<SearchResultsPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}
