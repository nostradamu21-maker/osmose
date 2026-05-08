import { useReveal } from '../hooks/useReveal';
import { SectionLabel } from './SectionLabel';

export function LaSuite({ copy }) {
  const ref = useReveal();
  return (
    <section className="relative bg-ink text-bone overflow-hidden">
      <div ref={ref} className="reveal relative">
        <div className="relative h-[70vh] sm:h-[88vh] w-full overflow-hidden">
          <img src="/img/bedroom.jpg" alt="La Suite"
               className="absolute inset-0 h-full w-full object-cover slow-zoom"
               style={{ filter: 'brightness(.78) contrast(1.05) saturate(.95)' }} />
          <div className="absolute inset-0"
               style={{ background: 'linear-gradient(90deg, rgba(5,5,5,.85) 0%, rgba(5,5,5,.35) 35%, rgba(5,5,5,0) 60%, rgba(5,5,5,.55) 100%)' }} />
          <div className="absolute inset-0"
               style={{ background: 'linear-gradient(180deg, rgba(5,5,5,.5) 0%, transparent 25%, transparent 70%, rgba(5,5,5,.85) 100%)' }} />

          <div className="absolute inset-6 md:inset-10 pointer-events-none">
            <span className="absolute left-0 top-0 h-5 w-5 border-l border-t border-gold/60" />
            <span className="absolute right-0 top-0 h-5 w-5 border-r border-t border-gold/60" />
            <span className="absolute left-0 bottom-0 h-5 w-5 border-l border-b border-gold/60" />
            <span className="absolute right-0 bottom-0 h-5 w-5 border-r border-b border-gold/60" />
          </div>

          <div className="absolute inset-0 flex items-end">
            <div className="w-full px-8 md:px-14 lg:px-20 pb-16 md:pb-20">
              <div className="grid grid-cols-12 gap-x-10">
                <div className="col-span-12 md:col-span-7 lg:col-span-6">
                  <SectionLabel num="II." label={copy.suite.kicker} />
                  <h2 className="mt-7 font-serif font-normal leading-[.98] text-[clamp(40px,6vw,108px)] tracking-[-.01em] text-bone">
                    {copy.suite.title1}<br />
                    <em className="italic gold-leaf">{copy.suite.title2}</em>
                  </h2>
                  <p className="mt-7 max-w-[520px] text-[14.5px] leading-[1.85] font-light text-bone/70">
                    {copy.suite.body}
                  </p>
                </div>
                <div className="hidden md:block col-span-5 lg:col-span-4 lg:col-start-9 self-end">
                  <div className="grid grid-cols-2 gap-y-5 gap-x-6 text-[11px] tracking-[.32em] uppercase font-light text-bone/55">
                    {copy.suite.specs.map((s, i) => (
                      <div key={i}>
                        <div className="text-gold/80 text-[10px] mb-1">{s.k}</div>
                        <div className="text-bone/85">{s.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
