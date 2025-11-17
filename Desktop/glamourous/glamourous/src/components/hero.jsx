function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <nav className="hero-nav">
          <div className="hero-logo">GLAMOUROUS</div>
          <ul className="hero-menu">
            <li>Home</li>
            <li>About</li>
            <li>Collections</li>
            <li>Contact</li>
          </ul>
        </nav>

        <div className="hero-content">
          <h1 className="hero-title">
            Fresh Styles
            <br />
            Redefine Your Wardrobe
          </h1>
          <p className="hero-sub">Discover curated clothing pieces that bring comfort, confidence and timeless style to every day.</p>
          <div className="hero-cta">
            <button className="btn-primary">Shop Collection</button>
          </div>
        </div>

        <div className="hero-image" aria-hidden="true">
          <img src="/src/assets/hero-clothes.svg" alt="clothing hero" />
        </div>
      </div>

      <div className="hero-stats" role="region" aria-label="shop stats">
         <div className="hero-stats">
            <div className="stat">
              <div className="stat-num">7</div>
              <div className="stat-label">Years Crafting</div>
            </div>
            <div className="stat">
              <div className="stat-num">50+</div>
              <div className="stat-label">Unique Designs</div>
            </div>
            <div className="stat">
              <div className="stat-num">10k+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat">
              <div className="stat-num">12k</div>
              <div className="stat-label">Pieces Sold</div>
            </div>
          </div>
        </div>
      </section>
  ); 
}
    

export default Hero;
