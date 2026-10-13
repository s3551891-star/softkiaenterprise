import { ArrowRight, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';

import { services, partnerCapabilities } from '../data/services.js';
import ServiceCard from '../components/common/ServiceCard.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';

export default function Services() {
  return (
    <main className="page-shell">
      <div className="container">
        <SectionHeading
          eyebrow="OUR CAPABILITIES"
          title="Solutions for modern businesses."
          description="Explore software, cloud, security, and AI capabilities, alongside additional services available through our partner network."
        />

        <section className="services-grid" aria-label="Our services">
          {services.map((service) => (
            <ServiceCard
              key={service.id ?? service.number ?? service.title}
              service={service}
            />
          ))}
        </section>

        <section
          className="info-card partner-service-list"
          aria-labelledby="partner-capabilities-heading"
        >
          <div className="partner-service-header">
            <span className="partner-service-icon">
              <Handshake size={22} aria-hidden="true" />
            </span>

            <div>
              <span className="eyebrow">EXTENDED CAPABILITIES</span>

              <h2 id="partner-capabilities-heading">
                Additional partner capabilities
              </h2>
            </div>
          </div>

          <ul>
            {partnerCapabilities.map((capability, index) => {
              const title =
                typeof capability === 'string'
                  ? capability
                  : capability.title;

              const description =
                typeof capability === 'string'
                  ? null
                  : capability.description;

              const key =
                typeof capability === 'string'
                  ? capability
                  : capability.id ?? title ?? index;

              return (
                <li key={key}>
                  <div className="partner-capability-item">
                    <span className="partner-capability-arrow">
                      <ArrowRight size={16} aria-hidden="true" />
                    </span>

                    <div>
                      <h3>{title}</h3>

                      {description && <p>{description}</p>}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <p className="partner-service-note">
            Availability, scope, and delivery ownership should be
            confirmed for each engagement.
          </p>

          <Link to="/contact" className="text-link">
            Discuss your requirements
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </section>
      </div>
    </main>
  );
}