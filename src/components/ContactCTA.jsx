import { Link } from "react-router-dom";
import "./ContactCTA.css";

function ContactCTA() {
  return (
    <section className="contact-cta">

      <div className="contact-cta-container">

        <span className="section-label">
          GET IN TOUCH
        </span>

        <h2>
          Let's move
          <br />
          something.
        </h2>

        <div className="contact-cta-bottom">

          <p>
            Tell us what you need to move and our team
            will help you find the right logistics solution.
          </p>

          <Link
            to="/contact"
            className="contact-cta-button"
          >
            Contact our team
            <span>→</span>
          </Link>

        </div>

      </div>

    </section>
  );
}

export default ContactCTA;