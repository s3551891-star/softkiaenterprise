
export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}) {
  return (
    <div
      className={`section-title ${
        centered ? 'section-title-centered' : ''
      }`}
    >
      {eyebrow && (
        <div className="eyebrow">
          <span className="eyebrow-dot" />
          {eyebrow}
        </div>
      )}

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </div>
  );
}
