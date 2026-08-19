import "./CustomClearance.css";

function CustomClearance() {
  return (
    <main className="custom-clearance-page">

      {/* HERO — IMAGE */}
      <section className="custom-clearance-hero">

        <div className="custom-clearance-hero-media">
          {/* IMAGE PLACEHOLDER: drop in hero image here (e.g. customs/border checkpoint, cleared cargo) */}
          <div className="custom-clearance-hero-image">
          </div>
        </div>

        <div className="custom-clearance-container">

          <span className="custom-clearance-label">
            CUSTOM CLEARANCE
          </span>

          <h1>
            Compliant,
            <br />
            without
            <br />
            complications.
          </h1>

        </div>
      </section>


      {/* INTRO */}
      <section className="custom-clearance-intro">

        <div className="custom-clearance-container custom-intro-grid">

          <div className="custom-side-label">
            CUSTOMS CLEARANCE, WORLDWIDE
          </div>

          <div className="custom-intro-content">

            <h2>
              We handle the
              <br />
              complexity.
            </h2>

            <p>
              When moving valuable goods across
              international borders, precision is
              essential. Every country has its own
              regulations, documentation requirements
              and inspection procedures.
            </p>

            <p>
              Our customs specialists combine
              international reach with local knowledge
              to help ensure shipments clear customs
              smoothly, securely and efficiently.
            </p>

          </div>

        </div>

      </section>


      {/* SERVICES */}
      <section className="custom-services">

        <div className="custom-clearance-container">

          <div className="custom-section-heading">

            <span className="custom-clearance-label">
              OUR EXPERTISE
            </span>

            <h2>
              Customs,
              <br />
              under control.
            </h2>

          </div>


          <div className="custom-service-list">

            <article className="custom-service-item">

              <div className="custom-number">
                01
              </div>

              <div>

                <h3>
                  Import and Export
                  Management
                </h3>

                <p>
                  We manage the customs processes
                  involved in international imports
                  and exports, helping your goods move
                  efficiently through borders while
                  meeting applicable requirements.
                </p>

              </div>

            </article>


            <article className="custom-service-item">

              <div className="custom-number">
                02
              </div>

              <div>

                <h3>
                  Tariff and Duty
                  Consulting
                </h3>

                <p>
                  Our specialists help businesses
                  understand applicable tariffs, duties
                  and customs costs so they can make
                  informed decisions when moving goods
                  internationally.
                </p>

              </div>

            </article>


            <article className="custom-service-item">

              <div className="custom-number">
                03
              </div>

              <div>

                <h3>
                  Documentation and
                  Regulatory Compliance
                </h3>

                <p>
                  Accurate documentation and regulatory
                  compliance are essential to avoiding
                  unnecessary delays. We help coordinate
                  the required paperwork and procedures
                  throughout the customs process.
                </p>

              </div>

            </article>


            <article className="custom-service-item">

              <div className="custom-number">
                04
              </div>

              <div>

                <h3>
                  Border Coordination
                </h3>

                <p>
                  We coordinate with relevant customs
                  authorities and partners to help
                  maintain smooth movement of valuable
                  and sensitive shipments across borders.
                </p>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* IMAGE SECTION */}
      <section className="custom-image-section">

        <div className="custom-clearance-container custom-image-grid">

          <div className="custom-image-placeholder">
            CUSTOMS CLEARANCE
          </div>

          <div className="custom-image-content">

            <span className="custom-clearance-label">
              LOOMIS INTERNATIONAL
            </span>

            <h2>
              Global reach.
              <br />
              Local expertise.
            </h2>

            <p>
              Our international network gives
              customers access to customs expertise
              across key markets and financial centres.
            </p>

            <p>
              By combining global coordination with
              local insight, we help reduce complexity
              and keep valuable shipments moving.
            </p>

          </div>

        </div>

      </section>


      {/* PRECIOUS METALS */}
      <section className="custom-precious">

        <div className="custom-clearance-container">

          <div className="custom-precious-heading">

            <span className="custom-clearance-label">
              PRECIOUS METALS
            </span>

            <h2>
              Expertise where
              <br />
              precision matters.
            </h2>

          </div>


          <div className="custom-precious-grid">

            <article>

              <div className="custom-precious-image">
                <div className="custom-precious-placeholder">
                  GOLD
                </div>
              </div>

              <span>01</span>

              <h3>
                Gold
              </h3>

              <p>
                Specialist customs and logistics
                support for the secure international
                movement of gold.
              </p>

            </article>


            <article>

              <div className="custom-precious-image">
                <div className="custom-precious-placeholder">
                  SILVER
                </div>
              </div>

              <span>02</span>

              <h3>
                Silver
              </h3>

              <p>
                Carefully coordinated documentation,
                compliance and transportation for
                silver shipments.
              </p>

            </article>


            <article>

              <div className="custom-precious-image">
                <div className="custom-precious-placeholder">
                  PLATINUM
                </div>
              </div>

              <span>03</span>

              <h3>
                Platinum
              </h3>

              <p>
                Secure handling and international
                customs coordination for platinum
                and other high-value materials.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="custom-clearance-cta">

        <div className="custom-clearance-container">

          <span className="custom-clearance-label">
            WE ARE HERE TO HELP
          </span>

          <h2>
            Make customs
            <br />
            simple.
          </h2>

          <a
            href="/contact"
            className="custom-cta-link"
          >
            Contact us
            <span>→</span>
          </a>

        </div>

      </section>

    </main>
  );
}

export default CustomClearance;