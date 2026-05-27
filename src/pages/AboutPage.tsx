import "../styles/AboutPage.css";
import { Element } from "react-scroll";

const AboutPage: React.FC = () => {
  return (
    <div className="about-page" id="about-section">
      <Element name="me-section">
        <div className="card-about-me">
          <h2 className="greeting">Hello</h2>
          <h1 className="name">
            I'm <span className="S">S</span>ebastian
          </h1>
          <p className="about-bio">
            I am a frontend developer, committed to creating intuitive and
            accessible digital experiences. I specialize in honing my skills to
            solve problems efficiently. My goal is to continue evolving as a
            professional and provide innovative solutions in each project.
          </p>
        </div>
      </Element>
    </div>
  );
};

export default AboutPage;
