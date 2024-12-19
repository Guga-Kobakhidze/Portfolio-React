import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import ErrorPage from "../pages/ErrorPage";
import ProjectsPage from "../pages/ProjectsPage";

const Router = () => {
  return (
    <Routes>
      <Route index={true} element={<MainPage />} />
      <Route path="projects" element={<ProjectsPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
