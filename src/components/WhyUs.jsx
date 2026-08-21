import "./WhyUs.css";
import whyImg1 from '../images/why.jpg';
import whyImg2 from '../images/safe.jpg';
import whyImg3 from '../images/first.jpg';

const reasons = [
  {
    number: '01',
    image: whyImg1,
    title: 'Global Reach',
    text: 'Our network connects collection points and destinations around the world, giving your business reliable access to international markets.',
  },
  {
    number: '02',
    image: whyImg2,
    title: 'Secure Handling',
    text: 'Every shipment is treated with discretion and care, with security protocols built into each stage of transportation and storage.',
  },
  {
    number: '03',
    image: whyImg3,
    title: 'Dedicated Support',
    text: 'Our specialists are available around the clock to keep you informed and your shipments moving smoothly from start to finish.',
  },
];

function WhyUs() {
  return (
    <section className="why-us" id="about">

      <div className="why-us-container">

        <div className="why-us-intro">

          <span className="section-label">
            WHY CHOOSE US
          </span>

          <h2>
            Worldwide logistics
            <br />
            built around trust.
          </h2>

        </div>

        <div className="why-us-list">

          {reasons.map((reason) => (
            <article
              className="why-card"
              key={reason.number}
            >

              <div className="why-card-image">
                <img
                  src={reason.image}
                  alt={reason.title}
                />

                <span className="why-card-number">
                  {reason.number}
                </span>
              </div>

              <div className="why-card-content">

                <h3>
                  {reason.title}
                </h3>

                <p>
                  {reason.text}
                </p>

                <a href="/contact">
                  Learn more
                  <span>→</span>
                </a>

              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyUs;