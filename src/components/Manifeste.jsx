import { useReveal } from '../hooks/useReveal';
import { SectionLabel } from './SectionLabel';

export function Manifeste({ copy }) {
  const ref = useReveal();
  return (
    <section className="relative bg-ink text-bone overflow-hidden">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[60vh] w-[60vh] rounded-full opacity-40"
           style={{ background: 'radial-gradient(closest-side, rgba(212,175,55,.18), transparent 70%)' }} />
      <div className="pointer-events-none absolute inset-0 grain" />

      <div ref={ref} className="reveal relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 md:px-14 lg:px-20 py-20 md:py-44">
        <div className="mb-16">
          <SectionLabel num="I." label={copy.manifeste.kicker} />
        </div>

        <div className="grid grid-cols-12 gap-y-10 gap-x-0 sm:gap-x-10">
          <div className="col-span-12 md:col-span-7">
            <h2 className="font-serif font-normal leading-[1.1] sm:leading-[1.05] text-[clamp(26px,5.4vw,88px)] tracking-[-.01em] text-bone break-words">
              {copy.manifeste.h1a}{' '}
              <em className="italic gold-leaf">{copy.manifeste.h1b}</em>
              {' '}{copy.manifeste.h1c}
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:pt-6">
            <p className="text-[15px] md:text-[16px] leading-[1.95] font-light text-bone/65 max-w-[460px]">
              {copy.manifeste.body1}
            </p>
            <p className="mt-6 text-[15px] md:text-[16px] leading-[1.95] font-light text-bone/55 max-w-[460px]">
              {copy.manifeste.body2}
            </p>
            <div className="mt-10 flex items-center gap-6">
              <span className="font-serif italic text-gold text-[22px]">— A.M.</span>
              <span className="text-[10px] tracking-[.4em] uppercase text-bone/40">{copy.manifeste.signature}</span>
            </div>
          </div>
        </div>

        <div className="hairline mt-24 opacity-60" />
      </div>
    </section>
  );
}
