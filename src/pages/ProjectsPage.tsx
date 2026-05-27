import "../styles/Projects.css";
import { FaGithub } from "react-icons/fa";
import { Carousel, IconButton } from "@material-tailwind/react";

interface Project {
  title: string;
  description: string;
  url: string;
  github: string;
  video: string;
  videoOpacity?: number;
}

const PROJECTS: Project[] = [
  {
    title: "Cortexa - Intelligence Productivity",
    description:
      "Built a full-stack SaaS productivity app with Next.js, TypeScript, and Supabase, including notes/tasks management, habit tracking, AI insights, authentication, and a premium animated UI. Deployed on Vercel with PostgreSQL.",
    url: "https://cortexa-five.vercel.app/",
    github: "https://github.com/JuSeGuBa/Cortexa",
    video: "videos/Cortexa.mp4",
    videoOpacity: 70,
  },
  {
    title: "Pending Tasks",
    description:
      "Developed an interactive web to create, update, and delete tasks using Vue and TailwindCSS, optimizing the user experience with a modern interface and an efficient API.",
    url: "https://prueba-tecnica-sebastian-guzman-m9l6xls4m-jusegubas-projects.vercel.app/",
    github: "https://github.com/JuSeGuBa/Prueba-Tecnica-Sebastian-guzman",
    video: "videos/tareas.mp4",
  },
  {
    title: "Facebook",
    description:
      "Developed an interactive network to create, update and delete posts, using React, TypeScript and TailwindCSS, optimizing the user experience with a modern interface and an efficient API.",
    url: "https://facebook-project-ruddy.vercel.app/",
    github: "https://github.com/JuSeGuBa/facebook_project",
    video: "videos/Facebook.mp4",
  },
  {
    title: "Secure Login",
    description:
      "Developed an authentication system that allows users to register and log in securely, using React, TypeScript and JWT to efficiently manage sessions.",
    url: "https://registration-five-brown.vercel.app/",
    github: "https://github.com/JuSeGuBa/Registration-Form",
    video: "videos/formshort.mp4",
  },
];

const openLink = (url: string) =>
  window.open(url, "_blank", "noopener,noreferrer");

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <h1 className="projects-title">
        <span className="p">P</span>rojects
      </h1>

      <div className="projects-carousel-wrapper">
        <Carousel
          transition={{ duration: 1 }}
          className="projects-carousel"
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="carousel-arrow carousel-arrow--prev"
              style={{
                background: "none",
                boxShadow: "none",
                outline: "none",
                border: "none",
                WebkitTapHighlightColor: "transparent",
                zIndex: 70,
              }}
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
              className="carousel-arrow carousel-arrow--next"
              style={{
                background: "none",
                boxShadow: "none",
                outline: "none",
                border: "none",
                WebkitTapHighlightColor: "transparent",
                zIndex: 70,
              }}
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
              {Array.from({ length }).map((_, i) => (
                <span
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
        >
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group relative h-full w-full flex items-center justify-center bg-gray-900 text-center rounded-xl overflow-hidden"
            >
              {/* Background video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out pointer-events-none"
                style={{ opacity: (project.videoOpacity ?? 30) / 100 }}
              >
                <source
                  src={`${import.meta.env.BASE_URL}${project.video}`}
                  type="video/mp4"
                />
              </video>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-[1] pointer-events-none" />

              {/* Content */}
              <div className="relative z-10 p-6 animate-fadeInUp">
                <h2 className="text-3xl font-bold text-white mb-8">
                  {project.title}
                </h2>
                <p className="info text-lg text-gray-200">
                  {project.description}
                </p>
                <div className="flex items-center justify-center gap-4 mt-6">
                  <button
                    onClick={() => openLink(project.url)}
                    className="buttons-links"
                  >
                    See project
                  </button>
                  <button
                    onClick={() => openLink(project.github)}
                    className="buttons-github"
                  >
                    <FaGithub />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProjectsPage;
