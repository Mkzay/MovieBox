const Footer = () => {
  return (
    <footer className="flex items-center justify-center flex-col gap-9 mb-16">
      <section className="flex items-center gap-5 md:gap-12">
        <a href="#">
          <img src="images/instagram.svg" alt="facebook-logo" />
        </a>
        <a href="#">
          <img src="images/instagram.svg" alt="instagram-logo" />
        </a>
        <a href="#">
          <img src="images/x.png" alt="x-logo" />
        </a>
        <a href="#">
          <img src="images/youtube.svg" alt="youtube-logo" />
        </a>
      </section>
      <section>
        <ul className="flex items-center flex-col gap-5 md:flex-row md:gap-12 text-lg/normal font-bold">
          <li>
            <a href="#">Conditions of Use</a>
          </li>
          <li>
            <a href="#">Privacy & Policy</a>
          </li>
          <li>
            <a href="#">Press Room</a>
          </li>
        </ul>
      </section>
      <section className="flex items-center justify-center px-5 text-center">
        <p className="text-gray-500 text-lg/normal font-bold">
          © 2021 MovieBox by Adriana Eka Prayudha{" "}
        </p>
      </section>
    </footer>
  );
};

export default Footer;
