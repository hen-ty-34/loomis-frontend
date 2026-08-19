import "./CashManagement.css";

function CashManagement() {
  return (
    <main className="cash-management-page">

      {/* HERO — VIDEO */}
      <section className="cash-hero">

        <div className="cash-hero-media">
          {/* VIDEO PLACEHOLDER: drop in hero footage here (e.g. cash processing floor, secure vehicle loading) */}
          <video
            className="cash-hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster=""
          >
            <source src="/src/images/vid1.MOV" type="video/mp4" />
          </video>
        </div>

        <div className="cash-container">

          <span className="cash-label">
            CASH MANAGEMENT SERVICES
          </span>

          <h1>
            Secure
            <br />
            cash
            <br />
            solutions.
          </h1>

        </div>
      </section>


      {/* INTRO */}
      <section className="cash-intro">

        <div className="cash-container cash-intro-grid">

          <div className="cash-side-label">
            CASH MANAGEMENT
          </div>

          <div className="cash-intro-content">

            <h2>
              Security for
              <br />
              every transaction.
            </h2>

            <p>
              Managing and transporting cash requires
              security, reliability and precision at every
              stage. Our cash management solutions are
              designed to help businesses move, store
              and manage cash securely.
            </p>

            <p>
              From collection and transportation to
              processing and delivery, our specialists
              coordinate each step according to your
              individual requirements.
            </p>

          </div>

        </div>

      </section>


      {/* SERVICES */}
      <section className="cash-services">

        <div className="cash-container">

          <div className="cash-heading">

            <span className="cash-label">
              OUR SERVICES
            </span>

            <h2>
              Secure.
              <br />
              Reliable.
              <br />
              Controlled.
            </h2>

          </div>


          <div className="cash-service-list">

            <article className="cash-service-item">

              <div className="cash-number">
                01
              </div>

              <div>

                <h3>
                  Cash Collection
                </h3>

                <p>
                  Secure cash collection services help
                  businesses safely move cash from
                  retail locations, offices and other
                  collection points.
                </p>

              </div>

            </article>


            <article className="cash-service-item">

              <div className="cash-number">
                02
              </div>

              <div>

                <h3>
                  Secure Cash
                  Transportation
                </h3>

                <p>
                  Specialised transportation solutions
                  provide secure movement of cash between
                  businesses, financial institutions and
                  other authorised destinations.
                </p>

              </div>

            </article>


            <article className="cash-service-item">

              <div className="cash-number">
                03
              </div>

              <div>

                <h3>
                  Cash Processing
                </h3>

                <p>
                  Cash processing services support
                  accurate counting, verification and
                  preparation of cash according to
                  customer requirements.
                </p>

              </div>

            </article>


            <article className="cash-service-item">

              <div className="cash-number">
                04
              </div>

              <div>

                <h3>
                  Secure Storage
                </h3>

                <p>
                  High-security facilities provide
                  controlled storage for cash and other
                  valuable assets before their next
                  destination.
                </p>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* IMAGE SECTION */}
      <section className="cash-image-section">

        <div className="cash-container cash-image-grid">

          <div className="cash-image-placeholder">
            CASH MANAGEMENT
          </div>

          <div className="cash-image-content">

            <span className="cash-label">
              SECURITY & CONTROL
            </span>

            <h2>
              Built around
              <br />
              trust.
            </h2>

            <p>
              Cash management requires a high level
              of trust. Our teams operate according to
              strict security procedures designed to
              protect cash throughout the entire process.
            </p>

            <p>
              Controlled handling, secure transportation
              and carefully managed processes help
              ensure every transaction is completed
              safely and efficiently.
            </p>

          </div>

        </div>

      </section>


      {/* SOLUTIONS */}
      <section className="cash-solutions">

        <div className="cash-container">

          <div className="cash-solutions-heading">

            <span className="cash-label">
              TAILORED SOLUTIONS
            </span>

            <h2>
              Designed for
              <br />
              your business.
            </h2>

          </div>


          <div className="cash-solutions-grid">

            <article>

              <div className="cash-solutions-image">
                <div className="cash-solutions-placeholder">
                  RETAIL
                </div>
              </div>

              <span>01</span>

              <h3>
                Retail
              </h3>

              <p>
                Secure collection and transportation
                solutions designed for retail
                environments and distributed
                collection points.
              </p>

            </article>


            <article>

              <div className="cash-solutions-image">
                <div className="cash-solutions-placeholder">
                  FINANCIAL INSTITUTIONS
                </div>
              </div>

              <span>02</span>

              <h3>
                Financial
                Institutions
              </h3>

              <p>
                Reliable cash movement and secure
                handling solutions for banks and
                financial organisations.
              </p>

            </article>


            <article>

              <div className="cash-solutions-image">
                <div className="cash-solutions-placeholder">
                  INTERNATIONAL OPERATIONS
                </div>
              </div>

              <span>03</span>

              <h3>
                International
                Operations
              </h3>

              <p>
                Coordinated cash logistics for
                organisations operating across
                international markets.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="cash-cta">

        <div className="cash-container">

          <span className="cash-label">
            CASH MANAGEMENT
          </span>

          <h2>
            Security you
            <br />
            can rely on.
          </h2>

          <a
            href="/contact"
            className="cash-cta-link"
          >
            Contact us
            <span>→</span>
          </a>

        </div>

      </section>

    </main>
  );
}

export default CashManagement;