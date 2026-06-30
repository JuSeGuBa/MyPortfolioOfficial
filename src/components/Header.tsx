import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <img
        src={`${import.meta.env.BASE_URL}lego2.jpg`}
        alt="FrontendIMG"
        className="imageFrontened"
      />

      <div className="scroll-indicator" />
    </header>
  );
};

export default Header;
