
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Layers3,
  MoveUpRight,
} from 'lucide-react';

const exploreLinks = [
  { label: 'About us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Technology', path: '/technology' },
];

const solutionLinks = [
  { label: 'KrevoPilot', path: '/krevopilot' },
  { label: 'Engagement models', path: '/engagement-models' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Contact', path: '/contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-column">
          <Link
            to="/"
            className="brand"
            aria-label="SoftKai Technologies home"
          >
            <span className="brand-mark" aria-hidden="true">
              <Layers3 size={23} strokeWidth={2.3} />
            </span>

            <span className="brand-copy">
              <strong>SoftKai</strong>
              <span>TECHNOLOGIES</span>
            </span>
          </Link>

          <p>
            Thoughtful technology, dependable engineering, and digital
            solutions designed around your goals.
          </p>

          <Link to="/contact" className="text-link footer-brand-link">
            Let’s build something meaningful
            <MoveUpRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>

          {exploreLinks.map(({ label, path }) => (
            <Link key={path} to={path}>
              {label}
            </Link>
          ))}
        </div>

        <div className="footer-column">
          <h3>Solutions</h3>

          {solutionLinks.map(({ label, path }) => (
            <Link key={path} to={path}>
              {label}
            </Link>
          ))}
        </div>

        <div className="footer-contact">
          <span className="footer-contact-label">HAVE AN IDEA?</span>

          <h3>Let’s talk about it.</h3>

          <p>
            Tell us what you want to build. Let’s explore the next step
            together.
          </p>

          <Link to="/contact" className="text-link">
            Get in touch
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {currentYear} SoftKai Technologies. All rights reserved.
        </span>

        <Link to="/" className="footer-home-link">
          Built with purpose.
        </Link>
      </div>
    </footer>
  );
}
