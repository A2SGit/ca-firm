import React from 'react';

const Booking = () => {
  return (
    <section id="book-meeting" className="section-padding" style={{ backgroundColor: 'var(--primary-navy)', position: 'relative', overflow: 'hidden' }}>
      {/* Background glow effect */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle, rgba(126, 211, 33, 0.1) 0%, transparent 70%)',
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="services-header" style={{ marginBottom: '4rem' }}>
          <h2 className="section-title" style={{ color: 'var(--accent-green)' }}>Your Success Matters</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255, 255, 255, 0.8)', margin: '0 auto' }}>
            We are dedicated to helping you achieve your financial goals with our comprehensive services. Book a 15-minute expert consultation today.
          </p>
        </div>

        <div className="booking-container">
          <div className="booking-card">
            {/* Header of the booking widget */}
            <div className="booking-header">
              <div className="consultant-info">
                <div className="consultant-avatar">PSMG</div>
                <div>
                  <h3 style={{ color: 'var(--primary-navy)', fontSize: '1.25rem' }}>Expert Consultation</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>15m • Video Call</p>
                </div>
              </div>
            </div>

            {/* Placeholder for the actual calendar widget */}
            <div className="calendar-placeholder">
              <div className="calendar-mock-grid">
                {[...Array(31)].map((_, i) => (
                  <div key={i} className={`calendar-day ${[5, 12, 19, 26].includes(i+1) ? 'available' : ''}`}>
                    {i + 1}
                  </div>
                ))}
              </div>
              <div className="booking-overlay">
                <p>Integrated Booking System</p>
                <button className="btn-primary" style={{ padding: '0.5rem 1.5rem' }}>Connect Cal.com / Calendly</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
