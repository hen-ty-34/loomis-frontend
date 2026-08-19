import "./OurValues.css";

function OurValues() {
  return (
    <main className="values-page">

      {/* HERO — VIDEO */}
      <section className="values-hero">

        <div className="values-hero-media">
          {/* VIDEO PLACEHOLDER: drop in hero footage here (e.g. team at work, office culture, day-in-the-life) */}
          <video
            className="values-hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster=""
          >
            <source src="/src/images/vid1.MOV" type="video/mp4" />
          </video>
        </div>

        <div className="values-container">

          <span className="values-label">
            OUR VALUES & CONDUCT
          </span>

          <h1>
            What
            <br />
            guides
            <br />
            us.
          </h1>

        </div>
      </section>


      {/* INTRO */}
      <section className="values-intro">

        <div className="values-container values-intro-grid">

          <div className="values-side-label">
            OUR CULTURE
          </div>

          <div className="values-intro-content">

            <h2>
              People.
              <br />
              Service.
              <br />
              Integrity.
            </h2>

            <p>
              Responsible behaviour towards our people,
              our customers and the environment is at
              the heart of everything we do.
            </p>

            <p>
              Our culture is built around three fundamental
              values: People, Service and Integrity. These
              values guide how we work, how we serve our
              customers and how we conduct our business.
            </p>

          </div>

        </div>

      </section>


      {/* WE KNOW HOW */}
      <section className="values-model">

        <div className="values-container">

          <div className="values-model-heading">

            <span className="values-label">
              THE WAY WE WORK
            </span>

            <h2>
              We.
              <br />
              Know.
              <br />
              How.
            </h2>

          </div>


          <div className="values-model-list">

            <article className="values-model-item">

              <div className="values-model-word">
                We
              </div>

              <div>
                <span className="values-number">
                  01
                </span>

                <h3>
                  We
                </h3>

                <p>
                  We build a strong corporate culture
                  and common foundation based on our
                  values, leadership principles,
                  sustainability and social responsibility.
                </p>
              </div>

            </article>


            <article className="values-model-item">

              <div className="values-model-word">
                Know
              </div>

              <div>
                <span className="values-number">
                  02
                </span>

                <h3>
                  Know
                </h3>

                <p>
                  Know represents the knowledge and
                  learning shared throughout the
                  organisation, including processes,
                  services, products and best practices.
                </p>
              </div>

            </article>


            <article className="values-model-item">

              <div className="values-model-word">
                How
              </div>

              <div>
                <span className="values-number">
                  03
                </span>

                <h3>
                  How
                </h3>

                <p>
                  How is where local teams apply the
                  common principles and develop the
                  business according to local conditions
                  and customer needs.
                </p>
              </div>

            </article>

          </div>

        </div>

      </section>


      {/* THREE VALUES */}
      <section className="values-core">

        <div className="values-container">

          <div className="values-core-heading">

            <span className="values-label">
              OUR CORE VALUES
            </span>

            <h2>
              Three values.
              <br />
              One culture.
            </h2>

          </div>


          <div className="values-core-grid">

            <article className="value-card">

              <div className="value-card-image">
                <div className="value-card-placeholder">
                  PEOPLE
                </div>
              </div>

              <div className="value-card-number">
                01
              </div>

              <div className="value-card-icon">
                P
              </div>

              <h3>
                People
              </h3>

              <p>
                We are committed to developing quality
                people and treating everyone with respect.
              </p>

            </article>


            <article className="value-card">

              <div className="value-card-image">
                <div className="value-card-placeholder">
                  SERVICE
                </div>
              </div>

              <div className="value-card-number">
                02
              </div>

              <div className="value-card-icon">
                S
              </div>

              <h3>
                Service
              </h3>

              <p>
                We strive for exceptional quality,
                innovation and exceeding our customers'
                expectations.
              </p>

            </article>


            <article className="value-card">

              <div className="value-card-image">
                <div className="value-card-placeholder">
                  INTEGRITY
                </div>
              </div>

              <div className="value-card-number">
                03
              </div>

              <div className="value-card-icon">
                I
              </div>

              <h3>
                Integrity
              </h3>

              <p>
                We perform with honesty, vigilance
                and high ethical standards.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* CODE OF CONDUCT */}
      <section className="values-conduct">

        <div className="values-container values-conduct-grid">

          <div className="values-conduct-placeholder">
            CODE OF CONDUCT
          </div>

          <div className="values-conduct-content">

            <span className="values-label">
              CODE OF CONDUCT
            </span>

            <h2>
              Doing the
              <br />
              right thing.
            </h2>

            <p>
              Our Code of Conduct reflects our fundamental
              values and provides guidance for how we
              conduct ourselves and our business.
            </p>

            <p>
              It supports high business ethics, care for
              employees and responsibility towards the
              environment.
            </p>

            <a
              href="#"
              className="values-link"
            >
              Read our Code of Conduct
              <span>→</span>
            </a>

          </div>

        </div>

      </section>


      {/* INTEGRITY */}
      <section className="values-integrity">

        <div className="values-container">

          <span className="values-label">
            INTEGRITY
          </span>

          <h2>
            Trust is
            <br />
            everything.
          </h2>

          <p>
            Our business and workplace are built on
            trust. Everyone should feel able to raise a
            concern when something does not meet our
            standards or policies.
          </p>

          <div className="values-integrity-box">

            <span>
              INTEGRITY LINE
            </span>

            <h3>
              Speak up.
              <br />
              Be heard.
            </h3>

            <p>
              We encourage responsible reporting of
              serious concerns and support an open
              culture where integrity comes first.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="values-cta">

        <div className="values-container">

          <span className="values-label">
            OUR VALUES
          </span>

          <h2>
            Built on
            <br />
            trust.
          </h2>

          <a
            href="/contact"
            className="values-cta-link"
          >
            Contact us
            <span>→</span>
          </a>

        </div>

      </section>

    </main>
  );
}

export default OurValues;