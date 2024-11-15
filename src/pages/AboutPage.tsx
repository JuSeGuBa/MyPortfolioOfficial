import "../styles/AboutPage.css";
import { Element } from "react-scroll";

const AboutPage: React.FC = () => {
  return (
    <div className="card-about-me">
      <Element name="me-section" className="history">
        <h1>Heyyy!</h1>
        <br />
        <p className="text-1">
          I'm Sebastian, a frontend developer from Colombia, passionate about
          creating intuitive and accessible digital experiences. I honed my
          skills at Academia-X, facing challenges that turned me into a problem
          solver.
        </p>{" "}
        <br />
        <p className="text-2">
          I'm a self-taught learner and I love creating clean, efficient, and
          engaging interfaces. Outside of coding, I love exercise and
          continually hone my skills, believing in the balance between mind and
          body.
        </p>{" "}
        <br />
        <p className="text-3">
          My goal is to grow as a developer, delivering innovative solutions and
          embracing lifelong learning.
        </p>
      </Element>
    </div>
  );
};

export default AboutPage;
