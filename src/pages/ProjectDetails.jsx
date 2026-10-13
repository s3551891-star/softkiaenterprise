import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects.js';

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="page-shell">
        <div className="container">
          <h1>Project not found</h1>
          <Link to="/portfolio" className="text-link">
            <ArrowLeft size={17} /> Back to portfolio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <div className="container project-detail">
        <Link to="/portfolio" className="text-link">
          <ArrowLeft size={17} /> Back to portfolio
        </Link>

        <span className="eyebrow">{project.category}</span>
        <h1>{project.name}</h1>
        <p>{project.description}</p>

        <div className="project-detail-panel">
          <span className="project-detail-icon">
            <ExternalLink size={32} />
          </span>
          <h2>Explore the project website</h2>
          <p>
            Visit the supplied public website to explore its current
            experience and available information.
          </p>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            Visit website <ArrowUpRight size={17} />
          </a>
        </div>

        {project.technologies?.length > 0 && (
          <div className="service-tags">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        )}

        <p className="portfolio-disclaimer">
          This page does not claim a specific development contribution or
          project result. Verified case-study information can be added when
          confirmed.
        </p>
      </div>
    </main>
  );
}