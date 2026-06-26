import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { servicesData } from '../data/services.jsx';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isHomePage = location.pathname === '/';
  const isLightNav = !isHomePage || scrolled || mobileMenuOpen;

  return (
    <nav
      className={`navbar ${isLightNav ? 'light-nav' : ''} ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}
      aria-label="Main Navigation"
    >
      <div className="container nav-container">
        <Link to="/" className="nav-logo" aria-label="IBM & Co. Home" onClick={() => setMobileMenuOpen(false)}>
          IBM <span>&</span> Co.
        </Link>

        {/* Desktop Links */}
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

        {/* Mobile Toggle Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu-drawer"
          aria-label={mobileMenuOpen ? "Close main navigation menu" : "Open main navigation menu"}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        id="mobile-menu-drawer"
        className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        <div className="mobile-drawer-content">
          <div className="mobile-links">
            <div className="mobile-dropdown-section">
              <button
                className="mobile-dropdown-toggle nav-link"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                aria-expanded={mobileServicesOpen}
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', textAlign: 'left', padding: '0.75rem 0' }}
              >
                Services <ChevronDown size={20} style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform var(--transition-fast)' }} />
              </button>
              
              <div className={`mobile-dropdown-menu ${mobileServicesOpen ? 'open' : ''}`}>
                <Link to="/services" className="mobile-dropdown-item" onClick={() => setMobileMenuOpen(false)}>
                  All Services
                </Link>
                {servicesData.map(service => (
                  <Link
                    key={service.id}
                    to={`/services/${service.id}`}
                    className="mobile-dropdown-item"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            
            <div style={{ marginTop: '2rem' }}>
              <a href="/#book-meeting" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setMobileMenuOpen(false)}>
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
