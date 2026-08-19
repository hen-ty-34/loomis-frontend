import "./ExhibitionServices.css";

function ExhibitionServices() {
  return (
    <main className="exhibition-page">

      {/* HERO — IMAGE */}
      <section className="exhibition-hero">

        <div className="exhibition-hero-media">
          {/* IMAGE PLACEHOLDER: drop in hero image here (e.g. artwork crating, gallery installation, fine art handling) */}
          <div className="exhibition-hero-image">
          </div>
        </div>

        <div className="exhibition-container">

          <span className="exhibition-label">
            EXHIBITION SERVICES
          </span>

          <h1>
            Art &
            <br />
            exhibition
            <br />
            logistics.
          </h1>

        </div>
      </section>


      {/* INTRO */}
      <section className="exhibition-intro">

        <div className="exhibition-container exhibition-intro-grid">

          <div className="exhibition-side-label">
            SPECIALIST ART LOGISTICS
          </div>

          <div className="exhibition-intro-content">

            <h2>
              Precision for
              <br />
              priceless pieces.
            </h2>

            <p>
              Moving works of art and exhibition pieces
              requires more than transportation. Every
              item must be handled with precision,
              discretion and care.
            </p>

            <p>
              Our specialist exhibition logistics
              solutions coordinate transportation,
              packing, storage, customs and delivery
              around the individual requirements of
              each project.
            </p>

          </div>

        </div>

      </section>


      {/* SERVICES */}
      <section className="exhibition-services">

        <div className="exhibition-container">

          <div className="exhibition-heading">

            <span className="exhibition-label">
              EXHIBITION LOGISTICS
            </span>

            <h2>
              Every detail
              <br />
              matters.
            </h2>

          </div>


          <div className="exhibition-service-list">

            <article className="exhibition-service-item">

              <div className="exhibition-number">
                01
              </div>

              <div>
                <h3>
                  Specialist Crating
                </h3>

                <p>
                  Custom packaging and specialist
                  crating help protect delicate and
                  irreplaceable works during handling,
                  storage and transportation.
                </p>
              </div>

            </article>


            <article className="exhibition-service-item">

              <div className="exhibition-number">
                02
              </div>

              <div>
                <h3>
                  International
                  Transportation
                </h3>

                <p>
                  We coordinate secure international
                  transportation for exhibitions,
                  galleries, museums, artists and
                  private collectors.
                </p>
              </div>

            </article>


            <article className="exhibition-service-item">

              <div className="exhibition-number">
                03
              </div>

              <div>
                <h3>
                  Environmental
                  Protection
                </h3>

                <p>
                  Sensitive works can require protection
                  from temperature changes, humidity,
                  vibration, shock and other environmental
                  conditions throughout their journey.
                </p>
              </div>

            </article>


            <article className="exhibition-service-item">

              <div className="exhibition-number">
                04
              </div>

              <div>
                <h3>
                  Exhibition
                  Coordination
                </h3>

                <p>
                  From collection and preparation to
                  final delivery, we coordinate the
                  logistics involved in exhibitions
                  involving multiple destinations and
                  stakeholders.
                </p>
              </div>

            </article>

          </div>

        </div>

      </section>


      {/* IMAGE SECTION */}
      <section className="exhibition-image-section">

        <div className="exhibition-container exhibition-image-grid">

          <div className="exhibition-image-placeholder">
            ART & EXHIBITION LOGISTICS
          </div>

          <div className="exhibition-image-content">

            <span className="exhibition-label">
              SPECIALIST HANDLING
            </span>

            <h2>
              Nothing left
              <br />
              to chance.
            </h2>

            <p>
              Unique works require individual
              attention. Our specialists work with
              clients to understand the specific
              requirements of each object before
              transportation begins.
            </p>

            <p>
              From protective packaging to carefully
              planned routes and controlled handling,
              every stage is considered before the
              shipment moves.
            </p>

          </div>

        </div>

      </section>


      {/* PROJECTS */}
      <section className="exhibition-projects">

        <div className="exhibition-container">

          <div className="exhibition-project-heading">

            <span className="exhibition-label">
              COMPLETE PROJECT SUPPORT
            </span>

            <h2>
              From gallery
              <br />
              to destination.
            </h2>

          </div>


          <div className="exhibition-project-grid">

            <article>

              <div className="exhibition-project-image">
                <div className="exhibition-project-placeholder">
                  TEMPORARY EXPORT
                </div>
              </div>

              <span>01</span>

              <h3>
                Temporary
                Export
              </h3>

              <p>
                Support with the logistics and
                documentation required for temporary
                international art movements and
                exhibition projects.
              </p>

            </article>


            <article>

              <div className="exhibition-project-image">
                <div className="exhibition-project-placeholder">
                  STORAGE SOLUTIONS
                </div>
              </div>

              <span>02</span>

              <h3>
                Storage
                Solutions
              </h3>

              <p>
                Secure storage options can be
                coordinated before, during or after
                an exhibition or international
                transportation project.
              </p>

            </article>


            <article>

              <div className="exhibition-project-image">
                <div className="exhibition-project-placeholder">
                  CUSTOMS & TAX MATTERS
                </div>
              </div>

              <span>03</span>

              <h3>
                Customs &
                Tax Matters
              </h3>

              <p>
                International exhibitions can involve
                complex customs and tax requirements.
                Our specialists help coordinate the
                necessary processes.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="exhibition-cta">

        <div className="exhibition-container">

          <span className="exhibition-label">
            EXHIBITION LOGISTICS
          </span>

          <h2>
            Your collection.
            <br />
            Our expertise.
          </h2>

          <a
            href="/contact"
            className="exhibition-cta-link"
          >
            Contact us
            <span>→</span>
          </a>

        </div>

      </section>

    </main>
  );
}

export default ExhibitionServices;