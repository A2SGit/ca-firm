import { CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    title: "Expertise & Experience",
    desc: "Over 15 years of providing high-quality financial and legal advisory services to diverse industries."
  },
  {
    title: "Client-Centric Approach",
    desc: "We prioritize your business goals and provide tailored solutions that ensure long-term success."
  },
  {
    title: "Integrity & Transparency",
    desc: "Our firm is built on a foundation of ethical practices and clear, honest communication with every client."
  },
  {
    title: "Comprehensive Solutions",
    desc: "From taxation to legal registrations, we offer a one-stop shop for all your business compliance needs."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-off-white">
      <div className="container">
        <div className="benefits-grid">
          <div>
            <h2 className="section-title">Why Choose <span className="text-green">PSMG & Accociates?</span></h2>
            <p className="section-subtitle" style={{ margin: '0 0 3rem 0' }}>
              We don't just provide services; we build partnerships. Our commitment to excellence helps your business navigate the complex world of finance and law.
            </p>

            <div className="benefit-list">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <div className="benefit-icon">
                    <CheckCircle2 size={28} />
                  </div>
                  <div>
                    <h3 className="service-title" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{benefit.title}</h3>
                    <p className="service-desc" style={{ marginBottom: 0 }}>{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="benefit-image-container">
            <div className="benefit-image">
              PSMG & ACCOCIATES
            </div>
            <div className="benefit-badge">
              <h4>15+</h4>
              <p>Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
