import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const MainPage = lazy(() => import("../pages/MainPage"));
const ProjectsPage = lazy(() => import("../pages/ProjectsPage"));
const ErrorPage = lazy(() => import("../pages/404"));

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
