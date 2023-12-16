import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const DemoCarousel = ({ movies }) => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      transitionTime={3}
      infiniteLoop={true}
      showStatus={false}
      showArrows={false}
    >
      {movies.map((movie) => {
        const { id, title, poster_path, vote_average, vote_count, overview } =
          movie;

        const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

        return (
          <article key={id} className="relative">
            <img className="h-[40rem]" src={imageUrl} alt={title} />
            <section className="flex flex-col items-center justify-center px-2 md:items-start md:justify-start gap-5 md:gap-4 text-white absolute top-52 md:top-44 md:left-20">
              <h1 className="text-4xl md:text-5xl/[56px] font-bold md:w-[25.25rem] md:text-left">
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
                {overview}
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
