

import projects from '../../data/projects';
import './Projects.css';



function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">MY WORK</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Projects that reflect my learning and development journey.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => {
            const projectUrl = project.github || project.demo;

            return (
              <article className="project-card card" key={project.id}>
                <div className="project-card-top">
                  <span className="project-status">{project.status}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span className="project-tech" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                {projectUrl && (
                  <a
                    className="project-open-link"
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} project`}
                  >
                    <span>View Project</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;