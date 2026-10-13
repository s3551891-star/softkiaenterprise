import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  Home,
  SearchX,
} from 'lucide-react';

function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <main className="not-found-page">
      <div className="not-found-glow not-found-glow-one" />
      <div className="not-found-glow not-found-glow-two" />

      <section className="not-found-content">
        <div className="not-found-icon">
          <SearchX size={34} strokeWidth={1.5} />
        </div>

        <p className="not-found-eyebrow">
          <Compass size={15} />
          PAGE NOT FOUND
        </p>

        <h1>
          Lost in the <span>digital space?</span>
        </h1>

        <p className="not-found-description">
          The page you're looking for doesn't exist, may have
          moved, or the link might be incorrect. Let's get you
          back on track.
        </p>

        <div className="not-found-actions">
          <Link to="/" className="not-found-home-button">
            <Home size={18} />
            Back to Home
            <ArrowRight size={17} />
          </Link>

          <button
            type="button"
            className="not-found-back-button"
            onClick={handleGoBack}
          >
            <ArrowLeft size={17} />
            Go Back
          </button>
        </div>

        <div className="not-found-divider" />

        <p className="not-found-footer">
          <span className="not-found-status-dot" />
          SOFTKAI TECHNOLOGIES
          <span className="not-found-footer-separator">/</span>
          Building better digital experiences.
        </p>
      </section>
    </main>
  );
}

export default NotFound;