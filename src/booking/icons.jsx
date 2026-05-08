const baseProps = {
  width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none',
  stroke: 'currentColor', strokeWidth: 1.1, strokeLinecap: 'round', strokeLinejoin: 'round',
};

export function ServiceIcon({ name, className = '' }) {
  const props = { ...baseProps, className };
  switch (name) {
    case 'champagne':
      return (
        <svg {...props}>
          <path d="M9 3h6l-1 7a2 2 0 0 1-4 0z" />
          <path d="M12 13v7M9 20h6" />
        </svg>
      );
    case 'rose':
      return (
        <svg {...props}>
          <circle cx="12" cy="9" r="3.5" />
          <path d="M12 5.5 L12 4 M9.5 6.5 L8 5.5 M14.5 6.5 L16 5.5" />
          <path d="M12 12.5v3M9 17l3 4 3-4" />
        </svg>
      );
    case 'breakfast':
      return (
        <svg {...props}>
          <path d="M4 16c0-5 4-8 8-8s8 3 8 8c-2.5 1.5-5.5 2-8 2s-5.5-.5-8-2z" />
          <path d="M9 11.5l1.2 3.5M15 11.5l-1.2 3.5" />
        </svg>
      );
    case 'car':
      return (
        <svg {...props}>
          <path d="M3 14l2-5h14l2 5v3H3z" />
          <circle cx="7" cy="17" r="1.5" />
          <circle cx="17" cy="17" r="1.5" />
          <path d="M6 14h12" />
        </svg>
      );
    case 'heart':
      return (
        <svg {...props}>
          <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
        </svg>
      );
    case 'sparkle':
      return (
        <svg {...props}>
          <path d="M12 3l1.5 6.5L20 11l-6.5 1.5L12 19l-1.5-6.5L4 11l6.5-1.5z" />
        </svg>
      );
    default:
      return null;
  }
}

export function CalendarIcon({ className = '' }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor"
         strokeWidth="1.1" strokeLinecap="round" className={className}>
      <rect x="2" y="4" width="12" height="10" rx="1" />
      <path d="M5 2v3M11 2v3M2 7h12" />
    </svg>
  );
}

export function CheckIcon({ className = '' }) {
  return (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor"
         strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 7.5L6 10.5 11 4.5" />
    </svg>
  );
}

export function LockIcon({ className = '' }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor"
         strokeWidth="1.1" strokeLinecap="round" className={className}>
      <rect x="3" y="7" width="10" height="7" rx="1" />
      <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" />
    </svg>
  );
}

export function ShieldIcon({ className = '' }) {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor"
         strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M8 1.5l5.5 2v4.5c0 3.5-2.5 6-5.5 7-3-1-5.5-3.5-5.5-7V3.5z" />
      <path d="M5.5 8L7.5 10 11 6" />
    </svg>
  );
}

export function CardIcon({ className = '' }) {
  return (
    <svg width="18" height="14" viewBox="0 0 20 14" fill="none" stroke="currentColor"
         strokeWidth="1.1" className={className}>
      <rect x="1" y="1" width="18" height="12" rx="1.5" />
      <path d="M1 5h18" />
    </svg>
  );
}

export function ArrowRightIcon({ className = '' }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor"
         strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 7h7M7 4l3 3-3 3" />
    </svg>
  );
}

export function ArrowLeftIcon({ className = '' }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor"
         strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M11 7H4M7 4L4 7l3 3" />
    </svg>
  );
}
