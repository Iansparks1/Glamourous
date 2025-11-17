function CTA() {
  return (
    <section className="cta">
      <div className="cta-inner">
        <div className="cta-image" aria-hidden="true">
          <img src="/src/assets/cta-lamp.svg" alt="lamp" />
        </div>

        <div className="cta-content">
          <h3 className="cta-title">Get more discount<br/>Off your order</h3>
          <p className="cta-sub">Join our mailing list</p>

          <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
            <input className="cta-input" type="email" placeholder="Your email address" aria-label="email" />
            <button className="cta-button" type="submit">Shop Now</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CTA;
