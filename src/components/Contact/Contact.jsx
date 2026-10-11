import profile from '../../data/profile';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-card glass">
          <p className="section-label">GET IN TOUCH</p>

          <h2 className="section-title">
            Let's connect and build something meaningful.
          </h2>

          <p className="section-description contact-description">
            Interested in my work or exploring software engineering
            opportunities? Connect with me through my professional profiles.
          </p>

          <div className="contact-actions">
            <a
              className="contact-link-card"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open GitHub profile in a new tab"
            >
              <span className="contact-link-label">GITHUB</span>
              <span className="contact-link-value">View my repositories</span>
              <span className="contact-link-arrow" aria-hidden="true">↗</span>
            </a>

            {profile.linkedin && (
              <a
                className="contact-link-card"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile in a new tab"
              >
                <span className="contact-link-label">LINKEDIN</span>
                <span className="contact-link-value">Connect professionally</span>
                <span className="contact-link-arrow" aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;