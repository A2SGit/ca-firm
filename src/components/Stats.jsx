const Stats = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item animate-fade-in">
            <h3>15+</h3>
            <p>Years in Business</p>
          </div>
          <div className="stat-item animate-fade-in delay-100">
            <h3>500+</h3>
            <p>Corporate Clients</p>
          </div>
          <div className="stat-item animate-fade-in delay-200">
            <h3>1000+</h3>
            <p>Audits Completed</p>
          </div>
          <div className="stat-item animate-fade-in delay-300">
            <h3>100%</h3>
            <p>Regulatory Compliance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
