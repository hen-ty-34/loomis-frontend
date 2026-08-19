import "./CustomerFirst.css";

function CustomerFirst() {
  return (
    <section className="customer-first">

      <div className="customer-first-container">

        <div className="customer-first-image">
          <img
            src="/src/images/kB8vaG5QCTGyS_gpdGkcyn38WD-cRrhxQivM0LrB8Bjni-mcifXxQqIXmptlkeCDxiB5JTrFJa4GGwbAl0D99DO8zgpls8rsJta2G4OagD_4aTS_OCXB_47ICrjmqdlYTY5kegPRGRyKgCweHIGFF3GebGgijJNDZGFQyTDyVGYlKucajjAQePIXRswmqsLf.jpg"
            alt="Logistics team working together"
          />
        </div>

        <div className="customer-first-content">

          <span className="section-label">
            CUSTOMERS FIRST
          </span>

          <h2>
            Your needs.
            <br />
            Our priority.
          </h2>

          <p>
            Every shipment is different. That's why we work
            closely with our customers to understand their
            requirements and create logistics solutions that
            fit the journey, the goods and the destination.
          </p>

          <a href="/contact">
            Talk to our team
            <span>→</span>
          </a>

        </div>

      </div>

    </section>
  );
}

export default CustomerFirst;