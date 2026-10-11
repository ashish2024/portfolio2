import experience from '../../data/experience';
import './Experience.css';

const technologyIcons = {
  Java: '☕',
  'Spring Boot': '🌱',
  Spring: '🌱',
  'Spring Security': '🔐',
  SQL: '🗄️',
  MySQL: '🗄️',
  Hibernate: '🔄',
  JPA: '🔄',
  Python: '🐍',
  RabbitMQ: '🐇',
  Docker: '🐳',
  Git: '🔀',
  GitHub: '🐙',
  REST: '🔌',
  'REST APIs': '🔌',
  JWT: '🔑',
  React: '⚛️',
  JavaScript: '🟨',
  HTML: '🌐',
  CSS: '🎨',
  Postman: '📮',
  'IBM App Connect Enterprise': '🔗',
};

function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-header">
          <p className="section-label">WORK EXPERIENCE</p>
          <h2 className="section-title">Professional Experience</h2>
        </div>

        <div className="experience-list">
          {experience.map((item) => (
            <article
              className="experience-card glass"
              key={`${item.company}-${item.role}`}
            >
              <div className="experience-marker" aria-hidden="true">
                <span />
              </div>

              <div className="experience-main">
                <div className="experience-heading">
                  <div>
                    <p className="experience-company">{item.company}</p>
                    <h3>{item.role}</h3>
                    {item.location && (
                      <p className="experience-location">{item.location}</p>
                    )}
                  </div>

                  <span className="experience-period">{item.period}</span>
                </div>

                {item.summary && (
                  <p className="experience-summary">{item.summary}</p>
                )}

                <div className="experience-technologies">
                  <span className="experience-tech-label">Technologies</span>

                  <div className="experience-tech-list">
                    {item.technologies.map((technology) => (
                      <span className="experience-tech-item" key={technology}>
                        <span aria-hidden="true">
                          {technologyIcons[technology] || '⚙️'}
                        </span>
                        <span>{technology}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;