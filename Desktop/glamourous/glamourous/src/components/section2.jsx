import cardtrousers from '../assets/card-trousers.jpg.png';
import cardjacket from '../assets/card-jacket.jpg.jpg';
import carddress from '../assets/card-dress.jpg.jpg';


function Section2() {
  return (
    <section className="section2">
      <div className="section2-inner">
        <div className="section2-left">
          <h4 className="label-left">New In<br/>Store Now</h4>
          <p className="section2-lead">Get the latest items immediately with promo prices</p>
          <a className="check-all" href="#">Check All →</a>
        </div>

        <div className="section2-right" aria-hidden="false">
          <div className="cards-row">
            <div className="card">
              <img src={cardtrousers} alt="Trousers" />
              <div className="card-label">Trousers</div>
            </div>
            <div className="card">
              <img src={cardjacket} alt="Jacket" />
              <div className="card-label">Jacket</div>
            </div>
            <div className="card">
              <img src={carddress} alt="Dress" />
              <div className="card-label">Dress</div>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2;
