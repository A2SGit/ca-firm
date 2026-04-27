import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/services.jsx';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return <div className="container section-padding">Service not found</div>;
  }

  return (
    <div className="service-detail-page">
      {/* Header Section */}
      <section className="hero" style={{ minHeight: '40vh', paddingBottom: '4rem', background: 'var(--bg-off-white)' }}>
        <div className="container">
          <Link to="/services" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--primary-navy)' }}>
            <ArrowLeft size={20} /> Back to Services
          </Link>
          <div className="hero-content" style={{ textAlign: 'left', margin: 0 }}>
            <div className="service-icon" style={{ background: 'rgba(126, 211, 33, 0.1)', color: 'var(--accent-green)' }}>
              {service.icon}
            </div>
            <h1 className="hero-title" style={{ color: 'var(--primary-navy)' }}><span>{service.title}</span> Services</h1>
            <p className="hero-desc" style={{ color: 'var(--text-muted)' }}>{service.shortDesc}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="benefits-grid">
            <div>
              <h2 className="section-title">Comprehensive <span className="text-green">Solutions</span></h2>
              <p className="service-desc" style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                {service.fullDesc}
              </p>
              
              <div className="benefit-list">
                {service.features.map((feature, index) => (
                  <div key={index} className="benefit-item">
                    <div className="benefit-icon">
                      <CheckCircle2 size={24} />
                    </div>
                    <p style={{ fontWeight: 600, fontSize: '1.1rem' }}>{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="benefit-image-container">
              <div className="benefit-image" style={{ height: '400px', fontSize: '3rem' }}>
                {service.title}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service CTA Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-off-white)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="cta-section" style={{ margin: 0, padding: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Get in touch for {service.title}</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Our experts are ready to assist you with tailored solutions for your unique business needs.</p>
            </div>
            <Link to="/#book-meeting" className="btn-primary" style={{ height: 'fit-content' }}>
              Schedule Your Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
