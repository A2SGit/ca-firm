import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "CEO, Tech Solutions Inc.",
    content: "PSGM & Associates. has been instrumental in our company's financial growth. Their expertise in taxation and corporate compliance is unmatched. Highly recommended for any business looking for serious financial partners.",
    rating: 5,
    date: "2 months ago"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Proprietor, Sharma Exports",
    content: "The team is professional, prompt, and highly knowledgeable. They helped us navigate complex GST regulations with ease. Their proactive approach to business advisory has saved us significant time and money.",
    rating: 5,
    date: "4 months ago"
  },
  {
    id: 3,
    name: "Anand Verma",
    role: "Director, BuildRight Constructions",
    content: "We've been with PSGM & Associates. for over 5 years. Their auditing services are thorough and provide great insights into our operational efficiency. A truly trustworthy firm.",
    rating: 5,
    date: "6 months ago"
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-off-white">
      <div className="container">
        <div className="services-header animate-fade-in">
          <h2 className="section-title">What <span className="text-green">Clients Say</span></h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', color: '#fbbc05' }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#fbbc05" />)}
            </div>
            <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>5.0 Rating</span>
          </div>
          <p className="section-subtitle">
            Trusted by businesses across India for excellence in financial advisory and compliance.
          </p>
        </div>

        <div className="services-grid">
          {testimonials.map((t, index) => (
            <div
              key={t.id}
              className="service-card animate-fade-in"
              style={{
                animationDelay: `${index * 100}ms`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', color: '#fbbc05', marginBottom: '1rem', gap: '2px' }}>
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="#fbbc05" />)}
                </div>
                <p className="service-desc" style={{ fontStyle: 'italic', color: 'var(--text-dark)', marginBottom: '2rem' }}>
                  "{t.content}"
                </p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem' }}>
                <div>
                  <h4 style={{ color: 'var(--primary-navy)', fontWeight: 700 }}>{t.name}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{t.role}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg"
                    alt="Google"
                    style={{ width: '60px', marginBottom: '0.25rem' }}
                  />
                  <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{t.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem 2rem',
            background: 'white',
            borderRadius: '3rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
          }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg"
              alt="Google Logo"
              style={{ width: '80px' }}
            />
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>
              Powered by Google Reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
