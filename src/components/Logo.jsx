export function Logo() {
  return (
    <a href="#" className="flex items-center gap-3 nav-link">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="10" stroke="#D4AF37" strokeWidth=".75"/>
        <path d="M5 11 Q 11 4, 17 11 Q 11 18, 5 11 Z" stroke="#D4AF37" strokeWidth=".75" fill="none"/>
        <circle cx="11" cy="11" r="1.4" fill="#D4AF37"/>
      </svg>
      <span className="font-serif text-[15px] tracking-[.5em] uppercase text-bone/90">Osmose</span>
    </a>
  );
}
