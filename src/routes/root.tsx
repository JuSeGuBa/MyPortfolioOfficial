import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProjectsPage from "../pages/ProjectsPage";
import ContactPage from "../pages/ContactPage";
import {createBrowserRouter,} from "react-router-dom";


const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
        path: "/projects",
        element: <ProjectsPage />,
    },
    {
        path: "/contact",
        element: <ContactPage />
    }
  ]);


  export default router;