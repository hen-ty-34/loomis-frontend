import { Link } from "react-router-dom";
import logoImg from "../images/logo.jpg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-main">

          <div className="footer-brand">

            <Link to="/" className="footer-logo">
              <img src={logoImg} alt="Loomis" className="footer-logo-img" />
            </Link>

            <p>
              Secure logistics solutions for valuable
              goods, businesses and customers worldwide.
            </p>

          </div>

          <div className="footer-column">

            <h3>Explore</h3>

            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About Us</Link>
            <Link to="/countries">Countries</Link>
            <Link to="/industries">Industries</Link>

          </div>

          <div className="footer-column">

            <h3>Services</h3>

            <Link to="/services/international-logistics">
              International Logistics
            </Link>

            <Link to="/services/storage">
              Storage
            </Link>

            <Link to="/services/custom-clearance">
              Custom Clearance
            </Link>

            <Link to="/services/exhibition-services">
              Exhibition Services
            </Link>

            <Link to="/services/cash-management">
              Cash Management
            </Link>

          </div>

          <div className="footer-column">

            <h3>Connect</h3>

            <Link to="/tracking">
              Track Shipment
            </Link>

            <a href="mailto:info@yourlogistics.com">
              Email Us
            </a>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 Loomis International. All rights reserved.
          </p>

          <div className="footer-legal">

            <a href="#">
              Privacy
            </a>

            <a href="#">
              Terms
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;