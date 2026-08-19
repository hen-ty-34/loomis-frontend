import "./Storage.css";

function Storage() {
  return (
    <section className="storage-section">

      <div className="storage-container">

        <div className="storage-top">

          <div>
            <span className="section-label">
              SECURE STORAGE
            </span>

            <h2>
              Safe hands.
              <br />
              Secure spaces.
            </h2>
          </div>

          <span className="storage-number">
            06
          </span>

        </div>

        <div className="storage-image">

          <img
            src="/src/images/rbLrYck2_f4Y6kSJeiVyFOpi6tPzVdvVvm2ShSuz4xfZ35tnfRwHW9vBzC_WixZk0Cj183ZNXZU_6U7amMHFUfKleIctbK1e5eh8OTgswL79zy3BWo9lWPbGmAOgQn20XdgePKXAmlOOhaPZ6WwNab7B4k6Vip6vUs_3qd3i8j4i7z19fuT9ar4Ae7n2vWal.jpg"
            alt="Secure logistics storage facility"
          />

          <div className="storage-overlay">

            <div className="storage-overlay-content">

              <p>
                Secure, professionally managed storage
                solutions for valuable goods at every stage
                of their journey.
              </p>

              <a href="/services/storage">
                Discover storage
                <span>→</span>
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Storage;