import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/common/SectionHeading.jsx';

export default function InfoPage({
  eyebrow = 'SOFTKAI TECHNOLOGIES',
  title,
  description,
  items = [],
}) {
  return (
    <main className="page-shell">
      <div className="container">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        {items.length > 0 && (
          <div className="info-grid">
            {items.map((item) => (
              <article className="info-card" key={item.title}>
                <CheckCircle2 size={22} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        )}

        <div className="info-cta">
          <h2>Have a specific requirement?</h2>
          <p>Let's discuss the scope and identify a suitable next step.</p>
          <Link to="/contact" className="button">
            Contact SoftKai <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </main>
  );
}