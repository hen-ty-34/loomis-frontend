import "./Industries.css";

const industries = [
  {
    number: "01",
    title: "Fine Art",
    description:
      "Specialized transportation, handling and secure storage for valuable works of art.",
  },
  {
    number: "02",
    title: "Jewellery & Watches",
    description:
      "Highly secure logistics solutions for jewellery, watches and other high-value goods.",
  },
  {
    number: "03",
    title: "Pharmaceuticals",
    description:
      "Carefully managed transportation and storage solutions for sensitive pharmaceutical products.",
  },
  {
    number: "04",
    title: "Precious Metals",
    description:
      "Secure logistics solutions for gold, precious metals and other high-value materials.",
  },
  {
    number: "05",
    title: "Exhibitions",
    description:
      "End-to-end logistics support for exhibitions, events and valuable display materials.",
  },
  {
    number: "06",
    title: "High-Value Goods",
    description:
      "Tailored transportation and security solutions for valuable commercial shipments.",
  },
];

function Industries() {
  return (
    <section className="industries-section" id="industries">

      <div className="industries-container">

        <div className="industries-header">

          <div>
            <span className="section-label">
              INDUSTRIES
            </span>

            <h2>
              Logistics for
              <br />
              every industry.
            </h2>
          </div>

          <p>
            Our specialist teams understand that different
            industries require different levels of care,
            security and expertise.
          </p>

        </div>

        <div className="industries-list">

          {industries.map((industry) => (
            <article
              className="industry-item"
              key={industry.number}
            >

              <span className="industry-number">
                {industry.number}
              </span>

              <h3>
                {industry.title}
              </h3>

              <p>
                {industry.description}
              </p>

              <a href="/contact" aria-label={`Learn more about ${industry.title}`}>
                →
              </a>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Industries;