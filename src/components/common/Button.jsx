import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'normal',
  className = '',
  type = 'button',
  disabled = false,
  icon = true,
  target,
  rel,
  ariaLabel,
}) {
  const classes = [
    'button',
    `button-${variant}`,
    size === 'small' ? 'button-small' : '',
    size === 'large' ? 'button-large' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      <span>{children}</span>

      {icon && (
        <ArrowRight
          size={17}
          aria-hidden="true"
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link
        className={classes}
        to={to}
        onClick={onClick}
        aria-label={ariaLabel}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        onKeyDown={(event) => {
          if (disabled && event.key === 'Enter') {
            event.preventDefault();
          }
        }}
        style={
          disabled
            ? {
                pointerEvents: 'none',
                opacity: 0.55,
              }
            : undefined
        }
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        className={classes}
        href={disabled ? undefined : href}
        target={target}
        rel={target === '_blank' ? rel || 'noopener noreferrer' : rel}
        aria-label={ariaLabel}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        onClick={disabled ? (event) => event.preventDefault() : onClick}
        style={
          disabled
            ? {
                pointerEvents: 'none',
                opacity: 0.55,
              }
            : undefined
        }
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}