import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Backdrop } from './Backdrop';

function Headline({ style, c, m }) {
  if (style === 'outline') {
    return (
      <h1 className="font-serif font-normal text-bone leading-[.95] text-[clamp(36px,8.4vw,148px)] tracking-[-0.01em]">
        <span className="block rise" style={{ animationDelay: `${0.2 * m}s` }}>{c.headlineA}</span>
        <span className="block rise text-bone/80 text-[clamp(24px,5vw,90px)] italic font-light my-1" style={{ animationDelay: `${0.5 * m}s` }}>{c.headlineB}</span>
        <span className="block rise" style={{ animationDelay: `${0.8 * m}s`, WebkitTextStroke: '1px #D4AF37', color: 'transparent', textShadow: '0 0 40px rgba(212,175,55,.18)' }}>{c.headlineC}</span>
      </h1>
    );
  }
  if (style === 'all-gold') {
    return (
      <h1 className="font-serif font-normal leading-[.95] text-[clamp(36px,8.4vw,148px)] tracking-[-0.01em] gold-leaf">
        <span className="block rise" style={{ animationDelay: `${0.2 * m}s` }}>{c.headlineA}</span>
        <span className="block rise text-[clamp(24px,5vw,90px)] italic font-light my-1" style={{ animationDelay: `${0.5 * m}s` }}>{c.headlineB}</span>
        <span className="block rise" style={{ animationDelay: `${0.8 * m}s` }}>{c.headlineC}</span>
      </h1>
    );
  }
  return (
    <h1 className="font-serif font-normal text-bone leading-[.95] text-[clamp(36px,8.4vw,148px)] tracking-[-0.01em]">
      <span className="block rise" style={{ animationDelay: `${0.2 * m}s` }}>{c.headlineA}</span>
      <span className="block rise text-bone/80 text-[clamp(24px,5vw,90px)] font-light my-1" style={{ animationDelay: `${0.5 * m}s` }}>{c.headlineB}</span>
      <span className="block rise italic gold-leaf" style={{ animationDelay: `${0.8 * m}s` }}>{c.headlineC}</span>
    </h1>
  );
}

export function Hero({ c, tweaks, setTweak, onBook }) {
  const { background, headlineStyle, showVeil, showVertical, showSuiteRef, showScrollCue, motion, language } = tweaks;
  const [lang, setLang] = useState(language);
  useEffect(() => setLang(language), [language]);

  const m = motion === 'subtle' ? 0.6 : motion === 'rich' ? 1 : 1.25;

  return (
    <section className="relative h-screen w-full overflow-hidden bg-ink text-bone">
      <Backdrop kind={background} />

      {showVeil && (
        <div className="veil-stage">
          <div className="veil veil-1" />
          <div className="veil veil-2" />
          <div className="veil veil-3" />
          <div className="veil veil-gold" />
        </div>
      )}

      <div className="absolute left-1/2 top-1/2 aura pointer-events-none"
           style={{ width: 'min(95vw, 1100px)', height: 'min(70vh, 700px)', background: 'radial-gradient(closest-side, rgba(212,175,55,.18), transparent 70%)', filter: 'blur(20px)' }} />

      <div className="absolute inset-0 grain" />

      {/* Nav */}
      <header className="absolute inset-x-0 top-0 z-30 px-8 md:px-14 lg:px-20 pt-8">
        <div className="flex items-center justify-between rise" style={{ animationDelay: `${0 * m}s` }}>
          <Logo />
          <nav className="hidden md:flex items-center gap-12 text-[12.5px] tracking-[.32em] uppercase text-bone/75 font-light">
            {c.nav.map((n, i) => {
              if (i === 2) {
                return <button key={i} type="button" onClick={onBook} className="nav-link hover:text-bone transition-colors">{n}</button>;
              }
              const anchors = ['#experience', '#galerie'];
              return <a key={i} href={anchors[i]} className="nav-link hover:text-bone transition-colors">{n}</a>;
            })}
          </nav>
          <div className="flex items-center gap-5 text-[11px] tracking-[.3em] uppercase">
            <button onClick={() => setTweak('language', 'FR')}
                    className={`nav-link transition ${lang === 'FR' ? 'text-gold' : 'text-bone/55 hover:text-bone'}`}>FR</button>
            <span className="text-bone/25">·</span>
            <button onClick={() => setTweak('language', 'EN')}
                    className={`nav-link transition ${lang === 'EN' ? 'text-gold' : 'text-bone/55 hover:text-bone'}`}>EN</button>
          </div>
        </div>
        <div className="hairline mt-7 fade" style={{ animationDelay: `${0.2 * m}s` }} />
      </header>

      {showVertical && (
        <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 fade items-center"
             style={{ animationDelay: `${1.4 * m}s` }}>
          <div className="vert text-gold/70 font-sans">{c.vertical}</div>
        </div>
      )}

      {showSuiteRef && (
        <div className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 flex-col items-end gap-3 fade"
             style={{ animationDelay: `${1.5 * m}s` }}>
          <span className="vert text-bone/45 font-sans">{c.suiteRef}</span>
        </div>
      )}

      {/* Center content */}
      <div className="relative z-20 h-full w-full flex flex-col items-center justify-center px-6 text-center">
        <div className="orn text-[18px] mb-10 rise" style={{ animationDelay: `${0.05 * m}s` }}>·  ·  ·</div>
        <div className="text-[10px] tracking-[.2em] sm:tracking-[.5em] uppercase text-gold/75 mb-6 sm:mb-9 fade px-2" style={{ animationDelay: `${0.1 * m}s` }}>
          {c.eyebrow}
        </div>

        <Headline style={headlineStyle} c={c} m={m} />

        <p className="mt-7 sm:mt-10 max-w-[640px] text-[14px] md:text-[16px] leading-[1.85] font-light text-bone/65 rise"
           style={{ animationDelay: `${1.05 * m}s` }}>
          {c.sub}
        </p>

        <div className="mt-12 rise" style={{ animationDelay: `${1.3 * m}s` }}>
          <button type="button" onClick={onBook} className="cta inline-flex items-center justify-center px-8 sm:px-12 py-4 sm:py-5 text-[10px] sm:text-[11px] uppercase font-sans font-light">
            <span>
              {c.cta}
              <svg width="32" height="8" viewBox="0 0 32 8" fill="none" aria-hidden="true">
                <path d="M0 4 H 28 M 24 1 L 31 4 L 24 7" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </span>
          </button>
        </div>
      </div>

      {showScrollCue && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 fade"
             style={{ animationDelay: `${1.8 * m}s` }}>
          <span className="text-[10px] tracking-[.5em] uppercase text-bone/40">{c.scroll}</span>
          <div className="relative h-10 w-[1px] bg-bone/15 overflow-hidden">
            <span className="absolute left-0 top-0 h-3 w-[1px] bg-gold scroll-bar" />
          </div>
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 z-10 px-8 md:px-14 lg:px-20 pb-7 fade" style={{ animationDelay: `${1.9 * m}s` }}>
        <div className="hairline mb-5 opacity-60" />
        <div className="flex items-center justify-between text-[10px] tracking-[.4em] uppercase text-bone/40">
          <span>Osmose · Black Room</span>
          <span className="hidden md:inline">N°VII — Rue de Sévigné, Paris</span>
          <span>MMXXVI</span>
        </div>
      </div>
    </section>
  );
}
