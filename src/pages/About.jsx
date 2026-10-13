
import {
  ArrowRight,
  Target,
  Eye,
  ShieldCheck,
  Users,
  Lightbulb,
  CheckCircle2,
  Sparkles,
  Code2,
  TrendingUp,
} from 'lucide-react';

import { Link } from 'react-router-dom';
import InfoPage from './InfoPage.jsx';
import Button from '../components/common/Button.jsx';

const companyValues = [
  {
    icon: Target,
    title: 'Business-focused',
    description:
      'We begin with real business challenges and build technology around measurable goals and practical outcomes.',
    number: '01',
  },
  {
    icon: ShieldCheck,
    title: 'Quality-conscious',
    description:
      'We prioritize maintainable code, thoughtful testing, usability, reliability and security-conscious engineering.',
    number: '02',
  },
  {
    icon: Users,
    title: 'Collaborative',
    description:
      'We value transparent communication, shared understanding and clear expectations throughout every project.',
    number: '03',
  },
  {
    icon: Lightbulb,
    title: 'Innovation-driven',
    description:
      'We explore modern tools and approaches to solve problems effectively without adding unnecessary complexity.',
    number: '04',
  },
];

const capabilities = [
  'Software engineering',
  'Web application development',
  'AI-enabled solutions',
  'Digital transformation',
  'System modernization',
  'Security-conscious development',
];

export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="container about-hero-grid">
          <div className="about-hero-copy">
            <div className="eyebrow about-reveal about-delay-1">
              <span className="eyebrow-dot" />
              GET TO KNOW SOFTKAI
            </div>

            <h1 className="about-reveal about-delay-2">
              Engineering with
              <span className="text-gradient"> purpose.</span>
            </h1>

            <p className="about-hero-description about-reveal about-delay-3">
              We help businesses turn ideas into dependable digital
              experiences through practical software engineering,
              modern technology and thoughtful problem-solving.
            </p>

            <div className="about-hero-actions about-reveal about-delay-4">
              <Button to="/contact">
                Let's work together
              </Button>

              <Link to="/services" className="text-link">
                Explore our services
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="about-trust-line about-reveal about-delay-5">
              <CheckCircle2 size={17} />
              <span>Purposeful technology. Practical outcomes.</span>
            </div>
          </div>

          <div className="about-hero-visual about-visual-animate">
            <div className="about-visual-glow" />

            <div className="about-visual-card">
              <div className="about-visual-top">
                <span className="about-status">
                  <span className="status-dot" />
                  OUR APPROACH
                </span>
                <Sparkles size={20} />
              </div>

              <div className="about-orbit-stage">
                <div className="about-orbit about-orbit-one" />
                <div className="about-orbit about-orbit-two" />

                <div className="about-center-icon">
                  <Code2 size={36} />
                </div>

                <div className="about-mini-card about-mini-top">
                  <ShieldCheck size={17} />
                  <span>Reliable</span>
                </div>

                <div className="about-mini-card about-mini-left">
                  <Target size={17} />
                  <span>Purposeful</span>
                </div>

                <div className="about-mini-card about-mini-right">
                  <TrendingUp size={17} />
                  <span>Scalable</span>
                </div>
              </div>

              <div className="about-visual-footer">
                <div>
                  <span className="about-footer-label">
                    OUR PRINCIPLE
                  </span>
                  <strong>Technology that solves real problems.</strong>
                </div>
                <Sparkles size={22} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-intro section-padding">
        <div className="container about-intro-grid">
          <div className="about-section-heading">
            <span className="section-kicker">WHO WE ARE</span>
            <h2>
              Practical engineering.
              <span className="text-gradient">
                {' '}Meaningful impact.
              </span>
            </h2>
          </div>

          <div className="about-intro-copy">
            <p>
              SoftKai Technologies focuses on practical digital
              solutions, software engineering and dependable
              technology experiences. We believe good technology
              should solve a clear problem, support its users and
              remain useful as a business grows.
            </p>

            <p>
              From new digital products to improving existing
              systems, our approach puts clarity, collaboration
              and engineering quality at the center of the work.
            </p>

            <div className="about-capabilities">
              {capabilities.map((capability) => (
                <div className="about-capability" key={capability}>
                  <CheckCircle2 size={16} />
                  <span>{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-values section-padding">
        <div className="container">
          <div className="about-values-heading">
            <div>
              <span className="section-kicker">WHAT GUIDES US</span>
              <h2>Our core values</h2>
            </div>

            <p>
              The principles behind how we approach challenges,
              build solutions and work with people.
            </p>
          </div>

          <div className="about-values-grid">
            {companyValues.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  className="about-value-card"
                  key={value.number}
                >
                  <div className="about-value-top">
                    <div className="about-value-icon">
                      <Icon size={23} />
                    </div>

                    <span className="about-value-number">
                      {value.number}
                    </span>
                  </div>

                  <h3>{value.title}</h3>
                  <p>{value.description}</p>

                  <div className="about-value-line" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-purpose section-padding">
        <div className="container about-purpose-grid">
          <article className="about-purpose-card">
            <div className="about-purpose-icon">
              <Target size={24} />
            </div>

            <span className="section-kicker">OUR MISSION</span>
            <h2>Make technology useful.</h2>
            <p>
              To help organizations address real challenges through
              practical software, thoughtful engineering and
              dependable digital solutions.
            </p>
          </article>

          <article className="about-purpose-card about-purpose-featured">
            <div className="about-purpose-icon">
              <Eye size={24} />
            </div>

            <span className="section-kicker">OUR VISION</span>
            <h2>Build for what comes next.</h2>
            <p>
              To contribute to a future where accessible, reliable
              and well-engineered technology helps businesses
              adapt, improve and grow with confidence.
            </p>
          </article>
        </div>
      </section>

      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta">
            <div className="about-cta-glow" />

            <div className="about-cta-content">
              <span className="section-kicker">
                HAVE A CHALLENGE IN MIND?
              </span>

              <h2>
                Let's build something
                <span className="text-gradient"> meaningful.</span>
              </h2>

              <p>
                Tell us about your idea, your goals or the problem
                you want to solve. Let's explore the right approach.
              </p>

              <div className="about-cta-actions">
                <Button to="/contact">
                  Start a conversation
                </Button>

                <Link to="/portfolio" className="text-link">
                  View our work
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InfoPage
        eyebrow="OUR COMMITMENT"
        title="Engineering with purpose."
        description="SoftKai Technologies focuses on practical digital solutions, software engineering and dependable technology experiences."
        items={[
          {
            title: 'Business-focused',
            description:
              'Start with the problem and desired business outcome.',
          },
          {
            title: 'Quality-conscious',
            description:
              'Prioritize maintainability, usability and thoughtful testing.',
          },
          {
            title: 'Collaborative',
            description:
              'Keep communication, requirements and delivery expectations clear.',
          },
        ]}
      />
    </main>
  );
}
