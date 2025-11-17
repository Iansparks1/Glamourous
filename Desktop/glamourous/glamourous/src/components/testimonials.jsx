import testimonials from '../assets/testimonials.jpg.jpg';

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-inner">
        <div className="test-left">
          <h3 className="test-heading">What People Are Saying About Us</h3>

          <div className="test-card">
            <div className="test-avatar">
              <img src="/src/assets/testi-avatar.svg" alt="avatar" />
            </div>
            <div className="test-meta">
              <div className="test-name" style={{ color: 'hsl(0, 13%, 6%)' }}>Lena Muriuki</div>
              <div className="test-role" style={{ color: 'hsl(0, 13%, 6%)' }}>Fashion Stylist & Creative Consultant</div>

            </div>
          </div>

          <blockquote className="test-quote">“A beautiful fusion of culture and modern fashion. The prints, the fit, the quality — absolutely outstanding!”</blockquote>

          <div className="test-nav">
            <button className="nav-btn">←</button>
            <button className="nav-btn primary">→</button>
          </div>
        </div>

        <div className="test-right">
          <div className="test-image">
            <img src={testimonials} alt="clothes" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
