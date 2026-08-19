import { Link } from "react-router-dom";
import "./Services.css";

function Services() {
  const services = [
    {
      title: "International Logistics",
      description: "Global shipping and logistics solutions for premium valuables.",
      link: "/services/international-logistics"
    },
    {
      title: "Custom Clearance",
      description: "Expert customs handling and border crossing support.",
      link: "/services/custom-clearance"
    },
    {
      title: "Storage Solutions",
      description: "Secure, temperature-controlled storage facilities worldwide.",
      link: "/services/storage"
    },
    {
      title: "Cash Management",
      description: "Specialized cash handling and management services.",
      link: "/services/cash-management"
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>Comprehensive solutions for secure logistics and valuables management</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <Link key={index} to={service.link} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-arrow">→</span>
            </Link>
          ))}
        </div>

        <div className="services-cta">
          <Link to="/services" className="services-cta-button">
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
