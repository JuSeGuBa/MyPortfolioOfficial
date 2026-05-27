import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Navbar from "../components/Navbar";

const RootLayout = () => (
  <>
    <Navbar />
    <main>
      <HomePage />
    </main>
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
]);

export default router;
