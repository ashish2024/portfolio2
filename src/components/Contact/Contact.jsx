
import profile from '../../data/profile';
import './Contact.css';

function Contact() {
  const links = [
    {
      label: 'GITHUB',
      value: profile.github,
      href: profile.github,
    },
    {
      label: 'LINKEDIN',
      value: profile.linkedin,
      href: profile.linkedin,
    },
    {
      label: 'EMAIL',
      value: profile.email,
      href: profile.email ? `mailto:${profile.email}` : '',
    },
  ].filter((link) => link.value && link.href);

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-card glass">
          <p className="section-label">GET IN TOUCH</p>

          <h2 className="section-title">
            Connect With Me.
          </h2>

          <p className="section-description contact-description">
            Interested in my work or exploring software engineering
            opportunities? Feel free to connect with me.
          </p>

          <div className="contact-actions">
            {links.map((link) => (
              <a
                key={link.label}
                className="contact-link-card"
                href={link.href}
                target={link.label === 'EMAIL' ? undefined : '_blank'}
                rel={
                  link.label === 'EMAIL'
                    ? undefined
                    : 'noopener noreferrer'
                }
              >
                <span className="contact-link-label">
                  {link.label}
                </span>

                <span className="contact-link-value">
                  {link.value}
                </span>

                <span className="contact-link-arrow" aria-hidden="true">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
