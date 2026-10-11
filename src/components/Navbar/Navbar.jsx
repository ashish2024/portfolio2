
import { useEffect, useState } from 'react';
import './Navbar.css';

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      const currentSection = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    setActiveSection('about');
    setMenuOpen(false);
  };

  return (
    <header
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <div className="container navbar-container">
        <button
          className="navbar-logo"
          type="button"
          onClick={handleLogoClick}
          aria-label="Return to the top of the page"
        >
          A
        </button>

        <nav
          id="main-navigation"
          className={`navbar-links ${
            menuOpen ? 'navbar-links-open' : ''
          }`}
          aria-label="Main navigation"
         
        >
          
{navItems.map((item) => (
  <a
    key={item.id}
    href={`#${item.id}`}
    className={`navbar-link ${
      activeSection === item.id ? 'navbar-link-active' : ''
    }`}
    onClick={() => setMenuOpen(false)}
    aria-current={
      activeSection === item.id ? 'location' : undefined
    }
  >
    {item.label}
  </a>
))}

        </nav>

        <div className="navbar-actions">
          <a
            className="navbar-social"
            href="https://github.com/ashish2024"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Ashish's GitHub profile (opens in a new tab)"
          >
            GitHub
          </a>

          <button
            className="navbar-menu-button"
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
