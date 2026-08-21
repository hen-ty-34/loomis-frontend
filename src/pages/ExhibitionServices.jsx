import "./ExhibitionServices.css";
import exhibitionHeroVideo from '../images/exhibition.mp4';
import exhibitionIntroImg from '../images/handle.jpeg';
import exhibitionImg from '../images/growth.jpg';
import { IconBriefcase, IconPackage, IconMail } from '@tabler/icons-react';
import temporaryExportImg from '../images/tem.jpg';
import storageSolutionsImg from '../images/solution.jpg';
import customsTaxImg from '../images/tax.jpg';



function ExhibitionServices() {
  return (
    <main className="exhibition-page">

      {/* HERO  */}
      <section className="exhibition-hero">

  <div className="exhibition-hero-media">
    <video
      className="exhibition-hero-video"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src={exhibitionHeroVideo} type="video/mp4" />
    </video>
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

    <div className="exhibition-intro-image">
      <img src={exhibitionIntroImg} alt="Specialist art logistics" />
    </div>

    <div className="exhibition-intro-content">

      <div className="exhibition-side-label">
        SPECIALIST ART LOGISTICS
      </div>

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

    <div className="exhibition-image-content">

      <span className="exhibition-label">
        SPECIALIST HANDLING
      </span>

      <h2>
        Nothing left
        <br />
        to chance.
      </h2>

      <span className="exhibition-underline" />

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

    <div className="exhibition-image-media">
      <img src={exhibitionImg} alt="Art & exhibition logistics" />
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

      <article className="exhibition-project-card exhibition-project-card--blue">
        <div className="exhibition-project-image">
          <img src={temporaryExportImg} alt="Temporary Export" />
        </div>
        <div className="exhibition-project-body">
          <div className="exhibition-project-title">
            <span className="exhibition-project-icon">
              <IconBriefcase size={20} stroke={1.75} />
            </span>
            <h3>Temporary Export</h3>
          </div>
          <p>
            Support with the logistics and
            documentation required for temporary
            international art movements and
            exhibition projects.
          </p>
        </div>
      </article>

      <article className="exhibition-project-card exhibition-project-card--peach">
        <div className="exhibition-project-image">
          <img src={storageSolutionsImg} alt="Storage Solutions" />
        </div>
        <div className="exhibition-project-body">
          <div className="exhibition-project-title">
            <span className="exhibition-project-icon">
              <IconPackage size={20} stroke={1.75} />
            </span>
            <h3>Storage Solutions</h3>
          </div>
          <p>
            Secure storage options can be
            coordinated before, during or after
            an exhibition or international
            transportation project.
          </p>
        </div>
      </article>

      <article className="exhibition-project-card exhibition-project-card--lavender">
        <div className="exhibition-project-image">
          <img src={customsTaxImg} alt="Customs & Tax Matters" />
        </div>
        <div className="exhibition-project-body">
          <div className="exhibition-project-title">
            <span className="exhibition-project-icon">
              <IconMail size={20} stroke={1.75} />
            </span>
            <h3>Customs & Tax Matters</h3>
          </div>
          <p>
            International exhibitions can involve
            complex customs and tax requirements.
            Our specialists help coordinate the
            necessary processes.
          </p>
        </div>
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