import { CheckIcon } from './icons';

const STEPS = ['Dates', 'Services', 'Voyageur', 'Paiement'];

export function Stepper({ current }) {
  return (
    <div className="flex items-start justify-between w-full">
      {STEPS.map((label, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <div key={label} className="flex items-start flex-1 last:flex-none">
            <div className="flex flex-col items-center flex-none">
              <div
                className={[
                  'h-10 w-10 rounded-full flex items-center justify-center font-serif text-[15px] transition-all duration-500',
                  done ? 'bg-gold text-ink border border-gold' : '',
                  active ? 'bg-gold text-ink border border-gold' : '',
                  !done && !active ? 'border border-bone/25 text-bone/55' : '',
                ].join(' ')}
              >
                {done ? <CheckIcon /> : i + 1}
              </div>
              <div
                className={[
                  'mt-3 text-[9px] sm:text-[10px] tracking-[.32em] uppercase font-light transition-colors',
                  active ? 'text-gold' : 'text-bone/45',
                ].join(' ')}
              >
                {label}
              </div>
            </div>
            {i < STEPS.length - 1 && (
              <div className="h-px flex-1 mt-5 mx-2 sm:mx-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-bone/15" />
                <div
                  className="absolute inset-y-0 left-0 bg-gold transition-all duration-700"
                  style={{ width: done ? '100%' : '0%' }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
