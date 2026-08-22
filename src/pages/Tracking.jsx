import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Tracking.css";
import trackingHeroImage from "../images/phone.jpg";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

function Tracking() {
  const location = useLocation();
  const [trackingNumber, setTrackingNumber] = useState("");
  const [shipment, setShipment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Auto-populate and search if coming from navbar search
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search).get("number");
    if (searchParams) {
      setTrackingNumber(searchParams);
      performSearch(searchParams);
    }
  }, [location.search]);

  const performSearch = async (number) => {
    if (!number.trim()) {
      setError("Please enter a tracking number.");
      setShipment(null);
      return;
    }

    setLoading(true);
    setError("");
    setShipment(null);

    try {
      const response = await fetch(
        `${API_BASE}/api/shipments/${encodeURIComponent(number)}`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Shipment not found.");
      }

      const shipmentPayload = data.shipment || data;
      setShipment(shipmentPayload);
    } catch (err) {
      setError(err.message || "Unable to track shipment.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await performSearch(trackingNumber);
  };

  return (
    <div className="tracking-page">

      <div
        className="tracking-hero"
        style={{ backgroundImage: `url(${trackingHeroImage})` }}
      >

        <div className="tracking-container">

          <Link to="/" className="tracking-back">
            ← Back to home
          </Link>

          <span className="section-label">
            SHIPMENT TRACKING
          </span>

          <h1>
            Track your
            <br />
            shipment.
          </h1>

          <p>
            Enter your tracking number below to see the
            latest information about your shipment.
          </p>

          <form
            className="tracking-form"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Enter tracking number"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
            />

            <button type="submit" disabled={loading}>
              {loading ? "Searching..." : "Track shipment"}
              <span>→</span>
            </button>
          </form>

          {error && (
            <div className="tracking-error">
              {error}
            </div>
          )}

        </div>

      </div>

      {shipment && (
        <section className="tracking-result">

          <div className="tracking-container">

            <div className="tracking-result-header">

              <div>
                <span className="result-label">
                  TRACKING NUMBER
                </span>

                <h2>
                  {shipment.trackingNumber}
                </h2>
              </div>

              <div className="shipment-status">
                {shipment.status}
              </div>

            </div>

            <div className="shipment-overview">

              <div className="shipment-box">
                <span>FROM</span>
                <strong>{shipment.origin}</strong>
              </div>

              <div className="shipment-arrow">
                →
              </div>

              <div className="shipment-box">
                <span>TO</span>
                <strong>{shipment.destination}</strong>
              </div>

            </div>

            <div className="shipment-current">

              <span>CURRENT LOCATION</span>

              <h3>
                {shipment.currentLocation}
              </h3>

              <p>
                Estimated delivery:{" "}
                <strong>
                  {new Date(
                    shipment.estimatedDelivery
                  ).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </strong>
              </p>

            </div>

            <div className="tracking-history">

              <div className="history-heading">

                <span>SHIPMENT HISTORY</span>

                <h3>
                  Tracking timeline
                </h3>

              </div>

              <div className="timeline">

                {shipment.trackingHistory.map((event, index) => (
                  <div
                    className={`timeline-item ${
                      index === shipment.trackingHistory.length - 1
                        ? "timeline-current"
                        : ""
                    }`}
                    key={event.id}
                  >

                    <div className="timeline-marker">
                      {index === shipment.trackingHistory.length - 1
                        ? "●"
                        : "✓"}
                    </div>

                    <div className="timeline-content">

                      <h4>
                        {event.status}
                      </h4>

                      <span>
                        {event.location}
                      </span>

                      <p>
                        {event.description}
                      </p>

                      <small>
                        {new Date(
                          event.created_at
                        ).toLocaleString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                          hour: "numeric",
                          minute: "2-digit",
                        })}
                      </small>

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </section>
      )}

      {!shipment && !loading && !error && (
        <section className="tracking-info">

          <div className="tracking-container">

            <div className="tracking-info-grid">

              <div>
                <span>01</span>

                <h2>
                  Real-time
                  <br />
                  visibility.
                </h2>
              </div>

              <div>
                <p>
                  Follow your shipment throughout its journey,
                  from collection through transportation,
                  customs and final delivery.
                </p>
              </div>

            </div>

          </div>

        </section>
      )}

    </div>
  );
}

export default Tracking;