import { CalendarIcon } from './icons';
import { formatDate, computeNights } from './utils';
import { NIGHT_RATE } from './services';

const GUEST_OPTIONS = [1, 2, 3, 4];

function DateField({ label, value, onChange, min }) {
  return (
    <div>
      <div className="text-[10px] tracking-[.4em] uppercase text-bone/55 mb-2">{label}</div>
      <label className="relative flex items-center bg-black/40 border border-bone/15 hover:border-gold/40 focus-within:border-gold/60 transition-colors px-4 py-3.5 cursor-text">
        <span className="text-gold/80 mr-3 flex-none"><CalendarIcon /></span>
        <span className="text-[14px] font-light text-bone flex-1 truncate">
          {value ? formatDate(value) : <span className="text-bone/40">Sélectionnez une date</span>}
        </span>
        <input type="date" value={value} min={min}
               onChange={(e) => onChange(e.target.value)}
               className="absolute inset-0 opacity-0 cursor-pointer [color-scheme:dark]" />
      </label>
    </div>
  );
}

export function StepDates({ stay, setStay }) {
  const nights = Math.max(1, computeNights(stay.arrival, stay.departure));
  const total = nights * NIGHT_RATE;

  return (
    <div>
      <div className="text-[10px] tracking-[.5em] uppercase text-gold/75 mb-3">Étape 1</div>
      <h3 className="font-serif text-[clamp(28px,3.6vw,40px)] leading-[1.1] text-bone">
        Choisissez vos dates
      </h3>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <DateField label="Arrivée" value={stay.arrival}
                   onChange={(v) => setStay(s => ({ ...s, arrival: v }))} />
        <DateField label="Départ" value={stay.departure}
                   min={stay.arrival || undefined}
                   onChange={(v) => setStay(s => ({ ...s, departure: v }))} />
      </div>

      <div className="mt-10">
        <div className="text-[10px] tracking-[.4em] uppercase text-bone/55 mb-4">Voyageurs</div>
        <div className="flex items-center gap-3">
          {GUEST_OPTIONS.map(n => {
            const active = stay.guests === n;
            return (
              <button key={n} type="button"
                      onClick={() => setStay(s => ({ ...s, guests: n }))}
                      className={[
                        'h-11 w-11 rounded-full font-serif text-[15px] transition-all',
                        active
                          ? 'bg-gold text-ink border border-gold'
                          : 'border border-bone/25 text-bone/65 hover:border-gold/60 hover:text-bone',
                      ].join(' ')}>
                {n}
              </button>
            );
          })}
        </div>
      </div>

      <div className="hairline mt-12 opacity-40" />

      <div className="mt-7 flex flex-wrap items-end justify-between gap-y-4">
        <div>
          <div className="text-[10px] tracking-[.4em] uppercase text-bone/45 mb-1">Tarif nuit</div>
          <div className="font-serif text-[34px] text-bone leading-none">{NIGHT_RATE}€</div>
        </div>
        <div className="text-right">
          <div className="text-[10px] tracking-[.4em] uppercase text-bone/45 mb-1">{nights} {nights > 1 ? 'nuits' : 'nuit'}</div>
          <div className="font-serif italic gold-leaf text-[34px] leading-none tabular-nums">{total}€</div>
        </div>
      </div>
    </div>
  );
}
