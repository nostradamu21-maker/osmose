import { useReveal } from '../hooks/useReveal';
import { SectionLabel } from './SectionLabel';

export function Reservation({ copy, onBook }) {
  const ref = useReveal();
  const { aside } = copy.reservation;

  return (
    <section id="reserver" className="relative bg-ink text-bone overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-full md:w-[45%] hidden md:block">
        <img src="/img/jacuzzi.jpg" alt=""
             className="absolute inset-0 h-full w-full object-cover slow-zoom"
             style={{ filter: 'brightness(.55) saturate(.85)' }} />
        <div className="absolute inset-0"
             style={{ background: 'linear-gradient(90deg, rgba(5,5,5,1) 0%, rgba(5,5,5,.6) 25%, rgba(5,5,5,.2) 100%)' }} />
      </div>

      <div ref={ref} className="reveal relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 md:px-14 lg:px-20 py-20 md:py-44">
        <div className="grid grid-cols-12 gap-x-0 sm:gap-x-10 gap-y-12">
          <div className="col-span-12 md:col-span-7">
            <SectionLabel num="V." label={copy.reservation.kicker} />
            <h2 className="mt-6 font-serif font-normal leading-[1.08] sm:leading-[1.02] text-[clamp(26px,4.8vw,76px)] tracking-[-.01em] break-words">
              {copy.reservation.title1}<br />
              <em className="italic gold-leaf">{copy.reservation.title2}</em>
            </h2>
            <p className="mt-7 max-w-[520px] text-[14.5px] leading-[1.85] font-light text-bone/65">
              {copy.reservation.body}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-8">
              <button type="button" onClick={onBook}
                      className="cta inline-flex items-center justify-center px-10 py-4 text-[10.5px] uppercase font-sans font-light">
                <span>Réserver maintenant
                  <svg width="26" height="6" viewBox="0 0 26 6" fill="none" aria-hidden="true">
                    <path d="M0 3 H 22 M 19 1 L 25 3 L 19 5" stroke="currentColor" strokeWidth="1"/>
                  </svg>
                </span>
              </button>
              <div className="text-[10px] tracking-[.4em] uppercase text-bone/50">
                Confirmation immédiate · Annulation gratuite
              </div>
            </div>
          </div>

          <aside className="col-span-12 md:col-span-4 md:col-start-9 md:pt-8">
            <div className="border border-gold/25 bg-black/30 backdrop-blur-sm p-7 md:p-8">
              <div className="text-[10px] tracking-[.5em] uppercase text-gold/80 mb-5">{aside.kicker}</div>
              <div className="font-serif text-[40px] leading-none text-bone">
                <span className="gold-leaf italic">€</span> 280
                <span className="text-[14px] font-sans font-light text-bone/55 ml-2">/ {aside.unit}</span>
              </div>
              <ul className="mt-7 space-y-3 text-[12.5px] font-light text-bone/70">
                {aside.includes.map((x, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg width="10" height="10" viewBox="0 0 10 10" className="mt-[6px] flex-none">
                      <path d="M5 0 L6 4 L10 5 L6 6 L5 10 L4 6 L0 5 L4 4 Z" fill="#D4AF37"/>
                    </svg>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 pt-6 border-t border-bone/10 text-[11.5px] font-light text-bone/55 leading-[1.85]">
                <div className="text-gold/85 text-[10px] tracking-[.4em] uppercase mb-2">{aside.contact}</div>
                conciergerie@osmose.paris<br />
                +33 1 84 60 17 22
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
