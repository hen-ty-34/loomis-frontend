import "./Sustainability.css";

function Sustainability() {
  return (
    <main className="sustainability-page">

      {/* HERO — IMAGE */}
      <section className="sustainability-hero">

        <div className="sustainability-hero-media">
          {/* IMAGE PLACEHOLDER: drop in hero image here (e.g. renewable energy, green facility, sustainability initiative) */}
          <div className="sustainability-hero-image">
          </div>
        </div>

        <div className="sustainability-container">

          <span className="sustainability-label">
            SUSTAINABILITY
          </span>

          <h1>
            The future
            <br />
            is worth it.
          </h1>

        </div>
      </section>


      {/* INTRO */}
      <section className="sustainability-intro">

        <div className="sustainability-container">

          <span className="sustainability-label">
            OUR COMMITMENT
          </span>

          <h2>
            Creating a more
            <br />
            sustainable future.
          </h2>

          <p>
            Sustainability is an important part of how we
            operate and make decisions. We work continuously
            to reduce our environmental impact, strengthen
            our social responsibility and maintain strong
            governance across our business.
          </p>

        </div>

      </section>


      {/* THREE PILLARS */}
      <section className="sustainability-pillars">

        <div className="sustainability-container">

          <div className="sustainability-heading">

            <span className="sustainability-label">
              OUR THREE AREAS
            </span>

            <h2>
              Three areas.
              <br />
              One responsibility.
            </h2>

          </div>


          <div className="sustainability-pillar-list">

            {/* ENVIRONMENT */}
            <article className="sustainability-pillar">

              <div className="sustainability-number">
                01
              </div>

              <div className="sustainability-pillar-content">

                <h3>
                  Environmental
                  <br />
                  sustainability
                </h3>

                <p>
                  We aim to reduce our climate impact by
                  moving towards renewable fuels and energy
                  while continuously improving how we use
                  resources.
                </p>

                <div className="sustainability-focus">

                  <span>FOCUS AREAS</span>

                  <div>
                    <span>Emissions reduction</span>
                    <span>Resource efficiency</span>
                  </div>

                </div>

              </div>

            </article>


            {/* SOCIAL */}
            <article className="sustainability-pillar">

              <div className="sustainability-number">
                02
              </div>

              <div className="sustainability-pillar-content">

                <h3>
                  Social
                  <br />
                  responsibility
                </h3>

                <p>
                  We strive to create a strong corporate
                  culture that attracts and retains talented
                  people while maintaining a safe and healthy
                  workplace.
                </p>

                <div className="sustainability-focus">

                  <span>FOCUS AREAS</span>

                  <div>
                    <span>Health and safety</span>
                    <span>Attract and retain</span>
                  </div>

                </div>

              </div>

            </article>


            {/* GOVERNANCE */}
            <article className="sustainability-pillar">

              <div className="sustainability-number">
                03
              </div>

              <div className="sustainability-pillar-content">

                <h3>
                  Governance
                  <br />
                  & compliance
                </h3>

                <p>
                  We are committed to responsible business
                  practices, financial inclusion and the
                  highest standards of integrity throughout
                  our business and value chain.
                </p>

                <div className="sustainability-focus">

                  <span>FOCUS AREAS</span>

                  <div>
                    <span>A reliable partner</span>
                    <span>Responsible procurement</span>
                  </div>

                </div>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* HERITAGE */}
      <section className="sustainability-heritage">

        <div className="sustainability-container sustainability-two-column">

          <div className="sustainability-image-placeholder">
            SUSTAINABILITY
          </div>

          <div className="sustainability-heritage-content">

            <span className="sustainability-label">
              OUR HERITAGE
            </span>

            <h2>
              Moving forward
              <br />
              since 1852.
            </h2>

            <p>
              Our long history has taught us that lasting
              success requires us to continuously adapt to
              the changing needs of markets and societies.
            </p>

            <p>
              Today, financial inclusion, customer safety,
              reducing our carbon footprint and becoming
              a better employer remain important parts of
              our continued development.
            </p>

          </div>

        </div>

      </section>


      {/* HUMAN RIGHTS */}
      <section className="sustainability-human-rights">

        <div className="sustainability-container">

          <span className="sustainability-label">
            HUMAN RIGHTS
          </span>

          <h2>
            Respect for
            <br />
            people.
          </h2>

          <div className="human-rights-grid">

            <p>
              Respect for human rights and rights at work
              is fundamental to responsible business.
              We are committed to operating in accordance
              with internationally recognised human rights
              principles.
            </p>

            <p>
              We support fair working conditions, equal
              opportunities, reasonable working hours and
              safe workplaces while respecting applicable
              employment laws and regulations in the markets
              where we operate.
            </p>

          </div>

        </div>

      </section>


      {/* CASE STUDY */}
      <section className="sustainability-case">

        <div className="sustainability-container">

          <div className="sustainability-case-heading">

            <span className="sustainability-label">
              CASE STUDY
            </span>

            <h2>
              Renewable
              <br />
              energy.
            </h2>

          </div>


          <div className="sustainability-case-content">

            <div className="sustainability-case-image">
              RENEWABLE ENERGY
            </div>

            <div className="sustainability-statements">

              <div>
                <strong>4</strong>
                <span>major European cities</span>
              </div>

              <div>
                <strong>4%</strong>
                <span>total energy needs</span>
              </div>

              <div>
                <strong>10%</strong>
                <span>Spanish operational consumption</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* REPORTING */}
      <section className="sustainability-report">

        <div className="sustainability-container">

          <span className="sustainability-label">
            SUSTAINABILITY REPORTING
          </span>

          <h2>
            Measuring
            <br />
            progress.
          </h2>

          <p>
            We remain committed to integrating sustainability
            into business decisions and continuously improving
            the transparency and quality of our sustainability
            reporting.
          </p>

          <a
            href="#"
            className="sustainability-link"
          >
            Read sustainability report
            <span>→</span>
          </a>

        </div>

      </section>


      {/* CTA */}
      <section className="sustainability-cta">

        <div className="sustainability-container">

          <span className="sustainability-label">
            SUSTAINABILITY
          </span>

          <h2>
            Better today.
            <br />
            Better tomorrow.
          </h2>

          <a
            href="/contact"
            className="sustainability-cta-link"
          >
            Contact us
            <span>→</span>
          </a>

        </div>

      </section>

    </main>
  );
}

export default Sustainability;