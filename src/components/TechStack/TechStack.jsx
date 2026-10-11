import technologies from '../../data/technologies';
import './TechStack.css';

const categories = [
  {
    title: 'Backend Development',
    description: 'My primary development stack',
    skills: technologies.backend,
    featured: true,
  },
  {
    title: 'Database',
    description: 'Data storage and querying',
    skills: technologies.database,
  },
  {
    title: 'Messaging',
    description: 'Asynchronous communication',
    skills: technologies.messaging,
  },
  {
    title: 'DevOps & Tools',
    description: 'Development and delivery tools',
    skills: technologies.devops,
  },
  {
    title: 'Complementary Technologies',
    description: 'Additional technologies and integration',
    skills: technologies.complementary,
  },
];

function TechStack() {
  return (
    <section id="skills" className="section tech-stack">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Technical Skills</p>
          <h2 className="section-title">
            Technologies I work with.
          </h2>
          <p className="section-description">
            A backend-first toolkit for application development,
            APIs, databases, messaging, and supporting tools.
          </p>
        </div>

        <div className="tech-grid">
          {categories.map((category, index) => (
            <article
              key={category.title}
              className={`tech-card glass ${
                category.featured ? 'tech-card-featured' : ''
              }`}
              style={{ '--card-index': index }}
            >
              <div className="tech-card-heading">
                <span className="tech-card-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
              </div>

              <div className="tech-list">
                {category.skills.map((skill) => (
                  <span className="tech-chip" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;