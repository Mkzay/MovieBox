import Nav from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { useLocation } from "react-router-dom";

const SearchResultsPage = () => {
  const location = useLocation();
  const { searchResults } = location.state || {};

  return (
    <article>
      <Nav />
      <section className="flex items-center justify-center flex-wrap gap-10 pt-24 pb-20 md:pt-[5.8rem]">
        {searchResults && searchResults.length > 0 ? (
          searchResults.map((result) => (
            <div
              key={result.id}
              className="flex flex-col w-11/12 md:w-56 gap-3 h-[40rem] md:h-[29rem]"
            >
              <img
                className="rounded-2xl w-full"
                src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
                alt={result.title}
              />
              <p className="text-gray-400 text-xs/normal font-bold">
                {result.release_date}
              </p>
              <h2 className="text-gray-900 text-lg/normal font-bold">
                {result.title}
              </h2>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src="images/imdb.png" alt="imdb-logo" />
                  <p className="text-xs/3 font-normal">
                    {result.vote_average} / 10
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="images/tomato.png" alt="rottenTomato-logo" />
                  <p className="text-xs/3 font-normal">{result.vote_count}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No search results found.</p>
        )}
      </section>
      <Footer />
    </article>
  );
};

export default SearchResultsPage;
