import React from 'react';
import "./project.css";
import ProjectsPage from "./ProjectsPage.tsx";

const Projects = () => {
    return (
        <section className="work section" id="portfolio">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Most recent projects</span>
            <ProjectsPage/>
        </section>
    )
}

export default Projects;
