import "./Contact.css";

function Contact() {
  return (
    <main className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
  <div className="contact-container">

    <span className="contact-label">
      CONTACT
    </span>

    <h1>
      Let's talk
      <br />
      logistics.
    </h1>

    <p>
      Whether you have a question, need a logistics
      solution or want to discuss your requirements,
      our team is ready to help.
    </p>

  </div>
</section>

      {/* CONTACT INFORMATION */}
      <section className="contact-information">

        <div className="contact-container contact-information-grid">

          <div className="contact-information-heading">

            <span className="contact-label">
              GET IN TOUCH
            </span>

            <h2>
              We're here
              <br />
              to help.
            </h2>

          </div>

          <div className="contact-details">

            <div className="contact-detail">
              <span>GENERAL ENQUIRIES</span>

              <a href="mailto:info@example.com">
                info@example.com
              </a>
            </div>

            <div className="contact-detail">
              <span>PHONE</span>

              <a href="tel:+00000000000">
                +00 000 000 0000
              </a>
            </div>

            <div className="contact-detail">
              <span>HEAD OFFICE</span>

              <p>
                Accra, Ghana
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CONTACT FORM */}
      <section className="contact-form-section">

        <div className="contact-container contact-form-grid">

          <div className="contact-form-heading">

            <span className="contact-label">
              SEND AN ENQUIRY
            </span>

            <h2>
              Tell us
              <br />
              what you need.
            </h2>

          </div>

          <form className="contact-form">

            <div className="contact-form-row">

              <div className="contact-field">
                <label htmlFor="name">
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Your email"
                />
              </div>

            </div>

            <div className="contact-field">

              <label htmlFor="company">
                Company
              </label>

              <input
                id="company"
                type="text"
                placeholder="Your company"
              />

            </div>

            <div className="contact-field">

              <label htmlFor="service">
                Service
              </label>

              <select id="service">

                <option value="">
                  Select a service
                </option>

                <option value="express">
                  Express Services
                </option>

                <option value="secure-logistics">
                  Secure Logistics
                </option>

                <option value="international">
                  International Logistics
                </option>

                <option value="tracking">
                  Shipment Tracking
                </option>

                <option value="other">
                  Other
                </option>

              </select>

            </div>

            <div className="contact-field">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                rows="6"
                placeholder="Tell us about your requirements"
              />

            </div>

            <button
              type="submit"
              className="contact-submit"
            >
              Send enquiry
              <span>→</span>
            </button>

          </form>

        </div>

      </section>

      {/* FAQ */}
      <section className="contact-faq">

        <div className="contact-container contact-faq-grid">

          <div className="contact-faq-heading">
            <span className="contact-label">
              FAQ
            </span>

            <h2>
              Questions,
              <br />
              answered.
            </h2>
          </div>

          <div className="contact-faq-list">
            <details open>
              <summary>What logistics services do you provide?</summary>
              <p>
                We provide secure logistics, international transportation,
                storage, customs clearance, exhibition services and cash
                management solutions.
              </p>
            </details>

            <details>
              <summary>How can I track my shipment?</summary>
              <p>
                Use the Track Shipment link in the navigation and enter your
                tracking number to view the latest shipment update.
              </p>
            </details>

            <details>
              <summary>How do I request a quote?</summary>
              <p>
                Complete the enquiry form below with your requirements and our
                team will get back to you with the next steps.
              </p>
            </details>

            <details>
              <summary>How quickly will someone respond?</summary>
              <p>
                Our team reviews enquiries during business hours and will
                respond as soon as possible.
              </p>
            </details>

            <details>
              <summary>Do you handle international shipments?</summary>
              <p>
                Yes. We coordinate international logistics across borders,
                including the documentation and customs support required.
              </p>
            </details>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="contact-cta">

        <div className="contact-container">

          <span className="contact-label">
            LOGISTICS SOLUTIONS
          </span>

          <h2>
            Let's move
            <br />
            forward.
          </h2>

          <a
            href="/countries"
            className="contact-cta-link"
          >
            Explore our network
            <span>→</span>
          </a>

        </div>

      </section>

    </main>
  );
}

export default Contact;