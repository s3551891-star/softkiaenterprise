import InfoPage from './InfoPage.jsx';

export default function EngagementModels() {
  return (
    <InfoPage
      eyebrow="WORKING TOGETHER"
      title="A delivery model that fits the work."
      description="The engagement structure should reflect project scope, team needs, timelines and agreed responsibilities."
      items={[
        { title: 'Project-based', description: 'Define deliverables, scope, milestones and acceptance criteria before work begins.' },
        { title: 'Ongoing collaboration', description: 'Plan continued development and improvements around agreed priorities.' },
        { title: 'Technical consultation', description: 'Clarify architecture, implementation choices or technical challenges before committing to a larger scope.' },
      ]}
    />
  );
}