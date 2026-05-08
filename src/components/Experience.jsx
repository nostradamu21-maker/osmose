import { useReveal } from '../hooks/useReveal';
import { SectionLabel } from './SectionLabel';

export function Experience({ copy }) {
  const ref = useReveal();
  const tiles = [
    { img: '/img/jacuzzi.jpg',  ...copy.experience.tiles[0] },
    { img: '/img/lounge.jpg',   ...copy.experience.tiles[1] },
    { img: '/img/bar.jpg',      ...copy.experience.tiles[2] },
  ];
  return (
    <section id="experience" className="relative bg-ink text-bone overflow-hidden">
      <div ref={ref} className="reveal mx-auto max-w-[1400px] px-8 md:px-14 lg:px-20 py-32 md:py-44">
        <div className="flex items-end justify-between flex-wrap gap-y-8 mb-16">
          <div className="max-w-[640px]">
            <SectionLabel num="III." label={copy.experience.kicker} />
            <h2 className="mt-8 font-serif font-normal leading-[1.02] text-[clamp(36px,4.8vw,76px)] tracking-[-.01em]">
              {copy.experience.title1}{' '}
              <em className="italic gold-leaf">{copy.experience.title2}</em>
            </h2>
          </div>
          <p className="max-w-[420px] text-[14px] leading-[1.85] font-light text-bone/60">
            {copy.experience.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {tiles.map((t, i) => (
            <article key={i} className="group relative overflow-hidden bg-anthracite border border-bone/5">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={t.img} alt={t.title}
                     className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.06]"
                     style={{ filter: 'brightness(.75) saturate(.9)' }} />
                <div className="absolute inset-0"
                     style={{ background: 'linear-gradient(180deg, rgba(5,5,5,.15) 0%, transparent 35%, rgba(5,5,5,.85) 100%)' }} />
                <div className="absolute left-4 top-4 text-[10px] tracking-[.4em] uppercase text-gold/85 font-serif italic">
                  {t.num}
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7">
                  <h3 className="font-serif text-[26px] lg:text-[30px] leading-[1.05] text-bone">{t.title}</h3>
                  <p className="mt-3 text-[13px] leading-[1.75] font-light text-bone/65">{t.body}</p>
                  <div className="mt-5 inline-flex items-center gap-3 text-[10px] tracking-[.4em] uppercase text-gold/80 group-hover:text-gold transition">
                    <span>{copy.experience.cta}</span>
                    <svg width="22" height="6" viewBox="0 0 22 6" fill="none">
                      <path d="M0 3 H 19 M 16 1 L 21 3 L 16 5" stroke="currentColor" strokeWidth=".8"/>
                    </svg>
                  </div>
                </div>
                <span className="absolute inset-0 ring-1 ring-inset ring-gold/0 group-hover:ring-gold/40 transition duration-700" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
