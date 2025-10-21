import "../styles/Header.css";
import { IoArrowDownSharp } from "react-icons/io5";
import { useEffect, useState } from "react";

const Header = () => {
  const [windowHeight, setWindowHeight] = useState("100vh");

  useEffect(() => {
    const setVH = () => {
      setWindowHeight(`${window.innerHeight}px`);
    };

    setVH();
    window.addEventListener("resize", setVH);
    window.addEventListener("orientationchange", setVH);

    return () => {
      window.removeEventListener("resize", setVH);
      window.removeEventListener("orientationchange", setVH);
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="headerMe"
      className="header-container"
      style={{ height: windowHeight }}
    >
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
