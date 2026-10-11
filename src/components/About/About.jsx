import './About.css';

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header">
          <p className="section-label">About Me</p>
          <h2 className="section-title">
            Backend-focused software engineering with Java & Spring Boot.
          </h2>
          <p className="section-description">
            I build backend applications with a focus on Java, Spring Boot,
            REST APIs, security, databases, and messaging systems.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-content glass">
            <p>
              I am a Software Engineer focused on backend development and
              building structured, maintainable applications.
            </p>

            <p>
              My primary development stack includes Java, Spring Boot,
              Spring Security, REST APIs, JPA, Hibernate, and MySQL, with
              RabbitMQ for messaging and Docker for application
              containerization.
            </p>

            <p>
              I also work with tools and technologies across development,
              testing, version control, and integration, including Git,
              GitHub, Postman, CI/CD, Python, React, and IBM App Connect
              Enterprise.
            </p>
          </div>

          <div className="about-focus">
            <article className="about-card glass">
              <span className="about-card-number">01</span>
              <div>
                <h3>Backend Engineering</h3>
                <p>
                  Java, Spring Boot, JPA, Hibernate and structured backend
                  application development.
                </p>
              </div>
            </article>

            <article className="about-card glass">
              <span className="about-card-number">02</span>
              <div>
                <h3>APIs & Security</h3>
                <p>
                  REST APIs, Spring Security and JWT-based application
                  security.
                </p>
              </div>
            </article>

            <article className="about-card glass">
              <span className="about-card-number">03</span>
              <div>
                <h3>Data & Messaging</h3>
                <p>
                  MySQL, SQL and RabbitMQ for persistence, data handling and
                  messaging workflows.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;