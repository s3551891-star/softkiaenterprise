
import {
  ArrowRight,
  CheckCircle2,
  CircleDot,
  Gauge,
  ShieldCheck,
} from 'lucide-react';

import { Link } from 'react-router-dom';

import Hero from '../components/sections/Hero.jsx';
import ServicesPreview from '../components/sections/ServicesPreview.jsx';
import PortfolioPreview from '../components/sections/PortfolioPreview.jsx';
import TestimonialsPreview from '../components/sections/TestimonialsPreview.jsx';
import SochCeremonyVideo from '../components/sections/SochCeremonyVideo.jsx';

import Button from '../components/common/Button.jsx';

function KrevoPilotPreview() {
  return (
    <section className="section">
      <div className="container">
        <div className="product-feature">
          <div className="product-feature-copy">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              A SOFTKAI PRODUCT
            </span>

            <h2>
              Kubernetes visibility.
              <span className="text-gradient">
                {' '}
                Without the guesswork.
              </span>
            </h2>

            <p>
              KrevoPilot helps platform teams understand Kubernetes
              operations through cluster health, application status,
              resource utilization, events and AI-assisted investigations.
            </p>

            <div className="product-benefits">
              <span>
                <CheckCircle2 size={17} />
                Read-only operational visibility
              </span>

              <span>
                <CheckCircle2 size={17} />
                Resource and health insights
              </span>

              <span>
                <ShieldCheck size={17} />
                Staging-first adoption approach
              </span>
            </div>

            <Button to="/krevopilot">
              Discover KrevoPilot
            </Button>
          </div>

          <div className="product-dashboard">
            <div className="dashboard-window-bar">
              <span />
              <span />
              <span />
              <strong>KREVOPILOT / OVERVIEW</strong>
            </div>

            <div className="dashboard-window-content">
              <div className="dashboard-mini-stat">
                <span>
                  <CircleDot size={15} />
                  Cluster visibility
                </span>

                <strong>Operational overview</strong>

                <small>Review health and activity</small>
              </div>

              <div className="dashboard-mini-stat">
                <span>
                  <Gauge size={15} />
                  Resource insights
                </span>

                <strong>Usage &amp; opportunities</strong>

                <small>Understand utilization</small>
              </div>

              <div className="dashboard-mini-stat">
                <span>
                  <ShieldCheck size={15} />
                  Access model
                </span>

                <strong>Read-only by design</strong>

                <small>Review before rollout</small>
              </div>

              <p className="dashboard-disclaimer">
                Illustrative interface concept — not a live cluster
                connection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Understand',
      description:
        'Clarify the problem, users, requirements and desired outcomes.',
    },
    {
      number: '02',
      title: 'Plan',
      description:
        'Define the scope, technical direction and delivery milestones.',
    },
    {
      number: '03',
      title: 'Build',
      description:
        'Develop and review the solution through an iterative workflow.',
    },
    {
      number: '04',
      title: 'Improve',
      description:
        'Validate quality and identify opportunities for improvement.',
    },
  ];

  return (
    <section className="section section-muted">
      <div className="container">
        <div className="section-heading-row">
          <div className="section-title">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              HOW WE WORK
            </div>

            <h2>Clear thinking. Structured delivery.</h2>

            <p>
              A straightforward process keeps goals, priorities and
              progress aligned.
            </p>
          </div>
        </div>

        <div className="process-grid">
          {steps.map((step) => (
            <article className="process-card" key={step.number}>
              <span className="process-number">{step.number}</span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="section">
      <div className="container">
        <div className="contact-cta">
          <div>
            <span className="eyebrow">
              HAVE A PROJECT IN MIND?
            </span>

            <h2>Let's turn your next idea into a plan.</h2>

            <p>
              Start a conversation about your product, platform or
              business needs.
            </p>
          </div>

          <Link to="/contact" className="button button-light">
            Talk to our team
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      <ServicesPreview />

      <PortfolioPreview />

      <SochCeremonyVideo />

      <KrevoPilotPreview />

      <ProcessSection />

      <TestimonialsPreview />

      <ContactCTA />
    </>
  );
}
