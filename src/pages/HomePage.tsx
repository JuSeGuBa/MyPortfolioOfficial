import Header from "../components/Header";
import AboutMe from "./AboutPage";
import Skills from "./Skills";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <Skills />
      <ProjectsPage />
      <ContactPage />
      <Footer />
    </>
  );
};

export default HomePage;
