import{ FaInstagram, FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaPinterestP />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedinIn />
          </a>
        </div>

      <div className="footer-links">
        <div className="col">
          <h4>Our Products</h4>
          <ul>
            <li><a href="#">The Support Suite</a></li>
            <li><a href="#">The Sales Suite</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Guide</a></li>
          </ul>
        </div>
        <div className="col">
          <h4>Top Features</h4>
          <ul>
            <li><a href="#">Ticketing System</a></li>
            <li><a href="#">Knowledge Base</a></li>
            <li><a href="#">Community Forums</a></li>
            <li><a href="#">Help Desk Software</a></li>
          </ul>
        </div>
        <div className="col">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Product Support</a></li>
            <li><a href="#">Request Demo</a></li>
            <li><a href="#">Library</a></li>
            <li><a href="#">Peoplepower Blog</a></li>
          </ul>
        </div>
        <div className="col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Events</a></li>
          </ul>
        </div>
        <div className="col">
          <h4>Favourite Things</h4>
          <ul>
            <li><a href="#">For Enterprise</a></li>
            <li><a href="#">For Startups</a></li>
            <li><a href="#">For Benchmark</a></li>
            <li><a href="#">For Small Business</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-divider"/>

      <div className="footer-bottom">© Glamourous 2025 - All Rights Reserved</div>

      
    </footer>


  );
}

export default Footer;
