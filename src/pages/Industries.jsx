import "./Industries.css";

const industries = [
  {
    number: "01",
    title: "Banking & Financial Services",
    description:
      "Secure logistics solutions designed for financial institutions, valuables and sensitive materials.",
  },
  {
    number: "02",
    title: "Luxury & Retail",
    description:
      "Reliable transportation and secure handling for luxury goods, retail products and high-value shipments.",
  },
  {
    number: "03",
    title: "Healthcare",
    description:
      "Specialized logistics supporting the secure and timely movement of healthcare products and critical materials.",
  },
  {
    number: "04",
    title: "Technology",
    description:
      "Professional logistics solutions for technology companies, equipment and high-value electronic products.",
  },
  {
    number: "05",
    title: "Aviation",
    description:
      "Time-critical transportation solutions supporting aviation operations and their supply chains.",
  },
  {
    number: "06",
    title: "Government",
    description:
      "Secure and dependable logistics services for government organizations and sensitive shipments.",
  },
];

function Industries() {
  return (
    <main className="industries-page">

      {/* HERO */}
      <section className="industries-hero">
        <video
          className="industries-hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/src/images/5790500-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        <div className="industries-container">

          <span className="industries-label">
            INDUSTRIES
          </span>

          <h1>
            Logistics
            <br />
            for every industry.
          </h1>

          <p>
            Specialized logistics solutions designed around
            the unique requirements of the industries we serve.
          </p>

        </div>
      </section>

      {/* INTRO */}
      <section className="industries-intro">

        <div className="industries-container industries-intro-grid">

          <div>
            <span className="industries-label">
              INDUSTRY EXPERTISE
            </span>

            <h2>
              Solutions built
              <br />
              around you.
            </h2>
          </div>

          <div className="industries-intro-content">

            <p>
              Every industry has different requirements,
              regulations and challenges. Our logistics
              solutions are designed to meet those specific
              needs.
            </p>

            <p>
              Combining specialist knowledge, secure
              transportation and reliable international
              networks, we help businesses move what matters
              most.
            </p>

          </div>

        </div>

      </section>

      {/* INDUSTRIES LIST */}
      <section className="industries-list-section">

        <div className="industries-container">

          <div className="industries-list-heading">

            <span className="industries-label">
              OUR INDUSTRIES
            </span>

            <h2>
              Expertise
              <br />
              where it matters.
            </h2>

          </div>

          <div className="industries-list">

            {industries.map((industry) => (
              <a
                href="#"
                className="industry-card"
                key={industry.number}
              >

                <span className="industry-number">
                  {industry.number}
                </span>

                <div className="industry-content">

                  <h3>
                    {industry.title}
                  </h3>

                  <p>
                    {industry.description}
                  </p>

                </div>

                <span className="industry-arrow">
                  ↗
                </span>

              </a>
            ))}

          </div>

        </div>

      </section>

      {/* FEATURE */}
      <section className="industries-feature">

        <div className="industries-container industries-feature-grid">

          <div className="industries-feature-image">
            <span>
              INDUSTRY EXPERTISE
            </span>
          </div>

          <div className="industries-feature-content">

            <span className="industries-label">
              SPECIALIST SOLUTIONS
            </span>

            <h2>
              Built for
              <br />
              what matters.
            </h2>

            <p>
              From high-value goods to time-critical
              shipments, our teams understand that every
              delivery has different requirements.
            </p>

            <p>
              We combine specialist expertise with
              international capabilities to provide
              dependable logistics solutions for complex
              supply chains.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="industries-cta">

        <div className="industries-container">

          <span className="industries-label">
            LOGISTICS SOLUTIONS
          </span>

          <h2>
            Let's move
            <br />
            forward.
          </h2>

          <a
            href="/contact"
            className="industries-cta-link"
          >
            Contact us
            <span>→</span>
          </a>

        </div>

      </section>

    </main>
  );
}

export default Industries;