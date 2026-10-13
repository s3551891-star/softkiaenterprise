
import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  Boxes,
  ChartNoAxesCombined,
  CheckCircle2,
  CircleCheck,
  Eye,
  FileSearch,
  Layers3,
  LockKeyhole,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';

import { Link } from 'react-router-dom';
import Button from '../components/common/Button.jsx';

const productImages = {
  hero: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=85',
  infrastructure:
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
  engineering:
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
};

const capabilities = [
  {
    icon: Activity,
    number: '01',
    title: 'Operational visibility',
    description:
      'Bring cluster health, application status and operational context into a clearer view for platform teams.',
  },
  {
    icon: ChartNoAxesCombined,
    number: '02',
    title: 'Resource insights',
    description:
      'Review available resource-usage information and identify potential areas for optimization.',
  },
  {
    icon: FileSearch,
    number: '03',
    title: 'Events and investigations',
    description:
      'Explore operational events and relevant context to help teams investigate issues more efficiently.',
  },
  {
    icon: Sparkles,
    number: '04',
    title: 'AI-assisted context',
    description:
      'Use AI-assisted operational context to support investigation and understanding, with human review.',
  },
  {
    icon: Network,
    number: '05',
    title: 'Infrastructure awareness',
    description:
      'Understand relationships between cluster components, applications and their operational environment.',
  },
  {
    icon: ShieldCheck,
    number: '06',
    title: 'Read-only by design',
    description:
      'Follow a read-only access model designed to inspect operational information without changing cluster resources.',
  },
];

const rolloutSteps = [
  {
    number: '01',
    title: 'Test environment',
    description:
      'Start in an isolated test cluster and confirm the access configuration.',
  },
  {
    number: '02',
    title: 'Staging validation',
    description:
      'Validate the visibility, permissions and usefulness of the operational information.',
  },
  {
    number: '03',
    title: 'Production review',
    description:
      'Progress only after the team has reviewed the configuration and approved the rollout.',
  },
];

function SectionLabel({ children }) {
  return <span className="kp-section-label">{children}</span>;
}

function ImageWithFallback({ src, alt, className = '' }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={(event) => {
        event.currentTarget.style.display = 'none';
      }}
    />
  );
}

