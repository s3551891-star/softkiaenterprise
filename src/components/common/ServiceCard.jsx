
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceCard({ service }) {
  const {
    id,
    number,
    title,
    description,
    icon: Icon,
    features,
    path,
    link,
  } = service;

  const destination = path || link || '/contact';

  return (
    <article className="service-card">
      <div className="service-card-top">
        <span className="service-card-number">
          {number || String(id || '').padStart(2, '0')}
        </span>

        {Icon && (
          <span className="service-card-icon">
            <Icon size={23} aria-hidden="true" />
          </span>
        )}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      {Array.isArray(features) && features.length > 0 && (
        <ul className="service-card-features">
          {features.slice(0, 4).map((feature, index) => (
            <li key={`${title}-feature-${index}`}>
              <CheckCircle2 size={15} aria-hidden="true" />
              <span>
                {typeof feature === 'string'
                  ? feature
                  : feature.title}
              </span>
            </li>
          ))}
        </ul>
      )}

      <Link to={destination} className="service-card-link">
        Explore service
        <ArrowUpRight size={17} aria-hidden="true" />
      </Link>
    </article>
  );
}
