const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="nav-logo" style={{ fontSize: '1.75rem' }}>
              IBM <span>&</span> Co.
            </div>
            <p>Your trusted partner for comprehensive taxation, accounting, auditing, and business advisory services.</p>
          </div>
          
          <div>
            <h4 className="footer-title">Quick Links</h4>
            <div className="footer-links">
              <a href="#services">Our Services</a>
              <a href="#about">About Us</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          
          <div>
            <h4 className="footer-title">Legal</h4>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Disclaimer</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} IBM & Co. Chartered Accountants. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
