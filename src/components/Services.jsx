import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services.jsx';

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className="services-header animate-fade-in">
          <h2 className="section-title">Our <span className="text-green">Expertise</span></h2>
          <p className="section-subtitle">
            Comprehensive financial and legal services designed to help your business thrive in today's complex regulatory environment.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div 
              key={service.id} 
              className="service-card animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.shortDesc}</p>
              <Link to={`/services/${service.id}`} className="service-link">
                View Service <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
