import "./Services.css";
import storageHeroVideo from '../images/herogold.MOV';
import storageIntroImg from '../images/keep.jpg';
import { IconArrowRight } from '@tabler/icons-react';
import storageServicesImg from '../images/value.jpeg';

function Storage() {
  return (
    <main className="storage-page">

      {/* HERO */}
     <section className="storage-hero">

  <div className="storage-hero-media">
    <video
      className="storage-hero-video"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src={storageHeroVideo} type="video/mp4" />
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

    <p>
      Purpose-built vaults and round-the-clock
      monitoring keep your valuables protected,
      accounted for and accessible whenever
      you need them.
    </p>

  </div>

</section>


      {/* INTRO */}
     <section className="storage-intro">

  <div className="storage-container storage-intro-grid">

    <div className="storage-intro-image">
      <img src={storageIntroImg} alt="Secure valuables storage" />
    </div>

    <div className="storage-intro-content">

      <div className="storage-side-label">
        SECURE VALUABLES STORAGE
      </div>

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

  <div className="storage-container storage-services-layout">

    <div className="storage-services-image">
      <img src={storageServicesImg} alt="Storage services team" />

      <span className="storage-image-badge">
        SECURE
      </span>

      <div className="storage-image-caption">
        Protecting what matters most
      </div>
    </div>

    <div className="storage-services-right">

      <div className="storage-section-heading">

        <span className="storage-label">
          OUR STORAGE SERVICES
        </span>

        <h2>
          Security without
          <br />
          compromise.
        </h2>

        <span className="storage-heading-underline" />

      </div>

      <div className="storage-service-list">

        <article className="storage-service-item">

          <div className="storage-number">01</div>

          <div className="storage-service-text">
            <h3>High-Security Storage</h3>
            <p>
              High-security storage facilities in
              major financial centres provide
              advanced protection for your most
              valuable assets.
            </p>
          </div>

          <button className="storage-service-arrow" aria-label="High-Security Storage">
            <IconArrowRight size={18} stroke={1.75} />
          </button>

        </article>

        <article className="storage-service-item">

          <div className="storage-number">02</div>

          <div className="storage-service-text">
            <h3>Bonded Warehouses</h3>
            <p>
              Bonded warehouse solutions allow
              goods to be stored in compliance
              with international customs
              regulations while duties can be
              deferred until the goods leave
              the warehouse.
            </p>
          </div>

          <button className="storage-service-arrow" aria-label="Bonded Warehouses">
            <IconArrowRight size={18} stroke={1.75} />
          </button>

        </article>

        <article className="storage-service-item">

          <div className="storage-number">03</div>

          <div className="storage-service-text">
            <h3>Web-Based Inventory</h3>
            <p>
              Real-time inventory visibility gives
              you control over your assets from
              wherever you are, helping you
              monitor and manage your holdings
              efficiently.
            </p>
          </div>

          <button className="storage-service-arrow" aria-label="Web-Based Inventory">
            <IconArrowRight size={18} stroke={1.75} />
          </button>

        </article>

        <article className="storage-service-item">

          <div className="storage-number">04</div>

          <div className="storage-service-text">
            <h3>Pick & Pack Services</h3>
            <p>
              From individual items to complete
              consignments, our teams handle
              packing, preparation and secure
              delivery to your desired destination.
            </p>
          </div>

          <button className="storage-service-arrow" aria-label="Pick & Pack Services">
            <IconArrowRight size={18} stroke={1.75} />
          </button>

        </article>

      </div>

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