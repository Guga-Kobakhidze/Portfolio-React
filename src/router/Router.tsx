import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "../layouts/Layout";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";

const MainPage = lazy(() => import("../pages/MainPage"));
const ProjectsPage = lazy(() => import("../pages/ProjectsPage"));
const ErrorPage = lazy(() => import("../pages/404"));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<MainPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:id" element={<ProjectDetailsPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
