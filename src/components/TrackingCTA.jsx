import { Link } from "react-router-dom";
import "./TrackingCTA.css";

function TrackingCTA() {
  return (
    <section className="tracking-cta">

      <div className="tracking-cta-container">

        <div className="tracking-cta-top">

          <span className="section-label">
            TRACK YOUR SHIPMENT
          </span>

          <span className="tracking-cta-number">
            07
          </span>

        </div>

        <div className="tracking-cta-content">

          <div className="tracking-cta-heading">

            <h2>
              Always know
              <br />
              where it is.
            </h2>

          </div>

          <div className="tracking-cta-right">

            <p>
              Enter your tracking number and follow your
              shipment from collection to final delivery.
            </p>

            <Link
              to="/tracking"
              className="tracking-cta-button"
            >
              Track your shipment
              <span>→</span>
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default TrackingCTA;