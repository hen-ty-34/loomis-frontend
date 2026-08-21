import "./CashManagement.css";
import cashHeroImg from '../images/cashhero.mp4';
import { IconArrowRight, IconMapPin, IconWorld, IconShieldCheck, IconPackage } from '@tabler/icons-react';
import smallBusinessImg from '../images/yellow.jpg';
import commercialImg from '../images/orange.jpg';
import cashSolutionsBg from '../images/cash.jpg';



function CashManagement() {
  return (
    <main className="cash-management-page">

      {/* HERO — VIDEO */}
      
<section className="cash-hero">

  <div className="cash-hero-left">

    <span className="cash-pill">
      WELCOME TO GOLDEN STONE
    </span>

    <h1>
      Fast, Secure &
      <br />
      <span className="cash-highlight">Reliable Cash</span>
      <br />
      <span className="cash-highlight">Solutions</span>
    </h1>

    <p>
      Whether local or international, we ensure safe and
      timely handling. Track your shipments, enjoy secure
      cash transport, and experience seamless solutions
      tailored to your needs.
    </p>

    <a href="#" className="cash-cta">
      Learn About Us
      <IconArrowRight size={18} stroke={2} />
    </a>

    <div className="cash-stats">

      <div className="cash-stat">
        <span className="cash-stat-icon"><IconMapPin size={18} stroke={1.75} /></span>
        <div>
          <span className="cash-stat-value">360+</span>
          <span className="cash-stat-label">POST OFFICES</span>
        </div>
      </div>

      <div className="cash-stat">
        <span className="cash-stat-icon"><IconWorld size={18} stroke={1.75} /></span>
        <div>
          <span className="cash-stat-value">24/7</span>
          <span className="cash-stat-label">MAIL & PARCEL TRACKING</span>
        </div>
      </div>

      <div className="cash-stat">
        <span className="cash-stat-icon"><IconShieldCheck size={18} stroke={1.75} /></span>
        <div>
          <span className="cash-stat-value">100%</span>
          <span className="cash-stat-label">SECURITY OF MAILS</span>
        </div>
      </div>

    </div>

  </div>

  <div className="cash-hero-media">
    <video
      src={cashHeroImg}
      autoPlay
      muted
      loop
      playsInline
      aria-label="Golden Stone Logistics facility"
    />
  </div>

</section>

      {/* INTRO */}
      <section className="cash-intro">

  <div className="cash-container cash-intro-grid">

    <div className="cash-intro-content">

      <span className="cash-side-label">
        CASH MANAGEMENT
      </span>

      <h2>
        Security for
        <br />
        every transaction.
      </h2>

      <span className="cash-intro-underline" />

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

    <div className="cash-intro-cards">

      <div className="cash-intro-card cash-intro-card--orange">
        <h3>
          Small-volume
          <br />
          cash clients
        </h3>
        <a href="#" className="cash-card-link">
          Go to Solutions for Small Business
          <IconArrowRight size={16} stroke={2} />
        </a>
        <div className="cash-card-image">
          <img src={smallBusinessImg} alt="Small business cash management" />
        </div>
      </div>

      <div className="cash-intro-card cash-intro-card--navy">
        <h3>
          High-volume
          <br />
          cash clients
        </h3>
        <a href="#" className="cash-card-link">
          Go to commercial solutions
          <IconArrowRight size={16} stroke={2} />
        </a>
        <div className="cash-card-image">
          <img src={commercialImg} alt="Commercial cash management" />
        </div>
      </div>

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


      
     
      {/* SOLUTIONS */}
      
<section className="cash-solutions">

  <div className="cash-solutions-media">
    <img src={cashSolutionsBg} alt="" />
  </div>

  <div className="cash-container">

    <div className="cash-solutions-heading">

      <span className="cash-solutions-icon">
        <IconPackage size={26} stroke={1.75} />
      </span>

      <h2>Designed for your business.</h2>

      <p>
        Whatever the environment, our cash solutions
        are built around reliability, security and
        precision — tailored to retail, financial and
        international operations alike.
      </p>

    </div>

    <div className="cash-solutions-grid">

      <article>
        <span className="cash-solutions-icon-sm">
          <IconPackage size={16} stroke={1.75} />
        </span>
        <div>
          <h3>Retail</h3>
          <p>
            Secure collection and transportation
            solutions designed for retail
            environments and distributed
            collection points.
          </p>
        </div>
      </article>

      <article>
        <span className="cash-solutions-icon-sm">
          <IconPackage size={16} stroke={1.75} />
        </span>
        <div>
          <h3>Financial Institutions</h3>
          <p>
            Reliable cash movement and secure
            handling solutions for banks and
            financial organisations.
          </p>
        </div>
      </article>

      <article>
        <span className="cash-solutions-icon-sm">
          <IconPackage size={16} stroke={1.75} />
        </span>
        <div>
          <h3>International Operations</h3>
          <p>
            Coordinated cash logistics for
            organisations operating across
            international markets.
          </p>
        </div>
      </article>

    </div>

  </div>

</section>

  </main>
  );
}

export default CashManagement;