import Header from "../components/Header";
import Navbar from "../components/Navbar";
import AboutMe from "./AboutPage";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Header />
        <AboutMe />
      </div>
    </div>
  );
};

export default HomePage;
