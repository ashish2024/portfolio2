import experience from '../../data/experience';
import './Experience.css';

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
              <div className="experience-main">
                <div className="experience-heading">
                  <div>
                    <p className="experience-company">{item.company}</p>
                    <h3>{item.role}</h3>
                  </div>

                  <span className="experience-period">
                    {item.period}
                  </span>
                </div>

                <div className="experience-tech-list">
                  {item.technologies.map((technology) => (
                    <span className="tech-chip" key={technology}>
                      {technology}
                    </span>
                  ))}
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
