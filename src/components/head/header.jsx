import Nav from "./nav";
import Body from "./body";

const Header = () => {
  return (
    <div className="bg-[url('/images/poster.png')] bg-no-repeat bg-cover h-[35rem] md:h-[37.5rem] md:bg-[url('/images/poster.png')] md:bg-cover mb-5">
      <Nav />
      <Body />
    </div>
  );
};

export default Header;
