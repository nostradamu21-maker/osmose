import { SERVICES } from './services';
import { ServiceIcon, CheckIcon } from './icons';

export function StepServices({ selectedServices, setSelectedServices }) {
  const toggle = (id) => {
    const next = new Set(selectedServices);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelectedServices(next);
  };

  return (
    <div>
      <div className="text-[10px] tracking-[.5em] uppercase text-gold/75 mb-3">Étape 2</div>
      <h3 className="font-serif text-[clamp(28px,3.6vw,40px)] leading-[1.1] text-bone">
        Personnalisez votre séjour
      </h3>
      <p className="mt-3 text-[13.5px] font-light text-bone/55">
        Sélectionnez les services qui vous accompagneront.
      </p>

      <div className="mt-9 grid grid-cols-1 md:grid-cols-2 gap-4">
        {SERVICES.map(s => {
          const on = selectedServices.has(s.id);
          return (
            <button key={s.id} type="button" onClick={() => toggle(s.id)}
                    className={[
                      'group relative text-left p-5 transition-all duration-300',
                      'bg-black/30 border',
                      on ? 'border-gold/70 bg-black/50' : 'border-bone/10 hover:border-bone/30',
                    ].join(' ')}>
              <div className="flex items-start gap-4">
                <span className={[
                  'flex-none mt-1 h-9 w-9 rounded-full flex items-center justify-center transition-colors',
                  on ? 'text-gold bg-gold/10' : 'text-bone/55 bg-bone/5 group-hover:text-bone/80',
                ].join(' ')}>
                  <ServiceIcon name={s.icon} />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-3">
                    <h4 className="font-serif text-[17px] text-bone leading-tight">{s.title}</h4>
                    <span className={[
                      'font-serif italic text-[18px] tabular-nums flex-none transition-colors',
                      on ? 'gold-leaf' : 'text-bone/75',
                    ].join(' ')}>{s.price}€</span>
                  </div>
                  <p className="mt-2 text-[12.5px] font-light text-bone/55 leading-[1.6]">{s.desc}</p>
                </div>
              </div>

              <span className={[
                'absolute top-3 right-3 h-5 w-5 rounded-full flex items-center justify-center transition-all',
                on ? 'bg-gold text-ink scale-100' : 'border border-bone/20 scale-90',
              ].join(' ')}>
                {on && <CheckIcon />}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
