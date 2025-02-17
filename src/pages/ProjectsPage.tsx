import "../styles/Projects.css";
import { Carousel, IconButton } from "@material-tailwind/react";

const ProjectsPage = () => {
  return (
    <div>
      {/* Título ajustado */}
      <h1 className="h1-projects text-[3.5rem] font-bold text-left text-gray-800 my-20 mx-auto max-w-[800px]">
        <span className="p">P</span>rojects
      </h1>

      <div className="flex justify-center">
        {/* Este div centra horizontalmente el carrusel */}
        <Carousel
          transition={{ duration: 1 }}
          className="rounded-xl max-w-[800px] h-[500px] transform transition-transform duration-400 ease-in-out hover:scale-105"
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4 transform transition-transform duration-400 ease-in-out hover:scale-110"
            >
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
              className="!absolute top-2/4 !right-4 -translate-y-2/4 transform transition-transform duration-400 ease-in-out hover:scale-110"
            >
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
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          {/* Primer elemento con video de fondo */}
          <div className="relative h-full w-full flex items-center justify-center bg-gray-900 text-center rounded-xl overflow-hidden">
            <video
              autoPlay
              loop
              muted
              className="absolute top-0 left-0 w-full h-10px object-cover opacity-30"
            >
              <source
                src={`${import.meta.env.BASE_URL}videos/Facebook.mp4`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div className="relative z-10 p-6">
              <h2 className="text-3xl font-bold text-white mb-8 ">Facebook</h2>
              <p className="info text-lg text-gray-200">
                I developed an interactive network that allows you to create,
                update and delete posts. Developed with React, TypeScript and
                TailwindCSS, it optimizes the user experience with a modern
                interface and an efficient API.
              </p>
              <button className="context mt-6 px-4 py-2 bg-black text-white rounded-full hover:scale-105 transition-transform">
                See project
              </button>
            </div>
          </div>

          {/* Segundo elemento (imagen existente) */}
          <div className="relative h-full w-full flex items-center justify-center bg-[#1A1A1A] text-center rounded-xl overflow-hidden">
            <video
              autoPlay
              loop
              muted
              className="absolute top-0 left-0 w-full h-10px object-cover opacity-30 "
            >
              <source
                src={`${import.meta.env.BASE_URL}fondo/fondo2.png`}
                // type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div className="relative z-10 p-6">
              <h2 className="text-3xl font-bold text-white mb-8">
                Secure Login
              </h2>
              <p className="info text-lg text-gray-200">
                I developed an authentication system that allows users to
                register and log in securely, using React, TypeScript and JWT to
                efficiently manage sessions.
              </p>
              <button className="context mt-6 px-4 py-2 bg-black text-white rounded-full hover:scale-105 transition-transform">
                See project
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ProjectsPage;
