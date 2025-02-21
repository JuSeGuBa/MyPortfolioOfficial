import "../styles/Header.css";
import { IoArrowDownSharp } from "react-icons/io5";
const Header = () => {
  const scrollToNextSection = () => {
    // Encuentra la siguiente sección por su id
    const nextSection = document.getElementById("about-section");
    if (nextSection) {
      // Desplazamiento suave hacia la siguiente sección
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header id="headerMe">
      <img
        // src={`${import.meta.env.BASE_URL}pixelcut-export.png`}
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
