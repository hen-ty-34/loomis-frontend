import "./CustomerFirst.css";
import customerFirstImg from '../images/customer.jpg';

function CustomerFirst() {
  return (
   <section className="customer-first">

  <div className="customer-first-container">

    <div className="customer-first-image">
      <img
        src={customerFirstImg}
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