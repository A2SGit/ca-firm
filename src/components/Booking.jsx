import { useState } from 'react';
import { Calendar, Clock, Video, Check, ChevronLeft, Loader2, ArrowRight } from 'lucide-react';

const Booking = () => {
  const [step, setStep] = useState(1); // 1: Date, 2: Time & Details, 3: Success
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    topic: 'Taxation & GST'
  });
  const [submitting, setSubmitting] = useState(false);

  // July 2026 starts on Wednesday (3 empty spots in a Sunday-start calendar: Sun=0, Mon=1, Tue=2, Wed=3)
  const emptyDaysBefore = 3;
  const daysInJuly = 31;
  
  // Available days: Monday, Wednesday, Friday
  const isDayAvailable = (day) => {
    // 1st of July is Wednesday (day index 3)
    const dayOfWeek = (day + emptyDaysBefore - 1) % 7;
    return dayOfWeek === 1 || dayOfWeek === 3 || dayOfWeek === 5; // Mon, Wed, Fri
  };

  const timeSlots = ["10:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

  const handleDateSelect = (day) => {
    setSelectedDate(day);
    setStep(2);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedTime) return;
    
    setSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setSubmitting(false);
      setStep(3);
    }, 1200);
  };

  const resetBooking = () => {
    setStep(1);
    setSelectedDate(null);
    setSelectedTime('');
    setFormData({
      name: '',
      email: '',
      company: '',
      topic: 'Taxation & GST'
    });
  };

  const formattedDate = selectedDate ? `July ${selectedDate}, 2026` : '';

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
        background: 'radial-gradient(circle, rgba(126, 211, 33, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="services-header" style={{ marginBottom: '4rem' }}>
          <h2 className="section-title" style={{ color: 'var(--accent-green)' }}>Your Success Matters</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255, 255, 255, 0.8)', margin: '0 auto' }}>
            We are dedicated to helping you achieve your financial goals. Book a 15-minute expert consultation today.
          </p>
        </div>

        <div className="booking-container">
          <div className="booking-card">
            
            {/* Sidebar with Consultant Info */}
            <div className="booking-sidebar">
              <div>
                <div className="consultant-info" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                  <div className="consultant-avatar">IBM</div>
                  <div>
                    <h3 style={{ color: 'var(--primary-navy)', fontSize: '1.2rem', fontWeight: 700 }}>IBM & Co.</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Advisory & Compliance</p>
                  </div>
                </div>
                
                <h4 style={{ fontSize: '1.4rem', color: 'var(--primary-navy)', marginBottom: '1rem' }}>Expert Consultation</h4>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-muted)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                    <Clock size={18} />
                    <span>15 Minutes</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                    <Video size={18} />
                    <span>Google Meet Video Call</span>
                  </div>
                </div>
              </div>

              {step > 1 && (
                <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', textAlign: 'left' }}>
                  <p style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>Selected Time</p>
                  <p style={{ fontWeight: 700, color: 'var(--primary-navy)', marginTop: '0.25rem', fontSize: '1.05rem' }}>{formattedDate}</p>
                  {selectedTime && <p style={{ fontWeight: 700, color: 'var(--accent-green-hover)', fontSize: '1.05rem' }}>at {selectedTime}</p>}
                </div>
              )}
            </div>

            {/* Main Interactive Scheduler Area */}
            <div className="booking-main">
              
              {step === 1 && (
                <div style={{ animation: 'fadeIn 0.3s ease-out' }}>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-navy)', marginBottom: '0.5rem', textAlign: 'left' }}>Select a Date</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem', textAlign: 'left' }}>July 2026 (Mon, Wed, Fri available)</p>
                  
                  <div className="calendar-weeks-grid">
                    <span>SUN</span><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span>
                  </div>
                  
                  <div className="calendar-grid">
                    {/* Empty cells before July 1st */}
                    {[...Array(emptyDaysBefore)].map((_, i) => (
                      <div key={`empty-${i}`} className="calendar-day-btn empty" />
                    ))}
                    
                    {/* Days of July */}
                    {[...Array(daysInJuly)].map((_, i) => {
                      const day = i + 1;
                      const available = isDayAvailable(day);
                      return (
                        <button
                          key={`day-${day}`}
                          onClick={() => available && handleDateSelect(day)}
                          disabled={!available}
                          className={`calendar-day-btn ${available ? 'available-day' : 'disabled'}`}
                          aria-label={`July ${day}, 2026 ${available ? 'Available' : 'Unavailable'}`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {step === 2 && (
                <form onSubmit={handleSubmit} className="booking-form">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <button 
                      type="button" 
                      onClick={() => setStep(1)} 
                      style={{ display: 'flex', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary-navy)', padding: '0.5rem 0' }}
                      aria-label="Back to calendar date selection"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--primary-navy)' }}>Consultation Details</h3>
                  </div>

                  {/* Time slot picker */}
                  <div className="time-slots-container">
                    <label style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--primary-navy)' }}>Select a Time Slot</label>
                    <div className="time-slots-grid">
                      {timeSlots.map(slot => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTime(slot)}
                          className={`time-slot-btn ${selectedTime === slot ? 'selected-slot' : ''}`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="booking-form-group">
                    <label htmlFor="booking-name">Full Name</label>
                    <input
                      type="text"
                      id="booking-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g., Rajesh Kumar"
                    />
                  </div>

                  <div className="booking-form-group">
                    <label htmlFor="booking-email">Work Email</label>
                    <input
                      type="email"
                      id="booking-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g., rajesh@techsolutions.com"
                    />
                  </div>

                  <div className="booking-form-group">
                    <label htmlFor="booking-company">Company Name</label>
                    <input
                      type="text"
                      id="booking-company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g., Tech Solutions Inc."
                    />
                  </div>

                  <div className="booking-form-group">
                    <label htmlFor="booking-topic">Topic of Discussion</label>
                    <select
                      id="booking-topic"
                      name="topic"
                      value={formData.topic}
                      onChange={handleInputChange}
                      style={{
                        padding: '0.875rem 1rem',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '0.75rem',
                        fontSize: '0.95rem',
                        background: 'white',
                        fontFamily: 'inherit'
                      }}
                    >
                      <option value="Taxation & GST">Taxation & GST Advisory</option>
                      <option value="Accounting & Books">Accounting & Bookkeeping</option>
                      <option value="Statutory Audit">Statutory or Internal Audit</option>
                      <option value="Corporate Secretarial">Company Setup & ROC</option>
                      <option value="Business Strategy">Virtual CFO & Business Strategy</option>
                    </select>
                  </div>

                  <button 
                    type="submit" 
                    disabled={submitting || !selectedTime}
                    className="btn-primary" 
                    style={{ width: '100%', justifyContent: 'center', marginTop: '1rem', padding: '1rem' }}
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="animate-spin" size={20} style={{ marginRight: '0.5rem' }} />
                        Securing Slot...
                      </>
                    ) : (
                      <>
                        Confirm Consultation <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                      </>
                    )}
                  </button>
                </form>
              )}

              {step === 3 && (
                <div className="booking-success">
                  <div className="success-icon-container">
                    <Check size={40} strokeWidth={3} />
                  </div>
                  
                  <h3 style={{ fontSize: '1.75rem', color: 'var(--primary-navy)', fontWeight: 800 }}>Consultation Confirmed!</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '400px' }}>
                    We've sent a calendar invitation and meeting link to your email address, <strong>{formData.email}</strong>.
                  </p>

                  <div className="booking-summary-box">
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Date:</span>
                      <strong style={{ color: 'var(--primary-navy)' }}>{formattedDate}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Time:</span>
                      <strong style={{ color: 'var(--primary-navy)' }}>{selectedTime}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Topic:</span>
                      <strong style={{ color: 'var(--primary-navy)' }}>{formData.topic}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Platform:</span>
                      <strong style={{ color: 'var(--primary-navy)' }}>Google Meet Video</strong>
                    </div>
                  </div>

                  <button 
                    onClick={resetBooking} 
                    className="btn-secondary" 
                    style={{ color: 'var(--primary-navy)', borderColor: 'var(--primary-navy)', padding: '0.75rem 2rem', marginTop: '1rem' }}
                  >
                    Schedule Another Session
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
