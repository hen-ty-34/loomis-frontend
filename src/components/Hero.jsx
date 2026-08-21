import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import heroVideo from '../images/homehero.mp4';

function Hero() {
  const navigate = useNavigate();
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleTrackingSubmit = (event) => {
    event.preventDefault();

    const number = trackingNumber.trim();
    if (!number) return;

    navigate(`/tracking?number=${encodeURIComponent(number)}`);
  };

  return (
   <section className="hero">

  <div className="hero-image">
    <video
      className="hero-video"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src={heroVideo} type="video/mp4" />
    </video>
    <div className="hero-overlay"></div>
  </div>

  <div className="hero-content">
    <p className="hero-label">
      WORLDWIDE LOGISTICS
    </p>

    <h1>
      Moving what<br />
      matters.
    </h1>

    <p className="hero-description">
      Reliable logistics solutions designed around
      security, precision and exceptional service.
    </p>

    <a href="#services" className="hero-button">
      Discover our services
      <span>→</span>
    </a>
  </div>

  <div className="tracking-card">

    <div className="tracking-heading">
      <div>
        <span className="tracking-small">
          SHIPMENT TRACKING
        </span>

        <h2>
          Track your shipment
        </h2>
      </div>

      <div className="tracking-icon">
        →
      </div>
    </div>

    <form className="tracking-form" onSubmit={handleTrackingSubmit}>
      <input
        type="text"
        placeholder="Enter your tracking number"
        value={trackingNumber}
        onChange={(event) => setTrackingNumber(event.target.value)}
        aria-label="Tracking number"
      />

      <button type="submit">
        Track
      </button>
    </form>

  </div>

</section>
  );
}

export default Hero;