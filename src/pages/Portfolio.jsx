import { projects } from '../data/projects.js';
import ProjectCard from '../components/common/ProjectCard.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';

export default function Portfolio() {
  return (
    <main className="page-shell">
      <div className="container">
        <SectionHeading
          eyebrow="OUR PORTFOLIO"
          title="Explore digital experiences."
          description="Browse the supplied project links across healthcare, finance, engineering, education and other industries."
        />

        <div className="portfolio-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <p className="portfolio-disclaimer">
          These entries link to the supplied project websites. Contact the
          relevant project owners to confirm specific development credits,
          project scope and permission to reproduce screenshots.
        </p>
      </div>
    </main>
  );
}