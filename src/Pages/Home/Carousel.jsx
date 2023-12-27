import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const DemoCarousel = ({ movies }) => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      transitionTime={1000}
      infiniteLoop={true}
      showStatus={false}
      showArrows={true}
      swipeable
      emulateTouch
    >
      {movies.map((movie) => {
        const {
          id,
          title,
          name,
          poster_path,
          vote_average,
          vote_count,
          overview,
        } = movie;

        return (
          <article key={id} className="relative pt-20">
            <img
              className=" h-[46rem]"
              src={`https://image.tmdb.org/t/p/original${poster_path}`}
              alt={title}
            />
            <section className="flex flex-col items-center justify-center px-2 md:items-start md:justify-start gap-5 md:gap-4 text-white absolute top-64 md:top-56 md:left-20">
              <h1 className="text-4xl md:text-5xl/[56px] font-bold md:w-[25.25rem] md:text-left">
                {name}
                {title}
              </h1>
              <div className="flex items-center justify-center md:justify-start w-full gap-24">
                <div className="flex items-center gap-2">
                  <img src="images/imdb.png" alt="imdb-logo" />
                  <p className="text-base/3 md:text-xs/3 font-normal">
                    {vote_average}/10
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="images/tomato.png" alt="rottenTomato-logo" />
                  <p className="text-base/3 md:text-xs/3 font-normal">
                    {vote_count}
                  </p>
                </div>
              </div>
              <p className="text-base/6 md:text-sm/[20px] md:text-left font-medium md:w-[20.875rem] h-[4.5rem]">
                {movie ? overview.slice(0, 350) + "..." : ""}
              </p>
              <div className="pt-20">
                <button className="bg-rose-700 rounded-md py[6px] px-4 flex items-center justify-center gap-2 h-9 ">
                  <div>
                    <img src="images/play.svg" />
                  </div>
                  <div className="text-sm/6 font-700">WATCH TRAILER</div>
                </button>
              </div>
            </section>
          </article>
        );
      })}
    </Carousel>
  );
};

export default DemoCarousel;
