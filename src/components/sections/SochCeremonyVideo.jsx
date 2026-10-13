
import { ArrowUpRight, PlayCircle } from 'lucide-react';

export default function SochCeremonyVideo() {
  return (
    <section className="soch-video-section">
      <div className="container">
        <div className="soch-video-grid">
          <div className="soch-video-copy">
            <span className="eyebrow">
              SOCH FUTURE PATHWAYS
            </span>

            <h2>
              Learning today.
              <span> Building careers tomorrow.</span>
            </h2>

            <p>
              Celebrate Batch 1 of the Cloud Computing & DevOps
              Program, featuring certificate presentations,
              recognition shields and insights from industry experts.
            </p>

            <a
              href="https://youtu.be/4GFw8TAeSCM"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
            >
              Watch on YouTube
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="soch-video-frame">
            <div className="soch-video-label">
              <PlayCircle size={17} />
              <span>Batch 1 Completion Ceremony</span>
            </div>

            <div className="soch-video-embed">
              <iframe
                src="https://www.youtube-nocookie.com/embed/4GFw8TAeSCM"
                title="SOCH Future Pathways Cloud Computing and DevOps Batch 1 Completion Ceremony"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
