import { ArrowRight, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge animate-fade-in">Chartered Accountants & Business Advisors</div>
          <h1 className="hero-title animate-fade-in delay-100">
            Professional <span>Financial Services</span> for Your Business Growth
          </h1>
          <p className="hero-desc animate-fade-in delay-200">
            PSGM & Associates. provides expert taxation, auditing, and corporate advisory services. We help businesses navigate complex regulatory landscapes with precision and integrity.
          </p>
          <div className="hero-cta animate-fade-in delay-300">
            <a href="#services" className="btn-primary">
              Our Services <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn-secondary">
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
