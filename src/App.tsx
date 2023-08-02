import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMePage from "./pages/AboutMePage.tsx";
import ExperiencePage from "./pages/ExperiencePage.tsx";
import HomePage from "./pages/HomePage.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import TopNavBar from "./TopNavBar.tsx";

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
        <div>
            <TopNavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutMePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/experience" element={<ExperiencePage />} />
            </Routes>
        </div>
    </BrowserRouter>
  );
}
