import profile from '../../data/profile';
import './Footer.css';

function Footer() {
  const currentYear = 2026;

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <button
            className="footer-brand"
            type="button"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
            aria-label="Back to top"
          >
            AS<span>.</span>
          </button>

          <p className="footer-description">
            Designed and developed by {profile.name}.
          </p>

          <nav className="footer-links" aria-label="Footer navigation">
            <button
              type="button"
              onClick={() => scrollToSection('about')}
            >
              About
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            )}
          </nav>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} {profile.name}. All rights reserved.</p>
          <button
            className="footer-back-top"
            type="button"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;