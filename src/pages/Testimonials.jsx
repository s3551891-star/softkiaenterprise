import InfoPage from './InfoPage.jsx';

export default function Testimonials() {
  return (
    <InfoPage
      eyebrow="CLIENT FEEDBACK"
      title="Feedback should speak for itself."
      description="This page is reserved for authentic customer feedback. Original review text, reviewer attribution and permission to publish will be confirmed before reviews are displayed."
      items={[
        { title: 'Authentic reviews', description: 'Publish original feedback without changing its intended meaning.' },
        { title: 'Verified attribution', description: 'Confirm the source and appropriate attribution for each review.' },
        { title: 'Transparent presentation', description: 'Do not invent customer names, ratings or project outcomes.' },
      ]}
    />
  );
}