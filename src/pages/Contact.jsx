
import { useState } from 'react';
import {
  ArrowUpRight,
  MessageSquare,
  ShieldCheck,
  Send,
  CheckCircle2,
  Clock3,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const initialForm = {
  fullName: '',
  email: '',
  company: '',
  projectType: '',
  budget: '',
  timeline: '',
  contactMethod: 'Email',
  subject: '',
  message: '',
  features: '',
  privacyConsent: false,
};

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({
    type: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (status.message) {
      setStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const endpoint = import.meta.env.VITE_CONTACT_API_URL;

    if (!endpoint) {
      setStatus({
        type: 'error',
        message:
          'The contact service is not connected yet. Please configure VITE_CONTACT_API_URL before submitting inquiries.',
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
          source: 'SoftKai Technologies Website',
        }),
      });

      if (!response.ok) {
        throw new Error('The inquiry could not be submitted.');
      }

      setStatus({
        type: 'success',
        message:
          'Your inquiry has been submitted successfully. Thank you for contacting SoftKai Technologies.',
      });

      setFormData(initialForm);
    } catch {
      setStatus({
        type: 'error',
        message:
          'We could not submit your inquiry. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="page-shell contact-page-shell">
      <section className="container contact-page">
        <header className="contact-intro">
          <span className="eyebrow">
            LET'S START A CONVERSATION
          </span>

          <h1>
            Tell us what you want to <span>build.</span>
          </h1>

          <p>
            Share your goals, project requirements and challenges.
            Our inquiry form helps organize the information needed
            to discuss your next digital solution.
          </p>

          <div className="contact-trust-points">
            <span>
              <ShieldCheck size={17} />
              Share information responsibly
            </span>

            <span>
              <Clock3 size={17} />
              Include your preferred timeline
            </span>
          </div>
        </header>

        <div className="contact-layout">
          <aside className="contact-sidebar">
            <div className="contact-sidebar-card">
              <div className="contact-icon">
                <MessageSquare size={24} />
              </div>

              <h2>Let's discuss your idea.</h2>

              <p>
                Whether you're planning a website, software platform,
                AI solution or cloud project, start by telling us
                what you need.
              </p>

              <ul className="contact-benefits">
                <li>
                  <CheckCircle2 size={17} />
                  Explain your business challenge
                </li>
                <li>
                  <CheckCircle2 size={17} />
                  Outline the features you need
                </li>
                <li>
                  <CheckCircle2 size={17} />
                  Share your goals and timeline
                </li>
              </ul>
            </div>

            <div className="contact-security-note">
              <ShieldCheck size={20} />

              <div>
                <h3>Your information matters</h3>
                <p>
                  Do not submit passwords, API keys, payment details
                  or confidential customer information.
                </p>
              </div>
            </div>

            <div className="contact-back-link">
              <Link to="/" className="text-link">
                Back to homepage
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </aside>

          <section className="contact-form-card">
            <div className="contact-form-heading">
              <span className="eyebrow">PROJECT INQUIRY</span>
              <h2>Tell us about your project</h2>
              <p>
                Complete the fields below. Required fields are
                marked with an asterisk (*).
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="contact-form-section">
                <h3>01. Your information</h3>

                <div className="contact-form-grid">
                  <div className="form-field">
                    <label htmlFor="fullName">
                      Full name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      maxLength={100}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="email">
                      Work or contact email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      maxLength={254}
                      required
                    />
                  </div>

                  <div className="form-field form-field-full">
                    <label htmlFor="company">
                      Company or organization
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Your company name (optional)"
                      value={formData.company}
                      onChange={handleChange}
                      maxLength={150}
                    />
                  </div>
                </div>
              </div>

              <div className="contact-form-section">
                <h3>02. Project details</h3>

                <div className="contact-form-grid">
                  <div className="form-field">
                    <label htmlFor="projectType">
                      Project type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select project type</option>
                      <option value="Web Development">
                        Web Development
                      </option>
                      <option value="Mobile Application">
                        Mobile Application
                      </option>
                      <option value="AI and Machine Learning">
                        AI & Machine Learning
                      </option>
                      <option value="Cloud and DevOps">
                        Cloud & DevOps
                      </option>
                      <option value="Kubernetes and KrevoPilot">
                        Kubernetes / KrevoPilot
                      </option>
                      <option value="UI UX Design">
                        UI/UX Design
                      </option>
                      <option value="Software Consulting">
                        Software Consulting
                      </option>
                      <option value="Other">
                        Other
                      </option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="budget">
                      Estimated budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="">Select a budget</option>
                      <option value="Not decided">
                        Not decided yet
                      </option>
                      <option value="Under $500">
                        Under $500
                      </option>
                      <option value="$500 - $2000">
                        $500 – $2,000
                      </option>
                      <option value="$2000 - $5000">
                        $2,000 – $5,000
                      </option>
                      <option value="$5000+">
                        $5,000+
                      </option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="timeline">
                      Expected timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                    >
                      <option value="">Choose a timeline</option>
                      <option value="As soon as possible">
                        As soon as possible
                      </option>
                      <option value="Within 2-4 weeks">
                        Within 2–4 weeks
                      </option>
                      <option value="Within 1-3 months">
                        Within 1–3 months
                      </option>
                      <option value="Flexible">
                        Flexible
                      </option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="contactMethod">
                      Preferred contact method
                    </label>
                    <select
                      id="contactMethod"
                      name="contactMethod"
                      value={formData.contactMethod}
                      onChange={handleChange}
                    >
                      <option value="Email">Email</option>
                      <option value="Phone">Phone</option>
                      <option value="Video call">Video call</option>
                    </select>
                  </div>

                  <div className="form-field form-field-full">
                    <label htmlFor="subject">
                      Inquiry subject *
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="e.g. Business website development"
                      value={formData.subject}
                      onChange={handleChange}
                      maxLength={180}
                      required
                    />
                  </div>

                  <div className="form-field form-field-full">
                    <label htmlFor="features">
                      Required features or services
                    </label>
                    <textarea
                      id="features"
                      name="features"
                      rows={3}
                      placeholder="List the main features, integrations or services you need..."
                      value={formData.features}
                      onChange={handleChange}
                      maxLength={3000}
                    />
                  </div>

                  <div className="form-field form-field-full">
                    <label htmlFor="message">
                      Project description *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="What problem are you trying to solve? Who will use the solution, and what result do you expect?"
                      value={formData.message}
                      onChange={handleChange}
                      minLength={20}
                      maxLength={5000}
                      required
                    />
                    <span className="form-field-hint">
                      Please provide at least 20 characters.
                    </span>
                  </div>
                </div>
              </div>

              <div className="contact-consent">
                <input
                  id="privacyConsent"
                  name="privacyConsent"
                  type="checkbox"
                  checked={formData.privacyConsent}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="privacyConsent">
                  I agree to share the information above so SoftKai
                  Technologies can review and respond to my inquiry. *
                </label>
              </div>

              {status.message && (
                <div
                  className={`contact-form-status ${status.type}`}
                  role="status"
                  aria-live="polite"
                >
                  {status.type === 'success' ? (
                    <CheckCircle2 size={19} />
                  ) : (
                    <ShieldCheck size={19} />
                  )}

                  <span>{status.message}</span>
                </div>
              )}

              <div className="contact-submit-row">
                <p>
                  Please review your information before submitting.
                </p>

                <button
                  className="button button-primary contact-submit"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit inquiry'}
                  <Send size={17} />
                </button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}
