const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="nav-logo">
              PSMG <span>&</span> Accociates.
            </div>
            <p>Your trusted partner for comprehensive taxation, accounting, auditing, and business advisory services since 2008.</p>
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
            <h4 className="footer-title">Compliance</h4>
            <div className="footer-links">
              <a href="#">GST Filing</a>
              <a href="#">Income Tax</a>
              <a href="#">ROC Compliance</a>
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
          <p>&copy; {new Date().getFullYear()} PSMG & Accociates. Chartered Accountants. All rights reserved.</p>
          <p>Designed with Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
