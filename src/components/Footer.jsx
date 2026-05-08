export function Footer({ copy, onBook }) {
  const handle = (label) => (e) => {
    if (label === 'Réservation' || label === 'Reservation') {
      e.preventDefault();
      onBook?.();
    }
  };
  return (
    <footer className="relative bg-ink text-bone border-t border-bone/10">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 md:px-14 lg:px-20 py-16">
        <div className="grid grid-cols-12 gap-y-10 gap-x-10">
          <div className="col-span-12 md:col-span-4">
            <div className="flex items-center gap-3">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="10" stroke="#D4AF37" strokeWidth=".75"/>
                <path d="M5 11 Q 11 4, 17 11 Q 11 18, 5 11 Z" stroke="#D4AF37" strokeWidth=".75" fill="none"/>
                <circle cx="11" cy="11" r="1.4" fill="#D4AF37"/>
              </svg>
              <span className="font-serif text-[15px] tracking-[.5em] uppercase text-bone/90">Osmose</span>
            </div>
            <p className="mt-5 text-[12.5px] leading-[1.85] font-light text-bone/55 max-w-[320px]">
              {copy.footer.tagline}
            </p>
          </div>

          <div className="col-span-6 md:col-span-3">
            <div className="text-[10px] tracking-[.4em] uppercase text-gold/75 mb-4">{copy.footer.col1}</div>
            <ul className="space-y-2 text-[12.5px] font-light text-bone/65">
              {copy.footer.links1.map((l, i) => (
                <li key={i}><a href="#" onClick={handle(l)} className="nav-link hover:text-bone transition">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3">
            <div className="text-[10px] tracking-[.4em] uppercase text-gold/75 mb-4">{copy.footer.col2}</div>
            <ul className="space-y-2 text-[12.5px] font-light text-bone/65">
              <li>3 Rue de Sévigné</li>
              <li>75004 Paris</li>
              <li className="pt-2">conciergerie@osmose.paris</li>
              <li>+33 1 84 60 17 22</li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-2">
            <div className="text-[10px] tracking-[.4em] uppercase text-gold/75 mb-4">{copy.footer.col3}</div>
            <ul className="space-y-2 text-[12.5px] font-light text-bone/65">
              <li><a href="#" className="nav-link hover:text-bone">Instagram</a></li>
              <li><a href="#" className="nav-link hover:text-bone">Journal</a></li>
            </ul>
          </div>
        </div>

        <div className="hairline my-10 opacity-40" />
        <div className="flex flex-wrap items-center justify-between gap-4 text-[10px] tracking-[.4em] uppercase text-bone/35">
          <span>© MMXXVI — Osmose · Black Room</span>
          <span>{copy.footer.fine}</span>
        </div>
      </div>
    </footer>
  );
}
