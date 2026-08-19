import "./Storage.css";

function Storage() {
  return (
    <main className="storage-page">

      {/* HERO — VIDEO */}
      <section className="storage-hero">

        <div className="storage-hero-media">
          {/* VIDEO PLACEHOLDER: drop in hero footage here (e.g. vault interior, secure facility, guarded transfer) */}
          <video
            className="storage-hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster=""
          >
            <source src="/src/images/vid1.MOV" type="video/mp4" />
          </video>
        </div>

        <div className="storage-container">
          <span className="storage-label">
            STORAGE
          </span>

          <h1>
            Secure
            <br />
            valuables
            <br />
            storage.
          </h1>
        </div>
      </section>


      {/* INTRO */}
      <section className="storage-intro">
        <div className="storage-container storage-intro-grid">

          <div className="storage-side-label">
            SECURE VALUABLES STORAGE
          </div>

          <div className="storage-intro-content">
            <h2>
              Protect what
              <br />
              matters most.
            </h2>

            <p>
              When it comes to safeguarding your most
              valuable assets, our high-security storage
              solutions provide the protection, control
              and flexibility your business requires.
            </p>

            <p>
              From precious metals and jewellery to
              documents and other high-value goods,
              every item is stored in a secure environment
              designed around your specific needs.
            </p>
          </div>

        </div>
      </section>


      {/* STORAGE SERVICES */}
      <section className="storage-services">

        <div className="storage-container">

          <div className="storage-section-heading">
            <span className="storage-label">
              OUR STORAGE SERVICES
            </span>

            <h2>
              Security without
              <br />
              compromise.
            </h2>
          </div>


          <div className="storage-service-list">

            <article className="storage-service-item">

              <div className="storage-number">
                01
              </div>

              <div>
                <h3>
                  High-Security Storage
                </h3>

                <p>
                  High-security storage facilities in
                  major financial centres provide
                  advanced protection for your most
                  valuable assets.
                </p>
              </div>

            </article>


            <article className="storage-service-item">

              <div className="storage-number">
                02
              </div>

              <div>
                <h3>
                  Bonded Warehouses
                </h3>

                <p>
                  Bonded warehouse solutions allow
                  goods to be stored in compliance
                  with international customs
                  regulations while duties can be
                  deferred until the goods leave
                  the warehouse.
                </p>
              </div>

            </article>


            <article className="storage-service-item">

              <div className="storage-number">
                03
              </div>

              <div>
                <h3>
                  Web-Based Inventory
                </h3>

                <p>
                  Real-time inventory visibility gives
                  you control over your assets from
                  wherever you are, helping you
                  monitor and manage your holdings
                  efficiently.
                </p>
              </div>

            </article>


            <article className="storage-service-item">

              <div className="storage-number">
                04
              </div>

              <div>
                <h3>
                  Pick & Pack Services
                </h3>

                <p>
                  From individual items to complete
                  consignments, our teams handle
                  packing, preparation and secure
                  delivery to your desired destination.
                </p>
              </div>

            </article>

          </div>

        </div>

      </section>


      {/* IMAGE / TRANSIT */}
      <section className="storage-transit">

        <div className="storage-container storage-transit-grid">

          <div className="storage-image-placeholder">
            SECURE STORAGE & TRANSIT
          </div>

          <div className="storage-transit-content">

            <span className="storage-label">
              SECURE STORAGE & TRANSIT
            </span>

            <h2>
              Your valuables
              <br />
              in safe hands.
            </h2>

            <p>
              Our secure transportation solutions
              connect our storage facilities with
              collection points and final destinations,
              helping ensure your goods remain
              protected throughout the entire journey.
            </p>

            <p>
              With controlled handling and secure
              transportation, your assets receive the
              same high level of protection in transit
              as they do inside our facilities.
            </p>

          </div>

        </div>

      </section>


      {/* HIGH VALUE */}
      <section className="storage-high-value">

        <div className="storage-container">

          <div className="storage-high-heading">

            <span className="storage-label">
              HIGH-VALUE EXPERTISE
            </span>

            <h2>
              More than
              <br />
              storage.
            </h2>

          </div>


          <div className="storage-high-grid">

            <article>

              <div className="storage-high-image">
                <div className="storage-high-placeholder">
                  DIAMOND & JEWELLERY
                </div>
              </div>

              <span>01</span>

              <h3>
                Diamond & Jewellery
                Logistics
              </h3>

              <p>
                Secure and discreet solutions for
                diamonds, jewellery and other
                high-value luxury goods.
              </p>
            </article>


            <article>

              <div className="storage-high-image">
                <div className="storage-high-placeholder">
                  DOCUMENTATION & COMPLIANCE
                </div>
              </div>

              <span>02</span>

              <h3>
                Documentation &
                Compliance
              </h3>

              <p>
                Support with documentation and
                regulatory requirements throughout
                the storage and logistics process.
              </p>
            </article>


            <article>

              <div className="storage-high-image">
                <div className="storage-high-placeholder">
                  HIGH-VALUE SHIPMENTS
                </div>
              </div>

              <span>03</span>

              <h3>
                Expertise in
                High-Value Shipments
              </h3>

              <p>
                Specialist knowledge and secure
                handling procedures for goods
                where security and precision
                are essential.
              </p>
            </article>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="storage-cta">

        <div className="storage-container">

          <span className="storage-label">
            WE ARE HERE TO HELP
          </span>

          <h2>
            Find the right
            <br />
            storage solution
            <br />
            for your business.
          </h2>

          <a
            href="/contact"
            className="storage-cta-link"
          >
            Contact us
            <span>→</span>
          </a>

        </div>

      </section>

    </main>
  );
}

export default Storage;