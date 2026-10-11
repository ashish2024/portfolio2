import profile from '../../data/profile';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-eyebrow">Software Engineer</p>

          <h1 className="hero-title">
            Ashish Sonkaria
          </h1>

          <h2 className="hero-role">
            Java Backend Developer
          </h2>

          <p className="hero-description">
            {profile.introduction}
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href={profile.resume}
             download="Ashish_CV.pdf">
              Download CV
            </a>

            <a
              className="btn btn-secondary"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              className="btn btn-secondary"
              href={profile.linkedin || '#'}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-orbit hero-orbit-one">
            <span className="tech-node">Java</span>
          </div>

          <div className="hero-orbit hero-orbit-two">
            <span className="tech-node">Spring</span>
          </div>

          <div className="hero-orbit hero-orbit-three">
            <span className="tech-node">REST</span>
          </div>

          <div className="hero-core">
            <span>Backend</span>
          </div>
        </div>

        <button
          className="hero-scroll"
          type="button"
          onClick={() =>
            document
              .getElementById('about')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
          aria-label="Scroll to About section"
        >
          <span>Scroll Down</span>
          <span className="hero-scroll-arrow">↓</span>
        </button>
      </div>
    </section>
  );
}

export default Hero;