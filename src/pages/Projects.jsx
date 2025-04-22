// src/components/Projects.jsx
import React from "react";
import projectsData from "../data/projectsData";
import './Projects.css'

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="section-title">Projetos</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tech-list">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects