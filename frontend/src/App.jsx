import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-neutral-950">
      <h1 className="text-3xl font-bold text-neutral-950 dark:text-white">
        404 - Page Not Found
      </h1>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/projects"
          element={<Projects />}
        />
        
        <Route
          path="/projects/:slug"
          element={<ProjectDetails />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;