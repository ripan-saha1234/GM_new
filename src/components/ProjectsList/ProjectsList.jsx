import React from 'react'
import './ProjectsList.css'

const ProjectsList = ({ projects = [] }) => {
  return (
    <div className="projects-list">
      {projects.map((project, index) => (
        <article key={index} className="project-card">
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-card-description">{project.description}</p>
          <a
            href={project.link || '#'}
            className="project-card-button"
          >
            View Details
          </a>
        </article>
      ))}
    </div>
  )
}

export default ProjectsList
