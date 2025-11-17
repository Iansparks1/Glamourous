import featureClothes from '../assets/feature-clothes.jpg.jpg';

function Features() {

  return (
    <section className="features">
      <div className="features-inner">
        <div className="features-image">
          <img src={featureClothes} alt="feature preview" />
        </div>

        <div className="features-content">
          <h3 className="features-title">We Upgrade Your Style<br/>With Modern Fashion</h3>
          <p className="features-desc">Elevate your wardrobe with our curated clothing selections.</p>

          <div className="features-list">
            <div className="feature-row">
              <div className="feature-icon">✓</div>
              <div className="feature-text">
                <div className="feature-heading">Premium Wear Styling</div>
                <div className="feature-sub">We help you refine your style with premium clothing recommendations tailored to your brand and personality.</div>
              </div>
            </div>

            <div className="feature-row">
              <div className="feature-icon">✓</div>
              <div className="feature-text">
                <div className="feature-heading">Custom Clothing Designs</div>
                <div className="feature-sub">We create unique clothing designs that reflect your personal style and brand identity.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
