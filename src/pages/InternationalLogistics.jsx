import "./InternationalLogistics.css";
import internationalIntroImg from "../images/secure.jpg";
import internationalHeroVideo from '../images/inter.mp4';
import { IconDiamond, IconCertificate, IconCoins } from '@tabler/icons-react';
import diamondImg from '../images/diamond.jpg';
import regulatoryImg from '../images/document.jpg';
import metalsImg from '../images/melt.jpg';


function InternationalLogistics() {
  return (
   <main className="international-page">

  {/* HERO — VIDEO */}
  <section className="international-hero">

    <div className="international-hero-media">
      <video
        className="international-hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={internationalHeroVideo} type="video/mp4" />
      </video>
    </div>

    <div className="international-hero-content">
      <span className="section-label">
        INTERNATIONAL LOGISTICS
      </span>

      <h1>
        Logistics
        <br />
        across the
        <br />
        world.
      </h1>
    </div>

  </section>


     {/* INTRO */}
<section className="international-intro">

  <div className="international-container">

    <div className="intro-image">
      <img src={internationalIntroImg} alt="International secure transportation" />
    </div>

    <div className="intro-content">

      <div className="intro-label">
        LOOMIS INTERNATIONAL
      </div>

      <h2>
        Secure transportation
        for valuable goods.
      </h2>

      <p>
        Transporting valuable goods from one
        country to another requires specialist
        expertise, discretion and carefully
        planned logistics. Our international
        transportation solutions connect
        collection points with destinations
        around the world.
      </p>

      <p>
        Whether by air, sea or secure road
        transportation, every shipment is handled
        with care, security and complete
        professionalism.
      </p>

    </div>

  </div>

</section>


      {/* FEATURES */}
      <section className="international-features">

        <div className="international-container">

          <div className="feature-grid">

            <article className="feature-card">

              <span>01</span>

              <h3>
                Full liability
                coverage
              </h3>

              <p>
                Valuable goods entrusted to us
                receive comprehensive liability
                coverage throughout the transportation
                process.
              </p>

            </article>


            <article className="feature-card">

              <span>02</span>

              <h3>
                One stop
                shop service
              </h3>

              <p>
                From customs and import regulations
                to storage and transportation, we
                coordinate the complete logistics
                process.
              </p>

            </article>


            <article className="feature-card">

              <span>03</span>

              <h3>
                Worldwide
                transportation
              </h3>

              <p>
                Secure transportation solutions
                connect businesses and destinations
                across international markets.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* PICK & PACK */}
      <section className="pick-pack">

        <div className="international-container">

          <div className="pick-pack-grid">

            <div className="pick-pack-image">
              <div className="image-placeholder">
                PICK & PACK
              </div>
            </div>

            <div className="pick-pack-content">

              <span className="section-label">
                ORDER FULFILLMENT
              </span>

              <h2>
                Pick & Pack
              </h2>

              <p>
                Our logistics team provides fast,
                secure and professional order
                fulfillment from our facilities to
                clients and locations worldwide.
              </p>

              <ul>

                <li>
                  Same-day order turnaround
                </li>

                <li>
                  Professional packing and handling
                </li>

                <li>
                  Full door-to-door liability coverage
                </li>

                <li>
                  Real-time order and inventory tracking
                </li>

                <li>
                  Discreet and secure packaging
                </li>

                <li>
                  Worldwide shipping with trusted carriers
                </li>

              </ul>

            </div>

          </div>

        </div>

      </section>


      {/* HIGH VALUE */}
      
<section className="high-value">

  <div className="international-container">

    <div className="high-value-heading">

      <span className="pill-label">
        HIGH-VALUE TRANSPORTATION
      </span>

      <h2>
        Expertise in
        <br />
        <em>high-value shipments.</em>
      </h2>

    </div>

    <div className="high-value-grid">

      <article>

        <div className="high-value-image">
          <img src={diamondImg} alt="Diamond & Jewellery Logistics" />
          <span className="high-value-number">01</span>
        </div>

        <div className="high-value-icon high-value-icon--blue">
          <IconDiamond size={20} stroke={1.75} />
        </div>

        <h3>Diamond & Jewellery Logistics</h3>

        <p>
          Secure and discreet transportation
          solutions designed around the unique
          requirements of the diamond and
          jewellery industry.
        </p>

        <a href="#" className="learn-more learn-more--blue">
          Learn more →
        </a>

      </article>

      <article>

        <div className="high-value-image">
          <img src={regulatoryImg} alt="Regulatory Compliance" />
          <span className="high-value-number">02</span>
        </div>

        <div className="high-value-icon high-value-icon--orange">
          <IconCertificate size={20} stroke={1.75} />
        </div>

        <h3>Regulatory compliance</h3>

        <p>
          Careful documentation and regulatory
          support help ensure shipments move
          efficiently across international
          borders.
        </p>

        <a href="#" className="learn-more learn-more--orange">
          Learn more →
        </a>

      </article>

      <article>

        <div className="high-value-image">
          <img src={metalsImg} alt="Precious Metals Transport" />
          <span className="high-value-number">03</span>
        </div>

        <div className="high-value-icon high-value-icon--blue">
          <IconCoins size={20} stroke={1.75} />
        </div>

        <h3>Precious Metals Transport</h3>

        <p>
          Specialised handling and secure
          transportation for gold, silver,
          platinum and other precious metals.
        </p>

        <a href="#" className="learn-more learn-more--blue">
          Learn more →
        </a>

      </article>

    </div>

  </div>

</section>


      {/* CTA */}
      <section className="international-cta">

        <div className="international-container">

          <span className="section-label">
            FIND OUT HOW WE CAN HELP
          </span>

          <h2>
            Let's move
            <br />
            your business
            <br />
            forward.
          </h2>

          <a href="/contact" className="cta-link">
            Contact us
            <span>→</span>
          </a>

        </div>

      </section>

    </main>
  );
}

export default InternationalLogistics;