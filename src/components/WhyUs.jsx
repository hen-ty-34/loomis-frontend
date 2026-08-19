import "./WhyUs.css";

const reasons = [
  {
    number: "01",
    title: "Worldwide door-to-door services.",
    text: "Our global network connects origins and destinations with carefully managed logistics solutions, giving every shipment a clear and reliable journey.",
    image:
      "/src/images/9i56KE6DWG6_tdnV8hCHFhhWExttVdiCZOGtGEfo24SUhqjwk-ZqiM_jvjqkYjfvg89Cu0ZRZ8RGrKWR5pZEKXDpX87dc_GdhUL4HIQL5Ln7eqaGGS2yhYhscqqkdUJ0LPyCvwBRuRDxbrcGiR1lnRKPtjAosJwC4AnppXNTbAMVcHrAcrOWCEYfN7tJcBvw.jpg",
  },
  {
    number: "02",
    title: "Unmatched security for your valued items.",
    text: "We build every shipment around precision, transparency and carefully managed security processes so valuable goods remain protected throughout their journey.",
    image:
      "/src/images/BOse5BBki62pUIECJpbIpAbjr1aAhV21jSzq0O2iiuv9KyJForSG_dgVsmJhhUUwu6rbKtWlyTumzVcxna3CnWTYAOVG8VF1UUo_nsHXWV4_4g5HIUS9Ron5HbkB9a1oiGuAu81i-AAOcbzIvj6aovxMk6_OJFzQMfXydufIVZkJCSIEP_wdGD24SQYRLF9D.jpg",
  },
  {
    number: "03",
    title: "Our customers always come first.",
    text: "We combine experienced people, responsive communication and tailored solutions to create a logistics experience built around every customer's needs.",
    image:
      "/src/images/cWKjDLq2u-vs-Y6NmB19SmYYEFh_El9dKY1fTnmzCifQ7vztGfLTEce4TT96KuelS-C1ofZskaWAfI21NxPfyUkNNKsajnaWhdO9hEyYi4y-N7OxWh77S2Jx4PjCBB6za-6ujr-DqJrTAiNwjFPz_yFODLRXYJSY26ljCkA3kjaucuCaK8IYdU7V2kdpnxmI.jpg",
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