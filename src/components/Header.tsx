import "../styles/Header.css";
import { useEffect, useState } from "react";

const Header = () => {
  const [windowHeight, setWindowHeight] = useState("100vh");

  useEffect(() => {
    const setVH = () => setWindowHeight(`${window.innerHeight}px`);
    setVH();
    window.addEventListener("resize", setVH);
    window.addEventListener("orientationchange", setVH);
    return () => {
      window.removeEventListener("resize", setVH);
      window.removeEventListener("orientationchange", setVH);
    };
  }, []);

  return (
    <header className="header-container" style={{ height: windowHeight }}>
      <img
        src={`${import.meta.env.BASE_URL}lego2.jpg`}
        alt="FrontendIMG"
        className="imageFrontened"
      />

      <div className="scroll-indicator">
        <span className="scroll-line" />
        <span className="scroll-arrow" />
      </div>
    </header>
  );
};

export default Header;
