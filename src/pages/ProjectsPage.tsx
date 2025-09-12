import "../styles/Projects.css";
import { Carousel, IconButton } from "@material-tailwind/react";
import { FaGithub } from "react-icons/fa";

const ProjectsPage = () => {
  const handlelinkFacebookGithub = () => {
    window.open("https://github.com/JuSeGuBa/facebook_project");
  };
  const handlelinkLoginGithub = () => {
    window.open("https://github.com/JuSeGuBa/Registration-Form");
  };
  const handlelinkFacebook = () => {
    window.open("https://facebook-project-seven.vercel.app/#");
  };
  const handlelinkLogin = () => {
    window.open("https://registration-five-brown.vercel.app/");
  };

  return (
    <div>
      <h1 className="h1-projects text-[3.5rem] font-bold text-left text-gray-800 my-20 mx-auto max-w-[800px]">
        <span className="p">P</span>rojects
      </h1>

      <div className="flex justify-center">
        <Carousel
          transition={{ duration: 1 }}
          className="rounded-xl max-w-[800px] h-[500px] transform transition-transform duration-400 ease-in-out hover:scale-105"
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              style={{
                background: "none",
                transition: "background 0.3s ease",
                boxShadow: "none",
                outline: "none",
                border: "none",
                WebkitTapHighlightColor: "transparent",
                zIndex: 70, // <- asegurar por encima
              }}
              className="!absolute top-2/4 left-4 -translate-y-2/4 hover:scale-110 z-50 pointer-events-auto"
            >
              {/* SVG flecha */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              style={{
                background: "none",
                transition: "background 0.3s ease",
                boxShadow: "none",
                outline: "none",
                border: "none",
                WebkitTapHighlightColor: "transparent",
                zIndex: 70, // <- asegurar por encima
              }}
              className="!absolute top-2/4 !right-4 -translate-y-2/4 hover:scale-110 z-50 pointer-events-auto"
            >
              {/* SVG flecha */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={` block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"}`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          {/* Proyecto 1 */}
          <div className="group relative h-full w-full flex items-center justify-center bg-gray-900 text-center rounded-xl overflow-hidden">
            <video
              autoPlay
              loop
              muted
              className="absolute top-0 left-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-300 ease-in-out pointer-events-none"
            >
              <source
                src={`${import.meta.env.BASE_URL}videos/Facebook.mp4`}
                type="video/mp4"
              />
            </video>

            {/* Overlay degradado: hacemos pointer-events-none para no bloquear flechas */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-[1] pointer-events-none" />

            <div className="relative z-10 p-6 animate-fadeInUp">
              <h2 className="text-3xl font-bold text-white mb-8">Facebook</h2>
              <p className="info text-lg text-gray-200">
                I developed an interactive network to create, update and delete
                posts, using React, TypeScript and TailwindCSS, optimizing the
                user experience with a modern interface and an efficient API.
              </p>
              <div className="flex items-center justify-center gap-4 mt-6">
                <button onClick={handlelinkFacebook} className="buttons-links">
                  See project
                </button>
                <button
                  onClick={handlelinkFacebookGithub}
                  className="buttons-github"
                >
                  <FaGithub />
                </button>
              </div>
            </div>
          </div>

          {/* Proyecto 2 */}
          <div className="group relative h-full w-full flex items-center justify-center bg-black text-center rounded-xl overflow-hidden">
            <video
              autoPlay
              loop
              muted
              className="absolute top-0 left-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-300 ease-in-out pointer-events-none"
            >
              <source
                src={`${import.meta.env.BASE_URL}videos/formshort.mp4`}
                type="video/mp4"
              />
            </video>

            {/* Overlay degradado */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-[1] pointer-events-none" />

            <div className="relative z-10 p-6 animate-fadeInUp">
              <h2 className="text-3xl font-bold text-white mb-8">
                Secure Login
              </h2>
              <p className="info text-lg text-gray-200">
                I developed an authentication system that allows users to
                register and log in securely, using React, TypeScript and JWT to
                efficiently manage sessions.
              </p>
              <div className="flex items-center justify-center gap-4 mt-6">
                <button onClick={handlelinkLogin} className="buttons-links">
                  See project
                </button>
                <button
                  onClick={handlelinkLoginGithub}
                  className="buttons-github"
                >
                  <FaGithub />
                </button>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ProjectsPage;
