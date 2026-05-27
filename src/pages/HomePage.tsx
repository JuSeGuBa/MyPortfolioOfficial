import Header from "../components/Header";
import AboutMe from "./AboutPage";
import Skills from "./Skills";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <section id="home">
        <Header />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <ProjectsPage />
      </section>

      <section id="contact">
        <ContactPage />
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
