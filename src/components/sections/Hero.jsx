
import {
  ArrowDownRight,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

import { Link } from 'react-router-dom';
import Button from '../common/Button.jsx';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid container">
        {/* Hero Content */}
        <div className="hero-copy">
          <div className="eyebrow hero-reveal hero-reveal-1">
            <span className="eyebrow-dot" />
            SOFTWARE ENGINEERING &amp; DIGITAL SOLUTIONS
          </div>

          <h1 className="hero-reveal hero-reveal-2">
            Technology that moves your{' '}
            <span className="text-gradient">
              business forward.
            </span>
          </h1>

          <p className="hero-description hero-reveal hero-reveal-3">
            We help businesses build digital products, modernize
            systems, improve operational visibility, and turn
            ideas into dependable technology solutions.
          </p>

          {/* Call To Action */}
          <div className="hero-actions hero-reveal hero-reveal-4">
            <Button to="/contact">
              Discuss your project
            </Button>

            <Link to="/portfolio" className="text-link">
              <span>Explore portfolio</span>
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="hero-proof hero-reveal hero-reveal-5">
            <span>
              <CheckCircle2 size={16} aria-hidden="true" />
              Practical solutions
            </span>

            <span>
              <ShieldCheck size={16} aria-hidden="true" />
              Security-conscious engineering
            </span>
          </div>
        </div>

        {/* Animated Hero Visual */}
        <div
          className="hero-visual hero-visual-animate"
          role="img"
          aria-label="SoftKai digital engineering illustration showing security, scalability, and quality"
        >
          <div className="hero-visual-glow" />

          {/* Visual Header */}
          <div className="visual-topline">
            <span className="status-dot" />

            <span>DIGITAL ENGINEERING</span>

            <span className="visual-index">
              01 / 04
            </span>
          </div>

          {/* Animated Orbit */}
          <div className="visual-core">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-orbit orbit-three" />

            {/* Center Element */}
            <div className="visual-center">
              <Sparkles
                size={37}
                aria-hidden="true"
              />

              <strong>Build</strong>

              <span>What matters</span>
            </div>

            {/* Floating Information Chips */}
            <div className="floating-chip chip-one">
              <ShieldCheck
                size={17}
                aria-hidden="true"
              />

              <span>Security</span>
            </div>

            <div className="floating-chip chip-two">
              <ArrowDownRight
                size={17}
                aria-hidden="true"
              />

              <span>Scalability</span>
            </div>

            <div className="floating-chip chip-three">
              <CheckCircle2
                size={17}
                aria-hidden="true"
              />

              <span>Quality</span>
            </div>
          </div>

          {/* Visual Footer */}
          <div className="visual-bottomline">
            <span>ENGINEERED WITH PURPOSE</span>

            <span>SOFTKAI TECHNOLOGIES</span>
          </div>
        </div>
      </div>
    </section>
  );
}
