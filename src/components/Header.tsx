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
        src="/public/pixelcut-export.png"
        alt="FrontendIMG"
        className="imageFrontened"
      />
      <button className="boton-flecha" onClick={scrollToNextSection}>
        <IoArrowDownSharp />
      </button>
    </header>
  );
};

export default Header;
