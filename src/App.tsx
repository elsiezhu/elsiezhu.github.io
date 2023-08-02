import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import AboutMePage from "./pages/AboutMePage";
import ExperiencePage from "./pages/ExperiencePage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import TopNavBar from "./TopNavBar";

export default function App(): JSX.Element {
  return (
    <HashRouter>
        <div>
            <TopNavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutMePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/experience" element={<ExperiencePage />} />
            </Routes>
        </div>
    </HashRouter>
  );
}
