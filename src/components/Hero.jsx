import "./Hero.css";

function Hero() {
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
          <source src="/src/images/1.mp4" type="video/mp4" />
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

        <div className="tracking-form">
          <input
            type="text"
            placeholder="Enter your tracking number"
          />

          <button>
            Track
          </button>
        </div>

      </div>

    </section>
  );
}

export default Hero;