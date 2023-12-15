/* eslint-disable react/prop-types */
import Nav from "../../components/Header/Navbar";
import Main from "./Main";
import Body from "./featured";
import Footer from "../../components/Footer/Footer";

const Home = ({ movieItems }) => {
  return (
    <div>
      <section className="bg-[url('/images/poster.png')] bg-no-repeat bg-center bg-cover">
        <Nav />
        <Main />
      </section>
      <Body movieItems={movieItems} />
      <Footer />
    </div>
  );
};

export default Home;
