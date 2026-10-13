
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
} from 'lucide-react';

const primaryNavigation = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'KrevoPilot', path: '/krevopilot' },
  { label: 'Contact', path: '/contact' },
];

const moreNavigation = [
  { label: 'Technology', path: '/technology' },
  { label: 'Engagement Models', path: '/engagement-models' },
  { label: 'Testimonials', path: '/testimonials' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setMoreOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) {
      setMoreOpen(false);
    }
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setMoreOpen(false);
  };

  const isMoreActive = moreNavigation.some(
    ({ path }) =>
      location.pathname === path ||
      location.pathname.startsWith(`${path}/`)
  );

  return (
    <header className="site-header">
      <div className="container nav-container">
        <Link
          to="/"
          className="brand"
          aria-label="SoftKai Technologies home"
          onClick={closeMenu}
        >
          <img
            src="/images/logo/softkia-logo.png"
            alt="SoftKai Technologies"
            className="navbar-logo-image"
            width="180"
            height="55"
          />
        </Link>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={
            menuOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links ${
            menuOpen ? 'nav-links-open' : ''
          }`}
          aria-label="Main navigation"
        >
          {primaryNavigation.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              onClick={closeMenu}
              className={({ isActive }) =>
                `nav-link ${
                  isActive ? 'nav-link-active' : ''
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          <div
            className={`nav-more ${
              moreOpen ? 'nav-more-open' : ''
            }`}
          >
            <button
              type="button"
              className={`nav-link nav-more-button ${
                isMoreActive ? 'nav-link-active' : ''
              }`}
              aria-expanded={moreOpen}
              aria-haspopup="true"
              onClick={() => setMoreOpen((open) => !open)}
            >
              <span>More</span>

              <ChevronDown
                size={15}
                className={
                  moreOpen ? 'chevron-rotated' : ''
                }
                aria-hidden="true"
              />
            </button>

            <div className="nav-dropdown">
              {moreNavigation.map(({ label, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `nav-dropdown-link ${
                      isActive ? 'nav-link-active' : ''
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>

          <Link
            to="/contact"
            className="button button-small nav-cta"
            onClick={closeMenu}
          >
            <span>Start a project</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
