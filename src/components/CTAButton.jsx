import { Link } from 'react-router-dom';

export function PrimaryCTA({ to, children, className = '', variant = 'teal' }) {
  const styles =
    variant === 'amber'
      ? 'bg-pm-amber hover:bg-pm-amber-deep text-pm-ink-deep'
      : 'bg-pm-teal hover:bg-pm-teal-deep text-white';
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 font-display font-medium text-[15px] px-5 py-3 rounded transition-colors ${styles} ${className}`}
    >
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}

export function TextCTA({ to, children, onDark = false, className = '' }) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-1.5 font-display font-medium text-[15px] transition-colors ${
        onDark ? 'text-pm-teal-light hover:text-white' : 'text-pm-teal hover:text-pm-teal-deep'
      } ${className}`}
    >
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}
