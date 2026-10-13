import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { services } from '../../data/services.js';
import ServiceCard from '../common/ServiceCard.jsx';
import SectionHeading from '../common/SectionHeading.jsx';

export default function ServicesPreview() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-heading-row">
          <SectionHeading
            eyebrow="WHAT WE DO"
            title="Technology built around your goals."
            description="From software engineering to cloud operations, our capabilities support your digital journey."
          />

          <Link to="/services" className="text-link">
            <span>All services</span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.id ?? service.number ?? service.title}
              service={service}
            />
          ))}
        </div>

        <div className="partner-capabilities">
          <div className="partner-capabilities-content">
            <span className="eyebrow">EXTENDED CAPABILITIES</span>

            <h3>More ways to support your business.</h3>
          </div>

          <p>
            Through our partner capability network, additional digital
            and business services may include marketing, commerce
            platforms, and business reporting.
          </p>
        </div>
      </div>
    </section>
  );
}