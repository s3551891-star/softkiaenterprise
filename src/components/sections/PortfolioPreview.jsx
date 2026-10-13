import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects.js';
import ProjectCard from '../common/ProjectCard.jsx';
import SectionHeading from '../common/SectionHeading.jsx';

export default function PortfolioPreview() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="section section-muted" id="portfolio">
      <div className="container">
        <div className="section-heading-row">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Explore our project portfolio."
            description="Browse the supplied project websites across different industries and digital experiences."
          />

          <Link to="/portfolio" className="text-link">
            View all projects <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="portfolio-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <p className="portfolio-disclaimer">
          Project links are provided for exploration. Specific delivery
          responsibilities and case-study results should be confirmed before
          publication.
        </p>
      </div>
    </section>
  );
}