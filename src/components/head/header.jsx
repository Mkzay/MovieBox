import Nav from "./nav";
import Body from "./body";

const Header = () => {
  return (
    <div className="bg-[url('/images/poster.png')] bg-no-repeat bg-contain h-[37.5rem] md:bg-cover">
      <Nav />
      <Body />
    </div>
  );
};

export default Header;
