import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="cta-section">
          <div className="cta-bg"></div>
          <div className="cta-content">
            <h2>Ready to Secure Your Financial Future?</h2>
            <p>Reach out to IBM & Co. for expert advisory and end-to-end financial compliance services tailored for your unique needs.</p>
            <a href="https://maps.app.goo.gl/WnaYK4zim5Yhfa2X6" target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
              <MapPin size={24} /> Visit Our Office
            </a>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '3rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                <Phone size={20} className="text-gold" />
                <span>+91 XXXXX XXXXX</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                <Mail size={20} className="text-gold" />
                <span>contact@ibmco.in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
