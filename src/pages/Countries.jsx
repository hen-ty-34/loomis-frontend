import "./Countries.css";
import africaImg from "../images/africa.jpg";
import asiaImg from "../images/asia.jpg";
import europeImg from "../images/europe.jpg";
import northImg from "../images/north.jpg";
import eastImg from "../images/east.jpg";
import southernImg from "../images/south.jpg";

const countries = [
  {
    region: "Europe",
    countries: [
      "Belgium",
      "Denmark",
      "Finland",
      "France",
      "Germany",
      "Ireland",
      "Italy",
      "Netherlands",
      "Norway",
      "Portugal",
      "Spain",
      "Sweden",
      "Switzerland",
      "United Kingdom",
    ],
  },
  {
    region: "South America",
    countries: [
      "Argentina",
      "Brazil",
      "Chile",
    ],
  },
  {
    region: "Asia & Middle East",
    countries: [
      "Hong Kong",
      "Singapore",
      "Shanghai",
      "United Arab Emirates",
    ],
  },
];

const countrySections = [
  {
    id: "west-africa",
    region: "West Africa",
    name: "Ghana & Nigeria",
    description: "Our hub for West African trade, connecting major ports and inland markets across the region.",
    image: africaImg,
  },
  {
    id: "east-africa",
    region: "East Africa",
    name: "Kenya & Tanzania",
    description: "Gateway routes linking East African markets to global shipping lanes.",
    image: eastImg,
  },
  {
    id: "north-africa",
    region: "North Africa",
    name: "Egypt & Morocco",
    description: "Strategic corridors bridging Africa, Europe, and the Middle East.",
    image: northImg,
  },
  {
    id: "southern-africa",
    region: "Southern Africa",
    name: "South Africa & Namibia",
    description: "Established networks serving Southern Africa's key industrial centers.",
    image: southernImg,
  },
  {
    id: "europe",
    region: "Europe",
    name: "UK & Germany",
    description: "Reliable freight lanes connecting European markets to our global network.",
    image: europeImg,
  },
  {
    id: "asia",
    region: "Asia",
    name: "China & India",
    description: "High-volume trade routes supporting Asia's manufacturing and export hubs.",
    image: asiaImg,
  },
];

function Countries() {
  return (
    <main className="countries-page">

      {/* HERO — VIDEO */}
      <section className="countries-hero">

  <div className="countries-hero-media" />

  <div className="countries-container">
    <span className="countries-label">
      GLOBAL NETWORK
    </span>

    <h1>
      Countries
      <br />
      we operate in.
    </h1>

    <p>
      Our international network connects markets,
      businesses and people across the world.
    </p>
  </div>
</section>

      {/* GLOBAL REACH */}
      <section className="countries-reach">
        <div className="countries-container countries-reach-grid">

          <div className="countries-reach-heading">
            <span className="countries-label">
              GLOBAL REACH
            </span>

            <h2>
              Moving
              <br />
              across borders.
            </h2>
          </div>

          <div className="countries-reach-content">
            <p>
              Our international presence allows us to
              provide reliable logistics solutions across
              multiple markets and regions.
            </p>

            <p>
              Through our global network, we combine
              international expertise with local knowledge
              to deliver secure and efficient transportation.
            </p>
          </div>

        </div>
      </section>

      {/* STATISTICS */}
      <section className="countries-stats">
        <div className="countries-container countries-stats-grid">

          <div className="country-stat">
            <strong>24</strong>
            <span>Countries</span>
          </div>

          <div className="country-stat">
            <strong>4</strong>
            <span>Continents</span>
          </div>

          <div className="country-stat">
            <strong>1</strong>
            <span>Global network</span>
          </div>

        </div>
      </section>

      {/* COUNTRIES */}
      <section className="countries-list-section">
        <div className="countries-container">

          <div className="countries-list-heading">
            <span className="countries-label">
              OUR NETWORK
            </span>

            <h2>
              Where we
              <br />
              operate.
            </h2>
          </div>

          <div className="countries-regions">

            {countries.map((region) => (
              <div
                className="country-region"
                key={region.region}
              >

                <div className="country-region-title">
                  <span>01</span>

                  <h3>
                    {region.region}
                  </h3>
                </div>

                <div className="country-grid">

                  {region.countries.map((country) => (
                    <a
                      href="#"
                      className="country-item"
                      key={country}
                    >
                      <span className="country-number">
                        →
                      </span>

                      <span className="country-name">
                        {country}
                      </span>

                      <span className="country-arrow">
                        ↗
                      </span>
                    </a>
                  ))}

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* COUNTRY SECTIONS */}
      <section className="country-section-grid">
  <div className="countries-container">
    <div className="country-section-header">
      <span className="countries-label">OUR MARKETS</span>
      <h2>Regional coverage</h2>
    </div>

    <div className="country-highlight-grid">
      {countrySections.map((country) => (
        <article
          key={country.id}
          id={country.id}
          className="country-highlight-card"
        >
          <div
            className="country-highlight-image"
            style={{ backgroundImage: `url(${country.image})` }}
          />
          <span className="country-highlight-region">{country.region}</span>
          <h3>{country.name}</h3>
          <p>{country.description}</p>
        </article>
      ))}
    </div>
  </div>
</section>

      {/* INTERNATIONAL NETWORK */}
      <section className="countries-international">

  <div className="countries-container countries-international-grid">

    <div className="countries-international-image" />

    <div className="countries-international-content">

      <span className="countries-label">
        INTERNATIONAL NETWORK
      </span>

      <h2>
        Connected
        <br />
        across borders.
      </h2>

      <p>
        International logistics requires more than
        moving goods from one destination to another.
        It requires knowledge of local markets,
        regulations, security requirements and
        international transportation.
      </p>

      <p>
        Our international network brings these
        capabilities together to support secure,
        reliable and efficient movement across borders.
      </p>

    </div>

  </div>

</section>

      {/* CTA */}
      <section className="countries-cta">

        <div className="countries-container">

          <span className="countries-label">
            INTERNATIONAL LOGISTICS
          </span>

          <h2>
            Let's move
            <br />
            forward.
          </h2>

          <a
            href="/contact"
            className="countries-cta-link"
          >
            Contact us
            <span>→</span>
          </a>

        </div>

      </section>

    </main>
  );
}

export default Countries;