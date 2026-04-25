import { ArrowRight, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge animate-fade-in">Trusted Financial Advisors</div>
          <h1 className="hero-title animate-fade-in delay-100">
            Empowering Your Business With <span>Precision & Integrity</span>
          </h1>
          <p className="hero-desc animate-fade-in delay-200">
            IBM & Co. is a premier Chartered Accountant firm offering expert taxation, auditing, accounting, and legal services to ensure your financial success.
          </p>
          <div className="hero-cta animate-fade-in delay-300">
            <a href="#contact" className="btn-primary">
              Book Consultation <ArrowRight size={20} />
            </a>
            <a href="tel:+910000000000" className="btn-secondary">
              <Phone size={20} /> Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