export default function KrevoPilot() {
  return (
    <main className="krevopilot-page">
      {/* HERO */}
      <section className="kp-hero">
        <div className="kp-hero-glow kp-glow-one" />
        <div className="kp-hero-glow kp-glow-two" />

        <div className="container kp-hero-grid">
          <div className="kp-hero-copy">
            <div className="kp-eyebrow kp-enter kp-delay-1">
              <span className="kp-live-dot" />
              <span>SOFTKAI TECHNOLOGIES</span>
              <span className="kp-eyebrow-divider">/</span>
              <span>KUBERNETES VISIBILITY</span>
            </div>

            <h1 className="kp-enter kp-delay-2">
              Understand your
              <span className="kp-gradient-text">
                {' '}Kubernetes.
              </span>
              <br />
              Operate with
              <span className="kp-gradient-text">
                {' '}clarity.
              </span>
            </h1>

            <p className="kp-hero-description kp-enter kp-delay-3">
              Meet KrevoPilot — an operational visibility solution
              designed to help platform teams understand cluster
              health, applications, resource usage, events and
              potential optimization opportunities.
            </p>

            <div className="kp-hero-actions kp-enter kp-delay-4">
              <Button to="/contact">
                Discuss KrevoPilot
              </Button>

              <Link to="/services" className="kp-text-link">
                Explore our capabilities
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="kp-trust-points kp-enter kp-delay-5">
              <span>
                <ShieldCheck size={17} />
                Read-only access model
              </span>

              <span>
                <CheckCircle2 size={17} />
                Staging-first rollout
              </span>
            </div>
          </div>

          <div className="kp-hero-art kp-enter-visual">
            <div className="kp-image-frame">
              <ImageWithFallback
                src={productImages.hero}
                alt="Abstract global technology network representing cloud infrastructure"
                className="kp-hero-image"
              />

              <div className="kp-image-overlay" />

              <div className="kp-image-caption">
                <div className="kp-caption-icon">
                  <Network size={21} />
                </div>

                <div>
                  <span>OPERATIONAL INTELLIGENCE</span>
                  <strong>Visibility across your environment</strong>
                </div>
              </div>

              <div className="kp-floating-badge kp-floating-top">
                <span className="kp-live-dot" />
                <span>Read-only model</span>
              </div>

              <div className="kp-floating-badge kp-floating-bottom">
                <ShieldCheck size={18} />
                <span>Security-conscious access</span>
              </div>
            </div>

            <div className="kp-art-decoration kp-art-decoration-one" />
            <div className="kp-art-decoration kp-art-decoration-two" />
          </div>
        </div>

        <div className="container kp-hero-bottom">
          <span>DESIGNED FOR PLATFORM TEAMS</span>
          <span className="kp-bottom-line" />
          <span>OBSERVE. UNDERSTAND. IMPROVE.</span>
        </div>
      </section>

      {/* PRODUCT INTRODUCTION */}
      <section className="kp-intro kp-section">
        <div className="container kp-intro-grid">
          <div className="kp-intro-visual">
            <ImageWithFallback
              src={productImages.infrastructure}
              alt="Server infrastructure representing cloud and Kubernetes environments"
              className="kp-section-image"
            />

            <div className="kp-image-index">
              <Layers3 size={17} />
              <span>INFRASTRUCTURE AWARENESS</span>
            </div>
          </div>

          <div className="kp-intro-copy">
            <SectionLabel>THE PRODUCT</SectionLabel>

            <h2>
              Less guesswork.
              <span className="kp-gradient-text">
                {' '}More operational context.
              </span>
            </h2>

            <p>
              Kubernetes environments can generate a lot of operational
              information. KrevoPilot is designed to help platform
              teams review that information in a more understandable,
              organized way.
            </p>

            <p>
              Its focus is visibility and investigation support —
              helping teams understand what is happening before they
              decide what action, if any, should be taken.
            </p>

            <div className="kp-intro-points">
              <div>
                <CircleCheck size={19} />
                <span>Understand cluster and application information</span>
              </div>

              <div>
                <CircleCheck size={19} />
                <span>Review resource usage and operational events</span>
              </div>

              <div>
                <CircleCheck size={19} />
                <span>Support human-led investigation and decisions</span>
              </div>
            </div>

            <Link to="/contact" className="kp-inline-link">
              Talk to SoftKai about KrevoPilot
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="kp-capabilities kp-section">
        <div className="container">
          <div className="kp-section-heading">
            <SectionLabel>CORE CAPABILITIES</SectionLabel>

            <h2>
              A clearer view of your
              <span className="kp-gradient-text">
                {' '}cluster.
              </span>
            </h2>

            <p>
              Explore the operational areas KrevoPilot is designed
              to help platform teams understand.
            </p>
          </div>

          <div className="kp-capability-grid">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="kp-capability-card"
                  key={item.number}
                >
                  <div className="kp-card-top">
                    <div className="kp-capability-icon">
                      <Icon size={23} />
                    </div>

                    <span>{item.number}</span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <div className="kp-card-bottom">
                    <span>OPERATIONAL VISIBILITY</span>
                    <ArrowUpRight size={17} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SAFETY MODEL */}
      <section className="kp-security kp-section">
        <div className="container kp-security-grid">
          <div className="kp-security-copy">
            <SectionLabel>SECURITY-FIRST THINKING</SectionLabel>

            <h2>
              Observe the environment.
              <span className="kp-gradient-text">
                {' '}Keep changes controlled.
              </span>
            </h2>

            <p>
              KrevoPilot's recommended access model is cluster-wide
              read-only. Its purpose is to help teams inspect
              operational information — not to make changes to
              Kubernetes resources.
            </p>

            <div className="kp-security-list">
              <div>
                <span className="kp-security-check">
                  <Eye size={19} />
                </span>

                <div>
                  <strong>Read-only operational view</strong>
                  <p>
                    Review available information without granting
                    resource-changing permissions.
                  </p>
                </div>
              </div>

              <div>
                <span className="kp-security-check">
                  <LockKeyhole size={19} />
                </span>

                <div>
                  <strong>Controlled permissions</strong>
                  <p>
                    Validate permissions and access scope with
                    your platform team before rollout.
                  </p>
                </div>
              </div>

              <div>
                <span className="kp-security-check">
                  <ShieldCheck size={19} />
                </span>

                <div>
                  <strong>Human-led decisions</strong>
                  <p>
                    Teams remain responsible for reviewing findings
                    and approving operational changes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="kp-security-visual">
            <div className="kp-security-orbit kp-security-orbit-one" />
            <div className="kp-security-orbit kp-security-orbit-two" />

            <div className="kp-security-core">
              <ShieldCheck size={48} />
              <strong>Read-only</strong>
              <span>OBSERVE, DON'T MODIFY</span>
            </div>

            <div className="kp-security-chip kp-security-chip-one">
              <Eye size={17} />
              <span>Inspect</span>
            </div>

            <div className="kp-security-chip kp-security-chip-two">
              <FileSearch size={17} />
              <span>Investigate</span>
            </div>

            <div className="kp-security-chip kp-security-chip-three">
              <CheckCircle2 size={17} />
              <span>Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* STAGING-FIRST ROLLOUT */}
      <section className="kp-rollout kp-section">
        <div className="container">
          <div className="kp-section-heading">
            <SectionLabel>RECOMMENDED ADOPTION</SectionLabel>

            <h2>
              Start small.
              <span className="kp-gradient-text">
                {' '}Validate first.
              </span>
            </h2>

            <p>
              A staged rollout helps teams check configuration,
              access and usefulness before production adoption.
            </p>
          </div>

          <div className="kp-rollout-grid">
            {rolloutSteps.map((step, index) => (
              <article className="kp-rollout-card" key={step.number}>
                <div className="kp-rollout-number">
                  {step.number}
                </div>

                {index < rolloutSteps.length - 1 && (
                  <div className="kp-rollout-connector">
                    <ArrowRight size={17} />
                  </div>
                )}

                <span className="kp-rollout-label">
                  PHASE {step.number}
                </span>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="kp-final-cta">
        <div className="container">
          <div className="kp-cta-panel">
            <div className="kp-cta-image">
              <ImageWithFallback
                src={productImages.engineering}
                alt="Close-up of a computer circuit board representing technology engineering"
                className="kp-cta-background-image"
              />
            </div>

            <div className="kp-cta-content">
              <SectionLabel>POWERED BY SOFTKAI TECHNOLOGIES</SectionLabel>

              <h2>
                Make operational complexity
                <span className="kp-gradient-text">
                  {' '}easier to understand.
                </span>
              </h2>

              <p>
                Want to explore how KrevoPilot could fit your
                Kubernetes environment? Let's discuss your platform,
                access requirements and operational goals.
              </p>

              <div className="kp-cta-actions">
                <Button to="/contact">
                  Discuss your use case
                </Button>

                <Link to="/portfolio" className="kp-text-link">
                  Explore SoftKai
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
