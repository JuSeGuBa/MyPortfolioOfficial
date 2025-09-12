import "../styles/Header.css";
import { IoArrowDownSharp } from "react-icons/io5";

const Header = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header id="headerMe">
      <img
        src={`${import.meta.env.BASE_URL}lego2.jpg`}
        alt="FrontendIMG"
        className="imageFrontened"
      />
      <button className="button-arrow" onClick={scrollToNextSection}>
        <IoArrowDownSharp />
      </button>
    </header>
  );
};

export default Header;
