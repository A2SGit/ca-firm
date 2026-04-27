import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { servicesData } from '../data/services.jsx';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setDropdownOpen(false);
  }, [location]);

  const isHomePage = location.pathname === '/';
  const isLightNav = !isHomePage || scrolled;

  return (
    <nav
      className={`navbar ${isLightNav ? 'light-nav' : ''} ${scrolled ? 'scrolled' : ''}`}
      aria-label="Main Navigation"
    >
      <div className="container nav-container">
        <Link to="/" className="nav-logo" aria-label="PSMG & Accociates. Home">
          PSMG <span>&</span> Accociates.
        </Link>
        <div className="nav-links">
          <div
            className="nav-dropdown-container"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              to="/services"
              className="nav-link"
              style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              Services <ChevronDown size={16} />
            </Link>
            {dropdownOpen && (
              <div className="nav-dropdown" role="menu">
                {servicesData.map(service => (
                  <Link
                    key={service.id}
                    to={`/services/${service.id}`}
                    className="dropdown-item"
                    role="menuitem"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/#about" className="nav-link">About</Link>
          <Link to="/#contact" className="nav-link">Contact</Link>
          <a href="/#book-meeting" className="btn-primary" aria-label="Schedule a consultation">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
