import "./Storage.css";
import storageHeroImg from '../images/store.jpg';
import storageIntroImg from '../images/intro.jpg';
import { IconDiamond, IconFileCheck, IconShieldCheck } from '@tabler/icons-react';


function Storage() {
  return (
   <main className="storage-page">

  {/* HERO — IMAGE */}
  <section className="storage-hero">

    <div className="storage-hero-media">
      <img src={storageHeroImg} alt="Secure valuables storage facility" />
    </div>

    <div className="storage-container">

      <span className="storage-pill">
        OUR SERVICES
      </span>

      <h1>
        Secure
        <br />
        <em>valuables storage.</em>
      </h1>

      <p className="storage-subtext">
        Every service crafted for the reliability, security, and
        premium experience expected by modern enterprises.
      </p>

    </div>

    <div className="storage-stats">

      <div className="storage-stat">
        <span className="storage-stat-value">98%</span>
        <span className="storage-stat-label">ON-TIME DELIVERY RATE</span>
      </div>

      <div className="storage-stat">
        <span className="storage-stat-value">50+</span>
        <span className="storage-stat-label">COUNTRIES COVERED</span>
      </div>

      <div className="storage-stat">
        <span className="storage-stat-value">24/7</span>
        <span className="storage-stat-label">LIVE SUPPORT</span>
      </div>

      <div className="storage-stat">
        <span className="storage-stat-value">50M+</span>
        <span className="storage-stat-label">PACKAGES DELIVERED</span>
      </div>

    </div>

  </section>


      {/* INTRO */}
      <section className="storage-intro">
  <div className="storage-container storage-intro-grid">

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

    <div className="storage-intro-image">
      <img src={storageIntroImg} alt="Secure valuables storage" />
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


      {/* HIGH VALUE */}
     <section className="storage-high-value">

  <div className="storage-container">

    <div className="storage-high-heading">

      <span className="storage-pill">
        HIGH-VALUE EXPERTISE
      </span>

      <h2>
        More than
        <br />
        <em>storage.</em>
      </h2>

    </div>

    <div className="storage-high-timeline">

      <article>
        <div className="storage-high-icon">
          <IconDiamond size={26} stroke={1.75} />
        </div>
        <span className="storage-high-number">01</span>
        <h3>Diamond & Jewellery Logistics</h3>
        <p>
          Secure and discreet solutions for
          diamonds, jewellery and other
          high-value luxury goods.
        </p>
      </article>

      <article>
        <div className="storage-high-icon">
          <IconFileCheck size={26} stroke={1.75} />
        </div>
        <span className="storage-high-number">02</span>
        <h3>Documentation & Compliance</h3>
        <p>
          Support with documentation and
          regulatory requirements throughout
          the storage and logistics process.
        </p>
      </article>

      <article>
        <div className="storage-high-icon">
          <IconShieldCheck size={26} stroke={1.75} />
        </div>
        <span className="storage-high-number">03</span>
        <h3>Expertise in High-Value Shipments</h3>
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