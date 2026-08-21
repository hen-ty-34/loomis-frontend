import "./Security.css";
import { IconRadar2, IconBuildingWarehouse, IconShieldCheck, IconCertificate, IconArrowRight } from '@tabler/icons-react';
import securityImg from '../images/protect.jpg';

const securityFeatures = [
  {
    icon: IconRadar2,
    title: 'Advanced Tracking',
    text: 'Real-time monitoring of your shipments with GPS tracking and regular updates.',
  },
  {
    icon: IconBuildingWarehouse,
    title: 'Secure Facilities',
    text: 'State-of-the-art warehouses with 24/7 security, CCTV monitoring, and climate control.',
  },
  {
    icon: IconShieldCheck,
    title: 'Insurance Coverage',
    text: 'Comprehensive insurance options for maximum protection of your valuable goods.',
  },
  {
    icon: IconCertificate,
    title: 'Compliance Standards',
    text: 'Full compliance with international security regulations and industry best practices.',
  },
];


function Security() {
  return (
   <section className="security">

  <div className="security-container">

    <div className="security-image">
      <img src={securityImg} alt="Security and protection services" />

      <div className="security-image-badge">
        <span className="security-badge-pill">EXCELLENCE</span>
        <h3>Protecting what matters</h3>
      </div>
    </div>

    <div className="security-content">

      <div className="security-header">
        <h2>
          Your goods are
          <br />
          always protected.
        </h2>
        <span className="security-underline" />
      </div>

      <p className="security-intro">
        We provide comprehensive security measures across every
        stage of the journey, customized for the needs of
        individuals and businesses alike.
      </p>

      <div className="security-features">

        {securityFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              className={`security-feature${index === 0 ? ' security-feature--active' : ''}`}
              key={feature.title}
            >

              <span className="security-feature-icon">
                <Icon size={20} stroke={1.75} />
              </span>

              <div className="security-feature-text">
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>

              <button className="security-feature-arrow" aria-label={feature.title}>
                <IconArrowRight size={16} stroke={2} />
              </button>

            </div>
          );
        })}

      </div>

    </div>

  </div>

</section>
  );
}

export default Security;
