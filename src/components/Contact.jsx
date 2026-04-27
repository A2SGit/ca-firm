import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding container">
      <div className="cta-section">
        <div className="cta-content">
          <h2>Ready to Secure Your Business?</h2>
          <p>Get in touch with PSMG & Accociates. for expert advisory and end-to-end financial compliance services tailored for your unique business needs.</p>
          <div className="hero-cta">
            <a href="https://maps.app.goo.gl/WnaYK4zim5Yhfa2X6" target="_blank" rel="noreferrer" className="btn-primary">
              <MapPin size={24} /> Visit Our Office
            </a>
            <a href="mailto:contact@ibmco.in" className="btn-secondary">
              <Mail size={24} /> Email Us
            </a>
          </div>

          <div className="footer-links" style={{ flexDirection: 'row', justifyContent: 'center', marginTop: '3rem', gap: '3rem' }}>
            <div className="nav-link" style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={20} className="text-green" />
              <span>+91 XXXXX XXXXX</span>
            </div>
            <div className="nav-link" style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={20} className="text-green" />
              <span>contact@ibmco.in</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
