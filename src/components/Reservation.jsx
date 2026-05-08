import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { SectionLabel } from './SectionLabel';

function Field({ label, type, placeholder, full, value, onChange }) {
  const cls = 'bg-transparent border-b border-bone/20 focus:border-gold/70 outline-none w-full py-3 text-[14px] font-light text-bone placeholder:text-bone/25 transition-colors';
  return (
    <label className={`block ${full ? 'col-span-1 sm:col-span-2' : 'col-span-1'}`}>
      <span className="block text-[10px] tracking-[.4em] uppercase text-bone/45 mb-1">{label}</span>
      {type === 'textarea'
        ? <textarea rows="2" placeholder={placeholder} className={cls + ' resize-none'} />
        : <input type={type} placeholder={placeholder}
                 value={value} onChange={onChange ? (e) => onChange(e.target.value) : undefined}
                 className={cls + (type === 'date' ? ' [color-scheme:dark]' : '')} />
      }
    </label>
  );
}

function Stepper({ label, value, onChange, suffix }) {
  return (
    <div className="col-span-1">
      <span className="block text-[10px] tracking-[.4em] uppercase text-bone/45 mb-1">{label}</span>
      <div className="flex items-center justify-between border-b border-bone/20 py-2">
        <button type="button" onClick={() => onChange(value - 1)}
                className="text-gold/70 hover:text-gold transition w-7 h-7 flex items-center justify-center text-lg leading-none">−</button>
        <span className="font-serif text-[20px] text-bone tabular-nums">
          {value} <span className="text-[11px] tracking-[.3em] uppercase font-sans font-light text-bone/55 ml-1">{suffix}</span>
        </span>
        <button type="button" onClick={() => onChange(value + 1)}
                className="text-gold/70 hover:text-gold transition w-7 h-7 flex items-center justify-center text-lg leading-none">+</button>
      </div>
    </div>
  );
}

export function Reservation({ copy }) {
  const ref = useReveal();
  const [stay, setStay] = useState({ guests: 2, nights: 1, arrival: '' });
  const [submitted, setSubmitted] = useState(false);
  const { f, aside } = copy.reservation;

  return (
    <section id="reserver" className="relative bg-ink text-bone overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-full md:w-[45%] hidden md:block">
        <img src="/img/jacuzzi.jpg" alt=""
             className="absolute inset-0 h-full w-full object-cover slow-zoom"
             style={{ filter: 'brightness(.55) saturate(.85)' }} />
        <div className="absolute inset-0"
             style={{ background: 'linear-gradient(90deg, rgba(5,5,5,1) 0%, rgba(5,5,5,.6) 25%, rgba(5,5,5,.2) 100%)' }} />
      </div>

      <div ref={ref} className="reveal relative z-10 mx-auto max-w-[1400px] px-8 md:px-14 lg:px-20 py-20 md:py-44">
        <div className="grid grid-cols-12 gap-x-10 gap-y-12">
          <div className="col-span-12 md:col-span-7">
            <SectionLabel num="V." label={copy.reservation.kicker} />
            <h2 className="mt-8 font-serif font-normal leading-[1.02] text-[clamp(36px,4.8vw,76px)] tracking-[-.01em]">
              {copy.reservation.title1}<br />
              <em className="italic gold-leaf">{copy.reservation.title2}</em>
            </h2>
            <p className="mt-7 max-w-[520px] text-[14.5px] leading-[1.85] font-light text-bone/65">
              {copy.reservation.body}
            </p>

            <form className="mt-12 max-w-[560px] grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-7"
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <Field label={f.name}    type="text"     placeholder="—" full />
              <Field label={f.email}   type="email"    placeholder="—" />
              <Field label={f.phone}   type="tel"      placeholder="—" />
              <Field label={f.arrival} type="date"
                     value={stay.arrival}
                     onChange={(v) => setStay(s => ({ ...s, arrival: v }))} />
              <Stepper label={f.nights} value={stay.nights}
                       onChange={(v) => setStay(s => ({ ...s, nights: Math.max(1, Math.min(7, v)) }))}
                       suffix={stay.nights > 1 ? f.nightsP : f.nightsS} />
              <Stepper label={f.guests} value={stay.guests}
                       onChange={(v) => setStay(s => ({ ...s, guests: Math.max(1, Math.min(4, v)) }))}
                       suffix={stay.guests > 1 ? f.guestsP : f.guestsS} />
              <Field label={f.message} type="textarea" placeholder="—" full />

              <div className="col-span-1 sm:col-span-2 mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                <p className="text-[10px] tracking-[.4em] uppercase text-bone/40">{f.disclaimer}</p>
                <button type="submit" className="cta inline-flex items-center justify-center px-10 py-4 text-[10.5px] uppercase font-sans font-light">
                  <span>
                    {submitted ? f.submitted : f.submit}
                    <svg width="26" height="6" viewBox="0 0 26 6" fill="none" aria-hidden="true">
                      <path d="M0 3 H 22 M 19 1 L 25 3 L 19 5" stroke="currentColor" strokeWidth="1"/>
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>

          <aside className="col-span-12 md:col-span-4 md:col-start-9 md:pt-8">
            <div className="border border-gold/25 bg-black/30 backdrop-blur-sm p-7 md:p-8">
              <div className="text-[10px] tracking-[.5em] uppercase text-gold/80 mb-5">{aside.kicker}</div>
              <div className="font-serif text-[40px] leading-none text-bone">
                <span className="gold-leaf italic">€</span> 480
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
