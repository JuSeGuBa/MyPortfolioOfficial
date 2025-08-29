import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/root";
import Background from "./components/Background";

function App() {
  return (
    <div>
      <Background />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
