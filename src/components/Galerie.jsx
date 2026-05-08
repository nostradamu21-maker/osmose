import { useReveal } from '../hooks/useReveal';
import { SectionLabel } from './SectionLabel';

export function Galerie({ copy }) {
  const ref = useReveal();
  const items = [
    { src: '/img/livingroom.jpg', span: 'col-span-2 md:row-span-2 md:col-span-2', label: 'Salon',   id: '01' },
    { src: '/img/bedroom.jpg',    span: 'col-span-2 md:col-span-1',               label: 'Chambre', id: '02' },
    { src: '/img/jacuzzi.jpg',    span: 'col-span-2 md:col-span-1',               label: 'Spa',     id: '03' },
    { src: '/img/lounge.jpg',     span: 'col-span-1',                             label: 'Lounge',  id: '04' },
    { src: '/img/bar.jpg',        span: 'col-span-1',                             label: 'Bar',     id: '05' },
  ];
  return (
    <section id="galerie" className="relative bg-ink text-bone overflow-hidden">
      <div ref={ref} className="reveal mx-auto max-w-[1500px] px-5 sm:px-8 md:px-14 lg:px-20 py-20 md:py-44">
        <div className="flex items-end justify-between flex-wrap gap-y-8 mb-14">
          <div>
            <SectionLabel num="IV." label={copy.galerie.kicker} />
            <h2 className="mt-6 font-serif font-normal leading-[1.08] sm:leading-[1.02] text-[clamp(26px,4.8vw,76px)] tracking-[-.01em] break-words">
              {copy.galerie.title1} <em className="italic gold-leaf">{copy.galerie.title2}</em>
            </h2>
          </div>
          <div className="text-[10px] tracking-[.5em] uppercase text-bone/40">
            <span className="text-gold/80">05</span>&nbsp;/&nbsp;18 — {copy.galerie.note}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[260px] gap-3 md:gap-5">
          {items.map((it, i) => (
            <figure key={i} className={`relative overflow-hidden group ${it.span} reveal-tile`}
                    style={{ animationDelay: `${i * 100}ms` }}>
              <img src={it.src} alt={it.label}
                   className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.08]"
                   style={{ filter: 'brightness(.78) saturate(.9)' }} />
              <div className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-0"
                   style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(5,5,5,.7) 100%)' }} />
              <figcaption className="absolute left-4 bottom-4 flex items-center gap-3 text-[10px] tracking-[.4em] uppercase">
                <span className="font-serif italic text-gold/90">{it.id}</span>
                <span className="h-px w-6 bg-gold/40" />
                <span className="text-bone/85 font-light">{it.label}</span>
              </figcaption>
              <span className="absolute inset-0 ring-1 ring-inset ring-gold/0 group-hover:ring-gold/45 transition duration-700" />
            </figure>
          ))}
          <figure className="relative col-span-2 row-span-1 bg-anthracite border border-bone/5 flex items-center px-7 md:px-10">
            <blockquote className="font-serif italic text-bone/85 text-[18px] md:text-[22px] leading-[1.45]">
              "{copy.galerie.quote}"
              <footer className="mt-4 not-italic text-[10px] tracking-[.4em] uppercase text-gold/75 font-sans">
                — {copy.galerie.quoteAuthor}
              </footer>
            </blockquote>
          </figure>
        </div>

        <div className="mt-12 flex justify-center">
          <a href="#galerie" className="cta inline-flex items-center justify-center px-10 py-4 text-[10.5px] uppercase font-sans font-light">
            <span>
              {copy.galerie.cta}
              <svg width="26" height="6" viewBox="0 0 26 6" fill="none" aria-hidden="true">
                <path d="M0 3 H 22 M 19 1 L 25 3 L 19 5" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
