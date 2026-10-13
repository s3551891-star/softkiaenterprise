
import { ArrowUpRight, ExternalLink, Layers3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  const {
    name,
    category,
    description,
    image,
    slug,
    url,
    technologies = [],
  } = project;

  return (
    <article className="project-card">
      <div className="project-card-image">
        {image ? (
          <img src={image} alt={`${name} project preview`} loading="lazy" />
        ) : (
          <div className="project-image-placeholder">
            <Layers3 size={38} />
            <span>PROJECT PREVIEW</span>
          </div>
        )}

        {category && <span className="project-category">{category}</span>}
      </div>

      <div className="project-card-content">
        <h3>{name}</h3>
        {description && <p>{description}</p>}

        {technologies.length > 0 && (
          <div className="service-tags">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        )}

        <div className="project-card-actions">
          {slug && (
            <Link to={`/portfolio/${slug}`} className="text-link">
              Case study <ArrowUpRight size={16} />
            </Link>
          )}

          {url && (
            <a
              className="project-external-link"
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${name} website`}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
