import "./Security.css";

function Security() {
  return (
    <section className="security">

      <div className="security-container">

        <div className="security-header">

          <span className="section-label">
            SECURITY FIRST
          </span>

          <h2>
            Your goods are
            <br />
            always protected.
          </h2>

        </div>

        <div className="security-content">

          <div className="security-image">
            <img
              src="/src/images/mm_ZHDmKd8z2gzrqPjsgxHQ16O5tXki66xVgM_1izEKniwGIg3f4JKv6Mis9POL-UFSj5Sjs6oO9uEsj3VHwIwrQxH0cpfehtSS56uNaHLZWf_n7YUslrzJXgGeh45sZR4VRS3h_Qcft6WALhTbSSUMtVvq_V9Xw0AOe9BXpmaLm671oxDsYL8VrSxw87gFT.jpg"
              alt="Security and protection services"
            />
          </div>

          <div className="security-features">

            <div className="security-feature">
              <h3>Advanced Tracking</h3>
              <p>
                Real-time monitoring of your shipments with
                GPS tracking and regular updates.
              </p>
            </div>

            <div className="security-feature">
              <h3>Secure Facilities</h3>
              <p>
                State-of-the-art warehouses with 24/7
                security, CCTV monitoring, and climate control.
              </p>
            </div>

            <div className="security-feature">
              <h3>Insurance Coverage</h3>
              <p>
                Comprehensive insurance options for maximum
                protection of your valuable goods.
              </p>
            </div>

            <div className="security-feature">
              <h3>Compliance Standards</h3>
              <p>
                Full compliance with international security
                regulations and industry best practices.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Security;
