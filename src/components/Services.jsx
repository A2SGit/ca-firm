import { ArrowRight, Calculator, FileText, CheckCircle, Shield, Briefcase, FileSearch, Scale, FileCheck, CircleDollarSign, Landmark } from 'lucide-react';

const services = [
  {
    icon: <Calculator size={24} />,
    title: 'Taxation',
    desc: 'Comprehensive tax planning, filing, and advisory for individuals and businesses.'
  },
  {
    icon: <FileText size={24} />,
    title: 'Accounting',
    desc: 'Accurate and timely accounting services to keep your financials organized.'
  },
  {
    icon: <FileCheck size={24} />,
    title: 'Auditing',
    desc: 'Thorough statutory, internal, and concurrent audit services.'
  },
  {
    icon: <Briefcase size={24} />,
    title: 'Company & Secretarial',
    desc: 'End-to-end company formation and ROC compliance management.'
  },
  {
    icon: <FileSearch size={24} />,
    title: 'Due Diligence',
    desc: 'Detailed financial and legal due diligence for mergers and acquisitions.'
  },
  {
    icon: <CheckCircle size={24} />,
    title: 'Registrations & Licenses',
    desc: 'Hassle-free support for GST, MSME, Trade License and other registrations.'
  },
  {
    icon: <Shield size={24} />,
    title: 'Business Advisory',
    desc: 'Strategic insights and financial modeling for business growth.'
  },
  {
    icon: <Landmark size={24} />,
    title: 'Statutory Compliances',
    desc: 'Complete handling of ESI, PF, PT and other labor law compliances.'
  },
  {
    icon: <CircleDollarSign size={24} />,
    title: 'Payroll',
    desc: 'Secure and efficient payroll processing and management.'
  },
  {
    icon: <Scale size={24} />,
    title: 'Legal Services',
    desc: 'Expert legal counsel and drafting of business agreements.'
  },
  {
    icon: <Landmark size={24} />,
    title: 'US Taxation & Accounting',
    desc: 'Specialized services in US GAAP accounting and tax regulations.'
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className="services-header animate-fade-in">
          <h2 className="section-title">Our <span className="text-gold">Expertise</span></h2>
          <p className="section-subtitle">
            We provide a comprehensive suite of financial and legal services designed to help your business thrive in today's complex regulatory environment.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card glass animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
