import { technologies } from '../data/technologies.js';
import SectionHeading from '../components/common/SectionHeading.jsx';

export default function Technology() {
  return (
    <main className="page-shell">
      <div className="container">
        <SectionHeading
          eyebrow="TECHNOLOGY"
          title="The right tools for the problem."
          description="An indicative overview of technologies relevant to modern software engineering. Specific selections depend on project requirements."
        />

        <div className="technology-grid">
          {technologies.map((technology) => (
            <article className="technology-card" key={technology.name}>
              <span>{technology.category}</span>
              <h3>{technology.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}