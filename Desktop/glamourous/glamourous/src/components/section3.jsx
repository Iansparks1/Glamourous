import section3 from "../assets/section3.jpg.jpg";

function Section3() {
  return (
    <section className="section3">
      <div className="section3-inner">
        <div className="section3-left">
          <h3 className="section3-title">Elevate Your Everyday Style<br/>Simplicity Meets Class</h3>
          <p className="section3-desc">Discover the perfect blend of comfort and sophistication with our curated collection.</p>
        </div>

        <div className="section3-right">
          <div className="section3-image">
            <img src={section3} alt="Elevate Your Everyday Style" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
