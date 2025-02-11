import "../styles/AboutPage.css";
import { Element } from "react-scroll";

const AboutPage: React.FC = () => {
  return (
    <div className="card-about-me" id="about-section">
      <Element name="me-section" className="history">
        <h1 className="greeting">Hello</h1>
        <br />
        <h1 className="name">
          I'm <span className="S">S</span>ebastian
        </h1>
        <br />
        <p>
          I am a frontend developer, committed to creating intuitive and
          accessible digital experiences. I specialize in honing my skills to
          solve problems efficiently. My goal is to continue evolving as a
          professional and provide innovative solutions in each project.
        </p>
      </Element>
    </div>
  );
};

export default AboutPage;
