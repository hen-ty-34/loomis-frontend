import "./OneStopShop.css";
import oneStopImage from "../images/qFwJXWHiinABQZscOA9idLPh_SyHVb8C3It_ld6dKuHxiTLhTH5Cr7wGFRoa1yuFaYs2I7H9ZzYL-Rb-oUi_KlsuAdMXqvEloK2bCjbfG50nuESjWo6LG9Xt5TbH44SVkhHDCFBL3WOiqeomBpaoC_nkMZwNujCn-Z_K_GrSqJ1Ex-yn5H7GC7E5PocVzJ34.jpg";

function OneStopShop() {
  return (
    <section className="one-stop-shop">

      <div className="one-stop-container">

        <div className="one-stop-heading">

          <span className="section-label">
            ONE-STOP SHOP
          </span>

          <h2>
            Everything your
            <br />
            shipment needs.
          </h2>

        </div>

        <div className="one-stop-grid">

          <div className="one-stop-image">

            <img
              src={oneStopImage}
              alt="Logistics warehouse operations"
            />

          </div>

          <div className="one-stop-content">

            <p className="one-stop-intro">
              From transportation and customs to storage,
              handling and final delivery, our integrated
              approach keeps your entire logistics journey
              connected.
            </p>

            <div className="one-stop-services">

              <div className="one-stop-item">
                <span>01</span>
                <p>Transportation</p>
              </div>

              <div className="one-stop-item">
                <span>02</span>
                <p>Customs clearance</p>
              </div>

              <div className="one-stop-item">
                <span>03</span>
                <p>Secure storage</p>
              </div>

              <div className="one-stop-item">
                <span>04</span>
                <p>Specialized handling</p>
              </div>

            </div>

            <a
              href="/services"
              className="one-stop-link"
            >
              Explore our services
              <span>→</span>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default OneStopShop;